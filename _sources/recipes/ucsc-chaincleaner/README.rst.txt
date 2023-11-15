:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-chaincleaner'
.. highlight: bash

ucsc-chaincleaner
=================

.. conda:recipe:: ucsc-chaincleaner
   :replaces_section_title:
   :noindex:

   Remove chain\-breaking alignments from chains that break nested chains.

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-chaincleaner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaincleaner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-chaincleaner/meta.yaml>`_

   


.. conda:package:: ucsc-chaincleaner

   |downloads_ucsc-chaincleaner| |docker_ucsc-chaincleaner|

   :versions:
      
      

      ``455-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libpng: ``>=1.6.39,<1.7.0a0``
   :depends libstdcxx-ng: ``>=12``
   :depends libuuid: ``>=2.38.1,<3.0a0``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends mysql-connector-c: ``>=6.1.11,<6.1.12.0a0``
   :depends openssl: ``>=3.1.4,<4.0a0``
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

      mamba install ucsc-chaincleaner

   and update with::

      mamba update ucsc-chaincleaner

  To create a new environment, run::

      mamba create --name myenvname ucsc-chaincleaner

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-chaincleaner:<tag>

   (see `ucsc-chaincleaner/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-chaincleaner| image:: https://img.shields.io/conda/dn/bioconda/ucsc-chaincleaner.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-chaincleaner
   :alt:   (downloads)
.. |docker_ucsc-chaincleaner| image:: https://quay.io/repository/biocontainers/ucsc-chaincleaner/status
   :target: https://quay.io/repository/biocontainers/ucsc-chaincleaner
.. _`ucsc-chaincleaner/tags`: https://quay.io/repository/biocontainers/ucsc-chaincleaner?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-chaincleaner";
        var versions = ["455"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-chaincleaner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-chaincleaner/README.html