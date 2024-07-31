:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rpsbproc'
.. highlight: bash

rpsbproc
========

.. conda:recipe:: rpsbproc
   :replaces_section_title:
   :noindex:

   RpsbProc\, the post\-RPSBLAST Processing Utility.

   :homepage: https://ftp.ncbi.nih.gov/pub/mmdb/cdd/rpsbproc/README
   :license: Public Domain
   :recipe: /`rpsbproc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpsbproc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rpsbproc/meta.yaml>`_
   :links: doi: :doi:`10.1002/cpbi.90`

   The rpsbproc command line utility is an addition to the standalone version of
   Reverse Position\-Specific BLAST \(RPS\-BLAST\)\, also known as CD\-Search \(Conserved
   Domain Search\).

   It post\-processes the results of local RPS\-BLAST searches in order to provide a
   non\-redundant view of the search results\, and to provide additional annotation
   on query sequences\, such as domain superfamilies and functional sites\, similar to
   the annotation provided by the corresponding web services \(e.g.\, the NCBI Batch
   CD\-Search web service at
   http\:\/\/www.ncbi.nlm.nih.gov\/Structure\/bwrpsb\/bwrpsb.cgi\).

   Specifically\, the rpsbproc utility reads the output of rpsblast\/rpstblastn\,
   fills in domain superfamily and functional site information for each region of
   the sequence\, re\-sorts the hits by a different standard\, and calculates a
   set of non\-redundent representative hits. In this way\, it turns the
   raw alignments into domain\/site annotations on the query sequence at different
   redundancy level\, basically produce the same data as web\-based Batch CD\-Search
   service does. The annotation data is presented in tab\-delimited tables to be processed
   either programatically or manually with a spreadsheet \(see details below\).

   See the CDD and CD\-Search help document for additional details about
   superfamilies\, conserved sites\, and more\:

   http\:\/\/www.ncbi.nlm.nih.gov\/Structure\/cdd\/cdd\_help.shtml



.. conda:package:: rpsbproc

   |downloads_rpsbproc| |docker_rpsbproc|

   :versions:
      
      

      ``0.5.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libsqlite: ``>=3.46.0,<4.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install rpsbproc

   and update with::

      mamba update rpsbproc

  To create a new environment, run::

      mamba create --name myenvname rpsbproc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/rpsbproc:<tag>

   (see `rpsbproc/tags`_ for valid values for ``<tag>``)


.. |downloads_rpsbproc| image:: https://img.shields.io/conda/dn/bioconda/rpsbproc.svg?style=flat
   :target: https://anaconda.org/bioconda/rpsbproc
   :alt:   (downloads)
.. |docker_rpsbproc| image:: https://quay.io/repository/biocontainers/rpsbproc/status
   :target: https://quay.io/repository/biocontainers/rpsbproc
.. _`rpsbproc/tags`: https://quay.io/repository/biocontainers/rpsbproc?tab=tags


.. raw:: html

    <script>
        var package = "rpsbproc";
        var versions = ["0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rpsbproc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rpsbproc/README.html