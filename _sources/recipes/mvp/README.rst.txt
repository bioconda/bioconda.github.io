:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mvp'
.. highlight: bash

mvp
===

.. conda:recipe:: mvp
   :replaces_section_title:

   detect creation\/destruction of sequence motifs as a result of mutations

   :homepage: https://gitlab.com/LPCDRP/motif-variants
   :license: GPLv3+
   :recipe: /`mvp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mvp/meta.yaml>`_

   Sequence variation may cause the appearance or disappearance of certain motifs. Since motifs can be recognition sites for biological functions such as regulation or DNA modification\, their gain and loss can have additional consequences. Using a list of variants in variant call format\, the corresponding reference sequence\, and a set of motifs to search for\,mvp \(motif\-variant probe\) identifies variants responsible for changing the number of occurrences of these motifs in the sequence. mvp can process both nucleotide and amino acid sequences.


.. conda:package:: mvp

   |downloads_mvp| |docker_mvp|

   :versions: 0.4.3-1, 0.4.3-0, 0.4.1-1, 0.4.1-0
   
   :depends biopython: 
   
   :depends pysam: >=0.8.4
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mvp

   and update with::

      conda update mvp

   or use the docker container::

      docker pull quay.io/biocontainers/mvp:<tag>

   (see `mvp/tags`_ for valid values for ``<tag>``)


.. |downloads_mvp| image:: https://img.shields.io/conda/dn/bioconda/mvp.svg?style=flat
   :alt:   (downloads)
.. |docker_mvp| image:: https://quay.io/repository/biocontainers/mvp/status
   :target: https://quay.io/repository/biocontainers/mvp
.. _`mvp/tags`: https://quay.io/repository/biocontainers/mvp?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mvp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mvp/README.html