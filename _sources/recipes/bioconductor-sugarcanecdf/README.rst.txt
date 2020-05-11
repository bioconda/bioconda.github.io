:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sugarcanecdf'
.. highlight: bash

bioconductor-sugarcanecdf
=========================

.. conda:recipe:: bioconductor-sugarcanecdf
   :replaces_section_title:

   sugarcanecdf

   :homepage: https://bioconductor.org/packages/3.10/data/annotation/html/sugarcanecdf.html
   :license: LGPL
   :recipe: /`bioconductor-sugarcanecdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sugarcanecdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sugarcanecdf/meta.yaml>`_

   A package containing an environment representing the Sugar\_Cane.cdf file.


.. conda:package:: bioconductor-sugarcanecdf

   |downloads_bioconductor-sugarcanecdf| |docker_bioconductor-sugarcanecdf|

   :versions: 2.18.0-4, 2.18.0-3, 2.18.0-2, 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.50.0,<1.51.0
   :depends curl: >=7.69.1,<8.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sugarcanecdf

   and update with::

      conda update bioconductor-sugarcanecdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sugarcanecdf:<tag>

   (see `bioconductor-sugarcanecdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sugarcanecdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sugarcanecdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sugarcanecdf
   :alt:   (downloads)
.. |docker_bioconductor-sugarcanecdf| image:: https://quay.io/repository/biocontainers/bioconductor-sugarcanecdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sugarcanecdf
.. _`bioconductor-sugarcanecdf/tags`: https://quay.io/repository/biocontainers/bioconductor-sugarcanecdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sugarcanecdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sugarcanecdf/README.html