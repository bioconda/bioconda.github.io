:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-variantannotation'
.. highlight: bash

bioconductor-variantannotation
==============================

.. conda:recipe:: bioconductor-variantannotation
   :replaces_section_title:
   :noindex:

   Annotation of Genetic Variants

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/VariantAnnotation.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-variantannotation <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantannotation>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-variantannotation/meta.yaml>`_
   :links: biotools: :biotools:`variantannotation`

   Annotate variants\, compute amino acid coding changes\, predict coding outcomes.


.. conda:package:: bioconductor-variantannotation

   |downloads_bioconductor-variantannotation| |docker_bioconductor-variantannotation|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.44.0-0</code>,  <code>1.40.0-2</code>,  <code>1.40.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  <code>1.36.0-1</code>,  <code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-0</code>,  </span></summary>
      

      ``1.44.0-0``,  ``1.40.0-2``,  ``1.40.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.1-0``,  ``1.30.0-0``,  ``1.28.3-0``,  ``1.26.1-0``,  ``1.24.1-0``,  ``1.22.3-0``,  ``1.20.3-0``,  ``1.18.7-0``,  ``1.16.4-0``,  ``1.16.3-0``,  ``1.16.1-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-biobase: ``>=2.58.0,<2.59.0``
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-bsgenome: ``>=1.66.0,<1.67.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-matrixgenerics: ``>=1.10.0,<1.11.0``
   :depends bioconductor-rhtslib: ``>=2.0.0,<2.1.0``
   :depends bioconductor-rsamtools: ``>=2.14.0,<2.15.0``
   :depends bioconductor-rtracklayer: ``>=1.58.0,<1.59.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends bioconductor-xvector: ``>=0.38.0,<0.39.0``
   :depends bioconductor-zlibbioc: ``>=1.44.0,<1.45.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-variantannotation

   and update with::

      conda update bioconductor-variantannotation

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-variantannotation:<tag>

   (see `bioconductor-variantannotation/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-variantannotation| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-variantannotation.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-variantannotation
   :alt:   (downloads)
.. |docker_bioconductor-variantannotation| image:: https://quay.io/repository/biocontainers/bioconductor-variantannotation/status
   :target: https://quay.io/repository/biocontainers/bioconductor-variantannotation
.. _`bioconductor-variantannotation/tags`: https://quay.io/repository/biocontainers/bioconductor-variantannotation?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-variantannotation";
        var versions = ["1.44.0","1.40.0","1.40.0","1.40.0","1.38.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-variantannotation/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-variantannotation/README.html