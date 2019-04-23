:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gat'
.. highlight: bash

gat
===

.. conda:recipe:: gat
   :replaces_section_title:

   Genomic Association Tester

   :homepage: https://github.com/AndreasHeger/gat
   :license: MIT
   :recipe: /`gat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gat/meta.yaml>`_
   :links: biotools: :biotools:`gat`, doi: :doi:`10.1093/bioinformatics/btt343`

   


.. conda:package:: gat

   |downloads_gat| |docker_gat|

   :versions: 1.3.5-3, 1.3.5-2, 1.3.5-1, 1.3.5-0, 1.3.3-0, 1.2.2-0
   
   :depends cython: >=0.19
   :depends matplotlib: >=1.3.0
   :depends numpy: >=1.7
   :depends python: >=2.7,<2.8.0a0
   :depends scipy: >=0.11
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gat

   and update with::

      conda update gat

   or use the docker container::

      docker pull quay.io/biocontainers/gat:<tag>

   (see `gat/tags`_ for valid values for ``<tag>``)


.. |downloads_gat| image:: https://img.shields.io/conda/dn/bioconda/gat.svg?style=flat
   :alt:   (downloads)
.. |docker_gat| image:: https://quay.io/repository/biocontainers/gat/status
   :target: https://quay.io/repository/biocontainers/gat
.. _`gat/tags`: https://quay.io/repository/biocontainers/gat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gat/README.html