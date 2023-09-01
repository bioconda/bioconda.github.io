:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sradb'
.. highlight: bash

bioconductor-sradb
==================

.. conda:recipe:: bioconductor-sradb
   :replaces_section_title:
   :noindex:

   A compilation of metadata from NCBI SRA and tools

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SRAdb.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sradb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sradb/meta.yaml>`_
   :links: biotools: :biotools:`sradb`

   The Sequence Read Archive \(SRA\) is the largest public repository of sequencing data from the next generation of sequencing platforms including Roche 454 GS System\, Illumina Genome Analyzer\, Applied Biosystems SOLiD System\, Helicos Heliscope\, and others. However\, finding data of interest can be challenging using current tools. SRAdb is an attempt to make access to the metadata associated with submission\, study\, sample\, experiment and run much more feasible. This is accomplished by parsing all the NCBI SRA metadata into a SQLite database that can be stored and queried locally. Fulltext search in the package make querying metadata very flexible and powerful.  fastq and sra files can be downloaded for doing alignment locally. Beside ftp protocol\, the SRAdb has funcitons supporting fastp protocol \(ascp from Aspera Connect\) for faster downloading large data files over long distance. The SQLite database is updated regularly as new data is added to SRA and can be downloaded at will for the most up\-to\-date metadata.


.. conda:package:: bioconductor-sradb

   |downloads_bioconductor-sradb| |docker_bioconductor-sradb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.62.0-0</code>,  <code>1.60.0-0</code>,  <code>1.56.0-0</code>,  <code>1.54.0-0</code>,  <code>1.52.0-1</code>,  <code>1.52.0-0</code>,  <code>1.50.0-0</code>,  <code>1.48.0-0</code>,  <code>1.46.0-1</code>,  </span></summary>
      

      ``1.62.0-0``,  ``1.60.0-0``,  ``1.56.0-0``,  ``1.54.0-0``,  ``1.52.0-1``,  ``1.52.0-0``,  ``1.50.0-0``,  ``1.48.0-0``,  ``1.46.0-1``,  ``1.44.0-1``,  ``1.44.0-0``,  ``1.42.2-0``,  ``1.37.0-0``,  ``1.36.0-0``,  ``1.32.0-0``,  ``1.28.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-geoquery: ``>=2.68.0,<2.69.0``
   :depends bioconductor-graph: ``>=1.78.0,<1.79.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-rcurl: 
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

      mamba install bioconductor-sradb

   and update with::

      mamba update bioconductor-sradb

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sradb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sradb:<tag>

   (see `bioconductor-sradb/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sradb| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sradb.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sradb
   :alt:   (downloads)
.. |docker_bioconductor-sradb| image:: https://quay.io/repository/biocontainers/bioconductor-sradb/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sradb
.. _`bioconductor-sradb/tags`: https://quay.io/repository/biocontainers/bioconductor-sradb?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sradb";
        var versions = ["1.62.0","1.60.0","1.56.0","1.54.0","1.52.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sradb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sradb/README.html