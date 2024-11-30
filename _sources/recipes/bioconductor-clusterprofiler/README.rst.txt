:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-clusterprofiler'
.. highlight: bash

bioconductor-clusterprofiler
============================

.. conda:recipe:: bioconductor-clusterprofiler
   :replaces_section_title:
   :noindex:

   A universal enrichment tool for interpreting omics data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/clusterProfiler.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-clusterprofiler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-clusterprofiler/meta.yaml>`_
   :links: biotools: :biotools:`clusterprofiler`

   This package supports functional characteristics of both coding and non\-coding genomics data for thousands of species with up\-to\-date gene annotation. It provides a univeral interface for gene functional annotation from a variety of sources and thus can be applied in diverse scenarios. It provides a tidy interface to access\, manipulate\, and visualize enrichment results to help users achieve efficient data interpretation. Datasets obtained from multiple treatments and time points can be analyzed and compared in a single run\, easily revealing functional consensus and differences among distinct conditions.


.. conda:package:: bioconductor-clusterprofiler

   |downloads_bioconductor-clusterprofiler| |docker_bioconductor-clusterprofiler|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>4.10.0-0</code>,  <code>4.8.1-0</code>,  <code>4.6.0-0</code>,  <code>4.2.0-0</code>,  <code>4.0.0-0</code>,  <code>3.18.1-0</code>,  <code>3.18.0-0</code>,  <code>3.16.0-0</code>,  <code>3.14.0-0</code>,  </span></summary>
      

      ``4.10.0-0``,  ``4.8.1-0``,  ``4.6.0-0``,  ``4.2.0-0``,  ``4.0.0-0``,  ``3.18.1-0``,  ``3.18.0-0``,  ``3.16.0-0``,  ``3.14.0-0``,  ``3.12.0-1``,  ``3.10.1-0``,  ``3.8.1-0``,  ``3.6.0-0``,  ``3.4.4-0``,  ``3.0.5-0``,  ``3.0.4-1``,  ``2.4.3-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-dose: ``>=3.28.0,<3.29.0``
   :depends bioconductor-enrichplot: ``>=1.22.0,<1.23.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-gosemsim: ``>=2.28.0,<2.29.0``
   :depends bioconductor-qvalue: ``>=2.34.0,<2.35.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-downloader: 
   :depends r-dplyr: 
   :depends r-gson: ``>=0.0.7``
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-plyr: 
   :depends r-rlang: 
   :depends r-tidyr: 
   :depends r-yulab.utils: ``>=0.0.7``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-clusterprofiler

   and update with::

      mamba update bioconductor-clusterprofiler

  To create a new environment, run::

      mamba create --name myenvname bioconductor-clusterprofiler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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
        var versions = ["4.10.0","4.8.1","4.6.0","4.2.0","4.0.0"];
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