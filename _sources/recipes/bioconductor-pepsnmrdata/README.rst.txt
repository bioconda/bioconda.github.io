.. title:: Package Recipe 'bioconductor-pepsnmrdata'
.. highlight: bash


bioconductor-pepsnmrdata
========================

.. conda:recipe:: bioconductor-pepsnmrdata
   :replaces_section_title:

   This package contains all the datasets used in the PepsNMR package.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/PepsNMRData.html
   :license: GPL-2 | file LICENSE
   :recipe: /`bioconductor-pepsnmrdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmrdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-pepsnmrdata/meta.yaml>`_

   


.. conda:package:: bioconductor-pepsnmrdata

   |downloads_bioconductor-pepsnmrdata| |docker_bioconductor-pepsnmrdata|

   :versions: 1.0.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-pepsnmrdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-pepsnmrdata

   and update with::

      conda update bioconductor-pepsnmrdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-pepsnmrdata


.. |required_by_bioconductor-pepsnmrdata| conda:required_by:: bioconductor-pepsnmrdata
.. |downloads_bioconductor-pepsnmrdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-pepsnmrdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-pepsnmrdata| image:: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-pepsnmrdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-pepsnmrdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-pepsnmrdata/README.html

