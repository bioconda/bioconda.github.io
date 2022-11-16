:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-genomicdistributionsdata'
.. highlight: bash

bioconductor-genomicdistributionsdata
=====================================

.. conda:recipe:: bioconductor-genomicdistributionsdata
   :replaces_section_title:
   :noindex:

   Reference data for GenomicDistributions package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/GenomicDistributionsData.html
   :license: BSD_2_clause + file LICENSE
   :recipe: /`bioconductor-genomicdistributionsdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributionsdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-genomicdistributionsdata/meta.yaml>`_

   This package provides ready to use reference data for GenomicDistributions package. Raw data was obtained from ensembldb and processed with helper functions. Data files are available for the following genome assemblies\: hg19\, hg38\, mm9 and mm10.


.. conda:package:: bioconductor-genomicdistributionsdata

   |downloads_bioconductor-genomicdistributionsdata| |docker_bioconductor-genomicdistributionsdata|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-annotationfilter: ``>=1.22.0,<1.23.0``
   :depends bioconductor-annotationhub: ``>=3.6.0,<3.7.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-data-packages: ``>=20221109``
   :depends bioconductor-ensembldb: ``>=2.22.0,<2.23.0``
   :depends bioconductor-experimenthub: ``>=2.6.0,<2.7.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends curl: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-data.table: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-genomicdistributionsdata

   and update with::

      conda update bioconductor-genomicdistributionsdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-genomicdistributionsdata:<tag>

   (see `bioconductor-genomicdistributionsdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-genomicdistributionsdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-genomicdistributionsdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-genomicdistributionsdata
   :alt:   (downloads)
.. |docker_bioconductor-genomicdistributionsdata| image:: https://quay.io/repository/biocontainers/bioconductor-genomicdistributionsdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-genomicdistributionsdata
.. _`bioconductor-genomicdistributionsdata/tags`: https://quay.io/repository/biocontainers/bioconductor-genomicdistributionsdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-genomicdistributionsdata";
        var versions = ["1.6.0","1.2.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-genomicdistributionsdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-genomicdistributionsdata/README.html