:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-annotationdbi'
.. highlight: bash

bioconductor-annotationdbi
==========================

.. conda:recipe:: bioconductor-annotationdbi
   :replaces_section_title:

   Provides user interface and database connection code for annotation data packages using SQLite data storage.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/AnnotationDbi.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-annotationdbi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationdbi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-annotationdbi/meta.yaml>`_
   :links: biotools: :biotools:`annotationdbi`, doi: :doi:`10.1038/nmeth.3252`

   


.. conda:package:: bioconductor-annotationdbi

   |downloads_bioconductor-annotationdbi| |docker_bioconductor-annotationdbi|

   :versions: 1.44.0-0, 1.42.1-0, 1.40.0-0, 1.38.2-0, 1.38.0-0, 1.36.2-0, 1.36.0-1, 1.34.4-1, 1.34.4-0, 1.32.3-0, 1.32.2-0, 1.32.0-0, 1.30.1-0
   
   :depends bioconductor-biobase: >=2.42.0,<2.43.0
   :depends bioconductor-biocgenerics: >=0.28.0,<0.29.0
   :depends bioconductor-iranges: >=2.16.0,<2.17.0
   :depends bioconductor-s4vectors: >=0.20.0,<0.21.0
   :depends r-base: >=3.5.1,<3.5.2.0a0
   :depends r-dbi: 
   :depends r-rsqlite: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-annotationdbi

   and update with::

      conda update bioconductor-annotationdbi

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-annotationdbi:<tag>

   (see `bioconductor-annotationdbi/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-annotationdbi| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-annotationdbi.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-annotationdbi
   :alt:   (downloads)
.. |docker_bioconductor-annotationdbi| image:: https://quay.io/repository/biocontainers/bioconductor-annotationdbi/status
   :target: https://quay.io/repository/biocontainers/bioconductor-annotationdbi
.. _`bioconductor-annotationdbi/tags`: https://quay.io/repository/biocontainers/bioconductor-annotationdbi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-annotationdbi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-annotationdbi/README.html