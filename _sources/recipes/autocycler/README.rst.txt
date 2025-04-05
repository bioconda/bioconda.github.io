:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autocycler'
.. highlight: bash

autocycler
==========

.. conda:recipe:: autocycler
   :replaces_section_title:
   :noindex:

   A tool for generating consensus long\-read assemblies for bacterial genomes.

   :homepage: https://github.com/rrwick/Autocycler
   :documentation: https://github.com/rrwick/Autocycler/wiki
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`autocycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autocycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autocycler/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.14642607`

   


.. conda:package:: autocycler

   |downloads_autocycler| |docker_autocycler|

   :versions:
      
      

      ``0.3.0-0``,  ``0.2.1-0``

      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
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

      mamba install autocycler

   and update with::

      mamba update autocycler

  To create a new environment, run::

      mamba create --name myenvname autocycler

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/autocycler:<tag>

   (see `autocycler/tags`_ for valid values for ``<tag>``)


.. |downloads_autocycler| image:: https://img.shields.io/conda/dn/bioconda/autocycler.svg?style=flat
   :target: https://anaconda.org/bioconda/autocycler
   :alt:   (downloads)
.. |docker_autocycler| image:: https://quay.io/repository/biocontainers/autocycler/status
   :target: https://quay.io/repository/biocontainers/autocycler
.. _`autocycler/tags`: https://quay.io/repository/biocontainers/autocycler?tab=tags


.. raw:: html

    <script>
        var package = "autocycler";
        var versions = ["0.3.0","0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autocycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autocycler/README.html