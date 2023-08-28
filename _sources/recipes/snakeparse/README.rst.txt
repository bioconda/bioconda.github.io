:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'snakeparse'
.. highlight: bash

snakeparse
==========

.. conda:recipe:: snakeparse
   :replaces_section_title:
   :noindex:

   Making Snakemake workflows into full\-fledged command line tools since 1999.

   :homepage: https://github.com/nh13/snakeparse
   :license: MIT
   :recipe: /`snakeparse <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeparse>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/snakeparse/meta.yaml>`_

   


.. conda:package:: snakeparse

   |downloads_snakeparse| |docker_snakeparse|

   :versions:
      
      

      ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``,  ``0.0.1-0``

      

   
   :depends pyhocon: ``>=0.3.38``
   :depends python: ``>=3.6``
   :depends pyyaml: ``>=3.12``
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

      mamba install snakeparse

   and update with::

      mamba update snakeparse

  To create a new environment, run::

      mamba create --name myenvname snakeparse

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/snakeparse:<tag>

   (see `snakeparse/tags`_ for valid values for ``<tag>``)


.. |downloads_snakeparse| image:: https://img.shields.io/conda/dn/bioconda/snakeparse.svg?style=flat
   :target: https://anaconda.org/bioconda/snakeparse
   :alt:   (downloads)
.. |docker_snakeparse| image:: https://quay.io/repository/biocontainers/snakeparse/status
   :target: https://quay.io/repository/biocontainers/snakeparse
.. _`snakeparse/tags`: https://quay.io/repository/biocontainers/snakeparse?tab=tags


.. raw:: html

    <script>
        var package = "snakeparse";
        var versions = ["0.1.0","0.1.0","0.1.0","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/snakeparse/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/snakeparse/README.html