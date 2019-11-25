:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'desalt'
.. highlight: bash

desalt
======

.. conda:recipe:: desalt
   :replaces_section_title:

   De Bruijn graph\-based Spliced Aligner for Long Transcriptome reads

   :homepage: https://github.com/ydLiu-HIT/
   :license: MIT
   :recipe: /`desalt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desalt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/desalt/meta.yaml>`_

   


.. conda:package:: desalt

   |downloads_desalt| |docker_desalt|

   :versions: 1.5.1-0, 1.5-0, 1.4-1, 1.4-0, 1.3-0
   
   :depends libgcc-ng: >=7.3.0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install desalt

   and update with::

      conda update desalt

   or use the docker container::

      docker pull quay.io/biocontainers/desalt:<tag>

   (see `desalt/tags`_ for valid values for ``<tag>``)


.. |downloads_desalt| image:: https://img.shields.io/conda/dn/bioconda/desalt.svg?style=flat
   :target: https://anaconda.org/bioconda/desalt
   :alt:   (downloads)
.. |docker_desalt| image:: https://quay.io/repository/biocontainers/desalt/status
   :target: https://quay.io/repository/biocontainers/desalt
.. _`desalt/tags`: https://quay.io/repository/biocontainers/desalt?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/desalt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/desalt/README.html