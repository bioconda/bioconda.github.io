:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hgu133acdf'
.. highlight: bash

bioconductor-hgu133acdf
=======================

.. conda:recipe:: bioconductor-hgu133acdf
   :replaces_section_title:

   hgu133acdf

   :homepage: https://bioconductor.org/packages/3.11/data/annotation/html/hgu133acdf.html
   :license: LGPL
   :recipe: /`bioconductor-hgu133acdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133acdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hgu133acdf/meta.yaml>`_

   A package containing an environment representing the HG\-U133A.cdf file.


.. conda:package:: bioconductor-hgu133acdf

   |downloads_bioconductor-hgu133acdf| |docker_bioconductor-hgu133acdf|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hgu133acdf

   and update with::

      conda update bioconductor-hgu133acdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hgu133acdf:<tag>

   (see `bioconductor-hgu133acdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hgu133acdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hgu133acdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hgu133acdf
   :alt:   (downloads)
.. |docker_bioconductor-hgu133acdf| image:: https://quay.io/repository/biocontainers/bioconductor-hgu133acdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hgu133acdf
.. _`bioconductor-hgu133acdf/tags`: https://quay.io/repository/biocontainers/bioconductor-hgu133acdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hgu133acdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hgu133acdf/README.html