:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgloadnet'
.. highlight: bash

ucsc-hgloadnet
==============

.. conda:recipe:: ucsc-hgloadnet
   :replaces_section_title:
   :noindex:

   Load a generic net file into database

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgloadnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgloadnet/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-hgloadnet

   |downloads_ucsc-hgloadnet| |docker_ucsc-hgloadnet|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>469-1</code>,  <code>469-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  <code>357-1</code>,  </span></summary>
      

      ``469-1``,  ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      
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

      mamba install ucsc-hgloadnet

   and update with::

      mamba update ucsc-hgloadnet

  To create a new environment, run::

      mamba create --name myenvname ucsc-hgloadnet

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-hgloadnet:<tag>

   (see `ucsc-hgloadnet/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgloadnet| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgloadnet.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-hgloadnet
   :alt:   (downloads)
.. |docker_ucsc-hgloadnet| image:: https://quay.io/repository/biocontainers/ucsc-hgloadnet/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgloadnet
.. _`ucsc-hgloadnet/tags`: https://quay.io/repository/biocontainers/ucsc-hgloadnet?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-hgloadnet";
        var versions = ["469","469","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgloadnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgloadnet/README.html