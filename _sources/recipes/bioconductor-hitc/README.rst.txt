:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hitc'
.. highlight: bash

bioconductor-hitc
=================

.. conda:recipe:: bioconductor-hitc
   :replaces_section_title:
   :noindex:

   High Throughput Chromosome Conformation Capture analysis

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/HiTC.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-hitc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hitc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hitc/meta.yaml>`_
   :links: biotools: :biotools:`hitc`

   The HiTC package was developed to explore high\-throughput \'C\' data such as 5C or Hi\-C. Dedicated R classes as well as standard methods for quality controls\, normalization\, visualization\, and further analysis are also provided.


.. conda:package:: bioconductor-hitc

   |downloads_bioconductor-hitc| |docker_bioconductor-hitc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.42.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.34.0-1</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-1</code>,  <code>1.26.0-0</code>,  </span></summary>
      

      ``1.42.0-0``,  ``1.38.0-0``,  ``1.36.0-0``,  ``1.34.0-1``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-matrix: 
   :depends r-rcolorbrewer: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hitc

   and update with::

      conda update bioconductor-hitc

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hitc:<tag>

   (see `bioconductor-hitc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hitc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hitc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hitc
   :alt:   (downloads)
.. |docker_bioconductor-hitc| image:: https://quay.io/repository/biocontainers/bioconductor-hitc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hitc
.. _`bioconductor-hitc/tags`: https://quay.io/repository/biocontainers/bioconductor-hitc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hitc";
        var versions = ["1.42.0","1.38.0","1.36.0","1.34.0","1.34.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hitc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hitc/README.html