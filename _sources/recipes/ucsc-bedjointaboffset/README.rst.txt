:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-bedjointaboffset'
.. highlight: bash

ucsc-bedjointaboffset
=====================

.. conda:recipe:: ucsc-bedjointaboffset
   :replaces_section_title:
   :noindex:

   given a bed file and tab file where each have a column with matching values\: first get the value of column0\, the offset and line length from inTabFile. Then go over the bed file\, use the name field and append its offset and length to the bed file as two separate fields. Write the new bed file to outBed.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-bedjointaboffset <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-bedjointaboffset/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-bedjointaboffset

   |downloads_ucsc-bedjointaboffset| |docker_ucsc-bedjointaboffset|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``

      

   
   :depends libpng: 
   :depends libuuid: 
   :depends mysql-connector-c: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends python: 
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

      mamba install ucsc-bedjointaboffset

   and update with::

      mamba update ucsc-bedjointaboffset

  To create a new environment, run::

      mamba create --name myenvname ucsc-bedjointaboffset

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-bedjointaboffset:<tag>

   (see `ucsc-bedjointaboffset/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-bedjointaboffset| image:: https://img.shields.io/conda/dn/bioconda/ucsc-bedjointaboffset.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-bedjointaboffset
   :alt:   (downloads)
.. |docker_ucsc-bedjointaboffset| image:: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset/status
   :target: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset
.. _`ucsc-bedjointaboffset/tags`: https://quay.io/repository/biocontainers/ucsc-bedjointaboffset?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-bedjointaboffset";
        var versions = ["377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-bedjointaboffset/README.html