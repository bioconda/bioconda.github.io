:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-r3cpet'
.. highlight: bash

bioconductor-r3cpet
===================

.. conda:recipe:: bioconductor-r3cpet
   :replaces_section_title:
   :noindex:

   3CPET\: Finding Co\-factor Complexes in Chia\-PET experiment using a Hierarchical Dirichlet Process

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/R3CPET.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-r3cpet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cpet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-r3cpet/meta.yaml>`_

   The package provides a method to infer the set of proteins that are more probably to work together to maintain chormatin interaction given a ChIA\-PET experiment results.


.. conda:package:: bioconductor-r3cpet

   |downloads_bioconductor-r3cpet| |docker_bioconductor-r3cpet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.26.0-3</code>,  <code>1.26.0-2</code>,  <code>1.26.0-1</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.26.0-3``,  ``1.26.0-2``,  ``1.26.0-1``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.44.0,<0.45.0``
   :depends bioconductor-genomeinfodb: ``>=1.34.0,<1.35.0``
   :depends bioconductor-genomicranges: ``>=1.50.0,<1.51.0``
   :depends bioconductor-ggbio: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-clvalid: 
   :depends r-data.table: 
   :depends r-ggplot2: 
   :depends r-hmisc: 
   :depends r-igraph: 
   :depends r-pheatmap: 
   :depends r-rcpp: ``>=0.10.4``
   :depends r-rcurl: 
   :depends r-reshape2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-r3cpet

   and update with::

      conda update bioconductor-r3cpet

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-r3cpet:<tag>

   (see `bioconductor-r3cpet/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-r3cpet| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-r3cpet.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-r3cpet
   :alt:   (downloads)
.. |docker_bioconductor-r3cpet| image:: https://quay.io/repository/biocontainers/bioconductor-r3cpet/status
   :target: https://quay.io/repository/biocontainers/bioconductor-r3cpet
.. _`bioconductor-r3cpet/tags`: https://quay.io/repository/biocontainers/bioconductor-r3cpet?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-r3cpet";
        var versions = ["1.30.0","1.26.0","1.26.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-r3cpet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-r3cpet/README.html