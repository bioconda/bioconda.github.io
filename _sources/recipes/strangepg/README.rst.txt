:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strangepg'
.. highlight: bash

strangepg
=========

.. conda:recipe:: strangepg
   :replaces_section_title:
   :noindex:

   Strange pangenome\-scale interactive graph visualizer

   :homepage: https://github.com/qwx9/strangepg
   :license: MIT / MIT
   :recipe: /`strangepg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strangepg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strangepg/meta.yaml>`_

   


.. conda:package:: strangepg

   |downloads_strangepg| |docker_strangepg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.9.2-0</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.20-0</code>,  <code>0.8.19.3-0</code>,  <code>0.8.18.1-0</code>,  <code>0.8.17-0</code>,  <code>0.8.16-0</code>,  <code>0.8.15-0</code>,  </span></summary>
      

      ``0.9.2-0``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.20-0``,  ``0.8.19.3-0``,  ``0.8.18.1-0``,  ``0.8.17-0``,  ``0.8.16-0``,  ``0.8.15-0``,  ``0.8.14-0``,  ``0.8.13-0``,  ``0.8.12-0``,  ``0.8.11-0``,  ``0.8.10-0``,  ``0.8.9-0``,  ``0.8.8-0``,  ``0.8.7-0``,  ``0.8.6-0``,  ``0.8.5-1``,  ``0.8.5-0``,  ``0.8.4-0``,  ``0.8.3-0``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libegl: ``>=1.7.0,<2.0a0``
   :depends libgcc: ``>=13``
   :depends libgles: ``>=1.7.0,<2.0a0``
   :depends libxcb: 
   :depends xorg-libx11: ``>=1.8.12,<2.0a0``
   :depends xorg-libxau: 
   :depends xorg-libxcursor: ``>=1.2.3,<2.0a0``
   :depends xorg-libxdmcp: 
   :depends xorg-libxext: 
   :depends xorg-libxfixes: 
   :depends xorg-libxi: ``>=1.8.2,<2.0a0``
   :depends xorg-libxrandr: 
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

      mamba install strangepg

   and update with::

      mamba update strangepg

  To create a new environment, run::

      mamba create --name myenvname strangepg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/strangepg:<tag>

   (see `strangepg/tags`_ for valid values for ``<tag>``)


.. |downloads_strangepg| image:: https://img.shields.io/conda/dn/bioconda/strangepg.svg?style=flat
   :target: https://anaconda.org/bioconda/strangepg
   :alt:   (downloads)
.. |docker_strangepg| image:: https://quay.io/repository/biocontainers/strangepg/status
   :target: https://quay.io/repository/biocontainers/strangepg
.. _`strangepg/tags`: https://quay.io/repository/biocontainers/strangepg?tab=tags


.. raw:: html

    <script>
        var package = "strangepg";
        var versions = ["0.9.2","0.9.1","0.9.0","0.8.20","0.8.19.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strangepg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strangepg/README.html