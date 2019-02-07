.. title:: Package Recipe 'bioconductor-snageedata'
.. highlight: bash


bioconductor-snageedata
=======================

.. conda:recipe:: bioconductor-snageedata
   :replaces_section_title:

   SNAGEE data \- gene list and correlation matrix

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/SNAGEEdata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-snageedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snageedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-snageedata/meta.yaml>`_

   


.. conda:package:: bioconductor-snageedata

   |downloads_bioconductor-snageedata| |docker_bioconductor-snageedata|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-snageedata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-snageedata

   and update with::

      conda update bioconductor-snageedata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-snageedata


.. |required_by_bioconductor-snageedata| conda:required_by:: bioconductor-snageedata
.. |downloads_bioconductor-snageedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-snageedata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-snageedata| image:: https://quay.io/repository/biocontainers/bioconductor-snageedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-snageedata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-snageedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-snageedata/README.html

