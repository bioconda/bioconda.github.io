:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tabix'
.. highlight: bash

tabix
=====

.. conda:recipe:: tabix/0.2.5
   :replaces_section_title:

   A set of tools written in Perl and C\+\+ for working with VCF files.

   :homepage: https://sourceforge.net/projects/samtools
   :license: BSD
   :recipe: /`tabix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix>`_/`0.2.5 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix/0.2.5>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tabix/0.2.5/meta.yaml>`_

   


.. conda:package:: tabix

   |downloads_tabix| |docker_tabix|

   :versions: 0.2.6-0, 0.2.5-2, 0.2.5-1, 0.2.5-0
   
   :depends libgcc-ng: >=4.9
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tabix

   and update with::

      conda update tabix

   or use the docker container::

      docker pull quay.io/biocontainers/tabix:<tag>

   (see `tabix/tags`_ for valid values for ``<tag>``)


.. |downloads_tabix| image:: https://img.shields.io/conda/dn/bioconda/tabix.svg?style=flat
   :alt:   (downloads)
.. |docker_tabix| image:: https://quay.io/repository/biocontainers/tabix/status
   :target: https://quay.io/repository/biocontainers/tabix
.. _`tabix/tags`: https://quay.io/repository/biocontainers/tabix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tabix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tabix/README.html