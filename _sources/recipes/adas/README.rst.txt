:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'adas'
.. highlight: bash

adas
====

.. conda:recipe:: adas
   :replaces_section_title:
   :noindex:

   adas is a sequence database search engine for long sequences. It is an innovative application of Minimizer\, MinHash\, Coreset and Hierarchical Navigable Small World Graphs \(HNSW\)

   :homepage: https://github.com/jianshu93/adas
   :license: MIT
   :recipe: /`adas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/adas/meta.yaml>`_

   


.. conda:package:: adas

   |downloads_adas| |docker_adas|

   :versions:
      
      

      ``0.1.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends usearch: 
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

      mamba install adas

   and update with::

      mamba update adas

  To create a new environment, run::

      mamba create --name myenvname adas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/adas:<tag>

   (see `adas/tags`_ for valid values for ``<tag>``)


.. |downloads_adas| image:: https://img.shields.io/conda/dn/bioconda/adas.svg?style=flat
   :target: https://anaconda.org/bioconda/adas
   :alt:   (downloads)
.. |docker_adas| image:: https://quay.io/repository/biocontainers/adas/status
   :target: https://quay.io/repository/biocontainers/adas
.. _`adas/tags`: https://quay.io/repository/biocontainers/adas?tab=tags


.. raw:: html

    <script>
        var package = "adas";
        var versions = ["0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/adas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/adas/README.html