:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterprofiler'
.. highlight: bash

bioconductor-clusterprofiler
============================

.. conda:recipe:: bioconductor-clusterprofiler
   :replaces_section_title:
   :noindex:

   A universal enrichment tool for interpreting omics data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/clusterProfiler.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler/meta.yaml>`_
   :links: biotools: :biotools:`clusterprofiler`

   This package supports functional characteristics of both coding and non\-coding genomics data for thousands of species with up\-to\-date gene annotation. It provides a univeral interface for gene functional annotation from a variety of sources and thus can be applied in diverse scenarios. It provides a tidy interface to access\, manipulate\, and visualize enrichment results to help users achieve efficient data interpretation. Datasets obtained from multiple treatments and time points can be analyzed and compared in a single run\, easily revealing functional consensus and differences among distinct conditions.


.. conda:package:: bioconductor-clusterprofiler

   |downloads_bioconductor-clusterprofiler| |docker_bioconductor-clusterprofiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.8.1-0</code>,  <code>4.6.0-0</code>,  <code>4.2.0-0</code>,  <code>4.0.0-0</code>,  <code>3.18.1-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  <code>3.12.0-1</code>,  </span></summary>
      

      ``4.8.1-0``,  ``4.6.0-0``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.18.1-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.10.1-0``,  ``3.8.1-0``,  ``3.6.0-0``,  ``3.4.4-0``,  ``3.0.5-0``,  ``3.0.4-1``,  ``2.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.62.0,<1.63.0``
   :depends bioconductor-dose: ``>=3.26.0,<3.27.0``
   :depends bioconductor-enrichplot: ``>=1.20.0,<1.21.0``
   :depends bioconductor-go.db: ``>=3.17.0,<3.18.0``
   :depends bioconductor-gosemsim: ``>=2.26.0,<2.27.0``
   :depends bioconductor-qvalue: ``>=2.32.0,<2.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-gson: ``>=0.0.7``
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-yulab.utils: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-clusterprofiler

   and update with::

      conda update bioconductor-clusterprofiler

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-clusterprofiler:<tag>

   (see `bioconductor-clusterprofiler/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-clusterprofiler| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-clusterprofiler.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-clusterprofiler
   :alt:   (downloads)
.. |docker_bioconductor-clusterprofiler| image:: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler/status
   :target: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler
.. _`bioconductor-clusterprofiler/tags`: https://quay.io/repository/biocontainers/bioconductor-clusterprofiler?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-clusterprofiler";
        var versions = ["4.8.1","4.6.0","4.2.0","4.0.0","3.18.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-clusterprofiler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-clusterprofiler/README.html