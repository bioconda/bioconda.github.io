:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'chunked-scatter'
.. highlight: bash

chunked-scatter
===============

.. conda:recipe:: chunked-scatter
   :replaces_section_title:
   :noindex:

   Chunk and scatter the regions in a bed or sequence dict file

   :homepage: https://github.com/biowdl/chunked-scatter
   :license: MIT / MIT
   :recipe: /`chunked-scatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chunked-scatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/chunked-scatter/meta.yaml>`_

   


.. conda:package:: chunked-scatter

   |downloads_chunked-scatter| |docker_chunked-scatter|

   :versions:
      
      

      ``1.0.0-0``,  ``0.2.0-0``,  ``0.1.0-0``

      

   
   :depends pysam: ``>=0.11.2``
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install chunked-scatter

   and update with::

      mamba update chunked-scatter

  To create a new environment, run::

      mamba create --name myenvname chunked-scatter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/chunked-scatter:<tag>

   (see `chunked-scatter/tags`_ for valid values for ``<tag>``)


.. |downloads_chunked-scatter| image:: https://img.shields.io/conda/dn/bioconda/chunked-scatter.svg?style=flat
   :target: https://anaconda.org/bioconda/chunked-scatter
   :alt:   (downloads)
.. |docker_chunked-scatter| image:: https://quay.io/repository/biocontainers/chunked-scatter/status
   :target: https://quay.io/repository/biocontainers/chunked-scatter
.. _`chunked-scatter/tags`: https://quay.io/repository/biocontainers/chunked-scatter?tab=tags


.. raw:: html

    <script>
        var package = "chunked-scatter";
        var versions = ["1.0.0","0.2.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/chunked-scatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/chunked-scatter/README.html