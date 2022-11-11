:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsreg'
.. highlight: bash

bioconductor-gsreg
==================

.. conda:recipe:: bioconductor-gsreg
   :replaces_section_title:
   :noindex:

   Gene Set Regulation \(GS\-Reg\)

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/GSReg.html
   :license: GPL-2
   :recipe: /`bioconductor-gsreg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsreg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsreg/meta.yaml>`_
   :links: biotools: :biotools:`gsreg`, doi: :doi:`10.4137/CIN.S14066`

   A package for gene set analysis based on the variability of expressions as well as a method to detect Alternative Splicing Events . It implements DIfferential RAnk Conservation \(DIRAC\) and gene set Expression Variation Analysis \(EVA\) methods. For detecting Differentially Spliced genes\, it provides an implementation of the Spliced\-EVA \(SEVA\).


.. conda:package:: bioconductor-gsreg

   |downloads_bioconductor-gsreg| |docker_bioconductor-gsreg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.32.0-0</code>,  <code>1.28.0-2</code>,  <code>1.28.0-1</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  </span></summary>
      

      ``1.32.0-0``,  ``1.28.0-2``,  ``1.28.0-1``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.60.0,<1.61.0``
   :depends bioconductor-genomicfeatures: ``>=1.50.0,<1.51.0``
   :depends bioconductor-homo.sapiens: ``>=1.3.0,<1.4.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.16.0,<3.17.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gsreg

   and update with::

      conda update bioconductor-gsreg

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsreg:<tag>

   (see `bioconductor-gsreg/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsreg| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsreg.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsreg
   :alt:   (downloads)
.. |docker_bioconductor-gsreg| image:: https://quay.io/repository/biocontainers/bioconductor-gsreg/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsreg
.. _`bioconductor-gsreg/tags`: https://quay.io/repository/biocontainers/bioconductor-gsreg?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsreg";
        var versions = ["1.32.0","1.28.0","1.28.0","1.28.0","1.26.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsreg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsreg/README.html