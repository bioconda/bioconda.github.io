:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mitoclone2'
.. highlight: bash

bioconductor-mitoclone2
=======================

.. conda:recipe:: bioconductor-mitoclone2
   :replaces_section_title:
   :noindex:

   Clonal Population Identification in Single\-Cell RNA\-Seq Data using Mitochondrial and Somatic Mutations

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/mitoClone2.html
   :license: GPL-3
   :recipe: /`bioconductor-mitoclone2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoclone2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mitoclone2/meta.yaml>`_

   This package primarily identifies variants in mitochondrial genomes from BAM alignment files. It filters these variants to remove RNA editing events then estimates their evolutionary relationship \(i.e. their phylogenetic tree\) and groups single cells into clones. It also visualizes the mutations and providing additional genomic context.


.. conda:package:: bioconductor-mitoclone2

   |downloads_bioconductor-mitoclone2| |docker_bioconductor-mitoclone2|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.0.0-2``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on bioconductor-deepsnv: ``>=1.56.0,<1.57.0``
   :depends on bioconductor-deepsnv: ``>=1.56.0,<1.57.0a0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-genomicranges: ``>=1.62.1,<1.63.0a0``
   :depends on bioconductor-rhtslib: ``>=3.6.0,<3.7.0``
   :depends on bioconductor-rhtslib: ``>=3.6.0,<3.7.0a0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0a0``
   :depends on libblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc: ``>=14``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on liblzma: ``>=5.8.2,<6.0a0``
   :depends on libstdcxx: ``>=14``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-matrix: 
   :depends on r-pheatmap: 
   :depends on r-reshape2: 

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

    pixi global install bioconductor-mitoclone2

to add into an existing workspace instead, run::

    pixi add bioconductor-mitoclone2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-mitoclone2

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-mitoclone2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-mitoclone2:<tag>

(see `bioconductor-mitoclone2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-mitoclone2| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mitoclone2.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mitoclone2
   :alt:   (downloads)
.. |docker_bioconductor-mitoclone2| image:: https://quay.io/repository/biocontainers/bioconductor-mitoclone2/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mitoclone2
.. _`bioconductor-mitoclone2/tags`: https://quay.io/repository/biocontainers/bioconductor-mitoclone2?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mitoclone2";
        var versions = ["1.16.0","1.12.0","1.8.1","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mitoclone2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mitoclone2/README.html