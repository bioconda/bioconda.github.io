:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-canine2cdf'
.. highlight: bash

bioconductor-canine2cdf
=======================

.. conda:recipe:: bioconductor-canine2cdf
   :replaces_section_title:

   canine2cdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/canine2cdf.html
   :license: LGPL
   :recipe: /`bioconductor-canine2cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-canine2cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-canine2cdf/meta.yaml>`_

   A package containing an environment representing the Canine\_2.cdf file.


.. conda:package:: bioconductor-canine2cdf

   |downloads_bioconductor-canine2cdf| |docker_bioconductor-canine2cdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-canine2cdf

   and update with::

      conda update bioconductor-canine2cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-canine2cdf:<tag>

   (see `bioconductor-canine2cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-canine2cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-canine2cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-canine2cdf
   :alt:   (downloads)
.. |docker_bioconductor-canine2cdf| image:: https://quay.io/repository/biocontainers/bioconductor-canine2cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-canine2cdf
.. _`bioconductor-canine2cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-canine2cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-canine2cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-canine2cdf/README.html