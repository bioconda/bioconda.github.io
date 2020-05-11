:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-drosophila2cdf'
.. highlight: bash

bioconductor-drosophila2cdf
===========================

.. conda:recipe:: bioconductor-drosophila2cdf
   :replaces_section_title:

   drosophila2cdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/drosophila2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-drosophila2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosophila2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-drosophila2cdf/meta.yaml>`_

   A package containing an environment representing the Drosophila\_2.cdf file.


.. conda:package:: bioconductor-drosophila2cdf

   |downloads_bioconductor-drosophila2cdf| |docker_bioconductor-drosophila2cdf|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-drosophila2cdf

   and update with::

      conda update bioconductor-drosophila2cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-drosophila2cdf:<tag>

   (see `bioconductor-drosophila2cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-drosophila2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-drosophila2cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-drosophila2cdf
   :alt:   (downloads)
.. |docker_bioconductor-drosophila2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-drosophila2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-drosophila2cdf
.. _`bioconductor-drosophila2cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-drosophila2cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-drosophila2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-drosophila2cdf/README.html