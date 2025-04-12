:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lexicmap'
.. highlight: bash

lexicmap
========

.. conda:recipe:: lexicmap
   :replaces_section_title:
   :noindex:

   efficient sequence alignment against millions of prokaryotic genomes

   :homepage: https://github.com/shenwei356/LexicMap
   :license: MIT
   :recipe: /`lexicmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexicmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lexicmap/meta.yaml>`_

   


.. conda:package:: lexicmap

   |downloads_lexicmap| |docker_lexicmap|

   :versions:
      
      

      ``0.7.0-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
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

      mamba install lexicmap

   and update with::

      mamba update lexicmap

  To create a new environment, run::

      mamba create --name myenvname lexicmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lexicmap:<tag>

   (see `lexicmap/tags`_ for valid values for ``<tag>``)


.. |downloads_lexicmap| image:: https://img.shields.io/conda/dn/bioconda/lexicmap.svg?style=flat
   :target: https://anaconda.org/bioconda/lexicmap
   :alt:   (downloads)
.. |docker_lexicmap| image:: https://quay.io/repository/biocontainers/lexicmap/status
   :target: https://quay.io/repository/biocontainers/lexicmap
.. _`lexicmap/tags`: https://quay.io/repository/biocontainers/lexicmap?tab=tags


.. raw:: html

    <script>
        var package = "lexicmap";
        var versions = ["0.7.0","0.6.1","0.6.0","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lexicmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lexicmap/README.html