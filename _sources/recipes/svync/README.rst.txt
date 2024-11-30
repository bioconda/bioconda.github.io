:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'svync'
.. highlight: bash

svync
=====

.. conda:recipe:: svync
   :replaces_section_title:
   :noindex:

   A tool to standardize VCF files from structural variant callers

   :homepage: https://github.com/nvnieuwk/svync
   :license: MIT
   :recipe: /`svync <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svync>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/svync/meta.yaml>`_

   


.. conda:package:: svync

   |downloads_svync| |docker_svync|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends tabix: 
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

      mamba install svync

   and update with::

      mamba update svync

  To create a new environment, run::

      mamba create --name myenvname svync

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/svync:<tag>

   (see `svync/tags`_ for valid values for ``<tag>``)


.. |downloads_svync| image:: https://img.shields.io/conda/dn/bioconda/svync.svg?style=flat
   :target: https://anaconda.org/bioconda/svync
   :alt:   (downloads)
.. |docker_svync| image:: https://quay.io/repository/biocontainers/svync/status
   :target: https://quay.io/repository/biocontainers/svync
.. _`svync/tags`: https://quay.io/repository/biocontainers/svync?tab=tags


.. raw:: html

    <script>
        var package = "svync";
        var versions = ["0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/svync/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/svync/README.html