:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-hgbbidblink'
.. highlight: bash

ucsc-hgbbidblink
================

.. conda:recipe:: ucsc-hgbbidblink
   :replaces_section_title:
   :noindex:

   Add table that just contains a pointer to a bbiFile to database.  This program 

   :homepage: https://hgdownload.cse.ucsc.edu/admin/exe/
   :documentation: https://github.com/ucscGenomeBrowser/kent/blob/master/README
   
   :developer docs: https://github.com/ucscGenomeBrowser/kent
   :license: Varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-hgbbidblink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgbbidblink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-hgbbidblink/meta.yaml>`_
   :links: biotools: :biotools:`UCSC_Genome_Browser_Utilities`, doi: :doi:`10.1093/bib/bbs038`

   


.. conda:package:: ucsc-hgbbidblink

   |downloads_ucsc-hgbbidblink| |docker_ucsc-hgbbidblink|

   :versions:
      
      

      ``469-0``,  ``377-3``,  ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``,  ``357-2``,  ``357-1``,  ``357-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libopenssl-static: 
   :depends libpng: ``>=1.6.43,<1.7.0a0``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends zlib: 
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

      mamba install ucsc-hgbbidblink

   and update with::

      mamba update ucsc-hgbbidblink

  To create a new environment, run::

      mamba create --name myenvname ucsc-hgbbidblink

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-hgbbidblink:<tag>

   (see `ucsc-hgbbidblink/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-hgbbidblink| image:: https://img.shields.io/conda/dn/bioconda/ucsc-hgbbidblink.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-hgbbidblink
   :alt:   (downloads)
.. |docker_ucsc-hgbbidblink| image:: https://quay.io/repository/biocontainers/ucsc-hgbbidblink/status
   :target: https://quay.io/repository/biocontainers/ucsc-hgbbidblink
.. _`ucsc-hgbbidblink/tags`: https://quay.io/repository/biocontainers/ucsc-hgbbidblink?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-hgbbidblink";
        var versions = ["469","377","377","377","377"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-hgbbidblink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-hgbbidblink/README.html