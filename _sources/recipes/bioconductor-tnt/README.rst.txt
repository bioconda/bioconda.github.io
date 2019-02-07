.. title:: Package Recipe 'bioconductor-tnt'
.. highlight: bash


bioconductor-tnt
================

.. conda:recipe:: bioconductor-tnt
   :replaces_section_title:

   A R interface to the TnT javascript library \(https\:\/\/github.com\/ tntvis\) to provide interactive and flexible visualization of track\-based genomic data.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/TnT.html
   :license: AGPL-3
   :recipe: /`bioconductor-tnt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tnt/meta.yaml>`_

   


.. conda:package:: bioconductor-tnt

   |downloads_bioconductor-tnt| |docker_bioconductor-tnt|

   :versions: 1.4.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-genomeinfodb` >=1.18.0,<1.19.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-s4vectors` >=0.20.0,<0.21.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-htmlwidgets`  :conda:package:`r-jsonlite`  :conda:package:`r-knitr`  

   :required~by: |required_by_bioconductor-tnt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tnt

   and update with::

      conda update bioconductor-tnt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-tnt


.. |required_by_bioconductor-tnt| conda:required_by:: bioconductor-tnt
.. |downloads_bioconductor-tnt| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tnt.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-tnt| image:: https://quay.io/repository/biocontainers/bioconductor-tnt/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tnt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tnt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tnt/README.html

