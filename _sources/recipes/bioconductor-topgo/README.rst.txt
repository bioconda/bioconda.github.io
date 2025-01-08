:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-topgo'
.. highlight: bash

bioconductor-topgo
==================

.. conda:recipe:: bioconductor-topgo
   :replaces_section_title:
   :noindex:

   Enrichment Analysis for Gene Ontology

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/topGO.html
   :license: LGPL
   :recipe: /`bioconductor-topgo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topgo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-topgo/meta.yaml>`_
   :links: biotools: :biotools:`topgo`, doi: :doi:`10.1093/bioinformatics/btl140`

   topGO package provides tools for testing GO terms while accounting for the topology of the GO graph. Different test statistics and different methods for eliminating local similarities and dependencies between GO terms can be implemented and applied.


.. conda:package:: bioconductor-topgo

   |downloads_bioconductor-topgo| |docker_bioconductor-topgo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.58.0-0</code>,  <code>2.54.0-0</code>,  <code>2.52.0-0</code>,  <code>2.50.0-0</code>,  <code>2.46.0-0</code>,  <code>2.44.0-0</code>,  <code>2.42.0-1</code>,  <code>2.42.0-0</code>,  <code>2.41.0-0</code>,  </span></summary>
      

      ``2.58.0-0``,  ``2.54.0-0``,  ``2.52.0-0``,  ``2.50.0-0``,  ``2.46.0-0``,  ``2.44.0-0``,  ``2.42.0-1``,  ``2.42.0-0``,  ``2.41.0-0``,  ``2.40.0-0``,  ``2.37.0-0``,  ``2.36.0-1``,  ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.28.0-0``,  ``2.24.0-1``,  ``2.22.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.68.0,<1.69.0``
   :depends bioconductor-biobase: ``>=2.66.0,<2.67.0``
   :depends bioconductor-biocgenerics: ``>=0.52.0,<0.53.0``
   :depends bioconductor-go.db: ``>=3.20.0,<3.21.0``
   :depends bioconductor-graph: ``>=1.84.0,<1.85.0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-dbi: 
   :depends r-lattice: 
   :depends r-matrixstats: 
   :depends r-sparsem: ``>=0.73``
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

      mamba install bioconductor-topgo

   and update with::

      mamba update bioconductor-topgo

  To create a new environment, run::

      mamba create --name myenvname bioconductor-topgo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-topgo:<tag>

   (see `bioconductor-topgo/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-topgo| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-topgo.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-topgo
   :alt:   (downloads)
.. |docker_bioconductor-topgo| image:: https://quay.io/repository/biocontainers/bioconductor-topgo/status
   :target: https://quay.io/repository/biocontainers/bioconductor-topgo
.. _`bioconductor-topgo/tags`: https://quay.io/repository/biocontainers/bioconductor-topgo?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-topgo";
        var versions = ["2.58.0","2.54.0","2.52.0","2.50.0","2.46.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-topgo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-topgo/README.html