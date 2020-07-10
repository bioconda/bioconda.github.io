:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genblastg'
.. highlight: bash

genblastg
=========

.. conda:recipe:: genblastg
   :replaces_section_title:
   :noindex:

   genBlast is a program suite\, consisting of two programs\: genBlastA and genBlastG. genBlastA parses local alignments\, or high\-scoring segment pairs \(HSPs\) produced by local sequence alignment programs such as BLAST and WU\-BLAST and identify groups of HSPs.

   :homepage: http://genome.sfu.ca/genblast/download.html
   :license: GNU
   :recipe: /`genblastg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblastg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genblastg/meta.yaml>`_

   


.. conda:package:: genblastg

   |downloads_genblastg| |docker_genblastg|

   :versions:
      
      

      ``1.39-1``,  ``1.38-3``,  ``1.38-2``,  ``1.38-1``,  ``1.38-0``

      

   
   :depends blast: 
   :depends libgcc: 
   :depends zlib: ``1.2.11*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install genblastg

   and update with::

      conda update genblastg

   or use the docker container::

      docker pull quay.io/biocontainers/genblastg:<tag>

   (see `genblastg/tags`_ for valid values for ``<tag>``)


.. |downloads_genblastg| image:: https://img.shields.io/conda/dn/bioconda/genblastg.svg?style=flat
   :target: https://anaconda.org/bioconda/genblastg
   :alt:   (downloads)
.. |docker_genblastg| image:: https://quay.io/repository/biocontainers/genblastg/status
   :target: https://quay.io/repository/biocontainers/genblastg
.. _`genblastg/tags`: https://quay.io/repository/biocontainers/genblastg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genblastg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genblastg/README.html