:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drosgenome1cdf'
.. highlight: bash

bioconductor-drosgenome1cdf
===========================

.. conda:recipe:: bioconductor-drosgenome1cdf
   :replaces_section_title:

   drosgenome1cdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/drosgenome1cdf.html
   :license: LGPL
   :recipe: /`bioconductor-drosgenome1cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosgenome1cdf/meta.yaml>`_

   A package containing an environment representing the DrosGenome1.CDF file.


.. conda:package:: bioconductor-drosgenome1cdf

   |downloads_bioconductor-drosgenome1cdf| |docker_bioconductor-drosgenome1cdf|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drosgenome1cdf

   and update with::

      conda update bioconductor-drosgenome1cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drosgenome1cdf:<tag>

   (see `bioconductor-drosgenome1cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drosgenome1cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drosgenome1cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drosgenome1cdf
   :alt:   (downloads)
.. |docker_bioconductor-drosgenome1cdf| image:: https://quay.io/repository/biocontainers/bioconductor-drosgenome1cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drosgenome1cdf
.. _`bioconductor-drosgenome1cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-drosgenome1cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drosgenome1cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drosgenome1cdf/README.html