:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ccpromise'
.. highlight: bash

bioconductor-ccpromise
======================

.. conda:recipe:: bioconductor-ccpromise
   :replaces_section_title:

   Perform Canonical correlation between two forms of high demensional genetic data\, and associate the first compoent of each form of data with a specific biologically interesting pattern of associations with multiple endpoints. A probe level analysis is also implemented.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/CCPROMISE.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ccpromise <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccpromise>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ccpromise/meta.yaml>`_

   


.. conda:package:: bioconductor-ccpromise

   |downloads_bioconductor-ccpromise| |docker_bioconductor-ccpromise|

   :versions: 1.8.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-gseabase: >=1.44.0,<1.45.0
   :depends bioconductor-promise: >=1.34.0,<1.35.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-ccp: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ccpromise

   and update with::

      conda update bioconductor-ccpromise

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ccpromise:<tag>

   (see `bioconductor-ccpromise/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ccpromise| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ccpromise.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-ccpromise| image:: https://quay.io/repository/biocontainers/bioconductor-ccpromise/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ccpromise
.. _`bioconductor-ccpromise/tags`: https://quay.io/repository/biocontainers/bioconductor-ccpromise?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ccpromise/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ccpromise/README.html