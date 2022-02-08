:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gridss'
.. highlight: bash

gridss
======

.. conda:recipe:: gridss
   :replaces_section_title:
   :noindex:

   GRIDSS\: the Genomic Rearrangement IDentification Software Suite

   :homepage: https://github.com/PapenfussLab/gridss
   :license: GPL / GPL-3.0-only
   :recipe: /`gridss <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gridss>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gridss/meta.yaml>`_
   :links: biotools: :biotools:`gridss`, doi: :doi:`10.1101/gr.222109.117`, doi: :doi:`10.1186/s13059-021-02423-x`

   


.. conda:package:: gridss

   |downloads_gridss| |docker_gridss|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.13.2-0</code>,  <code>2.13.1-0</code>,  <code>2.13.0-0</code>,  <code>2.12.2-0</code>,  <code>2.12.0-1</code>,  <code>2.12.0-0</code>,  <code>2.11.1-1</code>,  <code>2.11.1-0</code>,  <code>2.11.0-1</code>,  </span></summary>
      

      ``2.13.2-0``,  ``2.13.1-0``,  ``2.13.0-0``,  ``2.12.2-0``,  ``2.12.0-1``,  ``2.12.0-0``,  ``2.11.1-1``,  ``2.11.1-0``,  ``2.11.0-1``,  ``2.11.0-0``,  ``2.10.2-0``,  ``2.10.1-0``,  ``2.10.0-0``,  ``2.9.4-0``,  ``2.9.3-0``,  ``2.9.2-0``,  ``2.9.1-0``,  ``2.8.3-0``,  ``2.8.2-0``,  ``2.8.1-0``,  ``2.8.0-1``,  ``2.8.0-0``,  ``2.7.3-0``,  ``2.7.2-0``,  ``2.7.1-0``,  ``2.7.0-0``,  ``2.6.3-0``,  ``2.6.2-0``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.5.2-0``,  ``2.5.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.9.0-0``,  ``1.8.1-0``,  ``1.8.0-0``,  ``1.7.2-2``,  ``1.7.2-0``,  ``1.3.4-0``,  ``1.3.2-0``,  ``1.3.0-0``,  ``1.2.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends bc: 
   :depends bcftools: 
   :depends bioconductor-structuralvariantannotation: ``>=1.6``
   :depends bwa: ``>=0.7``
   :depends entrez-direct: 
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends kraken2: ``>=2.1``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends ncurses: ``>=6.2,<6.3.0a0``
   :depends openjdk: ``>=8``
   :depends r-argparser: 
   :depends r-base: ``>=4.0``
   :depends r-stringdist: 
   :depends r-testthat: 
   :depends r-tidyverse: 
   :depends repeatmasker: ``>=4.1.1``
   :depends samtools: ``>=1.14``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gridss

   and update with::

      conda update gridss

   or use the docker container::

      docker pull quay.io/biocontainers/gridss:<tag>

   (see `gridss/tags`_ for valid values for ``<tag>``)


.. |downloads_gridss| image:: https://img.shields.io/conda/dn/bioconda/gridss.svg?style=flat
   :target: https://anaconda.org/bioconda/gridss
   :alt:   (downloads)
.. |docker_gridss| image:: https://quay.io/repository/biocontainers/gridss/status
   :target: https://quay.io/repository/biocontainers/gridss
.. _`gridss/tags`: https://quay.io/repository/biocontainers/gridss?tab=tags


.. raw:: html

    <script>
        var package = "gridss";
        var versions = ["2.13.2","2.13.1","2.13.0","2.12.2","2.12.0"];
    </script>





Notes
-----
The package contains additional command line wrappers for the GRIDSS java\-based utilities.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gridss/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gridss/README.html