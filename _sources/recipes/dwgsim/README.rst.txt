:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dwgsim'
.. highlight: bash

dwgsim
======

.. conda:recipe:: dwgsim
   :replaces_section_title:
   :noindex:

   Whole Genome Simulator for Next\-Generation Sequencing

   :homepage: https://github.com/nh13/DWGSIM
   :license: GPL / GNU General Public License v2 (GPLv2)
   :recipe: /`dwgsim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dwgsim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dwgsim/meta.yaml>`_

   


.. conda:package:: dwgsim

   |downloads_dwgsim| |docker_dwgsim|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.13-3</code>,  <code>1.1.13-2</code>,  <code>1.1.13-1</code>,  <code>1.1.13-0</code>,  <code>1.1.11-8</code>,  <code>1.1.11-7</code>,  <code>1.1.11-6</code>,  <code>1.1.11-5</code>,  <code>1.1.11-4</code>,  </span></summary>
      

      ``1.1.13-3``,  ``1.1.13-2``,  ``1.1.13-1``,  ``1.1.13-0``,  ``1.1.11-8``,  ``1.1.11-7``,  ``1.1.11-6``,  ``1.1.11-5``,  ``1.1.11-4``,  ``1.1.11-3``,  ``1.1.11-2``,  ``1.1.11-1``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends ncurses: ``>=6.3,<7.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install dwgsim

   and update with::

      mamba update dwgsim

  To create a new environment, run::

      mamba create --name myenvname dwgsim

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/dwgsim:<tag>

   (see `dwgsim/tags`_ for valid values for ``<tag>``)


.. |downloads_dwgsim| image:: https://img.shields.io/conda/dn/bioconda/dwgsim.svg?style=flat
   :target: https://anaconda.org/bioconda/dwgsim
   :alt:   (downloads)
.. |docker_dwgsim| image:: https://quay.io/repository/biocontainers/dwgsim/status
   :target: https://quay.io/repository/biocontainers/dwgsim
.. _`dwgsim/tags`: https://quay.io/repository/biocontainers/dwgsim?tab=tags


.. raw:: html

    <script>
        var package = "dwgsim";
        var versions = ["1.1.13","1.1.13","1.1.13","1.1.13","1.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dwgsim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dwgsim/README.html