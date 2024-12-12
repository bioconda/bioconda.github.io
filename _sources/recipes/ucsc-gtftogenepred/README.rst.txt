:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-gtftogenepred'
.. highlight: bash

ucsc-gtftogenepred
==================

.. conda:recipe:: ucsc-gtftogenepred
   :replaces_section_title:
   :noindex:

   convert a GTF file to a genePred

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-gtftogenepred <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gtftogenepred>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-gtftogenepred/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-gtftogenepred

   |downloads_ucsc-gtftogenepred| |docker_ucsc-gtftogenepred|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>469-1</code>,  <code>469-0</code>,  <code>447-1</code>,  <code>447-0</code>,  <code>377-5</code>,  <code>377-4</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  </span></summary>
      

      ``469-1``,  ``469-0``,  ``447-1``,  ``447-0``,  ``377-5``,  ``377-4``,  ``377-3``,  ``377-2``,  ``377-1``,  ``366-1``,  ``366-0``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.44,<1.7.0a0``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends zlib: 
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

      mamba install ucsc-gtftogenepred

   and update with::

      mamba update ucsc-gtftogenepred

  To create a new environment, run::

      mamba create --name myenvname ucsc-gtftogenepred

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-gtftogenepred:<tag>

   (see `ucsc-gtftogenepred/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-gtftogenepred| image:: https://img.shields.io/conda/dn/bioconda/ucsc-gtftogenepred.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-gtftogenepred
   :alt:   (downloads)
.. |docker_ucsc-gtftogenepred| image:: https://quay.io/repository/biocontainers/ucsc-gtftogenepred/status
   :target: https://quay.io/repository/biocontainers/ucsc-gtftogenepred
.. _`ucsc-gtftogenepred/tags`: https://quay.io/repository/biocontainers/ucsc-gtftogenepred?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-gtftogenepred";
        var versions = ["469","469","447","447","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-gtftogenepred/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-gtftogenepred/README.html