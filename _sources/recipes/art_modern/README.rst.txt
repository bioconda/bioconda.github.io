:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'art_modern'
.. highlight: bash

art_modern
==========

.. conda:recipe:: art_modern
   :replaces_section_title:
   :noindex:

   Modernized ART simulator of diverse Next\-Generation Sequencing reads

   :homepage: https://github.com/YU-Zhejian/art_modern
   :documentation: https://github.com/YU-Zhejian/art_modern/releases/download/1.1.6/art_modern.pdf
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`art_modern <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art_modern>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art_modern/meta.yaml>`_

   


.. conda:package:: art_modern

   |downloads_art_modern| |docker_art_modern|

   :versions:
      
      

      ``1.1.6-0``,  ``1.1.4-0``

      

   
   :depends libboost: ``>=1.86,<1.87``
   :depends libboost: ``>=1.86.0,<1.87.0a0``
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
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

      mamba install art_modern

   and update with::

      mamba update art_modern

  To create a new environment, run::

      mamba create --name myenvname art_modern

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/art_modern:<tag>

   (see `art_modern/tags`_ for valid values for ``<tag>``)


.. |downloads_art_modern| image:: https://img.shields.io/conda/dn/bioconda/art_modern.svg?style=flat
   :target: https://anaconda.org/bioconda/art_modern
   :alt:   (downloads)
.. |docker_art_modern| image:: https://quay.io/repository/biocontainers/art_modern/status
   :target: https://quay.io/repository/biocontainers/art_modern
.. _`art_modern/tags`: https://quay.io/repository/biocontainers/art_modern?tab=tags


.. raw:: html

    <script>
        var package = "art_modern";
        var versions = ["1.1.6","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/art_modern/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/art_modern/README.html