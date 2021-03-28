:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chexmix'
.. highlight: bash

chexmix
=======

.. conda:recipe:: chexmix
   :replaces_section_title:
   :noindex:

   ChExMix aims to characterize protein\-DNA binding subtypes in ChIP\-exo experiments. ChExMix assumes that different regulatory complexes will result in different protein\-DNA crosslinking signatures in ChIP\-exo data\, and thus analysis of ChIP\-exo sequencing tag patterns should enable detection of multiple protein\-DNA binding modes for a given regulatory protein. ChExMix uses a mixture modeling framework to probabilistically model the genomic locations and subtype membership of protein\-DNA binding events\, leveraging both ChIP\-exo tag enrichment patterns and DNA sequence information. In doing so\, ChExMix offers a more principled and robust approach to characterizing binding subtypes than simply clustering binding events using motif information.

   :homepage: http://mahonylab.org/software/chexmix/
   :license: MIT
   :recipe: /`chexmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chexmix/meta.yaml>`_

   


.. conda:package:: chexmix

   |downloads_chexmix| |docker_chexmix|

   :versions:
      
      

      ``0.45-0``,  ``0.5-1``,  ``0.5-0``,  ``0.4-0``

      

   
   :depends meme: ``>=4.11.2``
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install chexmix

   and update with::

      conda update chexmix

   or use the docker container::

      docker pull quay.io/biocontainers/chexmix:<tag>

   (see `chexmix/tags`_ for valid values for ``<tag>``)


.. |downloads_chexmix| image:: https://img.shields.io/conda/dn/bioconda/chexmix.svg?style=flat
   :target: https://anaconda.org/bioconda/chexmix
   :alt:   (downloads)
.. |docker_chexmix| image:: https://quay.io/repository/biocontainers/chexmix/status
   :target: https://quay.io/repository/biocontainers/chexmix
.. _`chexmix/tags`: https://quay.io/repository/biocontainers/chexmix?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chexmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chexmix/README.html