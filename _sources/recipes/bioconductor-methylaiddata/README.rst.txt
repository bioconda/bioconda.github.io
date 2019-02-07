.. title:: Package Recipe 'bioconductor-methylaiddata'
.. highlight: bash


bioconductor-methylaiddata
==========================

.. conda:recipe:: bioconductor-methylaiddata
   :replaces_section_title:

   A data package containing summarized Illumina 450k array data on 2800 samples and summarized EPIC data for 2620 samples. The data can be use as a background data set in the interactive application.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/MethylAidData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-methylaiddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaiddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-methylaiddata/meta.yaml>`_

   


.. conda:package:: bioconductor-methylaiddata

   |downloads_bioconductor-methylaiddata| |docker_bioconductor-methylaiddata|

   :versions: 1.14.0

   :depends: :conda:package:`bioconductor-methylaid` >=1.16.0,<1.17.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-methylaiddata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-methylaiddata

   and update with::

      conda update bioconductor-methylaiddata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-methylaiddata


.. |required_by_bioconductor-methylaiddata| conda:required_by:: bioconductor-methylaiddata
.. |downloads_bioconductor-methylaiddata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-methylaiddata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-methylaiddata| image:: https://quay.io/repository/biocontainers/bioconductor-methylaiddata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-methylaiddata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-methylaiddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-methylaiddata/README.html

