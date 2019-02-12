:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chromhmm'
.. highlight: bash

chromhmm
========

.. conda:recipe:: chromhmm
   :replaces_section_title:

   ChromHMM is software for learning and characterizing chromatin states. ChromHMM can integrate multiple chromatin datasets such as ChIP\-seq data of various histone modifications to discover de novo the major re\-occuring combinatorial and spatial patterns of marks.

   :homepage: http://compbio.mit.edu/ChromHMM/
   :license: GPLv3
   :recipe: /`chromhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chromhmm/meta.yaml>`_
   :links: biotools: :biotools:`chromhmm`

   


.. conda:package:: chromhmm

   |downloads_chromhmm| |docker_chromhmm|

   :versions: 1.15-0, 1.14-0, 1.12-0, 1.11-0
   
   :depends openjdk: 
   
   :depends unzip: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chromhmm

   and update with::

      conda update chromhmm

   or use the docker container::

      docker pull quay.io/repository/biocontainers/chromhmm:<tag>

   (see `chromhmm/tags`_ for valid values for ``<tag>``)


.. |downloads_chromhmm| image:: https://img.shields.io/conda/dn/bioconda/chromhmm.svg?style=flat
   :alt:   (downloads)
.. |docker_chromhmm| image:: https://quay.io/repository/biocontainers/chromhmm/status
   :target: https://quay.io/repository/biocontainers/chromhmm
.. _`chromhmm/tags`: https://quay.io/repository/biocontainers/chromhmm?tab=tags






Notes
-----
ChromHMM comes with about 36MB of example data which is not included in the recipe. This recipe installs a script\, \"download\_chromhmm\_data.sh\"\, which downloads the data in the proper location\, and which can be run after ChromHMM has been installed.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chromhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chromhmm/README.html