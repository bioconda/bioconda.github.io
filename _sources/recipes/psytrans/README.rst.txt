:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psytrans'
.. highlight: bash

psytrans
========

.. conda:recipe:: psytrans
   :replaces_section_title:
   :noindex:

   psytrans.py \- Parasite \& Symbiont Transcriptome Separation

   :homepage: https://github.com/rivera10/psytrans
   :license: GPLv3
   :recipe: /`psytrans <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psytrans>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psytrans/meta.yaml>`_

   psytrans.py separates the sequences of a host species from those of its main symbiont\(s\) or parasite\(s\) based on Support Vector Machine classification.
   The program takes as input a file in fasta format with the sequences to be classified.
   The program also requires a file with sequences of a species related to the host\, and a file with sequences related to the symbiont \(or parasite\).
   The queries will be compared to these two files using BLASTX.
   Alternatively\, the user can provide the output of pre\-computed BLASTX searches \(in tabular format\: \-outfmt 6 or 7\).
   The classification is then carried out using the command line tools from libsvm.



.. conda:package:: psytrans

   |downloads_psytrans| |docker_psytrans|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends blast: ``>=2.2.31``
   :depends libsvm: ``>=3.16``
   :depends python: ``>3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install psytrans

   and update with::

      conda update psytrans

   or use the docker container::

      docker pull quay.io/biocontainers/psytrans:<tag>

   (see `psytrans/tags`_ for valid values for ``<tag>``)


.. |downloads_psytrans| image:: https://img.shields.io/conda/dn/bioconda/psytrans.svg?style=flat
   :target: https://anaconda.org/bioconda/psytrans
   :alt:   (downloads)
.. |docker_psytrans| image:: https://quay.io/repository/biocontainers/psytrans/status
   :target: https://quay.io/repository/biocontainers/psytrans
.. _`psytrans/tags`: https://quay.io/repository/biocontainers/psytrans?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psytrans/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psytrans/README.html