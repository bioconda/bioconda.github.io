:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-daglogo'
.. highlight: bash

bioconductor-daglogo
====================

.. conda:recipe:: bioconductor-daglogo
   :replaces_section_title:
   :noindex:

   dagLogo\: a Bioconductor package for visualizing conserved amino acid sequence pattern in groups based on probability theory

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/dagLogo.html
   :license: GPL (>=2)
   :recipe: /`bioconductor-daglogo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-daglogo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-daglogo/meta.yaml>`_

   Visualize significant conserved amino acid sequence pattern in groups based on probability theory.


.. conda:package:: bioconductor-daglogo

   |downloads_bioconductor-daglogo| |docker_bioconductor-daglogo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.38.0-0</code>,  <code>1.36.0-0</code>,  <code>1.32.0-0</code>,  <code>1.30.0-0</code>,  <code>1.28.1-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.22.2-0</code>,  </span></summary>
      

      ``1.38.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.30.0-0``,  ``1.28.1-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.2-0``,  ``1.20.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biocgenerics: ``>=0.46.0,<0.47.0``
   :depends bioconductor-biomart: ``>=2.56.0,<2.57.0``
   :depends bioconductor-biostrings: ``>=2.68.0,<2.69.0``
   :depends bioconductor-motifstack: ``>=1.44.0,<1.45.0``
   :depends bioconductor-uniprot.ws: ``>=2.40.0,<2.41.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-httr: 
   :depends r-pheatmap: 
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

      mamba install bioconductor-daglogo

   and update with::

      mamba update bioconductor-daglogo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-daglogo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-daglogo:<tag>

   (see `bioconductor-daglogo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-daglogo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-daglogo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-daglogo
   :alt:   (downloads)
.. |docker_bioconductor-daglogo| image:: https://quay.io/repository/biocontainers/bioconductor-daglogo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-daglogo
.. _`bioconductor-daglogo/tags`: https://quay.io/repository/biocontainers/bioconductor-daglogo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-daglogo";
        var versions = ["1.38.0","1.36.0","1.32.0","1.30.0","1.28.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-daglogo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-daglogo/README.html