:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'augustus'
.. highlight: bash

augustus
========

.. conda:recipe:: augustus
   :replaces_section_title:
   :noindex:

   AUGUSTUS is a gene prediction program for eukaryotes written by Mario Stanke and Oliver Keller. It can be used as an ab initio program\, which means it bases its prediction purely on the sequence. AUGUSTUS may also incorporate hints on the gene structure coming from extrinsic sources such as EST\, MS\/MS\, protein alignments and synthenic genomic alignments.

   :homepage: http://bioinf.uni-greifswald.de/augustus/
   :license: Other / Artistic Licence
   :recipe: /`augustus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augustus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/augustus/meta.yaml>`_
   :links: biotools: :biotools:`augustus`, doi: :doi:`10.1093/bioinformatics/btr010`, usegalaxy-eu: :usegalaxy-eu:`augustus`

   


.. conda:package:: augustus

   |downloads_augustus| |docker_augustus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.5.0-3</code>,  <code>3.5.0-2</code>,  <code>3.5.0-1</code>,  <code>3.5.0-0</code>,  <code>3.4.0-8</code>,  <code>3.4.0-7</code>,  <code>3.4.0-6</code>,  <code>3.4.0-5</code>,  <code>3.4.0-4</code>,  </span></summary>
      

      ``3.5.0-3``,  ``3.5.0-2``,  ``3.5.0-1``,  ``3.5.0-0``,  ``3.4.0-8``,  ``3.4.0-7``,  ``3.4.0-6``,  ``3.4.0-5``,  ``3.4.0-4``,  ``3.4.0-3``,  ``3.4.0-2``,  ``3.4.0-1``,  ``3.4.0-0``,  ``3.3.3-12``,  ``3.3.3-11``,  ``3.3.3-10``,  ``3.3.3-9``,  ``3.3.3-8``,  ``3.3.3-7``,  ``3.3.3-6``,  ``3.3.3-5``,  ``3.3.3-4``,  ``3.3.3-3``,  ``3.3.3-2``,  ``3.3.3-1``,  ``3.3.3-0``,  ``3.3.2-2``,  ``3.3.2-1``,  ``3.3.2-0``,  ``3.3-5``,  ``3.3-4``,  ``3.3-2``,  ``3.3-1``,  ``3.3-0``,  ``3.2.3-5``,  ``3.2.3-4``,  ``3.2.3-3``,  ``3.2.3-2``,  ``3.2.3-1``,  ``3.2.3-0``,  ``3.2.2-3``,  ``3.2.2-2``,  ``3.2.2-1``,  ``3.2.2-0``,  ``3.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bamtools: ``>=2.5.1,<2.5.2.0a0``
   :depends biopython: 
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends cdbtools: 
   :depends diamond: 
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends htslib: ``>=1.17,<1.18.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.41.2,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends lp_solve: 
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends perl-app-cpanminus: 
   :depends perl-dbi: 
   :depends perl-file-which: 
   :depends perl-module-build: ``0.4234.*``
   :depends perl-parallel-forkmanager: 
   :depends perl-scalar-list-utils: 
   :depends perl-yaml: 
   :depends sqlite: 
   :depends suitesparse: ``>=5.10.1,<6.0a0``
   :depends tar: 
   :depends ucsc-fatotwobit: 
   :depends ucsc-twobitinfo: 
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install augustus

   and update with::

      conda update augustus

   or use the docker container::

      docker pull quay.io/biocontainers/augustus:<tag>

   (see `augustus/tags`_ for valid values for ``<tag>``)


.. |downloads_augustus| image:: https://img.shields.io/conda/dn/bioconda/augustus.svg?style=flat
   :target: https://anaconda.org/bioconda/augustus
   :alt:   (downloads)
.. |docker_augustus| image:: https://quay.io/repository/biocontainers/augustus/status
   :target: https://quay.io/repository/biocontainers/augustus
.. _`augustus/tags`: https://quay.io/repository/biocontainers/augustus?tab=tags


.. raw:: html

    <script>
        var package = "augustus";
        var versions = ["3.5.0","3.5.0","3.5.0","3.5.0","3.4.0"];
    </script>





Notes
-----
Builds with sqlite support are currently only available on Linux due to compile issues with macOS.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/augustus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/augustus/README.html