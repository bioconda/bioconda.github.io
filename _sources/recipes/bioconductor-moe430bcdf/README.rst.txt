:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-moe430bcdf'
.. highlight: bash

bioconductor-moe430bcdf
=======================

.. conda:recipe:: bioconductor-moe430bcdf
   :replaces_section_title:

   A package containing an environment representing the MOE430B.CDF file.

   :homepage: https://bioconductor.org/packages/3.8/data/annotation/html/moe430bcdf.html
   :license: LGPL
   :recipe: /`bioconductor-moe430bcdf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moe430bcdf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-moe430bcdf/meta.yaml>`_

   


.. conda:package:: bioconductor-moe430bcdf

   |downloads_bioconductor-moe430bcdf| |docker_bioconductor-moe430bcdf|

   :versions: 2.18.0-0
   
   :depends bioconductor-annotationdbi: >=1.44.0,<1.45.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-moe430bcdf

   and update with::

      conda update bioconductor-moe430bcdf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-moe430bcdf:<tag>

   (see `bioconductor-moe430bcdf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-moe430bcdf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-moe430bcdf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-moe430bcdf
   :alt:   (downloads)
.. |docker_bioconductor-moe430bcdf| image:: https://quay.io/repository/biocontainers/bioconductor-moe430bcdf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-moe430bcdf
.. _`bioconductor-moe430bcdf/tags`: https://quay.io/repository/biocontainers/bioconductor-moe430bcdf?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-moe430bcdf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-moe430bcdf/README.html