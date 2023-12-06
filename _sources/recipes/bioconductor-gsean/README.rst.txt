:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gsean'
.. highlight: bash

bioconductor-gsean
==================

.. conda:recipe:: bioconductor-gsean
   :replaces_section_title:
   :noindex:

   Gene Set Enrichment Analysis with Networks

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/gsean.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-gsean <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsean>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gsean/meta.yaml>`_

   Biological molecules in a living organism seldom work individually. They usually interact each other in a cooperative way. Biological process is too complicated to understand without considering such interactions. Thus\, network\-based procedures can be seen as powerful methods for studying complex process. However\, many methods are devised for analyzing individual genes. It is said that techniques based on biological networks such as gene co\-expression are more precise ways to represent information than those using lists of genes only. This package is aimed to integrate the gene expression and biological network. A biological network is constructed from gene expression data and it is used for Gene Set Enrichment Analysis.


.. conda:package:: bioconductor-gsean

   |downloads_bioconductor-gsean| |docker_bioconductor-gsean|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.22.0-0</code>,  <code>1.20.2-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.22.0-0``,  ``1.20.2-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0``
   :depends bioconductor-fgsea: ``>=1.28.0,<1.29.0a0``
   :depends bioconductor-ppinfer: ``>=1.28.0,<1.29.0``
   :depends bioconductor-ppinfer: ``>=1.28.0,<1.29.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-gsean

   and update with::

      mamba update bioconductor-gsean

  To create a new environment, run::

      mamba create --name myenvname bioconductor-gsean

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gsean:<tag>

   (see `bioconductor-gsean/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gsean| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gsean.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gsean
   :alt:   (downloads)
.. |docker_bioconductor-gsean| image:: https://quay.io/repository/biocontainers/bioconductor-gsean/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gsean
.. _`bioconductor-gsean/tags`: https://quay.io/repository/biocontainers/bioconductor-gsean?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gsean";
        var versions = ["1.22.0","1.20.2","1.18.0","1.18.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gsean/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gsean/README.html