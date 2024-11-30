:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-adam'
.. highlight: bash

bioconductor-adam
=================

.. conda:recipe:: bioconductor-adam
   :replaces_section_title:
   :noindex:

   ADAM\: Activity and Diversity Analysis Module

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/ADAM.html
   :license: GPL (>= 2)
   :recipe: /`bioconductor-adam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-adam/meta.yaml>`_

   ADAM is a GSEA R package created to group a set of genes from comparative samples \(control versus experiment\) belonging to different species according to their respective functions \(Gene Ontology and KEGG pathways as default\) and show their significance by calculating p\-values referring togene diversity and activity. Each group of genes is called GFAG \(Group of Functionally Associated Genes\).


.. conda:package:: bioconductor-adam

   |downloads_bioconductor-adam| |docker_bioconductor-adam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.10.0-2</code>,  <code>1.10.0-1</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  <code>1.6.0-1</code>,  </span></summary>
      

      ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.10.0-2``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-0``,  ``1.0.0-1``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0``
   :depends bioconductor-go.db: ``>=3.18.0,<3.19.0a0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc-ng: ``>=12``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: ``>=0.7.6``
   :depends r-dt: ``>=0.4``
   :depends r-knitr: 
   :depends r-pbapply: ``>=1.3-4``
   :depends r-rcpp: ``>=0.12.18``
   :depends r-stringr: ``>=1.3.1``
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

      mamba install bioconductor-adam

   and update with::

      mamba update bioconductor-adam

  To create a new environment, run::

      mamba create --name myenvname bioconductor-adam

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-adam:<tag>

   (see `bioconductor-adam/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-adam| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-adam.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-adam
   :alt:   (downloads)
.. |docker_bioconductor-adam| image:: https://quay.io/repository/biocontainers/bioconductor-adam/status
   :target: https://quay.io/repository/biocontainers/bioconductor-adam
.. _`bioconductor-adam/tags`: https://quay.io/repository/biocontainers/bioconductor-adam?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-adam";
        var versions = ["1.18.0","1.16.0","1.14.0","1.14.0","1.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-adam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-adam/README.html