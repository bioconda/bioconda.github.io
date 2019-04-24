:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-roc'
.. highlight: bash

bioconductor-roc
================

.. conda:recipe:: bioconductor-roc
   :replaces_section_title:

   utilities for ROC\, with uarray focus

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ROC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-roc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-roc/meta.yaml>`_
   :links: biotools: :biotools:`roc`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-roc

   |downloads_bioconductor-roc| |docker_bioconductor-roc|

   :versions: 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.52.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-roc

   and update with::

      conda update bioconductor-roc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-roc:<tag>

   (see `bioconductor-roc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-roc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-roc.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-roc| image:: https://quay.io/repository/biocontainers/bioconductor-roc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-roc
.. _`bioconductor-roc/tags`: https://quay.io/repository/biocontainers/bioconductor-roc?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-roc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-roc/README.html