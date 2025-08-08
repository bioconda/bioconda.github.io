:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blue-crab'
.. highlight: bash

blue-crab
=========

.. conda:recipe:: blue-crab
   :replaces_section_title:
   :noindex:

   lossless nanopore pod5 \<\=\> s\/blow5 file conversion

   :homepage: https://github.com/Psy-Fer/blue-crab
   :documentation: https://github.com/Psy-Fer/blue-crab/blob/v0.4.0/docs/cli.md
   
   :license: MIT / MIT
   :recipe: /`blue-crab <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blue-crab>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blue-crab/meta.yaml>`_

   


.. conda:package:: blue-crab

   |downloads_blue-crab| |docker_blue-crab|

   :versions:
      
      

      ``0.4.0-1``,  ``0.4.0-0``

      

   
   :depends pod5: ``>=0.3.27``
   :depends pyarrow: ``20``
   :depends pyslow5: ``>=1.3.0``
   :depends python: ``>=3.9``
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

      mamba install blue-crab

   and update with::

      mamba update blue-crab

  To create a new environment, run::

      mamba create --name myenvname blue-crab

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/blue-crab:<tag>

   (see `blue-crab/tags`_ for valid values for ``<tag>``)


.. |downloads_blue-crab| image:: https://img.shields.io/conda/dn/bioconda/blue-crab.svg?style=flat
   :target: https://anaconda.org/bioconda/blue-crab
   :alt:   (downloads)
.. |docker_blue-crab| image:: https://quay.io/repository/biocontainers/blue-crab/status
   :target: https://quay.io/repository/biocontainers/blue-crab
.. _`blue-crab/tags`: https://quay.io/repository/biocontainers/blue-crab?tab=tags


.. raw:: html

    <script>
        var package = "blue-crab";
        var versions = ["0.4.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blue-crab/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blue-crab/README.html