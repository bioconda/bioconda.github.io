:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'masurca'
.. highlight: bash

masurca
=======

.. conda:recipe:: masurca
   :replaces_section_title:
   :noindex:

   MaSuRCA \(Maryland Super\-Read Celera Assembler\) genome assembly software.
   MaSuRCA requires Illumina data\, and supports third\-generation PacBio\/Nanopore
   MinION reads for hybrid assembly.


   :homepage: http://masurca.blogspot.co.uk/
   :license: GPL / GPL-3.0-only
   :recipe: /`masurca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/masurca/meta.yaml>`_
   :links: biotools: :biotools:`masurca`, doi: :doi:`10.1093/bioinformatics/btt476`

   


.. conda:package:: masurca

   |downloads_masurca| |docker_masurca|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.0.9-0</code>,  <code>4.0.8-1</code>,  <code>4.0.8-0</code>,  <code>4.0.7-1</code>,  <code>4.0.7-0</code>,  <code>4.0.6-0</code>,  <code>3.4.2-1</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  </span></summary>
      

      ``4.0.9-0``,  ``4.0.8-1``,  ``4.0.8-0``,  ``4.0.7-1``,  ``4.0.7-0``,  ``4.0.6-0``,  ``3.4.2-1``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.9-0``,  ``3.3.8-0``,  ``3.3.7-0``,  ``3.3.6-0``,  ``3.3.5-0``,  ``3.3.4-0``,  ``3.3.3-0``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.9-0``,  ``3.2.8-0``,  ``3.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends grep: 
   :depends libgcc-ng: ``>=10.3.0``
   :depends libstdcxx-ng: ``>=10.3.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install masurca

   and update with::

      conda update masurca

   or use the docker container::

      docker pull quay.io/biocontainers/masurca:<tag>

   (see `masurca/tags`_ for valid values for ``<tag>``)


.. |downloads_masurca| image:: https://img.shields.io/conda/dn/bioconda/masurca.svg?style=flat
   :target: https://anaconda.org/bioconda/masurca
   :alt:   (downloads)
.. |docker_masurca| image:: https://quay.io/repository/biocontainers/masurca/status
   :target: https://quay.io/repository/biocontainers/masurca
.. _`masurca/tags`: https://quay.io/repository/biocontainers/masurca?tab=tags


.. raw:: html

    <script>
        var package = "masurca";
        var versions = ["4.0.9","4.0.8","4.0.8","4.0.7","4.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/masurca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/masurca/README.html