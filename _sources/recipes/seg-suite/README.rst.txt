:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seg-suite'
.. highlight: bash

seg-suite
=========

.. conda:recipe:: seg-suite
   :replaces_section_title:
   :noindex:

   The seg suite provides tools for manipulating segments\, alignments\, and annotations of sequences.

   :homepage: https://github.com/mcfrith/seg-suite
   :license: GPL-3.0-or-later
   :recipe: /`seg-suite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seg-suite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seg-suite/meta.yaml>`_

   


.. conda:package:: seg-suite

   |downloads_seg-suite| |docker_seg-suite|

   :versions:
      
      

      ``97-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install seg-suite

   and update with::

      mamba update seg-suite

  To create a new environment, run::

      mamba create --name myenvname seg-suite

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/seg-suite:<tag>

   (see `seg-suite/tags`_ for valid values for ``<tag>``)


.. |downloads_seg-suite| image:: https://img.shields.io/conda/dn/bioconda/seg-suite.svg?style=flat
   :target: https://anaconda.org/bioconda/seg-suite
   :alt:   (downloads)
.. |docker_seg-suite| image:: https://quay.io/repository/biocontainers/seg-suite/status
   :target: https://quay.io/repository/biocontainers/seg-suite
.. _`seg-suite/tags`: https://quay.io/repository/biocontainers/seg-suite?tab=tags


.. raw:: html

    <script>
        var package = "seg-suite";
        var versions = ["97"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seg-suite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seg-suite/README.html