:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pangene'
.. highlight: bash

pangene
=======

.. conda:recipe:: pangene
   :replaces_section_title:
   :noindex:

   Pangene is a command\-line tool to construct a pangenome gene graph.

   :homepage: https://github.com/lh3/pangene
   :license: Unknown
   :recipe: /`pangene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pangene/meta.yaml>`_

   


.. conda:package:: pangene

   |downloads_pangene| |docker_pangene|

   :versions:
      
      

      ``r231-0``

      

   
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

      mamba install pangene

   and update with::

      mamba update pangene

  To create a new environment, run::

      mamba create --name myenvname pangene

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pangene:<tag>

   (see `pangene/tags`_ for valid values for ``<tag>``)


.. |downloads_pangene| image:: https://img.shields.io/conda/dn/bioconda/pangene.svg?style=flat
   :target: https://anaconda.org/bioconda/pangene
   :alt:   (downloads)
.. |docker_pangene| image:: https://quay.io/repository/biocontainers/pangene/status
   :target: https://quay.io/repository/biocontainers/pangene
.. _`pangene/tags`: https://quay.io/repository/biocontainers/pangene?tab=tags


.. raw:: html

    <script>
        var package = "pangene";
        var versions = ["r231"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pangene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pangene/README.html