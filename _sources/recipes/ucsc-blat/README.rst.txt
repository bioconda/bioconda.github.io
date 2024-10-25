:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-blat'
.. highlight: bash

ucsc-blat
=========

.. conda:recipe:: ucsc-blat
   :replaces_section_title:
   :noindex:

   Standalone BLAT v. 39x1 fast sequence search command line tool.

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/v472_base/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see https://genome.ucsc.edu/license
   :recipe: /`ucsc-blat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-blat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-blat/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-blat

   |downloads_ucsc-blat| |docker_ucsc-blat|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>472-0</code>,  <code>469-0</code>,  <code>468-0</code>,  <code>466-1</code>,  <code>466-0</code>,  <code>445-1</code>,  <code>445-0</code>,  <code>377-4</code>,  <code>377-3</code>,  </span></summary>
      

      ``472-0``,  ``469-0``,  ``468-0``,  ``466-1``,  ``466-0``,  ``445-1``,  ``445-0``,  ``377-4``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.43,<1.7.0a0``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
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

      mamba install ucsc-blat

   and update with::

      mamba update ucsc-blat

  To create a new environment, run::

      mamba create --name myenvname ucsc-blat

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-blat:<tag>

   (see `ucsc-blat/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-blat| image:: https://img.shields.io/conda/dn/bioconda/ucsc-blat.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-blat
   :alt:   (downloads)
.. |docker_ucsc-blat| image:: https://quay.io/repository/biocontainers/ucsc-blat/status
   :target: https://quay.io/repository/biocontainers/ucsc-blat
.. _`ucsc-blat/tags`: https://quay.io/repository/biocontainers/ucsc-blat?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-blat";
        var versions = ["472","469","468","466","466"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-blat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-blat/README.html