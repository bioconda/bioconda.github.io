:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plast'
.. highlight: bash

plast
=====

.. conda:recipe:: plast
   :replaces_section_title:
   :noindex:

   PLAST\: Parallel Local Alignment Search Tool

   :homepage: https://github.com/PLAST-software/plast-library
   :license: AGPL-3.0-or-later
   :recipe: /`plast <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plast>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plast/meta.yaml>`_

   PLAST is a tool for high\-performance local alignment search \(DNA\/protein\)\, 
   parallellized and optimized to exploit SIMD \/ multithreading architectures.



.. conda:package:: plast

   |downloads_plast| |docker_plast|

   :versions:
      
      

      ``2.3.2-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install plast

   and update with::

      mamba update plast

  To create a new environment, run::

      mamba create --name myenvname plast

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/plast:<tag>

   (see `plast/tags`_ for valid values for ``<tag>``)


.. |downloads_plast| image:: https://img.shields.io/conda/dn/bioconda/plast.svg?style=flat
   :target: https://anaconda.org/bioconda/plast
   :alt:   (downloads)
.. |docker_plast| image:: https://quay.io/repository/biocontainers/plast/status
   :target: https://quay.io/repository/biocontainers/plast
.. _`plast/tags`: https://quay.io/repository/biocontainers/plast?tab=tags


.. raw:: html

    <script>
        var package = "plast";
        var versions = ["2.3.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plast/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plast/README.html