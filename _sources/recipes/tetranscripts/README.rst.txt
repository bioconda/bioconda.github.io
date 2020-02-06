:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tetranscripts'
.. highlight: bash

tetranscripts
=============

.. conda:recipe:: tetranscripts
   :replaces_section_title:

   A package for including transposable elements in differential enrichment analysis of sequencing datasets.

   :homepage: http://hammelllab.labsites.cshl.edu/software#TEToolkit
   :license: GPL3 / GPL3
   :recipe: /`tetranscripts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetranscripts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tetranscripts/meta.yaml>`_

   


.. conda:package:: tetranscripts

   |downloads_tetranscripts| |docker_tetranscripts|

   :versions: 2.1.4-0, 2.1.3-0
   
   :depends bioconductor-deseq: >=1.10
   :depends pysam: >=0.9
   :depends python: <3
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tetranscripts

   and update with::

      conda update tetranscripts

   or use the docker container::

      docker pull quay.io/biocontainers/tetranscripts:<tag>

   (see `tetranscripts/tags`_ for valid values for ``<tag>``)


.. |downloads_tetranscripts| image:: https://img.shields.io/conda/dn/bioconda/tetranscripts.svg?style=flat
   :target: https://anaconda.org/bioconda/tetranscripts
   :alt:   (downloads)
.. |docker_tetranscripts| image:: https://quay.io/repository/biocontainers/tetranscripts/status
   :target: https://quay.io/repository/biocontainers/tetranscripts
.. _`tetranscripts/tags`: https://quay.io/repository/biocontainers/tetranscripts?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tetranscripts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tetranscripts/README.html