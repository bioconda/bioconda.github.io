:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gse13015'
.. highlight: bash

bioconductor-gse13015
=====================

.. conda:recipe:: bioconductor-gse13015
   :replaces_section_title:
   :noindex:

   GEO accession data GSE13015\_GPL6106 as a SummarizedExperiment

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/GSE13015.html
   :license: MIT License
   :recipe: /`bioconductor-gse13015 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse13015>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gse13015/meta.yaml>`_

   Microarray expression matrix platform GPL6106 and clinical data for 67 septicemic patients and made them available as GEO accession \[GSE13015\]\(https\:\/\/www.ncbi.nlm.nih.gov\/geo\/query\/acc.cgi\?acc\=GSE13015\). GSE13015 data have been parsed into a SummarizedExperiment object available in ExperimentHub. This data data could be used as an example supporting BloodGen3Module R package.


.. conda:package:: bioconductor-gse13015

   |downloads_bioconductor-gse13015| |docker_bioconductor-gse13015|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-geoquery: ``>=2.60.0,<2.61.0``
   :depends bioconductor-preprocesscore: ``>=1.54.0,<1.55.0``
   :depends bioconductor-summarizedexperiment: ``>=1.22.0,<1.23.0``
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gse13015

   and update with::

      conda update bioconductor-gse13015

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gse13015:<tag>

   (see `bioconductor-gse13015/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gse13015| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gse13015.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gse13015
   :alt:   (downloads)
.. |docker_bioconductor-gse13015| image:: https://quay.io/repository/biocontainers/bioconductor-gse13015/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gse13015
.. _`bioconductor-gse13015/tags`: https://quay.io/repository/biocontainers/bioconductor-gse13015?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gse13015/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gse13015/README.html