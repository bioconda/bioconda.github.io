:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mouse430a2cdf'
.. highlight: bash

bioconductor-mouse430a2cdf
==========================

.. conda:recipe:: bioconductor-mouse430a2cdf
   :replaces_section_title:

   mouse430a2cdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/mouse430a2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-mouse430a2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse430a2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mouse430a2cdf/meta.yaml>`_

   A package containing an environment representing the Mouse430A\_2.cdf file.


.. conda:package:: bioconductor-mouse430a2cdf

   |downloads_bioconductor-mouse430a2cdf| |docker_bioconductor-mouse430a2cdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mouse430a2cdf

   and update with::

      conda update bioconductor-mouse430a2cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mouse430a2cdf:<tag>

   (see `bioconductor-mouse430a2cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mouse430a2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mouse430a2cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mouse430a2cdf
   :alt:   (downloads)
.. |docker_bioconductor-mouse430a2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-mouse430a2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mouse430a2cdf
.. _`bioconductor-mouse430a2cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mouse430a2cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mouse430a2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mouse430a2cdf/README.html