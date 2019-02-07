.. title:: Package Recipe 'bioconductor-mirnameconverter'
.. highlight: bash


bioconductor-mirnameconverter
=============================

.. conda:recipe:: bioconductor-mirnameconverter
   :replaces_section_title:

   Translating mature miRNA names to different miRBase versions\, sequence retrieval\, checking names for validity and detecting miRBase version of a given set of names \(data from http\:\/\/www.mirbase.org\/\).

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/miRNAmeConverter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mirnameconverter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnameconverter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirnameconverter/meta.yaml>`_
   :links: biotools: :biotools:`mirnameconverter`

   


.. conda:package:: bioconductor-mirnameconverter

   |downloads_bioconductor-mirnameconverter| |docker_bioconductor-mirnameconverter|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`bioconductor-annotationdbi` >=1.44.0,<1.45.0 :conda:package:`bioconductor-mirbaseversions.db` >=1.1.0,<1.2.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-dbi`  :conda:package:`r-reshape2`  

   :required~by: |required_by_bioconductor-mirnameconverter|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirnameconverter

   and update with::

      conda update bioconductor-mirnameconverter

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mirnameconverter


.. |required_by_bioconductor-mirnameconverter| conda:required_by:: bioconductor-mirnameconverter
.. |downloads_bioconductor-mirnameconverter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirnameconverter.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mirnameconverter| image:: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirnameconverter







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirnameconverter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirnameconverter/README.html

