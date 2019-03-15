:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geneselectmmd'
.. highlight: bash

bioconductor-geneselectmmd
==========================

.. conda:recipe:: bioconductor-geneselectmmd
   :replaces_section_title:

   Gene selection based on a mixture of marginal distributions

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/GeneSelectMMD.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-geneselectmmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselectmmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geneselectmmd/meta.yaml>`_

   


.. conda:package:: bioconductor-geneselectmmd

   |downloads_bioconductor-geneselectmmd| |docker_bioconductor-geneselectmmd|

   :versions: 2.26.0-1, 2.26.0-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-limma: >=3.38.0,<3.39.0
   
   :depends libgcc-ng: >=7.3.0
   
   :depends libgfortran-ng: >=7,<8.0a0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-mass: 
   
   :depends r-survival: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-geneselectmmd

   and update with::

      conda update bioconductor-geneselectmmd

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geneselectmmd:<tag>

   (see `bioconductor-geneselectmmd/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geneselectmmd| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geneselectmmd.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-geneselectmmd| image:: https://quay.io/repository/biocontainers/bioconductor-geneselectmmd/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geneselectmmd
.. _`bioconductor-geneselectmmd/tags`: https://quay.io/repository/biocontainers/bioconductor-geneselectmmd?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geneselectmmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geneselectmmd/README.html