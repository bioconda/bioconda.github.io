:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mousegastrulationdata'
.. highlight: bash

bioconductor-mousegastrulationdata
==================================

.. conda:recipe:: bioconductor-mousegastrulationdata
   :replaces_section_title:
   :noindex:

   Single\-Cell \-omics Data across Mouse Gastrulation and Early Organogenesis

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/MouseGastrulationData.html
   :license: GPL-3
   :recipe: /`bioconductor-mousegastrulationdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousegastrulationdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mousegastrulationdata/meta.yaml>`_

   Provides processed and raw count data for single\-cell RNA sequencing\, single\-cell ATAC\-seq\, and seqFISH \(spatial transcriptomic\) experiments performed along a timecourse of mouse gastrulation and early organogenesis.


.. conda:package:: bioconductor-mousegastrulationdata

   |downloads_bioconductor-mousegastrulationdata| |docker_bioconductor-mousegastrulationdata|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocgenerics: ``>=0.38.0,<0.39.0``
   :depends bioconductor-bumpymatrix: ``>=1.0.0,<1.1.0``
   :depends bioconductor-experimenthub: ``>=2.0.0,<2.1.0``
   :depends bioconductor-s4vectors: ``>=0.30.0,<0.31.0``
   :depends bioconductor-singlecellexperiment: ``>=1.14.0,<1.15.0``
   :depends bioconductor-spatialexperiment: ``>=1.2.0,<1.3.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mousegastrulationdata

   and update with::

      conda update bioconductor-mousegastrulationdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mousegastrulationdata:<tag>

   (see `bioconductor-mousegastrulationdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mousegastrulationdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mousegastrulationdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mousegastrulationdata
   :alt:   (downloads)
.. |docker_bioconductor-mousegastrulationdata| image:: https://quay.io/repository/biocontainers/bioconductor-mousegastrulationdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mousegastrulationdata
.. _`bioconductor-mousegastrulationdata/tags`: https://quay.io/repository/biocontainers/bioconductor-mousegastrulationdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mousegastrulationdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mousegastrulationdata/README.html