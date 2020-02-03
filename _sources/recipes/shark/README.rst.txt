:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shark'
.. highlight: bash

shark
=====

.. conda:recipe:: shark
   :replaces_section_title:

   Mapping\-free filtering of useless RNA\-Seq reads

   :homepage: https://algolab.github.io/shark/
   :license: GPL-3.0-or-later
   :recipe: /`shark <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shark>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shark/meta.yaml>`_
   :links: biotools: :biotools:`shark`

   


.. conda:package:: shark

   |downloads_shark| |docker_shark|

   :versions: 1.0.0-1, 1.0.0-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends tbb: >=2019.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install shark

   and update with::

      conda update shark

   or use the docker container::

      docker pull quay.io/biocontainers/shark:<tag>

   (see `shark/tags`_ for valid values for ``<tag>``)


.. |downloads_shark| image:: https://img.shields.io/conda/dn/bioconda/shark.svg?style=flat
   :target: https://anaconda.org/bioconda/shark
   :alt:   (downloads)
.. |docker_shark| image:: https://quay.io/repository/biocontainers/shark/status
   :target: https://quay.io/repository/biocontainers/shark
.. _`shark/tags`: https://quay.io/repository/biocontainers/shark?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shark/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shark/README.html