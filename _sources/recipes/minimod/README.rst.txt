:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minimod'
.. highlight: bash

minimod
=======

.. conda:recipe:: minimod
   :replaces_section_title:
   :noindex:

   A bioinformatics tool for viewing and calculating base modification frequencies from BAM files

   :homepage: https://github.com/warp9seq/minimod
   :license: MIT
   :recipe: /`minimod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minimod/meta.yaml>`_

   


.. conda:package:: minimod

   |downloads_minimod| |docker_minimod|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends zlib: 
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

      mamba install minimod

   and update with::

      mamba update minimod

  To create a new environment, run::

      mamba create --name myenvname minimod

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/minimod:<tag>

   (see `minimod/tags`_ for valid values for ``<tag>``)


.. |downloads_minimod| image:: https://img.shields.io/conda/dn/bioconda/minimod.svg?style=flat
   :target: https://anaconda.org/bioconda/minimod
   :alt:   (downloads)
.. |docker_minimod| image:: https://quay.io/repository/biocontainers/minimod/status
   :target: https://quay.io/repository/biocontainers/minimod
.. _`minimod/tags`: https://quay.io/repository/biocontainers/minimod?tab=tags


.. raw:: html

    <script>
        var package = "minimod";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minimod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minimod/README.html