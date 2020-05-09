:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-matter'
.. highlight: bash

bioconductor-matter
===================

.. conda:recipe:: bioconductor-matter
   :replaces_section_title:

   A framework for rapid prototyping with file\-based data structures

   :homepage: https://bioconductor.org/packages/3.10/bioc/html/matter.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-matter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-matter/meta.yaml>`_
   :links: biotools: :biotools:`matter`, doi: :doi:`10.1038/nmeth.3252`

   Memory\-efficient reading\, writing\, and manipulation of structured binary data as file\-based vectors\, matrices\, arrays\, lists\, and data frames.


.. conda:package:: bioconductor-matter

   |downloads_bioconductor-matter| |docker_bioconductor-matter|

   :versions: 1.14.0-0, 1.12.0-0, 1.10.0-1, 1.8.3-0, 1.8.0-0, 1.6.0-1, 1.6.0-0, 1.4.1-0, 1.2.0-0
   
   :depends bioconductor-biocgenerics: >=0.34.0,<0.35.0
   :depends bioconductor-biocparallel: >=1.22.0,<1.23.0
   :depends bioconductor-protgenerics: >=1.20.0,<1.21.0
   :depends libblas: >=3.8.0,<4.0a0
   :depends libcxx: >=9.0.1
   :depends liblapack: >=3.8.0,<3.9.0a0
   :depends r-base: >=4.0,<4.1.0a0
   :depends r-biglm: 
   :depends r-digest: 
   :depends r-irlba: 
   :depends r-matrix: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-matter

   and update with::

      conda update bioconductor-matter

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-matter:<tag>

   (see `bioconductor-matter/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-matter| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-matter.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-matter
   :alt:   (downloads)
.. |docker_bioconductor-matter| image:: https://quay.io/repository/biocontainers/bioconductor-matter/status
   :target: https://quay.io/repository/biocontainers/bioconductor-matter
.. _`bioconductor-matter/tags`: https://quay.io/repository/biocontainers/bioconductor-matter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-matter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-matter/README.html