:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mulcom'
.. highlight: bash

bioconductor-mulcom
===================

.. conda:recipe:: bioconductor-mulcom
   :replaces_section_title:

   Identification of differentially expressed genes and false discovery rate \(FDR\) calculation by Multiple Comparison test

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Mulcom.html
   :license: GPL-2
   :recipe: /`bioconductor-mulcom <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mulcom>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mulcom/meta.yaml>`_
   :links: biotools: :biotools:`mulcom`, doi: :doi:`10.1186/1471-2105-12-382`

   


.. conda:package:: bioconductor-mulcom

   |downloads_bioconductor-mulcom| |docker_bioconductor-mulcom|

   :versions: 1.32.0-0, 1.30.0-0, 1.28.0-0, 1.26.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-fields: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mulcom

   and update with::

      conda update bioconductor-mulcom

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mulcom:<tag>

   (see `bioconductor-mulcom/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mulcom| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mulcom.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-mulcom| image:: https://quay.io/repository/biocontainers/bioconductor-mulcom/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mulcom
.. _`bioconductor-mulcom/tags`: https://quay.io/repository/biocontainers/bioconductor-mulcom?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mulcom/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mulcom/README.html