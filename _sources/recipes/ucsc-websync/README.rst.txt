:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ucsc-websync'
.. highlight: bash

ucsc-websync
============

.. conda:recipe:: ucsc-websync
   :replaces_section_title:
   :noindex:

   download from https server\, using files.txt on their end to get the list of files

   :homepage: http://hgdownload.cse.ucsc.edu/admin/exe/
   :license: varies; see http://genome.ucsc.edu/license
   :recipe: /`ucsc-websync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-websync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ucsc-websync/meta.yaml>`_

   


.. conda:package:: ucsc-websync

   |downloads_ucsc-websync| |docker_ucsc-websync|

   :versions:
      
      

      ``377-2``,  ``377-1``,  ``377-0``,  ``366-0``

      

   
   :depends libpng: 
   :depends libuuid: 
   :depends mysql-connector-c: 
   :depends openssl: ``>=1.1.0,<=1.1.1``
   :depends python: 
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

      mamba install ucsc-websync

   and update with::

      mamba update ucsc-websync

  To create a new environment, run::

      mamba create --name myenvname ucsc-websync

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ucsc-websync:<tag>

   (see `ucsc-websync/tags`_ for valid values for ``<tag>``)


.. |downloads_ucsc-websync| image:: https://img.shields.io/conda/dn/bioconda/ucsc-websync.svg?style=flat
   :target: https://anaconda.org/bioconda/ucsc-websync
   :alt:   (downloads)
.. |docker_ucsc-websync| image:: https://quay.io/repository/biocontainers/ucsc-websync/status
   :target: https://quay.io/repository/biocontainers/ucsc-websync
.. _`ucsc-websync/tags`: https://quay.io/repository/biocontainers/ucsc-websync?tab=tags


.. raw:: html

    <script>
        var package = "ucsc-websync";
        var versions = ["377","377","377","366"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ucsc-websync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ucsc-websync/README.html