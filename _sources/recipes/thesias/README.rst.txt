:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'thesias'
.. highlight: bash

thesias
=======

.. conda:recipe:: thesias
   :replaces_section_title:

   Testing Haplotype Effects In Association Studies

   :homepage: https://github.com/daissi/thesias
   :license: GPL-3+
   :recipe: /`thesias <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thesias>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/thesias/meta.yaml>`_
   :links: biotools: :biotools:`THESIAS`, doi: :doi:`10.1093/bioinformatics/btm058`

   


.. conda:package:: thesias

   |downloads_thesias| |docker_thesias|

   :versions: 3.1.1-1, 3.1.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends openjdk: >=11
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install thesias

   and update with::

      conda update thesias

   or use the docker container::

      docker pull quay.io/biocontainers/thesias:<tag>

   (see `thesias/tags`_ for valid values for ``<tag>``)


.. |downloads_thesias| image:: https://img.shields.io/conda/dn/bioconda/thesias.svg?style=flat
   :target: https://anaconda.org/bioconda/thesias
   :alt:   (downloads)
.. |docker_thesias| image:: https://quay.io/repository/biocontainers/thesias/status
   :target: https://quay.io/repository/biocontainers/thesias
.. _`thesias/tags`: https://quay.io/repository/biocontainers/thesias?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/thesias/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/thesias/README.html