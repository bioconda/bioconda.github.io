:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigbedsummary'
.. highlight: bash

ucsc-bigbedsummary
==================

.. conda:recipe:: ucsc-bigbedsummary
   :replaces_section_title:
   :noindex:

   Extract summary information from a bigBed file.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/v482_base/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see https://genome.ucsc.edu/license
   :recipe: /`ucsc-bigbedsummary <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedsummary>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigbedsummary/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-bigbedsummary

   |downloads_ucsc-bigbedsummary| |docker_ucsc-bigbedsummary|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>482-0</code>,  <code>469-1</code>,  <code>469-0</code>,  <code>465-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  </span></summary>
      

      ``482-0``,  ``469-1``,  ``469-0``,  ``465-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libiconv: ``>=1.18,<2.0a0``
   :depends liblzma: ``>=5.8.1,<6.0a0``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.49,<1.7.0a0``
   :depends libstdcxx: ``>=13``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install ucsc-bigbedsummary

   and update with::

      mamba update ucsc-bigbedsummary

  To create a new environment, run::

      mamba create --name myenvname ucsc-bigbedsummary

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-bigbedsummary:<tag>

   (see `ucsc-bigbedsummary/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigbedsummary| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigbedsummary.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bigbedsummary
   :alt:   (downloads)
.. |docker_ucsc-bigbedsummary| image:: https://quay.io/repository/biocontainers/ucsc-bigbedsummary/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigbedsummary
.. _`ucsc-bigbedsummary/tags`: https://quay.io/repository/biocontainers/ucsc-bigbedsummary?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-bigbedsummary";
        var versions = ["482","469","469","465","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigbedsummary/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigbedsummary/README.html