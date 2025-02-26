:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kmcp'
.. highlight: bash

kmcp
====

.. conda:recipe:: kmcp
   :replaces_section_title:
   :noindex:

   accurate metagenomic profiling of both prokaryotic and viral populations by pseudo\-mapping

   :homepage: https://github.com/shenwei356/kmcp
   :license: MIT
   :recipe: /`kmcp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmcp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kmcp/meta.yaml>`_

   


.. conda:package:: kmcp

   |downloads_kmcp| |docker_kmcp|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.4-1</code>,  <code>0.9.4-0</code>,  <code>0.9.3-0</code>,  <code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-0</code>,  <code>0.8.2-1</code>,  <code>0.8.2-0</code>,  </span></summary>
      

      ``0.9.4-1``,  ``0.9.4-0``,  ``0.9.3-0``,  ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.3-0``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install kmcp

   and update with::

      mamba update kmcp

  To create a new environment, run::

      mamba create --name myenvname kmcp

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/kmcp:<tag>

   (see `kmcp/tags`_ for valid values for ``<tag>``)


.. |downloads_kmcp| image:: https://img.shields.io/conda/dn/bioconda/kmcp.svg?style=flat
   :target: https://anaconda.org/bioconda/kmcp
   :alt:   (downloads)
.. |docker_kmcp| image:: https://quay.io/repository/biocontainers/kmcp/status
   :target: https://quay.io/repository/biocontainers/kmcp
.. _`kmcp/tags`: https://quay.io/repository/biocontainers/kmcp?tab=tags


.. raw:: html

    <script>
        var package = "kmcp";
        var versions = ["0.9.4","0.9.4","0.9.3","0.9.2","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kmcp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kmcp/README.html