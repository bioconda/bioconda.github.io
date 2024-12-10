:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mmft'
.. highlight: bash

mmft
====

.. conda:recipe:: mmft
   :replaces_section_title:
   :noindex:

   Max\'s minimal fasta toolkit

   :homepage: https://github.com/ARU-life-sciences/mmft
   :license: MIT
   :recipe: /`mmft <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmft>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mmft/meta.yaml>`_

   


.. conda:package:: mmft

   |downloads_mmft| |docker_mmft|

   :versions:
      
      

      ``0.2.1-0``

      

   
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

      mamba install mmft

   and update with::

      mamba update mmft

  To create a new environment, run::

      mamba create --name myenvname mmft

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mmft:<tag>

   (see `mmft/tags`_ for valid values for ``<tag>``)


.. |downloads_mmft| image:: https://img.shields.io/conda/dn/bioconda/mmft.svg?style=flat
   :target: https://anaconda.org/bioconda/mmft
   :alt:   (downloads)
.. |docker_mmft| image:: https://quay.io/repository/biocontainers/mmft/status
   :target: https://quay.io/repository/biocontainers/mmft
.. _`mmft/tags`: https://quay.io/repository/biocontainers/mmft?tab=tags


.. raw:: html

    <script>
        var package = "mmft";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mmft/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mmft/README.html