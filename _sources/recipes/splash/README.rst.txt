:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'splash'
.. highlight: bash

splash
======

.. conda:recipe:: splash
   :replaces_section_title:
   :noindex:

   Unsupervised and reference\-free unifying framework to discover regulated sequence variation through statistical analysis of k\-mer composition in both DNA and RNA sequence.

   :homepage: https://github.com/refresh-bio/splash
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`splash <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splash>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/splash/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-024-02381-2`

   


.. conda:package:: splash

   |downloads_splash| |docker_splash|

   :versions:
      
      

      ``2.11.0-0``

      

   
   :depends python: ``>=3.13,<3.14.0a0``
   :depends python_abi: ``3.13.* *_cp313``
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

      mamba install splash

   and update with::

      mamba update splash

  To create a new environment, run::

      mamba create --name myenvname splash

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/splash:<tag>

   (see `splash/tags`_ for valid values for ``<tag>``)


.. |downloads_splash| image:: https://img.shields.io/conda/dn/bioconda/splash.svg?style=flat
   :target: https://anaconda.org/bioconda/splash
   :alt:   (downloads)
.. |docker_splash| image:: https://quay.io/repository/biocontainers/splash/status
   :target: https://quay.io/repository/biocontainers/splash
.. _`splash/tags`: https://quay.io/repository/biocontainers/splash?tab=tags


.. raw:: html

    <script>
        var package = "splash";
        var versions = ["2.11.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/splash/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/splash/README.html