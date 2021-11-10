:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-aspli'
.. highlight: bash

bioconductor-aspli
==================

.. conda:recipe:: bioconductor-aspli
   :replaces_section_title:
   :noindex:

   Analysis of Alternative Splicing Using RNA\-Seq

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/ASpli.html
   :license: GPL
   :recipe: /`bioconductor-aspli <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspli>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-aspli/meta.yaml>`_
   :links: biotools: :biotools:`aspli`, doi: :doi:`10.1038/nmeth.3252`

   Integrative pipeline for the analysis of alternative splicing using RNAseq.


.. conda:package:: bioconductor-aspli

   |downloads_bioconductor-aspli| |docker_bioconductor-aspli|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.4.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-1</code>,  <code>2.0.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  </span></summary>
      

      ``2.4.0-0``,  ``2.2.0-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-biocstyle: ``>=2.22.0,<2.23.0``
   :depends bioconductor-edger: ``>=3.36.0,<3.37.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicfeatures: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-gviz: ``>=1.38.0,<1.39.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-data.table: 
   :depends r-dt: 
   :depends r-htmltools: 
   :depends r-igraph: 
   :depends r-mass: 
   :depends r-pbmcapply: 
   :depends r-tidyr: 
   :depends r-upsetr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-aspli

   and update with::

      conda update bioconductor-aspli

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-aspli:<tag>

   (see `bioconductor-aspli/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-aspli| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-aspli.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-aspli
   :alt:   (downloads)
.. |docker_bioconductor-aspli| image:: https://quay.io/repository/biocontainers/bioconductor-aspli/status
   :target: https://quay.io/repository/biocontainers/bioconductor-aspli
.. _`bioconductor-aspli/tags`: https://quay.io/repository/biocontainers/bioconductor-aspli?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-aspli";
        var versions = ["2.4.0","2.2.0","2.0.0","2.0.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-aspli/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-aspli/README.html