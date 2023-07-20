:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-multiclust'
.. highlight: bash

bioconductor-multiclust
=======================

.. conda:recipe:: bioconductor-multiclust
   :replaces_section_title:
   :noindex:

   multiClust\: An R\-package for Identifying Biologically Relevant Clusters in Cancer Transcriptome Profiles

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/multiClust.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-multiclust <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiclust>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-multiclust/meta.yaml>`_
   :links: biotools: :biotools:`multiclust`, doi: :doi:`10.4137/cin.s38000`

   Clustering is carried out to identify patterns in transcriptomics profiles to determine clinically relevant subgroups of patients. Feature \(gene\) selection is a critical and an integral part of the process. Currently\, there are many feature selection and clustering methods to identify the relevant genes and perform clustering of samples. However\, choosing an appropriate methodology is difficult. In addition\, extensive feature selection methods have not been supported by the available packages. Hence\, we developed an integrative R\-package called multiClust that allows researchers to experiment with the choice of combination of methods for gene selection and clustering with ease. Using multiClust\, we identified the best performing clustering methodology in the context of clinical outcome. Our observations demonstrate that simple methods such as variance\-based ranking perform well on the majority of data sets\, provided that the appropriate number of genes is selected. However\, different gene ranking and selection methods remain relevant as no methodology works for all studies.


.. conda:package:: bioconductor-multiclust

   |downloads_bioconductor-multiclust| |docker_bioconductor-multiclust|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-1</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ctc: ``>=1.74.0,<1.75.0``
   :depends r-amap: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cluster: 
   :depends r-dendextend: 
   :depends r-mclust: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-multiclust

   and update with::

      conda update bioconductor-multiclust

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-multiclust:<tag>

   (see `bioconductor-multiclust/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-multiclust| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-multiclust.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-multiclust
   :alt:   (downloads)
.. |docker_bioconductor-multiclust| image:: https://quay.io/repository/biocontainers/bioconductor-multiclust/status
   :target: https://quay.io/repository/biocontainers/bioconductor-multiclust
.. _`bioconductor-multiclust/tags`: https://quay.io/repository/biocontainers/bioconductor-multiclust?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-multiclust";
        var versions = ["1.30.0","1.28.0","1.24.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-multiclust/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-multiclust/README.html