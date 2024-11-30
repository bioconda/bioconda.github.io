:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'markov_clustering'
.. highlight: bash

markov_clustering
=================

.. conda:recipe:: markov_clustering
   :replaces_section_title:
   :noindex:

   This module implements the MCL algorithm in python.

   :homepage: https://github.com/GuyAllard/markov_clustering
   :license: MIT / MIT
   :recipe: /`markov_clustering <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_clustering>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/markov_clustering/meta.yaml>`_

   


.. conda:package:: markov_clustering

   |downloads_markov_clustering| |docker_markov_clustering|

   :versions:
      
      

      ``0.0.6-0``

      

   
   :depends python: ``>=3``
   :depends scikit-learn: 
   :depends scipy: ``>=0.19.0``
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

      mamba install markov_clustering

   and update with::

      mamba update markov_clustering

  To create a new environment, run::

      mamba create --name myenvname markov_clustering

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/markov_clustering:<tag>

   (see `markov_clustering/tags`_ for valid values for ``<tag>``)


.. |downloads_markov_clustering| image:: https://img.shields.io/conda/dn/bioconda/markov_clustering.svg?style=flat
   :target: https://anaconda.org/bioconda/markov_clustering
   :alt:   (downloads)
.. |docker_markov_clustering| image:: https://quay.io/repository/biocontainers/markov_clustering/status
   :target: https://quay.io/repository/biocontainers/markov_clustering
.. _`markov_clustering/tags`: https://quay.io/repository/biocontainers/markov_clustering?tab=tags


.. raw:: html

    <script>
        var package = "markov_clustering";
        var versions = ["0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/markov_clustering/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/markov_clustering/README.html