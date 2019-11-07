:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mirna20cdf'
.. highlight: bash

bioconductor-mirna20cdf
=======================

.. conda:recipe:: bioconductor-mirna20cdf
   :replaces_section_title:

   mirna20cdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/mirna20cdf.html
   :license: LGPL
   :recipe: /`bioconductor-mirna20cdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna20cdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mirna20cdf/meta.yaml>`_

   A package containing an environment representing the miRNA\-2\_0.cdf file.


.. conda:package:: bioconductor-mirna20cdf

   |downloads_bioconductor-mirna20cdf| |docker_bioconductor-mirna20cdf|

   :versions: 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.48.0,<1.49.0
   :depends curl: >=7.65.3,<8.0a0
   :depends r-base: >=3.6,<3.7.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mirna20cdf

   and update with::

      conda update bioconductor-mirna20cdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mirna20cdf:<tag>

   (see `bioconductor-mirna20cdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mirna20cdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mirna20cdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mirna20cdf
   :alt:   (downloads)
.. |docker_bioconductor-mirna20cdf| image:: https://quay.io/repository/biocontainers/bioconductor-mirna20cdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mirna20cdf
.. _`bioconductor-mirna20cdf/tags`: https://quay.io/repository/biocontainers/bioconductor-mirna20cdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mirna20cdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mirna20cdf/README.html