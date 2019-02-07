.. title:: Package Recipe 'bioconductor-cancerdata'
.. highlight: bash


bioconductor-cancerdata
=======================

.. conda:recipe:: bioconductor-cancerdata
   :replaces_section_title:

   Dataset for the R package cancerclass

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/cancerdata.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-cancerdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cancerdata/meta.yaml>`_

   


.. conda:package:: bioconductor-cancerdata

   |downloads_bioconductor-cancerdata| |docker_bioconductor-cancerdata|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-cancerdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-cancerdata

   and update with::

      conda update bioconductor-cancerdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-cancerdata


.. |required_by_bioconductor-cancerdata| conda:required_by:: bioconductor-cancerdata
.. |downloads_bioconductor-cancerdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cancerdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-cancerdata| image:: https://quay.io/repository/biocontainers/bioconductor-cancerdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cancerdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cancerdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cancerdata/README.html

