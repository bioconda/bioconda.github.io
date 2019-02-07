.. title:: Package Recipe 'bioconductor-mammaprintdata'
.. highlight: bash


bioconductor-mammaprintdata
===========================

.. conda:recipe:: bioconductor-mammaprintdata
   :replaces_section_title:

   Gene expression data for the two breast cancer cohorts published by Glas and Buyse in 2006. This cohorts were used to implement and validate the mammaPrint breast cancer test.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/mammaPrintData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mammaprintdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mammaprintdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mammaprintdata/meta.yaml>`_

   


.. conda:package:: bioconductor-mammaprintdata

   |downloads_bioconductor-mammaprintdata| |docker_bioconductor-mammaprintdata|

   :versions: 1.18.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mammaprintdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mammaprintdata

   and update with::

      conda update bioconductor-mammaprintdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mammaprintdata


.. |required_by_bioconductor-mammaprintdata| conda:required_by:: bioconductor-mammaprintdata
.. |downloads_bioconductor-mammaprintdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mammaprintdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mammaprintdata| image:: https://quay.io/repository/biocontainers/bioconductor-mammaprintdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mammaprintdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mammaprintdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mammaprintdata/README.html

