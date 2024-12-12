:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bigwiginfo'
.. highlight: bash

ucsc-bigwiginfo
===============

.. conda:recipe:: ucsc-bigwiginfo
   :replaces_section_title:
   :noindex:

   Print out information about bigWig file.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bigwiginfo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwiginfo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bigwiginfo/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-bigwiginfo

   |downloads_ucsc-bigwiginfo| |docker_ucsc-bigwiginfo|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>469-1</code>,  <code>469-0</code>,  <code>466-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-1</code>,  </span></summary>
      

      ``469-1``,  ``469-0``,  ``466-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-1``,  ``357-0``,  ``332-0``,  ``324-0``

      
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

      mamba install ucsc-bigwiginfo

   and update with::

      mamba update ucsc-bigwiginfo

  To create a new environment, run::

      mamba create --name myenvname ucsc-bigwiginfo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-bigwiginfo:<tag>

   (see `ucsc-bigwiginfo/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bigwiginfo| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bigwiginfo.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bigwiginfo
   :alt:   (downloads)
.. |docker_ucsc-bigwiginfo| image:: https://quay.io/repository/biocontainers/ucsc-bigwiginfo/status
   :target: https://quay.io/repository/biocontainers/ucsc-bigwiginfo
.. _`ucsc-bigwiginfo/tags`: https://quay.io/repository/biocontainers/ucsc-bigwiginfo?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-bigwiginfo";
        var versions = ["469","469","466","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bigwiginfo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bigwiginfo/README.html