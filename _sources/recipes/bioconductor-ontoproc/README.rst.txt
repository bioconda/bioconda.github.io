:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-ontoproc'
.. highlight: bash

bioconductor-ontoproc
=====================

.. conda:recipe:: bioconductor-ontoproc
   :replaces_section_title:
   :noindex:

   processing of ontologies of anatomy\, cell lines\, and so on

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/ontoProc.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-ontoproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-ontoproc/meta.yaml>`_

   Support harvesting of diverse bioinformatic ontologies\, making particular use of the ontologyIndex package on CRAN. We provide snapshots of key ontologies for terms about cells\, cell lines\, chemical compounds\, and anatomy\, to help analyze genome\-scale experiments\, particularly cell x compound screens. Another purpose is to strengthen development of compelling use cases for richer interfaces to emerging ontologies.


.. conda:package:: bioconductor-ontoproc

   |downloads_bioconductor-ontoproc| |docker_bioconductor-ontoproc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.24.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  <code>1.12.0-0</code>,  <code>1.10.0-0</code>,  <code>1.8.0-0</code>,  </span></summary>
      

      ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.12.0-0``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-1``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationhub: ``>=3.10.0,<3.11.0``
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocfilecache: ``>=2.10.0,<2.11.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rgraphviz: ``>=2.46.0,<2.47.0``
   :depends bioconductor-s4vectors: ``>=0.40.0,<0.41.0``
   :depends bioconductor-summarizedexperiment: ``>=1.32.0,<1.33.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-dplyr: 
   :depends r-dt: 
   :depends r-igraph: 
   :depends r-magrittr: 
   :depends r-ontologyindex: 
   :depends r-ontologyplot: 
   :depends r-shiny: 
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

      mamba install bioconductor-ontoproc

   and update with::

      mamba update bioconductor-ontoproc

  To create a new environment, run::

      mamba create --name myenvname bioconductor-ontoproc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-ontoproc:<tag>

   (see `bioconductor-ontoproc/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-ontoproc| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-ontoproc.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-ontoproc
   :alt:   (downloads)
.. |docker_bioconductor-ontoproc| image:: https://quay.io/repository/biocontainers/bioconductor-ontoproc/status
   :target: https://quay.io/repository/biocontainers/bioconductor-ontoproc
.. _`bioconductor-ontoproc/tags`: https://quay.io/repository/biocontainers/bioconductor-ontoproc?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-ontoproc";
        var versions = ["1.24.0","1.22.0","1.20.0","1.16.0","1.14.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-ontoproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-ontoproc/README.html