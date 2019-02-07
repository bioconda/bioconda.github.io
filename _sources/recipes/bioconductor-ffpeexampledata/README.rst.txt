.. title:: Package Recipe 'bioconductor-ffpeexampledata'
.. highlight: bash


bioconductor-ffpeexampledata
============================

.. conda:recipe:: bioconductor-ffpeexampledata
   :replaces_section_title:

   A subset of GSE17565 \(April et al. 2009\) containing 32 FFPE samples of Burkitts Lymphoma and Breast Adenocarcinoma\, with a dilution series in technical duplicate.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ffpeExampleData.html
   :license: GPL (>2)
   :recipe: /`bioconductor-ffpeexampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpeexampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ffpeexampledata/meta.yaml>`_

   


.. conda:package:: bioconductor-ffpeexampledata

   |downloads_bioconductor-ffpeexampledata| |docker_bioconductor-ffpeexampledata|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-lumi` >=2.34.0,<2.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-ffpeexampledata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ffpeexampledata

   and update with::

      conda update bioconductor-ffpeexampledata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-ffpeexampledata


.. |required_by_bioconductor-ffpeexampledata| conda:required_by:: bioconductor-ffpeexampledata
.. |downloads_bioconductor-ffpeexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ffpeexampledata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ffpeexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html

