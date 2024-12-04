:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lrge'
.. highlight: bash

lrge
====

.. conda:recipe:: lrge
   :replaces_section_title:
   :noindex:

   Genome size estimation from long read overlaps

   :homepage: https://github.com/mbhall88/lrge
   :license: MIT
   :recipe: /`lrge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lrge/meta.yaml>`_

   


.. conda:package:: lrge

   |downloads_lrge| |docker_lrge|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends __glibc: ``>=2.17,<3.0.a0``
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

      mamba install lrge

   and update with::

      mamba update lrge

  To create a new environment, run::

      mamba create --name myenvname lrge

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lrge:<tag>

   (see `lrge/tags`_ for valid values for ``<tag>``)


.. |downloads_lrge| image:: https://img.shields.io/conda/dn/bioconda/lrge.svg?style=flat
   :target: https://anaconda.org/bioconda/lrge
   :alt:   (downloads)
.. |docker_lrge| image:: https://quay.io/repository/biocontainers/lrge/status
   :target: https://quay.io/repository/biocontainers/lrge
.. _`lrge/tags`: https://quay.io/repository/biocontainers/lrge?tab=tags


.. raw:: html

    <script>
        var package = "lrge";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lrge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lrge/README.html