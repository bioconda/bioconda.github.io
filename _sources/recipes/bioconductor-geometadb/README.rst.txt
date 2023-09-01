:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-geometadb'
.. highlight: bash

bioconductor-geometadb
======================

.. conda:recipe:: bioconductor-geometadb
   :replaces_section_title:
   :noindex:

   A compilation of metadata from NCBI GEO

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/GEOmetadb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-geometadb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geometadb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-geometadb/meta.yaml>`_
   :links: biotools: :biotools:`geometadb`

   The NCBI Gene Expression Omnibus \(GEO\) represents the largest public repository of microarray data. However\, finding data of interest can be challenging using current tools. GEOmetadb is an attempt to make access to the metadata associated with samples\, platforms\, and datasets much more feasible. This is accomplished by parsing all the NCBI GEO metadata into a SQLite database that can be stored and queried locally. GEOmetadb is simply a thin wrapper around the SQLite database along with associated documentation. Finally\, the SQLite database is updated regularly as new data is added to GEO and can be downloaded at will for the most up\-to\-date metadata. GEOmetadb paper\: http\:\/\/bioinformatics.oxfordjournals.org\/cgi\/content\/short\/24\/23\/2798 .


.. conda:package:: bioconductor-geometadb

   |downloads_bioconductor-geometadb| |docker_bioconductor-geometadb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-0``,  ``1.42.0-0``,  ``1.40.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rsqlite: 
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

      mamba install bioconductor-geometadb

   and update with::

      mamba update bioconductor-geometadb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-geometadb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-geometadb:<tag>

   (see `bioconductor-geometadb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-geometadb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-geometadb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-geometadb
   :alt:   (downloads)
.. |docker_bioconductor-geometadb| image:: https://quay.io/repository/biocontainers/bioconductor-geometadb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-geometadb
.. _`bioconductor-geometadb/tags`: https://quay.io/repository/biocontainers/bioconductor-geometadb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-geometadb";
        var versions = ["1.62.0","1.60.0","1.56.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-geometadb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-geometadb/README.html