:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-all'
.. highlight: bash

bioconductor-all
================

.. conda:recipe:: bioconductor-all
   :replaces_section_title:

   Data of T\- and B\-cell Acute Lymphocytic Leukemia from the Ritz Laboratory at the DFCI \(includes Apr 2004 versions\)

   :homepage: https://bioconductor.org/packages/3.9/data/experiment/html/ALL.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-all <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-all>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-all/meta.yaml>`_

   


.. conda:package:: bioconductor-all

   |downloads_bioconductor-all| |docker_bioconductor-all|

   :versions: 1.27.0-0, 1.26.0-1, 1.24.0-0, 1.22.0-0, 1.20.0-1, 1.20.0-0, 1.18.0-1, 1.18.0-0
   
   :depends bioconductor-biobase: >=2.46.0,<2.47.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-all

   and update with::

      conda update bioconductor-all

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-all:<tag>

   (see `bioconductor-all/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-all| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-all.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-all
   :alt:   (downloads)
.. |docker_bioconductor-all| image:: https://quay.io/repository/biocontainers/bioconductor-all/status
   :target: https://quay.io/repository/biocontainers/bioconductor-all
.. _`bioconductor-all/tags`: https://quay.io/repository/biocontainers/bioconductor-all?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-all/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-all/README.html