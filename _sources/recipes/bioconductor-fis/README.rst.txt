.. title:: Package Recipe 'bioconductor-fis'
.. highlight: bash


bioconductor-fis
================

.. conda:recipe:: bioconductor-fis
   :replaces_section_title:

   Data set containing two complete lists of identified functional interaction partners in Human. Data are derived from Reactome and BioGRID databases.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/FIs.html
   :license: GPL-3
   :recipe: /`bioconductor-fis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-fis/meta.yaml>`_

   


.. conda:package:: bioconductor-fis

   |downloads_bioconductor-fis| |docker_bioconductor-fis|

   :versions: 1.10.0, 1.8.0, 1.6.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-fis|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-fis

   and update with::

      conda update bioconductor-fis

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-fis


.. |required_by_bioconductor-fis| conda:required_by:: bioconductor-fis
.. |downloads_bioconductor-fis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-fis.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-fis| image:: https://quay.io/repository/biocontainers/bioconductor-fis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-fis







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-fis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-fis/README.html

