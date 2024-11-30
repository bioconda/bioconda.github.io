:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slow5curl'
.. highlight: bash

slow5curl
=========

.. conda:recipe:: slow5curl
   :replaces_section_title:
   :noindex:

   Tool for accessing remote BLOW5 files.

   :homepage: https://github.com/BonsonW/slow5curl
   :license: MIT
   :recipe: /`slow5curl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5curl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slow5curl/meta.yaml>`_

   slow5curl is a command line tool for fetching reads from remote BLOW5 files\, which is built on top of slow5lib and libcurl.


.. conda:package:: slow5curl

   |downloads_slow5curl| |docker_slow5curl|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``

      

   
   :depends curl: 
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
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

      mamba install slow5curl

   and update with::

      mamba update slow5curl

  To create a new environment, run::

      mamba create --name myenvname slow5curl

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slow5curl:<tag>

   (see `slow5curl/tags`_ for valid values for ``<tag>``)


.. |downloads_slow5curl| image:: https://img.shields.io/conda/dn/bioconda/slow5curl.svg?style=flat
   :target: https://anaconda.org/bioconda/slow5curl
   :alt:   (downloads)
.. |docker_slow5curl| image:: https://quay.io/repository/biocontainers/slow5curl/status
   :target: https://quay.io/repository/biocontainers/slow5curl
.. _`slow5curl/tags`: https://quay.io/repository/biocontainers/slow5curl?tab=tags


.. raw:: html

    <script>
        var package = "slow5curl";
        var versions = ["0.2.1","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slow5curl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slow5curl/README.html