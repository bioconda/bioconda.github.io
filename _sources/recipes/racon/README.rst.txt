:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'racon'
.. highlight: bash

racon
=====

.. conda:recipe:: racon
   :replaces_section_title:
   :noindex:

   Ultrafast consensus module for raw de novo genome assembly of long uncorrected reads.

   :homepage: https://github.com/lbcb-sci/racon
   :license: MIT
   :recipe: /`racon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/racon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/racon/meta.yaml>`_

   


.. conda:package:: racon

   |downloads_racon| |docker_racon|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.0-4</code>,  <code>1.5.0-3</code>,  <code>1.5.0-2</code>,  <code>1.5.0-1</code>,  <code>1.5.0-0</code>,  <code>1.4.20-2</code>,  <code>1.4.20-1</code>,  <code>1.4.20-0</code>,  <code>1.4.13-0</code>,  </span></summary>
      

      ``1.5.0-4``,  ``1.5.0-3``,  ``1.5.0-2``,  ``1.5.0-1``,  ``1.5.0-0``,  ``1.4.20-2``,  ``1.4.20-1``,  ``1.4.20-0``,  ``1.4.13-0``,  ``1.4.12-0``,  ``1.4.11-0``,  ``1.4.10-0``,  ``1.4.7-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.0-0``,  ``1.3.3-1``,  ``1.3.2-1``,  ``1.3.2-0``,  ``1.3.1-5``,  ``1.3.1-4``,  ``1.3.1-1``,  ``1.3.1-0``,  ``1.3.0-1``,  ``1.2.1-1``,  ``1.2.0-1``,  ``1.2.0-0``,  ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends python: 
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

      mamba install racon

   and update with::

      mamba update racon

  To create a new environment, run::

      mamba create --name myenvname racon

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/racon:<tag>

   (see `racon/tags`_ for valid values for ``<tag>``)


.. |downloads_racon| image:: https://img.shields.io/conda/dn/bioconda/racon.svg?style=flat
   :target: https://anaconda.org/bioconda/racon
   :alt:   (downloads)
.. |docker_racon| image:: https://quay.io/repository/biocontainers/racon/status
   :target: https://quay.io/repository/biocontainers/racon
.. _`racon/tags`: https://quay.io/repository/biocontainers/racon?tab=tags


.. raw:: html

    <script>
        var package = "racon";
        var versions = ["1.5.0","1.5.0","1.5.0","1.5.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/racon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/racon/README.html