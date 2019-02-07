.. title:: Package Recipe 'bioconductor-arrmdata'
.. highlight: bash


bioconductor-arrmdata
=====================

.. conda:recipe:: bioconductor-arrmdata
   :replaces_section_title:

   Raw Beta values from 36 samples across 3 groups from Illumina 450k methylation arrays

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ARRmData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-arrmdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrmdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-arrmdata/meta.yaml>`_

   


.. conda:package:: bioconductor-arrmdata

   |downloads_bioconductor-arrmdata| |docker_bioconductor-arrmdata|

   :versions: 1.18.0, 1.16.0, 1.14.0

   :depends: :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-arrmdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-arrmdata

   and update with::

      conda update bioconductor-arrmdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-arrmdata


.. |required_by_bioconductor-arrmdata| conda:required_by:: bioconductor-arrmdata
.. |downloads_bioconductor-arrmdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-arrmdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-arrmdata| image:: https://quay.io/repository/biocontainers/bioconductor-arrmdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-arrmdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-arrmdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-arrmdata/README.html

