:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwtk'
.. highlight: bash

bwtk
====

.. conda:recipe:: bwtk
   :replaces_section_title:
   :noindex:

   A bigWig toolkit.

   :homepage: https://github.com/bjmt/bwtk
   :documentation: https://github.com/bjmt/bwtk/blob/v1.8.1/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`bwtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwtk/meta.yaml>`_

   


.. conda:package:: bwtk

   |downloads_bwtk| |docker_bwtk|

   :versions:
      
      

      ``1.8.1-0``

      

   
   :depends libbigwig: ``>=0.4.8``
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

      mamba install bwtk

   and update with::

      mamba update bwtk

  To create a new environment, run::

      mamba create --name myenvname bwtk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bwtk:<tag>

   (see `bwtk/tags`_ for valid values for ``<tag>``)


.. |downloads_bwtk| image:: https://img.shields.io/conda/dn/bioconda/bwtk.svg?style=flat
   :target: https://anaconda.org/bioconda/bwtk
   :alt:   (downloads)
.. |docker_bwtk| image:: https://quay.io/repository/biocontainers/bwtk/status
   :target: https://quay.io/repository/biocontainers/bwtk
.. _`bwtk/tags`: https://quay.io/repository/biocontainers/bwtk?tab=tags


.. raw:: html

    <script>
        var package = "bwtk";
        var versions = ["1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwtk/README.html