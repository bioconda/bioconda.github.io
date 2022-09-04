:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-phastcons100way.ucsc.hg19'
.. highlight: bash

bioconductor-phastcons100way.ucsc.hg19
======================================

.. conda:recipe:: bioconductor-phastcons100way.ucsc.hg19
   :replaces_section_title:
   :noindex:

   UCSC phastCons conservation scores for hg19

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/phastCons100way.UCSC.hg19.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-phastcons100way.ucsc.hg19 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg19>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-phastcons100way.ucsc.hg19/meta.yaml>`_

   Store UCSC phastCons conservation scores for the human genome \(hg19\) calculated from multiple alignments with other 99 vertebrate species.


.. conda:package:: bioconductor-phastcons100way.ucsc.hg19

   |downloads_bioconductor-phastcons100way.ucsc.hg19| |docker_bioconductor-phastcons100way.ucsc.hg19|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.7.2-11</code>,  <code>3.7.2-10</code>,  <code>3.7.2-9</code>,  <code>3.7.2-8</code>,  <code>3.7.2-7</code>,  <code>3.7.2-6</code>,  <code>3.7.2-5</code>,  <code>3.7.2-4</code>,  <code>3.7.2-2</code>,  </span></summary>
      

      ``3.7.2-11``,  ``3.7.2-10``,  ``3.7.2-9``,  ``3.7.2-8``,  ``3.7.2-7``,  ``3.7.2-6``,  ``3.7.2-5``,  ``3.7.2-4``,  ``3.7.2-2``,  ``3.7.2-1``,  ``3.7.2-0``,  ``3.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomeinfodb: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-genomicscores: ``>=2.6.0,<2.7.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-phastcons100way.ucsc.hg19

   and update with::

      conda update bioconductor-phastcons100way.ucsc.hg19

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-phastcons100way.ucsc.hg19:<tag>

   (see `bioconductor-phastcons100way.ucsc.hg19/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-phastcons100way.ucsc.hg19| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-phastcons100way.ucsc.hg19.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-phastcons100way.ucsc.hg19
   :alt:   (downloads)
.. |docker_bioconductor-phastcons100way.ucsc.hg19| image:: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg19/status
   :target: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg19
.. _`bioconductor-phastcons100way.ucsc.hg19/tags`: https://quay.io/repository/biocontainers/bioconductor-phastcons100way.ucsc.hg19?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-phastcons100way.ucsc.hg19";
        var versions = ["3.7.2","3.7.2","3.7.2","3.7.2","3.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-phastcons100way.ucsc.hg19/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-phastcons100way.ucsc.hg19/README.html