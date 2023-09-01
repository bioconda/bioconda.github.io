:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-xcell'
.. highlight: bash

r-xcell
=======

.. conda:recipe:: r-xcell
   :replaces_section_title:
   :noindex:

   Estimate immune cell proportions from gene expression data

   :homepage: https://github.com/dviraran/xCell
   :license: GPL / GPL-3
   :recipe: /`r-xcell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xcell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-xcell/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13059-017-1349-1`

   \"Tissues are a complex milieu consisting of numerous cell types. In cancer\, understanding the cellular heterogeneity in the tumor microenvironment is an emerging field of research. Numerous methods have been published in recent years for the enumeration of cell subsets from tissue expression profiles. However\, the available methods suffer from three major problems\: inferring cell subset based on gene sets learned and verified from limited sources\; displaying only partial portrayal of the full cellular heterogeneity\; and insufficient validation in mixed tissues. The xCell package performs cell type enrichment analysis from gene expression data for 64 immune and stroma cell types. xCell is a gene signatures\-based method learned from thousands of pure cell types from various sources. xCell applies a novel technique for reducing associations between closley related cell types. xCell signatures were validated using extensive in\-silico simulations and also cytometry immunophenotyping\, and were shown to outperform previous methods. xCell allows researchers to reliably portray the cellular heterogeneity landscape of tissue expression profiles.\"



.. conda:package:: r-xcell

   |downloads_r-xcell| |docker_r-xcell|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3-6</code>,  <code>1.3-5</code>,  <code>1.3-4</code>,  <code>1.3-3</code>,  <code>1.3-2</code>,  <code>1.3-1</code>,  <code>1.3-0</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  </span></summary>
      

      ``1.3-6``,  ``1.3-5``,  ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-gseabase: 
   :depends bioconductor-gsva: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-curl: 
   :depends r-digest: 
   :depends r-mass: 
   :depends r-pracma: 
   :depends r-quadprog: 
   :depends r-roxygen2: 
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

      mamba install r-xcell

   and update with::

      mamba update r-xcell

  To create a new environment, run::

      mamba create --name myenvname r-xcell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/r-xcell:<tag>

   (see `r-xcell/tags`_ for valid values for ``<tag>``)


.. |downloads_r-xcell| image:: https://img.shields.io/conda/dn/bioconda/r-xcell.svg?style=flat
   :target: https://anaconda.org/bioconda/r-xcell
   :alt:   (downloads)
.. |docker_r-xcell| image:: https://quay.io/repository/biocontainers/r-xcell/status
   :target: https://quay.io/repository/biocontainers/r-xcell
.. _`r-xcell/tags`: https://quay.io/repository/biocontainers/r-xcell?tab=tags


.. raw:: html

    <script>
        var package = "r-xcell";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-xcell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-xcell/README.html