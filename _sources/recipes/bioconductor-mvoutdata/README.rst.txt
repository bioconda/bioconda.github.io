.. title:: Package Recipe 'bioconductor-mvoutdata'
.. highlight: bash


bioconductor-mvoutdata
======================

.. conda:recipe:: bioconductor-mvoutdata
   :replaces_section_title:

   affy and illumina raw data for assessing outlier detector performance

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/mvoutData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mvoutdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvoutdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mvoutdata/meta.yaml>`_

   


.. conda:package:: bioconductor-mvoutdata

   |downloads_bioconductor-mvoutdata| |docker_bioconductor-mvoutdata|

   :versions: 1.18.0

   :depends: :conda:package:`bioconductor-affy` >=1.60.0,<1.61.0 :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-mvoutdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mvoutdata

   and update with::

      conda update bioconductor-mvoutdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-mvoutdata


.. |required_by_bioconductor-mvoutdata| conda:required_by:: bioconductor-mvoutdata
.. |downloads_bioconductor-mvoutdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mvoutdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mvoutdata| image:: https://quay.io/repository/biocontainers/bioconductor-mvoutdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mvoutdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mvoutdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mvoutdata/README.html

