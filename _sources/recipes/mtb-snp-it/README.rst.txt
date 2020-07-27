:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtb-snp-it'
.. highlight: bash

mtb-snp-it
==========

.. conda:recipe:: mtb-snp-it
   :replaces_section_title:
   :noindex:

   SNP\-IT\: Whole genome SNP based identification of members of the Mycobacterium tuberculosis complex.

   :homepage: https://github.com/samlipworth/snpit
   :license: MIT
   :recipe: /`mtb-snp-it <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtb-snp-it>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtb-snp-it/meta.yaml>`_
   :links: doi: :doi:`10.3201/eid2503.180894`

   Whole genome SNP based identification of members of the Mycobacterium tuberculosis complex. 
   Based on code originally written by Samuel Lipworth and turned into a package by Philip Fowler.

   SNP\-IT allows rapid Mycobacterial speciation of VCF or FASTA files aligned to NC000962 \(H37rV\).



.. conda:package:: mtb-snp-it

   |downloads_mtb-snp-it| |docker_mtb-snp-it|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``,  ``0.1.0-0``

      

   
   :depends biopython: 
   :depends python: 
   :depends pyvcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mtb-snp-it

   and update with::

      conda update mtb-snp-it

   or use the docker container::

      docker pull quay.io/biocontainers/mtb-snp-it:<tag>

   (see `mtb-snp-it/tags`_ for valid values for ``<tag>``)


.. |downloads_mtb-snp-it| image:: https://img.shields.io/conda/dn/bioconda/mtb-snp-it.svg?style=flat
   :target: https://anaconda.org/bioconda/mtb-snp-it
   :alt:   (downloads)
.. |docker_mtb-snp-it| image:: https://quay.io/repository/biocontainers/mtb-snp-it/status
   :target: https://quay.io/repository/biocontainers/mtb-snp-it
.. _`mtb-snp-it/tags`: https://quay.io/repository/biocontainers/mtb-snp-it?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtb-snp-it/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtb-snp-it/README.html