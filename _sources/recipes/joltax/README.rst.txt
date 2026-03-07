:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'joltax'
.. highlight: bash

joltax
======

.. conda:recipe:: joltax
   :replaces_section_title:
   :noindex:

   JolTax is a high\-performance\, vectorized taxonomy library for Python.

   :homepage: https://github.com/SweBiTS/JolTax
   :license: MIT
   :recipe: /`joltax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/joltax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/joltax/meta.yaml>`_

   


.. conda:package:: joltax

   |downloads_joltax| |docker_joltax|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.2-0``

      

   
   :depends numpy: ``>=1.20.0``
   :depends polars: ``>=0.20.0``
   :depends python: ``>=3.8``
   :depends rapidfuzz: ``>=3.0.0``
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

      mamba install joltax

   and update with::

      mamba update joltax

  To create a new environment, run::

      mamba create --name myenvname joltax

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/joltax:<tag>

   (see `joltax/tags`_ for valid values for ``<tag>``)


.. |downloads_joltax| image:: https://img.shields.io/conda/dn/bioconda/joltax.svg?style=flat
   :target: https://anaconda.org/bioconda/joltax
   :alt:   (downloads)
.. |docker_joltax| image:: https://quay.io/repository/biocontainers/joltax/status
   :target: https://quay.io/repository/biocontainers/joltax
.. _`joltax/tags`: https://quay.io/repository/biocontainers/joltax?tab=tags


.. raw:: html

    <script>
        var package = "joltax";
        var versions = ["0.2.0","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/joltax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/joltax/README.html