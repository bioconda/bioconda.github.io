:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parnas'
.. highlight: bash

parnas
======

.. conda:recipe:: parnas
   :replaces_section_title:
   :noindex:

   Representative taxon sampling from phylogenetic trees

   :homepage: https://github.com/flu-crew/parnas
   :license: MIT
   :recipe: /`parnas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parnas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parnas/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/syad028`

   


.. conda:package:: parnas

   |downloads_parnas| |docker_parnas|

   :versions:
      
      

      ``0.1.7-1``,  ``0.1.7-0``,  ``0.1.6-0``

      

   
   :depends on biopython: ``>=1.67``
   :depends on dendropy: ``>=4.5.0``
   :depends on numba: ``>=0.57.0``
   :depends on numpy: ``>=1.17``
   :depends on python: ``>=3.7``
   :depends on setuptools: ``>=75``
   :depends on treetime: ``>=0.9.4``

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

    pixi global install parnas

to add into an existing workspace instead, run::

    pixi add parnas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parnas

Alternatively, to install into a new environment, run::

    conda create -n envname parnas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parnas:<tag>

(see `parnas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parnas| image:: https://img.shields.io/conda/dn/bioconda/parnas.svg?style=flat
   :target: https://anaconda.org/bioconda/parnas
   :alt:   (downloads)
.. |docker_parnas| image:: https://quay.io/repository/biocontainers/parnas/status
   :target: https://quay.io/repository/biocontainers/parnas
.. _`parnas/tags`: https://quay.io/repository/biocontainers/parnas?tab=tags


.. raw:: html

    <script>
        var package = "parnas";
        var versions = ["0.1.7","0.1.7","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parnas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parnas/README.html