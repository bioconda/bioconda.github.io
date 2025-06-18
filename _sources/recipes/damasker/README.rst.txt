:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'damasker'
.. highlight: bash

damasker
========

.. conda:recipe:: damasker
   :replaces_section_title:
   :noindex:

   DAMASKER\: Module to determine where repeats are and make soft\-masks of said.

   :homepage: https://github.com/thegenemyers/DAMASKER
   :license: Custom
   :recipe: /`damasker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damasker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damasker/meta.yaml>`_

   


.. conda:package:: damasker

   |downloads_damasker| |docker_damasker|

   :versions:
      
      

      ``1.0p1-8``,  ``1.0p1-7``,  ``1.0p1-6``,  ``1.0p1-5``,  ``1.0p1-4``,  ``1.0p1-3``,  ``1.0p1-2``,  ``1.0p1-1``,  ``1.0p1-0``

      

   
   :depends libgcc: ``>=13``
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

      mamba install damasker

   and update with::

      mamba update damasker

  To create a new environment, run::

      mamba create --name myenvname damasker

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/damasker:<tag>

   (see `damasker/tags`_ for valid values for ``<tag>``)


.. |downloads_damasker| image:: https://img.shields.io/conda/dn/bioconda/damasker.svg?style=flat
   :target: https://anaconda.org/bioconda/damasker
   :alt:   (downloads)
.. |docker_damasker| image:: https://quay.io/repository/biocontainers/damasker/status
   :target: https://quay.io/repository/biocontainers/damasker
.. _`damasker/tags`: https://quay.io/repository/biocontainers/damasker?tab=tags


.. raw:: html

    <script>
        var package = "damasker";
        var versions = ["1.0p1","1.0p1","1.0p1","1.0p1","1.0p1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damasker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damasker/README.html