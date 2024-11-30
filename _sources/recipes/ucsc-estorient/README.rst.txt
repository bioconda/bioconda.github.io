:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-estorient'
.. highlight: bash

ucsc-estorient
==============

.. conda:recipe:: ucsc-estorient
   :replaces_section_title:
   :noindex:

    Read ESTs from a database and determine orientation based on estOrientInfo table or direction in gbCdnaInfo table.  Update PSLs so that the strand reflects the direction of transcription. By default\, PSLs where the direction can\'t be determined are dropped. 

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-estorient <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-estorient/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-estorient

   |downloads_ucsc-estorient| |docker_ucsc-estorient|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>469-0</code>,  <code>377-3</code>,  <code>377-2</code>,  <code>377-1</code>,  <code>377-0</code>,  <code>366-0</code>,  <code>357-2</code>,  <code>357-1</code>,  <code>357-0</code>,  </span></summary>
      

      ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``,  ``332-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.43,<1.7.0a0``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install ucsc-estorient

   and update with::

      mamba update ucsc-estorient

  To create a new environment, run::

      mamba create --name myenvname ucsc-estorient

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-estorient:<tag>

   (see `ucsc-estorient/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-estorient| image:: https://img.shields.io/conda/dn/bioconda/ucsc-estorient.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-estorient
   :alt:   (downloads)
.. |docker_ucsc-estorient| image:: https://quay.io/repository/biocontainers/ucsc-estorient/status
   :target: https://quay.io/repository/biocontainers/ucsc-estorient
.. _`ucsc-estorient/tags`: https://quay.io/repository/biocontainers/ucsc-estorient?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-estorient";
        var versions = ["469","377","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-estorient/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-estorient/README.html