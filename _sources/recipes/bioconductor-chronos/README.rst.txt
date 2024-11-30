:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-chronos'
.. highlight: bash

bioconductor-chronos
====================

.. conda:recipe:: bioconductor-chronos
   :replaces_section_title:
   :noindex:

   CHRONOS\: A time\-varying method for microRNA\-mediated sub\-pathway enrichment analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/CHRONOS.html
   :license: GPL-2
   :recipe: /`bioconductor-chronos <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chronos>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-chronos/meta.yaml>`_
   :links: biotools: :biotools:`CHRONOS`

   A package used for efficient unraveling of the inherent dynamic properties of pathways. MicroRNA\-mediated subpathway topologies are extracted and evaluated by exploiting the temporal transition and the fold change activity of the linked genes\/microRNAs.


.. conda:package:: bioconductor-chronos

   |downloads_bioconductor-chronos| |docker_bioconductor-chronos|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.30.0-0</code>,  <code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.22.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  </span></summary>
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-0``,  ``1.8.1-0``,  ``1.6.0-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biomart: ``>=2.58.0,<2.59.0``
   :depends bioconductor-graph: ``>=1.80.0,<1.81.0``
   :depends bioconductor-rbgl: ``>=1.78.0,<1.79.0``
   :depends openjdk: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-circlize: 
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-igraph: 
   :depends r-openxlsx: 
   :depends r-rcurl: 
   :depends r-rjava: 
   :depends r-xml: 
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

      mamba install bioconductor-chronos

   and update with::

      mamba update bioconductor-chronos

  To create a new environment, run::

      mamba create --name myenvname bioconductor-chronos

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-chronos:<tag>

   (see `bioconductor-chronos/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-chronos| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-chronos.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-chronos
   :alt:   (downloads)
.. |docker_bioconductor-chronos| image:: https://quay.io/repository/biocontainers/bioconductor-chronos/status
   :target: https://quay.io/repository/biocontainers/bioconductor-chronos
.. _`bioconductor-chronos/tags`: https://quay.io/repository/biocontainers/bioconductor-chronos?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-chronos";
        var versions = ["1.30.0","1.28.0","1.26.0","1.22.0","1.20.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-chronos/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-chronos/README.html