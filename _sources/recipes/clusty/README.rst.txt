:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clusty'
.. highlight: bash

clusty
======

.. conda:recipe:: clusty
   :replaces_section_title:
   :noindex:

   Clusty is a tool for large\-scale data clustering.

   :homepage: https://github.com/refresh-bio/clusty
   :documentation: https://github.com/refresh-bio/clusty/blob/v1.2.0/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`clusty <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusty>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clusty/meta.yaml>`_

   


.. conda:package:: clusty

   |downloads_clusty| |docker_clusty|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
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

      mamba install clusty

   and update with::

      mamba update clusty

  To create a new environment, run::

      mamba create --name myenvname clusty

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/clusty:<tag>

   (see `clusty/tags`_ for valid values for ``<tag>``)


.. |downloads_clusty| image:: https://img.shields.io/conda/dn/bioconda/clusty.svg?style=flat
   :target: https://anaconda.org/bioconda/clusty
   :alt:   (downloads)
.. |docker_clusty| image:: https://quay.io/repository/biocontainers/clusty/status
   :target: https://quay.io/repository/biocontainers/clusty
.. _`clusty/tags`: https://quay.io/repository/biocontainers/clusty?tab=tags


.. raw:: html

    <script>
        var package = "clusty";
        var versions = ["1.2.0","1.1.5","1.1.4","1.1.1","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clusty/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clusty/README.html