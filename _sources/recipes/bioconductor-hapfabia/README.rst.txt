:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hapfabia'
.. highlight: bash

bioconductor-hapfabia
=====================

.. conda:recipe:: bioconductor-hapfabia
   :replaces_section_title:
   :noindex:

   hapFabia\: Identification of very short segments of identity by descent \(IBD\) characterized by rare variants in large sequencing data

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/hapFabia.html
   :license: LGPL (>= 2.1)
   :recipe: /`bioconductor-hapfabia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hapfabia/meta.yaml>`_
   :links: biotools: :biotools:`hapfabia`

   A package to identify very short IBD segments in large sequencing data by FABIA biclustering. Two haplotypes are identical by descent \(IBD\) if they share a segment that both inherited from a common ancestor. Current IBD methods reliably detect long IBD segments because many minor alleles in the segment are concordant between the two haplotypes. However\, many cohort studies contain unrelated individuals which share only short IBD segments. This package provides software to identify short IBD segments in sequencing data. Knowledge of short IBD segments are relevant for phasing of genotyping data\, association studies\, and for population genetics\, where they shed light on the evolutionary history of humans. The package supports VCF formats\, is based on sparse matrix operations\, and provides visualization of haplotype clusters in different formats.


.. conda:package:: bioconductor-hapfabia

   |downloads_bioconductor-hapfabia| |docker_bioconductor-hapfabia|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.36.0-0</code>,  <code>1.34.0-0</code>,  <code>1.32.0-1</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-1</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  </span></summary>
      

      ``1.36.0-0``,  ``1.34.0-0``,  ``1.32.0-1``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-fabia: ``>=2.40.0,<2.41.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hapfabia

   and update with::

      conda update bioconductor-hapfabia

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hapfabia:<tag>

   (see `bioconductor-hapfabia/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hapfabia| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hapfabia.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hapfabia
   :alt:   (downloads)
.. |docker_bioconductor-hapfabia| image:: https://quay.io/repository/biocontainers/bioconductor-hapfabia/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hapfabia
.. _`bioconductor-hapfabia/tags`: https://quay.io/repository/biocontainers/bioconductor-hapfabia?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hapfabia";
        var versions = ["1.36.0","1.34.0","1.32.0","1.32.0","1.30.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hapfabia/README.html