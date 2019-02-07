.. title:: Package Recipe 'bioconductor-curatedbreastdata'
.. highlight: bash


bioconductor-curatedbreastdata
==============================

.. conda:recipe:: bioconductor-curatedbreastdata
   :replaces_section_title:

   Curated human breast cancer tissue S4 ExpresionSet datasets from over 16 clinical trials comprising over 2\,000 patients. All datasets contain at least one type of outcomes variable and treatment information \(minimum level\: whether they had chemotherapy and whether they had hormonal therapy\). Includes code to post\-process these datasets.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/curatedBreastData.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-curatedbreastdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedbreastdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedbreastdata/meta.yaml>`_

   


.. conda:package:: bioconductor-curatedbreastdata

   |downloads_bioconductor-curatedbreastdata| |docker_bioconductor-curatedbreastdata|

   :versions: 2.10.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocstyle` >=2.10.0,<2.11.0 :conda:package:`bioconductor-impute` >=1.56.0,<1.57.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-ggplot2`  :conda:package:`r-xml`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-curatedbreastdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedbreastdata

   and update with::

      conda update bioconductor-curatedbreastdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-curatedbreastdata


.. |required_by_bioconductor-curatedbreastdata| conda:required_by:: bioconductor-curatedbreastdata
.. |downloads_bioconductor-curatedbreastdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedbreastdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-curatedbreastdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedbreastdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedbreastdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedbreastdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedbreastdata/README.html

