:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hiannotator'
.. highlight: bash

bioconductor-hiannotator
========================

.. conda:recipe:: bioconductor-hiannotator
   :replaces_section_title:
   :noindex:

   Functions for annotating GRanges objects

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/hiAnnotator.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-hiannotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiannotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hiannotator/meta.yaml>`_
   :links: biotools: :biotools:`hiannotator`, doi: :doi:`10.1038/nmeth.3252`

   hiAnnotator contains set of functions which allow users to annotate a GRanges object with custom set of annotations. The basic philosophy of this package is to take two GRanges objects \(query \& subject\) with common set of seqnames \(i.e. chromosomes\) and return associated annotation per seqnames and rows from the query matching seqnames and rows from the subject \(i.e. genes or cpg islands\). The package comes with three types of annotation functions which calculates if a position from query is\: within a feature\, near a feature\, or count features in defined window sizes. Moreover\, each function is equipped with parallel backend to utilize the foreach package. In addition\, the package is equipped with wrapper functions\, which finds appropriate columns needed to make a GRanges object from a common data frame.


.. conda:package:: bioconductor-hiannotator

   |downloads_bioconductor-hiannotator| |docker_bioconductor-hiannotator|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.16.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.11.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dplyr: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-iterators: 
   :depends r-scales: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hiannotator

   and update with::

      conda update bioconductor-hiannotator

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hiannotator:<tag>

   (see `bioconductor-hiannotator/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hiannotator| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hiannotator.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hiannotator
   :alt:   (downloads)
.. |docker_bioconductor-hiannotator| image:: https://quay.io/repository/biocontainers/bioconductor-hiannotator/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hiannotator
.. _`bioconductor-hiannotator/tags`: https://quay.io/repository/biocontainers/bioconductor-hiannotator?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hiannotator";
        var versions = ["1.32.0","1.28.0","1.26.0","1.24.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hiannotator/README.html