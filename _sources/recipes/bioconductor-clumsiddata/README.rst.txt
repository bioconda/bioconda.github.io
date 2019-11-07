:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clumsiddata'
.. highlight: bash

bioconductor-clumsiddata
========================

.. conda:recipe:: bioconductor-clumsiddata
   :replaces_section_title:

   Data for the CluMSID package

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/CluMSIDdata.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-clumsiddata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsiddata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clumsiddata/meta.yaml>`_

   This package contains various LC\-MS\/MS and GC\-MS data that is used in vignettes and examples in the CluMSID package.


.. conda:package:: bioconductor-clumsiddata

   |downloads_bioconductor-clumsiddata| |docker_bioconductor-clumsiddata|

   :versions: 1.2.0-0, 1.0.0-1
   
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clumsiddata

   and update with::

      conda update bioconductor-clumsiddata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clumsiddata:<tag>

   (see `bioconductor-clumsiddata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clumsiddata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clumsiddata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clumsiddata
   :alt:   (downloads)
.. |docker_bioconductor-clumsiddata| image:: https://quay.io/repository/biocontainers/bioconductor-clumsiddata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clumsiddata
.. _`bioconductor-clumsiddata/tags`: https://quay.io/repository/biocontainers/bioconductor-clumsiddata?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clumsiddata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clumsiddata/README.html