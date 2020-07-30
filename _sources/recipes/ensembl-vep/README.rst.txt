:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ensembl-vep'
.. highlight: bash

ensembl-vep
===========

.. conda:recipe:: ensembl-vep
   :replaces_section_title:
   :noindex:

   Ensembl Variant Effect Predictor

   :homepage: http://www.ensembl.org/info/docs/tools/vep/index.html
   :license: Apache-2.0
   :recipe: /`ensembl-vep <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-vep>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ensembl-vep/meta.yaml>`_

   The VEP determines the effect of your variants \(SNPs\, insertions\, deletions\, CNVs or structural variants\) on genes\, transcripts\, and protein sequence\, as well as regulatory regions.


.. conda:package:: ensembl-vep

   |downloads_ensembl-vep| |docker_ensembl-vep|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>100.4-0</code>,  <code>100.3-0</code>,  <code>100.2-0</code>,  <code>100.1-1</code>,  <code>100.1-0</code>,  <code>100.0-0</code>,  <code>99.2-0</code>,  <code>99.1-0</code>,  <code>99.0-0</code>,  </span></summary>
      

      ``100.4-0``,  ``100.3-0``,  ``100.2-0``,  ``100.1-1``,  ``100.1-0``,  ``100.0-0``,  ``99.2-0``,  ``99.1-0``,  ``99.0-0``,  ``98.3-0``,  ``98.2-0``,  ``98.1-0``,  ``98.0-1``,  ``98.0-0``,  ``97.4-0``,  ``97.3-0``,  ``97.2-0``,  ``97.1-0``,  ``97.0-0``,  ``96.3-0``,  ``96.0-0``,  ``95.3-0``,  ``95.2-0``,  ``95.1-0``,  ``95.0-1``,  ``95.0-0``,  ``94.5-0``,  ``94.4-0``,  ``94.0-0``,  ``93.4-0``,  ``93.2-0``,  ``92.4-0``,  ``92.3-0``,  ``92.0-1``,  ``91.3-1``,  ``91.3-0``,  ``91.2-0``,  ``91.1-0``,  ``91.0-0``,  ``90.10-0``,  ``90.9-1``,  ``90.7-1``,  ``90.7-0``,  ``90.6-0``,  ``90.5-0``,  ``90.3-0``,  ``90.1-1``,  ``90.1-0``,  ``89.7-0``,  ``89.4-0``,  ``89.1-2``,  ``89.1-1``,  ``88.10-1``,  ``88.10-0``,  ``88.9-2``,  ``88.9-1``,  ``88.9-0``,  ``88.8-0``,  ``88-0``

      
      .. raw:: html

         </details>
      

   
   :depends htslib: 
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-bio-db-hts: ``>=2.11``
   :depends perl-bioperl: ``>=1.7.2``
   :depends perl-dbd-mysql: 
   :depends perl-dbi: 
   :depends perl-io-compress: 
   :depends perl-json: 
   :depends perl-perlio-gzip: 
   :depends perl-sereal: 
   :depends perl-set-intervaltree: 
   :depends perl-text-csv: 
   :depends unzip: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ensembl-vep

   and update with::

      conda update ensembl-vep

   or use the docker container::

      docker pull quay.io/biocontainers/ensembl-vep:<tag>

   (see `ensembl-vep/tags`_ for valid values for ``<tag>``)


.. |downloads_ensembl-vep| image:: https://img.shields.io/conda/dn/bioconda/ensembl-vep.svg?style=flat
   :target: https://anaconda.org/bioconda/ensembl-vep
   :alt:   (downloads)
.. |docker_ensembl-vep| image:: https://quay.io/repository/biocontainers/ensembl-vep/status
   :target: https://quay.io/repository/biocontainers/ensembl-vep
.. _`ensembl-vep/tags`: https://quay.io/repository/biocontainers/ensembl-vep?tab=tags






Notes
-----
This package installs only the variant effect predictor \(VEP\) library
code. To install data libraries\, you can use the \'vep\_install\' command
installed along with it. For example\, to install the VEP library for human
GRCh38 to a directory

vep\_install \-a cf \-s homo\_sapiens \-y GRCh38 \-c \/output\/path\/to\/GRCh38\/vep \-\-CONVERT

\(note that vep\_install is renamed from INSTALL.pl
 to avoid having generic script names in the PATH\)

The \-\-CONVERT flag is not required but improves lookup speeds during
runs. See the VEP documentation for more details

http\:\/\/www.ensembl.org\/info\/docs\/tools\/vep\/script\/vep\_cache.html


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ensembl-vep/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ensembl-vep/README.html