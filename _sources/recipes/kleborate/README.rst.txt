:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kleborate'
.. highlight: bash

kleborate
=========

.. conda:recipe:: kleborate
   :replaces_section_title:
   :noindex:

   A tool to screen Klebiella genome assembiles for\: MLST sequence type\, species \(e.g. K. pneumoniae\, K. quasipneumoniae\, K. variicola\, etc.\)\, ICEKp associated virulence loci\: yersiniabactin \(ybt\)\, colibactin \(clb\)\, virulence plasmid associated loci\: salmochelin \(iro\)\, aerobactin \(iuc\)\, hypermucoidy \(rmpA\, rmpA2\)\, antimicrobial resistance genes\, including quinolone resistance SNPs and colistin resistance truncations\, and K \(capsule\) and O antigen \(LPS\) serotype prediction\, via wzi alleles and Kaptive.

   :homepage: https://github.com/katholt/Kleborate
   :license: GPL3 / GNU General Public License v3 or later (GPLv3+)
   :recipe: /`kleborate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kleborate/meta.yaml>`_

   


.. conda:package:: kleborate

   |downloads_kleborate| |docker_kleborate|

   :versions:
      
      

      ``1.0.0-0``,  ``0.3.0-0``

      

   
   :depends biopython: 
   :depends blast: ``>=2.2.31``
   :depends mash: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kleborate

   and update with::

      conda update kleborate

   or use the docker container::

      docker pull quay.io/biocontainers/kleborate:<tag>

   (see `kleborate/tags`_ for valid values for ``<tag>``)


.. |downloads_kleborate| image:: https://img.shields.io/conda/dn/bioconda/kleborate.svg?style=flat
   :target: https://anaconda.org/bioconda/kleborate
   :alt:   (downloads)
.. |docker_kleborate| image:: https://quay.io/repository/biocontainers/kleborate/status
   :target: https://quay.io/repository/biocontainers/kleborate
.. _`kleborate/tags`: https://quay.io/repository/biocontainers/kleborate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kleborate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kleborate/README.html