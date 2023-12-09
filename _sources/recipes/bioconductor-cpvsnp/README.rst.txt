:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-cpvsnp'
.. highlight: bash

bioconductor-cpvsnp
===================

.. conda:recipe:: bioconductor-cpvsnp
   :replaces_section_title:
   :noindex:

   Gene set analysis methods for SNP association p\-values that lie in genes in given gene sets

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/cpvSNP.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-cpvsnp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cpvsnp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-cpvsnp/meta.yaml>`_
   :links: biotools: :biotools:`cpvsnp`, doi: :doi:`10.1038/nmeth.3252`

   Gene set analysis methods exist to combine SNP\-level association p\-values into gene sets\, calculating a single association p\-value for each gene set. This package implements two such methods that require only the calculated SNP p\-values\, the gene set\(s\) of interest\, and a correlation matrix \(if desired\). One method \(GLOSSI\) requires independent SNPs and the other \(VEGAS\) can take into account correlation \(LD\) among the SNPs. Built\-in plotting functions are available to help users visualize results.


.. conda:package:: bioconductor-cpvsnp

   |downloads_bioconductor-cpvsnp| |docker_bioconductor-cpvsnp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.34.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.0-1</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  </span></summary>
      

      ``1.34.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-genomicfeatures: ``>=1.54.0,<1.55.0``
   :depends bioconductor-gseabase: ``>=1.64.0,<1.65.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-corpcor: 
   :depends r-ggplot2: 
   :depends r-plyr: 
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

      mamba install bioconductor-cpvsnp

   and update with::

      mamba update bioconductor-cpvsnp

  To create a new environment, run::

      mamba create --name myenvname bioconductor-cpvsnp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-cpvsnp:<tag>

   (see `bioconductor-cpvsnp/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-cpvsnp| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-cpvsnp.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-cpvsnp
   :alt:   (downloads)
.. |docker_bioconductor-cpvsnp| image:: https://quay.io/repository/biocontainers/bioconductor-cpvsnp/status
   :target: https://quay.io/repository/biocontainers/bioconductor-cpvsnp
.. _`bioconductor-cpvsnp/tags`: https://quay.io/repository/biocontainers/bioconductor-cpvsnp?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-cpvsnp";
        var versions = ["1.34.0","1.32.0","1.30.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-cpvsnp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-cpvsnp/README.html