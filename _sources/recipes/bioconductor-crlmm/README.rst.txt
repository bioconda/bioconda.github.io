:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-crlmm'
.. highlight: bash

bioconductor-crlmm
==================

.. conda:recipe:: bioconductor-crlmm
   :replaces_section_title:
   :noindex:

   Genotype Calling \(CRLMM\) and Copy Number Analysis tool for Affymetrix SNP 5.0 and 6.0 and Illumina arrays

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/crlmm.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-crlmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crlmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-crlmm/meta.yaml>`_
   :links: biotools: :biotools:`crlmm`

   Faster implementation of CRLMM specific to SNP 5.0 and 6.0 arrays\, as well as a copy number tool specific to 5.0\, 6.0\, and Illumina platforms.


.. conda:package:: bioconductor-crlmm

   |downloads_bioconductor-crlmm| |docker_bioconductor-crlmm|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-1</code>,  <code>1.48.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.40.0-0</code>,  <code>1.38.0-0</code>,  </span></summary>
      

      ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-1``,  ``1.48.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-affyio: ``>=1.64.0,<1.65.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-biocgenerics: ``>=0.40.0,<0.41.0``
   :depends bioconductor-illuminaio: ``>=0.36.0,<0.37.0``
   :depends bioconductor-limma: ``>=3.50.0,<3.51.0``
   :depends bioconductor-oligoclasses: ``>=1.56.0,<1.57.0``
   :depends bioconductor-preprocesscore: ``>=1.56.0,<1.57.0``
   :depends libblas: ``>=3.8.0,<4.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends liblapack: ``>=3.8.0,<4.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-beanplot: 
   :depends r-ellipse: 
   :depends r-ff: 
   :depends r-foreach: 
   :depends r-lattice: 
   :depends r-matrixstats: 
   :depends r-mvtnorm: 
   :depends r-rcppeigen: ``>=0.3.1.2.1``
   :depends r-vgam: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-crlmm

   and update with::

      conda update bioconductor-crlmm

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-crlmm:<tag>

   (see `bioconductor-crlmm/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-crlmm| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-crlmm.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-crlmm
   :alt:   (downloads)
.. |docker_bioconductor-crlmm| image:: https://quay.io/repository/biocontainers/bioconductor-crlmm/status
   :target: https://quay.io/repository/biocontainers/bioconductor-crlmm
.. _`bioconductor-crlmm/tags`: https://quay.io/repository/biocontainers/bioconductor-crlmm?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-crlmm";
        var versions = ["1.52.0","1.50.0","1.48.0","1.48.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-crlmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-crlmm/README.html