:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'intarna'
.. highlight: bash

intarna
=======

.. conda:recipe:: intarna
   :replaces_section_title:

   Efficient RNA\-RNA interaction prediction incorporating seeding and accessibility of interacting sites

   :homepage: https://github.com/BackofenLab/IntaRNA
   :license: MIT
   :recipe: /`intarna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intarna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/intarna/meta.yaml>`_
   :links: biotools: :biotools:`intarna`, doi: :doi:`10.1093/nar/gkx279`, doi: :doi:`10.1093/bioinformatics/btn544`, doi: :doi:`10.1093/nar/gky329`

   


.. conda:package:: intarna

   |downloads_intarna| |docker_intarna|

   :versions: 3.1.2-0, 3.1.1-0, 3.1.0.2-1, 3.1.0.2-0, 3.0.0-0, 2.4.1-0, 2.3.1-2, 2.3.1-1, 2.3.1-0, 2.3.0-0, 2.2.1-0, 2.2.0-3, 2.2.0-2, 2.2.0-1, 2.1.0-2, 2.1.0-1, 2.1.0-0, 2.0.5-0, 2.0.4-1, 2.0.3-1, 2.0.3-0, 2.0.2-0, 2.0.1-1, 2.0.1-0, 2.0.0-0, 1.2.5-2, 1.2.5-1
   
   :depends boost-cpp: >=1.70.0,<1.70.1.0a0
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends viennarna: >=2.4.14,<2.5.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install intarna

   and update with::

      conda update intarna

   or use the docker container::

      docker pull quay.io/biocontainers/intarna:<tag>

   (see `intarna/tags`_ for valid values for ``<tag>``)


.. |downloads_intarna| image:: https://img.shields.io/conda/dn/bioconda/intarna.svg?style=flat
   :target: https://anaconda.org/bioconda/intarna
   :alt:   (downloads)
.. |docker_intarna| image:: https://quay.io/repository/biocontainers/intarna/status
   :target: https://quay.io/repository/biocontainers/intarna
.. _`intarna/tags`: https://quay.io/repository/biocontainers/intarna?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/intarna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/intarna/README.html