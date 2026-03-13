:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ssake'
.. highlight: bash

ssake
=====

.. conda:recipe:: ssake
   :replaces_section_title:
   :noindex:

   SSAKE is a genomics application for de novo assembly of millions of very short DNA sequences.

   :homepage: https://github.com/warrenlr/SSAKE
   :license: GPL / GPL-2.0
   :recipe: /`ssake <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssake>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ssake/meta.yaml>`_
   :links: biotools: :biotools:`ssake`, doi: :doi:`10.1093/bioinformatics/btl629`

   


.. conda:package:: ssake

   |downloads_ssake| |docker_ssake|

   :versions:
      
      

      ``4.0-5``,  ``4.0-4``,  ``4.0-2``,  ``4.0-1``

      

   
   :depends on perl: 
   :depends on perl-statistics-descriptive: 
   :depends on python: ``<3``

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

    pixi global install ssake

to add into an existing workspace instead, run::

    pixi add ssake

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ssake

Alternatively, to install into a new environment, run::

    conda create -n envname ssake

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ssake:<tag>

(see `ssake/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ssake| image:: https://img.shields.io/conda/dn/bioconda/ssake.svg?style=flat
   :target: https://anaconda.org/bioconda/ssake
   :alt:   (downloads)
.. |docker_ssake| image:: https://quay.io/repository/biocontainers/ssake/status
   :target: https://quay.io/repository/biocontainers/ssake
.. _`ssake/tags`: https://quay.io/repository/biocontainers/ssake?tab=tags


.. raw:: html

    <script>
        var package = "ssake";
        var versions = ["4.0","4.0","4.0","4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ssake/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ssake/README.html