:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aracne.networks'
.. highlight: bash

bioconductor-aracne.networks
============================

.. conda:recipe:: bioconductor-aracne.networks
   :replaces_section_title:

   ARACNe\-inferred gene networks from TCGA tumor datasets

   :homepage: https://bioconductor.org/packages/3.10/data/experiment/html/aracne.networks.html
   :license: file LICENSE
   :recipe: /`bioconductor-aracne.networks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aracne.networks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aracne.networks/meta.yaml>`_

   This package contains ARACNe\-inferred networks from TCGA tumor datasets. It also contains a function to export them into plain\-text format.


.. conda:package:: bioconductor-aracne.networks

   |downloads_bioconductor-aracne.networks| |docker_bioconductor-aracne.networks|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.8.0-0
   
   :depends bioconductor-viper: >=1.22.0,<1.23.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aracne.networks

   and update with::

      conda update bioconductor-aracne.networks

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aracne.networks:<tag>

   (see `bioconductor-aracne.networks/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aracne.networks| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aracne.networks.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aracne.networks
   :alt:   (downloads)
.. |docker_bioconductor-aracne.networks| image:: https://quay.io/repository/biocontainers/bioconductor-aracne.networks/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aracne.networks
.. _`bioconductor-aracne.networks/tags`: https://quay.io/repository/biocontainers/bioconductor-aracne.networks?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aracne.networks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aracne.networks/README.html