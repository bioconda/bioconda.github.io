:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macse'
.. highlight: bash

macse
=====

.. conda:recipe:: macse
   :replaces_section_title:
   :noindex:

   MACSE\: Multiple Alignment of Coding SEquences Accounting for Frameshifts and Stop Codons.

   :homepage: https://bioweb.supagro.inra.fr/macse/
   :license: CeCILL 2.1
   :recipe: /`macse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macse/meta.yaml>`_
   :links: biotools: :biotools:`macse`, doi: :doi:`10.1093/molbev/msy159`

   MACSE aligns coding NT sequences with respect to their AA translation while allowing NT sequences to contain
   multiple frameshifts and\/or stop codons. MACSE is hence the first automatic solution to align protein\-coding
   gene datasets containing non\-functional sequences \(pseudogenes\) without disrupting the underlying codon
   structure. It has also proved useful in detecting undocumented frameshifts in public database sequences and
   in aligning next\-generation sequencing reads\/contigs against a reference coding sequence



.. conda:package:: macse

   |downloads_macse| |docker_macse|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends openjdk: ``>=1.5``
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install macse

   and update with::

      conda update macse

   or use the docker container::

      docker pull quay.io/biocontainers/macse:<tag>

   (see `macse/tags`_ for valid values for ``<tag>``)


.. |downloads_macse| image:: https://img.shields.io/conda/dn/bioconda/macse.svg?style=flat
   :target: https://anaconda.org/bioconda/macse
   :alt:   (downloads)
.. |docker_macse| image:: https://quay.io/repository/biocontainers/macse/status
   :target: https://quay.io/repository/biocontainers/macse
.. _`macse/tags`: https://quay.io/repository/biocontainers/macse?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macse/README.html