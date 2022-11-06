:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-mixkernel'
.. highlight: bash

r-mixkernel
===========

.. conda:recipe:: r-mixkernel
   :replaces_section_title:
   :noindex:

   Kernel\-based methods are powerful methods for integrating  heterogeneous types of data. mixKernel aims at providing methods to combine kernel for unsupervised exploratory analysis. Different solutions are  provided to compute a meta\-kernel\, in a consensus way or in a way that  best preserves the original topology of the data. mixKernel also integrates kernel PCA to visualize similarities between samples in a non linear space and from the multiple source point of view. Functions to assess and display important variables are also provided in the package. Jerome Mariette and  Nathalie Villa\-Vialaneix \(2017\) \<doi\:10.1093\/bioinformatics\/btx682\>.

   :homepage: https://CRAN.R-project.org/package=mixKernel
   :license: GPL3 / GPL (>= 2)
   :recipe: /`r-mixkernel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixkernel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-mixkernel/meta.yaml>`_

   


.. conda:package:: r-mixkernel

   |downloads_r-mixkernel| |docker_r-mixkernel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8-1</code>,  <code>0.8-0</code>,  <code>0.7-0</code>,  <code>0.6-0</code>,  <code>0.5-2</code>,  <code>0.5-1</code>,  <code>0.5-0</code>,  <code>0.4-2</code>,  <code>0.4-1</code>,  </span></summary>
      

      ``0.8-1``,  ``0.8-0``,  ``0.7-0``,  ``0.6-0``,  ``0.5-2``,  ``0.5-1``,  ``0.5-0``,  ``0.4-2``,  ``0.4-1``,  ``0.4-0``,  ``0.3-1``,  ``0.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-mixomics: 
   :depends bioconductor-phyloseq: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-corrplot: 
   :depends r-ggplot2: 
   :depends r-ldrtools: 
   :depends r-markdown: 
   :depends r-matrix: 
   :depends r-psych: 
   :depends r-quadprog: 
   :depends r-reticulate: ``>=1.14``
   :depends r-vegan: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-mixkernel

   and update with::

      conda update r-mixkernel

   or use the docker container::

      docker pull quay.io/biocontainers/r-mixkernel:<tag>

   (see `r-mixkernel/tags`_ for valid values for ``<tag>``)


.. |downloads_r-mixkernel| image:: https://img.shields.io/conda/dn/bioconda/r-mixkernel.svg?style=flat
   :target: https://anaconda.org/bioconda/r-mixkernel
   :alt:   (downloads)
.. |docker_r-mixkernel| image:: https://quay.io/repository/biocontainers/r-mixkernel/status
   :target: https://quay.io/repository/biocontainers/r-mixkernel
.. _`r-mixkernel/tags`: https://quay.io/repository/biocontainers/r-mixkernel?tab=tags


.. raw:: html

    <script>
        var package = "r-mixkernel";
        var versions = ["0.8","0.8","0.7","0.6","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-mixkernel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-mixkernel/README.html