.. title:: Package Recipe 'bioconductor-curatedcrcdata'
.. highlight: bash


bioconductor-curatedcrcdata
===========================

.. conda:recipe:: bioconductor-curatedcrcdata
   :replaces_section_title:

   The curatedCRC package provides relevant functions and data for gene expression analysis in patients with colorectal cancer.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/curatedCRCData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-curatedcrcdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedcrcdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-curatedcrcdata/meta.yaml>`_

   


.. conda:package:: bioconductor-curatedcrcdata

   |downloads_bioconductor-curatedcrcdata| |docker_bioconductor-curatedcrcdata|

   :versions: 2.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-nlme`  :conda:package:`wget`  

   :required~by: |required_by_bioconductor-curatedcrcdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-curatedcrcdata

   and update with::

      conda update bioconductor-curatedcrcdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-curatedcrcdata


.. |required_by_bioconductor-curatedcrcdata| conda:required_by:: bioconductor-curatedcrcdata
.. |downloads_bioconductor-curatedcrcdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-curatedcrcdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-curatedcrcdata| image:: https://quay.io/repository/biocontainers/bioconductor-curatedcrcdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-curatedcrcdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-curatedcrcdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-curatedcrcdata/README.html

