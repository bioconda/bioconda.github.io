:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tress'
.. highlight: bash

bioconductor-tress
==================

.. conda:recipe:: bioconductor-tress
   :replaces_section_title:
   :noindex:

   Toolbox for mRNA epigenetics sequencing analysis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TRESS.html
   :license: GPL-3 + file LICENSE
   :recipe: /`bioconductor-tress <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tress>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tress/meta.yaml>`_

   This package is devoted to analyzing MeRIP\-seq data. Current functionalities include 1. detect transcriptome wide m6A methylation regions 2. detect transcriptome wide differential m6A methylation regions.


.. conda:package:: bioconductor-tress

   |downloads_bioconductor-tress| |docker_bioconductor-tress|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-annotationdbi: ``>=1.72.0,<1.73.0``
   :depends on bioconductor-genomicfeatures: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rsamtools: ``>=2.26.0,<2.27.0``
   :depends on bioconductor-rtracklayer: ``>=1.70.0,<1.71.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-matrix: 
   :depends on r-matrixstats: 

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

    pixi global install bioconductor-tress

to add into an existing workspace instead, run::

    pixi add bioconductor-tress

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-tress

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-tress

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-tress:<tag>

(see `bioconductor-tress/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-tress| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tress.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tress
   :alt:   (downloads)
.. |docker_bioconductor-tress| image:: https://quay.io/repository/biocontainers/bioconductor-tress/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tress
.. _`bioconductor-tress/tags`: https://quay.io/repository/biocontainers/bioconductor-tress?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tress";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tress/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tress/README.html