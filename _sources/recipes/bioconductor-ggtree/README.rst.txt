:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ggtree'
.. highlight: bash

bioconductor-ggtree
===================

.. conda:recipe:: bioconductor-ggtree
   :replaces_section_title:
   :noindex:

   an R package for visualization of tree and annotation data

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ggtree.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ggtree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ggtree/meta.yaml>`_
   :links: biotools: :biotools:`ggtree`, doi: :doi:`10.1111/2041-210X.12628`

   \'ggtree\' extends the \'ggplot2\' plotting system which implemented the grammar of graphics. \'ggtree\' is designed for visualization and annotation of phylogenetic trees and other tree\-like structures with their annotation data.


.. conda:package:: bioconductor-ggtree

   |downloads_bioconductor-ggtree| |docker_bioconductor-ggtree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.8.0-0</code>,  <code>3.6.0-0</code>,  <code>3.2.0-0</code>,  <code>3.0.1-0</code>,  <code>2.4.1-0</code>,  <code>2.4.0-0</code>,  <code>2.2.1-0</code>,  <code>2.0.0-0</code>,  <code>1.16.3-0</code>,  </span></summary>
      

      ``3.8.0-0``,  ``3.6.0-0``,  ``3.2.0-0``,  ``3.0.1-0``,  ``2.4.1-0``,  ``2.4.0-0``,  ``2.2.1-0``,  ``2.0.0-0``,  ``1.16.3-0``,  ``1.16.0-0``,  ``1.14.6-0``,  ``1.14.4-0``,  ``1.12.7-0``,  ``1.10.0-0``,  ``1.8.2-0``,  ``1.4.20-0``,  ``1.2.12-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-treeio: ``>=1.24.0,<1.25.0``
   :depends r-ape: 
   :depends r-aplot: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-cli: 
   :depends r-dplyr: 
   :depends r-ggfun: ``>=0.0.9``
   :depends r-ggplot2: ``>3.3.6``
   :depends r-magrittr: 
   :depends r-purrr: 
   :depends r-rlang: 
   :depends r-scales: 
   :depends r-tidyr: 
   :depends r-tidytree: ``>=0.3.9``
   :depends r-yulab.utils: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-ggtree

   and update with::

      mamba update bioconductor-ggtree

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ggtree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ggtree:<tag>

   (see `bioconductor-ggtree/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ggtree| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ggtree.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ggtree
   :alt:   (downloads)
.. |docker_bioconductor-ggtree| image:: https://quay.io/repository/biocontainers/bioconductor-ggtree/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ggtree
.. _`bioconductor-ggtree/tags`: https://quay.io/repository/biocontainers/bioconductor-ggtree?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ggtree";
        var versions = ["3.8.0","3.6.0","3.2.0","3.0.1","2.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ggtree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ggtree/README.html