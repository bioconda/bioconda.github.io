:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-attract'
.. highlight: bash

bioconductor-attract
====================

.. conda:recipe:: bioconductor-attract
   :replaces_section_title:
   :noindex:

   Methods to Find the Gene Expression Modules that Represent the Drivers of Kauffman\'s Attractor Landscape

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/attract.html
   :license: LGPL (>= 2.0)
   :recipe: /`bioconductor-attract <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-attract>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-attract/meta.yaml>`_

   This package contains the functions to find the gene expression modules that represent the drivers of Kauffman\'s attractor landscape. The modules are the core attractor pathways that discriminate between different cell types of groups of interest. Each pathway has a set of synexpression groups\, which show transcriptionally\-coordinated changes in gene expression.


.. conda:package:: bioconductor-attract

   |downloads_bioconductor-attract| |docker_bioconductor-attract|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.58.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.46.0-0</code>,  <code>1.44.0-0</code>,  <code>1.42.0-1</code>,  <code>1.42.0-0</code>,  <code>1.40.0-0</code>,  </span></summary>
      

      ``1.58.0-0``,  ``1.54.0-0``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.46.0-0``,  ``1.44.0-0``,  ``1.42.0-1``,  ``1.42.0-0``,  ``1.40.0-0``,  ``1.38.0-0``,  ``1.36.0-1``,  ``1.34.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-gostats: ``>=2.72.0,<2.73.0``
   :depends bioconductor-keggrest: ``>=1.46.0,<1.47.0``
   :depends bioconductor-limma: ``>=3.62.0,<3.63.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-reactome.db: ``>=1.89.0,<1.90.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-cluster: 
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

      mamba install bioconductor-attract

   and update with::

      mamba update bioconductor-attract

  To create a new environment, run::

      mamba create --name myenvname bioconductor-attract

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-attract:<tag>

   (see `bioconductor-attract/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-attract| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-attract.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-attract
   :alt:   (downloads)
.. |docker_bioconductor-attract| image:: https://quay.io/repository/biocontainers/bioconductor-attract/status
   :target: https://quay.io/repository/biocontainers/bioconductor-attract
.. _`bioconductor-attract/tags`: https://quay.io/repository/biocontainers/bioconductor-attract?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-attract";
        var versions = ["1.58.0","1.54.0","1.52.0","1.50.0","1.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-attract/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-attract/README.html