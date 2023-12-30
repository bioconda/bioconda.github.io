:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-slingshot'
.. highlight: bash

bioconductor-slingshot
======================

.. conda:recipe:: bioconductor-slingshot
   :replaces_section_title:
   :noindex:

   Tools for ordering single\-cell sequencing

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/slingshot.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-slingshot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slingshot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-slingshot/meta.yaml>`_

   Provides functions for inferring continuous\, branching lineage structures in low\-dimensional data. Slingshot was designed to model developmental trajectories in single\-cell RNA sequencing data and serve as a component in an analysis pipeline after dimensionality reduction and clustering. It is flexible enough to handle arbitrarily many branching events and allows for the incorporation of prior knowledge through supervised graph construction.


.. conda:package:: bioconductor-slingshot

   |downloads_bioconductor-slingshot| |docker_bioconductor-slingshot|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  <code>1.8.0-1</code>,  <code>1.8.0-0</code>,  <code>1.6.0-0</code>,  <code>1.4.0-0</code>,  </span></summary>
      

      ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.2.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-singlecellexperiment: ``>=1.24.0,<1.25.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends bioconductor-trajectoryutils: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-igraph: 
   :depends r-matrixstats: 
   :depends r-princurve: ``>=2.0.4``
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

      mamba install bioconductor-slingshot

   and update with::

      mamba update bioconductor-slingshot

  To create a new environment, run::

      mamba create --name myenvname bioconductor-slingshot

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-slingshot:<tag>

   (see `bioconductor-slingshot/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-slingshot| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-slingshot.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-slingshot
   :alt:   (downloads)
.. |docker_bioconductor-slingshot| image:: https://quay.io/repository/biocontainers/bioconductor-slingshot/status
   :target: https://quay.io/repository/biocontainers/bioconductor-slingshot
.. _`bioconductor-slingshot/tags`: https://quay.io/repository/biocontainers/bioconductor-slingshot?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-slingshot";
        var versions = ["2.10.0","2.8.0","2.6.0","2.2.0","2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-slingshot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-slingshot/README.html