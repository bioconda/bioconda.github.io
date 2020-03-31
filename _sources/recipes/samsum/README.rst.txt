:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'samsum'
.. highlight: bash

samsum
======

.. conda:recipe:: samsum
   :replaces_section_title:

   A light\-weight python package for summarizing sequence coverage from SAM and BAM files

   :homepage: https://github.com/hallamlab/samsum
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`samsum <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsum>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/samsum/meta.yaml>`_

   


.. conda:package:: samsum

   |downloads_samsum| |docker_samsum|

   :versions: 0.1.2-0, 0.1.1-0
   
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends numpy: >=1.14.6,<2.0a0
   :depends pytest: 
   :depends python: >=3.6,<3.7.0a0
   :depends python_abi: 3.6.* *_cp36m
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install samsum

   and update with::

      conda update samsum

   or use the docker container::

      docker pull quay.io/biocontainers/samsum:<tag>

   (see `samsum/tags`_ for valid values for ``<tag>``)


.. |downloads_samsum| image:: https://img.shields.io/conda/dn/bioconda/samsum.svg?style=flat
   :target: https://anaconda.org/bioconda/samsum
   :alt:   (downloads)
.. |docker_samsum| image:: https://quay.io/repository/biocontainers/samsum/status
   :target: https://quay.io/repository/biocontainers/samsum
.. _`samsum/tags`: https://quay.io/repository/biocontainers/samsum?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/samsum/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/samsum/README.html