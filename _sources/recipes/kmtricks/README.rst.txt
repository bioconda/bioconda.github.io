:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmtricks'
.. highlight: bash

kmtricks
========

.. conda:recipe:: kmtricks
   :replaces_section_title:
   :noindex:

   A k\-mer matrix framework

   :homepage: https://github.com/tlemane/kmtricks
   :documentation: https://github.com/tlemane/kmtricks/wiki
   
   :developer docs: https://github.com/tlemane/kmtricks/
   :license: AGPL / AGPL-3.0
   :recipe: /`kmtricks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmtricks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmtricks/meta.yaml>`_

   kmtricks allows for efficient construction of k\-mer and Bloom filter matrices from large read collections


.. conda:package:: kmtricks

   |downloads_kmtricks| |docker_kmtricks|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
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

      mamba install kmtricks

   and update with::

      mamba update kmtricks

  To create a new environment, run::

      mamba create --name myenvname kmtricks

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmtricks:<tag>

   (see `kmtricks/tags`_ for valid values for ``<tag>``)


.. |downloads_kmtricks| image:: https://img.shields.io/conda/dn/bioconda/kmtricks.svg?style=flat
   :target: https://anaconda.org/bioconda/kmtricks
   :alt:   (downloads)
.. |docker_kmtricks| image:: https://quay.io/repository/biocontainers/kmtricks/status
   :target: https://quay.io/repository/biocontainers/kmtricks
.. _`kmtricks/tags`: https://quay.io/repository/biocontainers/kmtricks?tab=tags


.. raw:: html

    <script>
        var package = "kmtricks";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmtricks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmtricks/README.html