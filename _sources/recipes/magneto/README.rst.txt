:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magneto'
.. highlight: bash

magneto
=======

.. conda:recipe:: magneto
   :replaces_section_title:
   :noindex:

   MAGNETO is an automated snakemake workflow dedicated to MAG reconstruction from metagenomic data.

   :homepage: https://gitlab.univ-nantes.fr/bird_pipeline_registry/magneto
   :documentation: https://gitlab.univ-nantes.fr/bird_pipeline_registry/magneto/-/wikis/home
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`magneto <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magneto>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magneto/meta.yaml>`_
   :links: biotools: :biotools:`magneto`, doi: :doi:`10.1128/msystems.00432-22`

   


.. conda:package:: magneto

   |downloads_magneto| |docker_magneto|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5-0``,  ``1.4-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      

   
   :depends on click: 
   :depends on mamba: ``>=1.5.8,<1.5.9``
   :depends on pandas: 
   :depends on python: ``>=3.8,<3.12``
   :depends on pyyaml: 
   :depends on snakemake-minimal: ``>=7.32.4,<8.0.0``

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install magneto

to add into an existing workspace instead, run::

    pixi add magneto

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magneto

Alternatively, to install into a new environment, run::

    conda create -n envname magneto

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magneto:<tag>

(see `magneto/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magneto| image:: https://img.shields.io/conda/dn/bioconda/magneto.svg?style=flat
   :target: https://anaconda.org/bioconda/magneto
   :alt:   (downloads)
.. |docker_magneto| image:: https://quay.io/repository/biocontainers/magneto/status
   :target: https://quay.io/repository/biocontainers/magneto
.. _`magneto/tags`: https://quay.io/repository/biocontainers/magneto?tab=tags


.. raw:: html

    <script>
        var package = "magneto";
        var versions = ["1.5.1","1.5","1.4","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magneto/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magneto/README.html