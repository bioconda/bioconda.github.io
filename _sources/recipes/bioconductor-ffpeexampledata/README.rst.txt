:orphan:  .. only available via index, not via toctree

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

   :versions: 1.20.0-0
   
   :depends bioconductor-lumi: >=2.34.0,<2.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ffpeexampledata

   and update with::

      conda update bioconductor-ffpeexampledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ffpeexampledata:<tag>

   (see `bioconductor-ffpeexampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ffpeexampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ffpeexampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ffpeexampledata
   :alt:   (downloads)
.. |docker_bioconductor-ffpeexampledata| image:: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata
.. _`bioconductor-ffpeexampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-ffpeexampledata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ffpeexampledata/README.html