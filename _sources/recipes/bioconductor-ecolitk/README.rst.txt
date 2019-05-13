:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ecolitk'
.. highlight: bash

bioconductor-ecolitk
====================

.. conda:recipe:: bioconductor-ecolitk
   :replaces_section_title:

   Meta\-data and tools to work with E. coli. The tools are mostly plotting functions to work with circular genomes. They can used with other genomes\/plasmids.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/ecolitk.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-ecolitk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolitk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ecolitk/meta.yaml>`_

   


.. conda:package:: bioconductor-ecolitk

   |downloads_bioconductor-ecolitk| |docker_bioconductor-ecolitk|

   :versions: 1.54.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-ecolitk

   and update with::

      conda update bioconductor-ecolitk

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ecolitk:<tag>

   (see `bioconductor-ecolitk/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ecolitk| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ecolitk.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ecolitk
   :alt:   (downloads)
.. |docker_bioconductor-ecolitk| image:: https://quay.io/repository/biocontainers/bioconductor-ecolitk/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ecolitk
.. _`bioconductor-ecolitk/tags`: https://quay.io/repository/biocontainers/bioconductor-ecolitk?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ecolitk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ecolitk/README.html