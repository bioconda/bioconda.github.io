.. title:: Package Recipe 'bioconductor-curatedmetagenomicdata'
.. highlight: bash


bioconductor-curatedmetagenomicdata
===================================

.. conda:recipe:: bioconductor-curatedmetagenomicdata
   :replaces_section_title:

   The curatedMetagenomicData package provides microbial taxonomic\, functional\, and gene marker abundance for samples collected from different bodysites.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/curatedMetagenomicData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedmetagenomicdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedmetagenomicdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedmetagenomicdata/meta.yaml>`_

   


.. conda:package:: bioconductor-curatedmetagenomicdata

   |downloads_bioconductor-curatedmetagenomicdata| |docker_bioconductor-curatedmetagenomicdata|

   :versions: 1.12.3, 1.10.2, 1.8.1

   :depends: :conda:package:`bioconductor-annotationhub` >=2.14.0,<2.15.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-experimenthub` >=1.8.0,<1.9.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dplyr` >=0.5.0 :conda:package:`r-magrittr`  :conda:package:`r-tidyr`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-curatedmetagenomicdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedmetagenomicdata

   and update with::

      conda update bioconductor-curatedmetagenomicdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-curatedmetagenomicdata


.. |required_by_bioconductor-curatedmetagenomicdata| conda:required_by:: bioconductor-curatedmetagenomicdata
.. |downloads_bioconductor-curatedmetagenomicdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedmetagenomicdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-curatedmetagenomicdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedmetagenomicdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedmetagenomicdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedmetagenomicdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedmetagenomicdata/README.html

