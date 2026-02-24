:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slacken'
.. highlight: bash

slacken
=======

.. conda:recipe:: slacken
   :replaces_section_title:
   :noindex:

   Slacken is a very scalable implementation of the Kraken 2 metagenomic classification method\, based on Apache Spark.

   :homepage: https://github.com/JNP-Solutions/Slacken
   :documentation: https://github.com/JNP-Solutions/Slacken/blob/v2.0.0/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`slacken <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slacken>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slacken/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqaf076`

   


.. conda:package:: slacken

   |downloads_slacken| |docker_slacken|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends openjdk: ``>=17,<22``
   :depends pyspark: ``>=3.5.0,<4.0.0``
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

      mamba install slacken

   and update with::

      mamba update slacken

  To create a new environment, run::

      mamba create --name myenvname slacken

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/slacken:<tag>

   (see `slacken/tags`_ for valid values for ``<tag>``)


.. |downloads_slacken| image:: https://img.shields.io/conda/dn/bioconda/slacken.svg?style=flat
   :target: https://anaconda.org/bioconda/slacken
   :alt:   (downloads)
.. |docker_slacken| image:: https://quay.io/repository/biocontainers/slacken/status
   :target: https://quay.io/repository/biocontainers/slacken
.. _`slacken/tags`: https://quay.io/repository/biocontainers/slacken?tab=tags


.. raw:: html

    <script>
        var package = "slacken";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slacken/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slacken/README.html