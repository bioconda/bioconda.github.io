:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-affy'
.. highlight: bash

bioconductor-affy
=================

.. conda:recipe:: bioconductor-affy
   :replaces_section_title:

   The package contains functions for exploratory oligonucleotide array analysis. The dependence on tkWidgets only concerns few convenience functions. \'affy\' is fully functional without it.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/affy.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-affy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-affy/meta.yaml>`_
   :links: biotools: :biotools:`affy`

   


.. conda:package:: bioconductor-affy

   |downloads_bioconductor-affy| |docker_bioconductor-affy|

   :versions: 1.60.0-0, 1.58.0-0, 1.56.0-0, 1.54.0-0, 1.50.0-0, 1.48.0-0
   
   :depends bioconductor-affyio: >=1.52.0,<1.53.0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   
   :depends bioconductor-preprocesscore: >=1.44.0,<1.45.0
   
   :depends bioconductor-zlibbioc: >=1.28.0,<1.29.0
   
   :depends r-base: >=3.5.1,<3.5.2.0a0
   
   :depends r-biocmanager: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-affy

   and update with::

      conda update bioconductor-affy

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-affy:<tag>

   (see `bioconductor-affy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-affy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-affy.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-affy| image:: https://quay.io/repository/biocontainers/bioconductor-affy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-affy
.. _`bioconductor-affy/tags`: https://quay.io/repository/biocontainers/bioconductor-affy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-affy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-affy/README.html