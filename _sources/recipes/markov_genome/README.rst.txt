:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markov_genome'
.. highlight: bash

markov_genome
=============

.. conda:recipe:: markov_genome
   :replaces_section_title:
   :noindex:

   A Rust package for Markov chain sequence simulation.

   :homepage: https://github.com/eaasna/markov_genome
   :license: BSD-3-Clause License
   :recipe: /`markov_genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_genome/meta.yaml>`_

   


.. conda:package:: markov_genome

   |downloads_markov_genome| |docker_markov_genome|

   :versions:
      
      

      ``1.0.0-0``

      

   
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

      mamba install markov_genome

   and update with::

      mamba update markov_genome

  To create a new environment, run::

      mamba create --name myenvname markov_genome

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/markov_genome:<tag>

   (see `markov_genome/tags`_ for valid values for ``<tag>``)


.. |downloads_markov_genome| image:: https://img.shields.io/conda/dn/bioconda/markov_genome.svg?style=flat
   :target: https://anaconda.org/bioconda/markov_genome
   :alt:   (downloads)
.. |docker_markov_genome| image:: https://quay.io/repository/biocontainers/markov_genome/status
   :target: https://quay.io/repository/biocontainers/markov_genome
.. _`markov_genome/tags`: https://quay.io/repository/biocontainers/markov_genome?tab=tags


.. raw:: html

    <script>
        var package = "markov_genome";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markov_genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markov_genome/README.html