:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chainsplit'
.. highlight: bash

ucsc-chainsplit
===============

.. conda:recipe:: ucsc-chainsplit
   :replaces_section_title:
   :noindex:

   Split chains up by target or query sequence

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chainsplit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsplit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chainsplit/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-chainsplit

   |downloads_ucsc-chainsplit| |docker_ucsc-chainsplit|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>469-1</code>,  <code>469-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  <code>357-1</code>,  </span></summary>
      

      ``469-1``,  ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
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
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ucsc-chainsplit

   and update with::

      mamba update ucsc-chainsplit

  To create a new environment, run::

      mamba create --name myenvname ucsc-chainsplit

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-chainsplit:<tag>

   (see `ucsc-chainsplit/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chainsplit| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chainsplit.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-chainsplit
   :alt:   (downloads)
.. |docker_ucsc-chainsplit| image:: https://quay.io/repository/biocontainers/ucsc-chainsplit/status
   :target: https://quay.io/repository/biocontainers/ucsc-chainsplit
.. _`ucsc-chainsplit/tags`: https://quay.io/repository/biocontainers/ucsc-chainsplit?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-chainsplit";
        var versions = ["469","469","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chainsplit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chainsplit/README.html