.. title:: Package Recipe 'bioconductor-champdata'
.. highlight: bash


bioconductor-champdata
======================

.. conda:recipe:: bioconductor-champdata
   :replaces_section_title:

   Provides datasets needed for ChAMP including a test dataset and blood controls for CNA analysis.

   :homepage: https://bioconductor.org/packages/3.8/data/experiment/html/ChAMPdata.html
   :license: GPL-3
   :recipe: /`bioconductor-champdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-champdata/meta.yaml>`_

   


.. conda:package:: bioconductor-champdata

   |downloads_bioconductor-champdata| |docker_bioconductor-champdata|

   :versions: 2.14.0

   :depends: :conda:package:`bioconductor-biocgenerics` >=0.28.0,<0.29.0 :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`wget`  

   :required~by: |required_by_bioconductor-champdata|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-champdata

   and update with::

      conda update bioconductor-champdata

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-champdata


.. |required_by_bioconductor-champdata| conda:required_by:: bioconductor-champdata
.. |downloads_bioconductor-champdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-champdata.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-champdata| image:: https://quay.io/repository/biocontainers/bioconductor-champdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-champdata







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-champdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-champdata/README.html

