:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'axe-demultiplexer'
.. highlight: bash

axe-demultiplexer
=================

.. conda:recipe:: axe-demultiplexer
   :replaces_section_title:
   :noindex:

   Rapid competitive read demulitplexer. Made with tries.

   :homepage: https://github.com/kdmurray91/axe
   :documentation: https://axe-demultiplexer.readthedocs.io/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`axe-demultiplexer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axe-demultiplexer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/axe-demultiplexer/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty432`

   


.. conda:package:: axe-demultiplexer

   |downloads_axe-demultiplexer| |docker_axe-demultiplexer|

   :versions:
      
      

      ``0.3.3-0``

      

   
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libgcc: ``>=13``
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

      mamba install axe-demultiplexer

   and update with::

      mamba update axe-demultiplexer

  To create a new environment, run::

      mamba create --name myenvname axe-demultiplexer

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/axe-demultiplexer:<tag>

   (see `axe-demultiplexer/tags`_ for valid values for ``<tag>``)


.. |downloads_axe-demultiplexer| image:: https://img.shields.io/conda/dn/bioconda/axe-demultiplexer.svg?style=flat
   :target: https://anaconda.org/bioconda/axe-demultiplexer
   :alt:   (downloads)
.. |docker_axe-demultiplexer| image:: https://quay.io/repository/biocontainers/axe-demultiplexer/status
   :target: https://quay.io/repository/biocontainers/axe-demultiplexer
.. _`axe-demultiplexer/tags`: https://quay.io/repository/biocontainers/axe-demultiplexer?tab=tags


.. raw:: html

    <script>
        var package = "axe-demultiplexer";
        var versions = ["0.3.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/axe-demultiplexer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/axe-demultiplexer/README.html