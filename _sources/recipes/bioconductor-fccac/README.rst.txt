.. title:: Package Recipe 'bioconductor-fccac'
.. highlight: bash


bioconductor-fccac
==================

.. conda:recipe:: bioconductor-fccac
   :replaces_section_title:

   An application of functional canonical correlation analysis to assess covariance of nucleic acid sequencing datasets such as chromatin immunoprecipitation followed by deep sequencing \(ChIP\-seq\). The package can be used as well with other types of sequencing data such as neMeRIP\-seq \(PMID\: 29489750\) or with single cell RNA\-seq or epigenome data provided in bigWig format.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/fCCAC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-fccac <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fccac>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fccac/meta.yaml>`_
   :links: biotools: :biotools:`fccac`

   


.. conda:package:: bioconductor-fccac

   |downloads_bioconductor-fccac| |docker_bioconductor-fccac|

   :versions: 1.8.0, 1.6.0, 1.2.0

   :depends: :conda:package:`bioconductor-complexheatmap` >=1.20.0,<1.21.0 :conda:package:`bioconductor-genomation` >=1.14.0,<1.15.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-fda`  :conda:package:`r-ggplot2`  :conda:package:`r-rcolorbrewer`  

   :required~by: |required_by_bioconductor-fccac|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fccac

   and update with::

      conda update bioconductor-fccac

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fccac


.. |required_by_bioconductor-fccac| conda:required_by:: bioconductor-fccac
.. |downloads_bioconductor-fccac| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fccac.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fccac| image:: https://quay.io/repository/biocontainers/bioconductor-fccac/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fccac







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fccac/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fccac/README.html

