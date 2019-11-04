:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-yeast2cdf'
.. highlight: bash

bioconductor-yeast2cdf
======================

.. conda:recipe:: bioconductor-yeast2cdf
   :replaces_section_title:

   A package containing an environment representing the Yeast\_2.cdf file.

   :homepage: https://bioconductor.org/packages/3.9/data/annotation/html/yeast2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-yeast2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeast2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-yeast2cdf/meta.yaml>`_

   


.. conda:package:: bioconductor-yeast2cdf

   |downloads_bioconductor-yeast2cdf| |docker_bioconductor-yeast2cdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-yeast2cdf

   and update with::

      conda update bioconductor-yeast2cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-yeast2cdf:<tag>

   (see `bioconductor-yeast2cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-yeast2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-yeast2cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-yeast2cdf
   :alt:   (downloads)
.. |docker_bioconductor-yeast2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-yeast2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-yeast2cdf
.. _`bioconductor-yeast2cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-yeast2cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-yeast2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-yeast2cdf/README.html