:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blast'
.. highlight: bash

blast
=====

.. conda:recipe:: blast
   :replaces_section_title:
   :noindex:

   BLAST\+ is a new suite of BLAST tools that utilizes the NCBI C\+\+ Toolkit.

   :homepage: http://blast.ncbi.nlm.nih.gov/Blast.cgi?PAGE_TYPE=BlastDocs
   :license: Public Domain
   :recipe: /`blast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blast/meta.yaml>`_
   :links: biotools: :biotools:`blast`, doi: :doi:`10.1016/S0022-2836(05)80360-2`, usegalaxy-eu: :usegalaxy-eu:`ncbi_blastx_wrapper`

   


.. conda:package:: blast

   |downloads_blast| |docker_blast|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.1-2</code>,  <code>2.10.1-1</code>,  <code>2.10.1-0</code>,  <code>2.9.0-7</code>,  <code>2.9.0-6</code>,  <code>2.9.0-5</code>,  <code>2.9.0-4</code>,  <code>2.9.0-3</code>,  <code>2.9.0-2</code>,  </span></summary>
      

      ``2.10.1-2``,  ``2.10.1-1``,  ``2.10.1-0``,  ``2.9.0-7``,  ``2.9.0-6``,  ``2.9.0-5``,  ``2.9.0-4``,  ``2.9.0-3``,  ``2.9.0-2``,  ``2.9.0-1``,  ``2.9.0-0``,  ``2.7.1-6``,  ``2.7.1-5``,  ``2.7.1-3``,  ``2.7.1-2``,  ``2.7.1-1``,  ``2.6.0-2``,  ``2.6.0-1``,  ``2.6.0-0``,  ``2.5.0-3``,  ``2.5.0-2``,  ``2.5.0-1``,  ``2.2.31-5``,  ``2.2.31-4``,  ``2.2.31-3``,  ``2.2.31-2``,  ``2.2.31-1``,  ``2.2.21-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends entrez-direct: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends pcre: ``>=8.44,<9.0a0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-archive-tar: 
   :depends perl-json: 
   :depends perl-list-moreutils: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install blast

   and update with::

      conda update blast

   or use the docker container::

      docker pull quay.io/biocontainers/blast:<tag>

   (see `blast/tags`_ for valid values for ``<tag>``)


.. |downloads_blast| image:: https://img.shields.io/conda/dn/bioconda/blast.svg?style=flat
   :target: https://anaconda.org/bioconda/blast
   :alt:   (downloads)
.. |docker_blast| image:: https://quay.io/repository/biocontainers/blast/status
   :target: https://quay.io/repository/biocontainers/blast
.. _`blast/tags`: https://quay.io/repository/biocontainers/blast?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blast/README.html