:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rmassbankdata'
.. highlight: bash

bioconductor-rmassbankdata
==========================

.. conda:recipe:: bioconductor-rmassbankdata
   :replaces_section_title:
   :noindex:

   Test dataset for RMassBank

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/RMassBankData.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-rmassbankdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbankdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rmassbankdata/meta.yaml>`_

   Example spectra\, example compound list\(s\) and an example annotation list for a narcotics dataset\; required to test RMassBank. The package is described in the man page for RMassBankData. Includes new XCMS test data.


.. conda:package:: bioconductor-rmassbankdata

   |downloads_bioconductor-rmassbankdata| |docker_bioconductor-rmassbankdata|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.27.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``

      

   
   :depends curl: ``>=7.77.0,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-rmassbankdata

   and update with::

      conda update bioconductor-rmassbankdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rmassbankdata:<tag>

   (see `bioconductor-rmassbankdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rmassbankdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rmassbankdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rmassbankdata
   :alt:   (downloads)
.. |docker_bioconductor-rmassbankdata| image:: https://quay.io/repository/biocontainers/bioconductor-rmassbankdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rmassbankdata
.. _`bioconductor-rmassbankdata/tags`: https://quay.io/repository/biocontainers/bioconductor-rmassbankdata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rmassbankdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rmassbankdata/README.html