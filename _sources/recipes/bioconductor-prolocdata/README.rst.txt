.. title:: Package Recipe 'bioconductor-prolocdata'
.. highlight: bash


bioconductor-prolocdata
=======================

.. conda:recipe:: bioconductor-prolocdata
   :replaces_section_title:

   Mass\-spectrometry based spatial proteomics data sets and protein complex separation data. Also contains the time course expression experiment from Mulvey et al. 2015.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/pRolocdata.html
   :license: GPL-2
   :recipe: /`bioconductor-prolocdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-prolocdata/meta.yaml>`_

   


.. conda:package:: bioconductor-prolocdata

   |downloads_bioconductor-prolocdata| |docker_bioconductor-prolocdata|

   :versions: 1.20.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-msnbase` >=2.8.0,<2.9.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-prolocdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-prolocdata

   and update with::

      conda update bioconductor-prolocdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-prolocdata


.. |required_by_bioconductor-prolocdata| conda:required_by:: bioconductor-prolocdata
.. |downloads_bioconductor-prolocdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-prolocdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-prolocdata| image:: https://quay.io/repository/biocontainers/bioconductor-prolocdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-prolocdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-prolocdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-prolocdata/README.html

