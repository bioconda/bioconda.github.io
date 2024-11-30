:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-kegglincs'
.. highlight: bash

bioconductor-kegglincs
======================

.. conda:recipe:: bioconductor-kegglincs
   :replaces_section_title:
   :noindex:

   Visualize all edges within a KEGG pathway and overlay LINCS data

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/KEGGlincs.html
   :license: GPL-3
   :recipe: /`bioconductor-kegglincs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegglincs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-kegglincs/meta.yaml>`_
   :links: biotools: :biotools:`kegglincs`, doi: :doi:`10.7490/f1000research.1113436.1`

   See what is going on \'under the hood\' of KEGG pathways by explicitly re\-creating the pathway maps from information obtained from KGML files.


.. conda:package:: bioconductor-kegglincs

   |downloads_bioconductor-kegglincs| |docker_bioconductor-kegglincs|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.28.0-0</code>,  <code>1.26.0-0</code>,  <code>1.24.0-0</code>,  <code>1.20.0-0</code>,  <code>1.18.0-0</code>,  <code>1.16.0-1</code>,  <code>1.16.0-0</code>,  <code>1.14.0-0</code>,  <code>1.12.0-1</code>,  </span></summary>
      

      ``1.28.0-0``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.16.0-0``,  ``1.14.0-0``,  ``1.12.0-1``,  ``1.10.0-1``,  ``1.8.0-0``,  ``1.6.2-0``,  ``1.4.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-annotationdbi: ``>=1.64.0,<1.65.0``
   :depends bioconductor-hgu133a.db: ``>=3.13.0,<3.14.0``
   :depends bioconductor-kegggraph: ``>=1.62.0,<1.63.0``
   :depends bioconductor-keggrest: ``>=1.42.0,<1.43.0``
   :depends bioconductor-kodata: ``>=1.28.0,<1.29.0``
   :depends bioconductor-org.hs.eg.db: ``>=3.18.0,<3.19.0``
   :depends cytoscape: ``>=3.3.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gtools: 
   :depends r-httr: 
   :depends r-igraph: 
   :depends r-plyr: 
   :depends r-rjsonio: 
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

      mamba install bioconductor-kegglincs

   and update with::

      mamba update bioconductor-kegglincs

  To create a new environment, run::

      mamba create --name myenvname bioconductor-kegglincs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-kegglincs:<tag>

   (see `bioconductor-kegglincs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-kegglincs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-kegglincs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-kegglincs
   :alt:   (downloads)
.. |docker_bioconductor-kegglincs| image:: https://quay.io/repository/biocontainers/bioconductor-kegglincs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-kegglincs
.. _`bioconductor-kegglincs/tags`: https://quay.io/repository/biocontainers/bioconductor-kegglincs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-kegglincs";
        var versions = ["1.28.0","1.26.0","1.24.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-kegglincs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-kegglincs/README.html