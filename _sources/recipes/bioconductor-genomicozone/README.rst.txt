:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicozone'
.. highlight: bash

bioconductor-genomicozone
=========================

.. conda:recipe:: bioconductor-genomicozone
   :replaces_section_title:
   :noindex:

   Delineate outstanding genomic zones of differential gene activity

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/GenomicOZone.html
   :license: LGPL (>=3)
   :recipe: /`bioconductor-genomicozone <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicozone/meta.yaml>`_

   The package clusters gene activity along chromosome into zones\, detects differential zones as outstanding\, and visualizes maps of outstanding zones across the genome. It enables characterization of effects on multiple genes within adaptive genomic neighborhoods\, which could arise from genome reorganization\, structural variation\, or epigenome alteration. It guarantees cluster optimality\, linear runtime to sample size\, and reproducibility. One can apply it on genome\-wide activity measurements such as copy number\, transcriptomic\, proteomic\, and methylation data.


.. conda:package:: bioconductor-genomicozone

   |downloads_bioconductor-genomicozone| |docker_bioconductor-genomicozone|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-genomeinfodb: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-ggbio: ``>=1.48.0,<1.49.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ckmeans.1d.dp: ``>=4.3.0``
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-lsr: 
   :depends r-plyr: 
   :depends r-rdpack: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicozone

   and update with::

      conda update bioconductor-genomicozone

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicozone:<tag>

   (see `bioconductor-genomicozone/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicozone| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicozone.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicozone
   :alt:   (downloads)
.. |docker_bioconductor-genomicozone| image:: https://quay.io/repository/biocontainers/bioconductor-genomicozone/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicozone
.. _`bioconductor-genomicozone/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicozone?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicozone";
        var versions = ["1.14.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicozone/README.html