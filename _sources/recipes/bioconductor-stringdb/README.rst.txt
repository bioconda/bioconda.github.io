:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-stringdb'
.. highlight: bash

bioconductor-stringdb
=====================

.. conda:recipe:: bioconductor-stringdb
   :replaces_section_title:
   :noindex:

   STRINGdb \- Protein\-Protein Interaction Networks and Functional Enrichment Analysis

   :homepage: https://bioconductor.org/packages/3.18/bioc/html/STRINGdb.html
   :license: GPL-2
   :recipe: /`bioconductor-stringdb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stringdb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-stringdb/meta.yaml>`_
   :links: biotools: :biotools:`stringdb`

   The STRINGdb package provides a R interface to the STRING protein\-protein interactions database \(https\:\/\/string\-db.org\).


.. conda:package:: bioconductor-stringdb

   |downloads_bioconductor-stringdb| |docker_bioconductor-stringdb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-0</code>,  <code>2.2.2-0</code>,  <code>2.2.0-0</code>,  <code>2.1.3-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-0``,  ``2.6.0-0``,  ``2.4.0-0``,  ``2.2.2-0``,  ``2.2.0-0``,  ``2.1.3-0``,  ``2.0.0-0``,  ``1.26.0-0``,  ``1.24.0-1``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-gplots: 
   :depends r-hash: 
   :depends r-igraph: 
   :depends r-plotrix: 
   :depends r-plyr: 
   :depends r-png: 
   :depends r-rcolorbrewer: 
   :depends r-rcurl: 
   :depends r-sqldf: 
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

      mamba install bioconductor-stringdb

   and update with::

      mamba update bioconductor-stringdb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-stringdb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-stringdb:<tag>

   (see `bioconductor-stringdb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-stringdb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-stringdb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-stringdb
   :alt:   (downloads)
.. |docker_bioconductor-stringdb| image:: https://quay.io/repository/biocontainers/bioconductor-stringdb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-stringdb
.. _`bioconductor-stringdb/tags`: https://quay.io/repository/biocontainers/bioconductor-stringdb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-stringdb";
        var versions = ["2.14.0","2.12.0","2.10.0","2.6.0","2.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-stringdb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-stringdb/README.html