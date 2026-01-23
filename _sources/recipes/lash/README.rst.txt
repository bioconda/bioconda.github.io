:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lash'
.. highlight: bash

lash
====

.. conda:recipe:: lash
   :replaces_section_title:
   :noindex:

   Space\-efficient distance approximation for \(meta\)genomes\, using HyperMinHash\, HyperLogLog\, and UltraLogLog

   :homepage: https://github.com/jianshu93/lash
   :license: MIT
   :recipe: /`lash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lash/meta.yaml>`_

   


.. conda:package:: lash

   |downloads_lash| |docker_lash|

   :versions:
      
      

      

      

   
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

      mamba install lash

   and update with::

      mamba update lash

  To create a new environment, run::

      mamba create --name myenvname lash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lash:<tag>

   (see `lash/tags`_ for valid values for ``<tag>``)


.. |downloads_lash| image:: https://img.shields.io/conda/dn/bioconda/lash.svg?style=flat
   :target: https://anaconda.org/bioconda/lash
   :alt:   (downloads)
.. |docker_lash| image:: https://quay.io/repository/biocontainers/lash/status
   :target: https://quay.io/repository/biocontainers/lash
.. _`lash/tags`: https://quay.io/repository/biocontainers/lash?tab=tags


.. raw:: html

    <script>
        var package = "lash";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lash/README.html