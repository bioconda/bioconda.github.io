:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emu'
.. highlight: bash

emu
===

.. conda:recipe:: emu
   :replaces_section_title:
   :noindex:

   Emu is a relative abundance estimator for 16s genomic data.

   :homepage: https://gitlab.com/treangenlab/emu
   :license: MIT
   :recipe: /`emu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emu/meta.yaml>`_

   


.. conda:package:: emu

   |downloads_emu| |docker_emu|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.4.5-0</code>,  <code>3.4.4-1</code>,  <code>3.4.4-0</code>,  <code>3.4.3-0</code>,  <code>3.4.2-0</code>,  <code>3.4.1-0</code>,  <code>3.4.0-0</code>,  <code>3.3.1-1</code>,  <code>3.3.1-0</code>,  </span></summary>
      

      ``3.4.5-0``,  ``3.4.4-1``,  ``3.4.4-0``,  ``3.4.3-0``,  ``3.4.2-0``,  ``3.4.1-0``,  ``3.4.0-0``,  ``3.3.1-1``,  ``3.3.1-0``,  ``3.3.0-0``,  ``3.2.0-0``,  ``3.1.0-0``,  ``3.0.0-0``,  ``2.0.1-2``,  ``2.0.1-1``,  ``2.0.1-0``,  ``2.0.0-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioawk: 
   :depends biopython: 
   :depends flatten-dict: 
   :depends importlib-metadata: 
   :depends minimap2: ``>=2.22``
   :depends numpy: ``>=1.11``
   :depends pandas: ``>=1.1.3``
   :depends pysam: ``>=0.15``
   :depends python: ``>=3.6``
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

      mamba install emu

   and update with::

      mamba update emu

  To create a new environment, run::

      mamba create --name myenvname emu

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/emu:<tag>

   (see `emu/tags`_ for valid values for ``<tag>``)


.. |downloads_emu| image:: https://img.shields.io/conda/dn/bioconda/emu.svg?style=flat
   :target: https://anaconda.org/bioconda/emu
   :alt:   (downloads)
.. |docker_emu| image:: https://quay.io/repository/biocontainers/emu/status
   :target: https://quay.io/repository/biocontainers/emu
.. _`emu/tags`: https://quay.io/repository/biocontainers/emu?tab=tags


.. raw:: html

    <script>
        var package = "emu";
        var versions = ["3.4.5","3.4.4","3.4.4","3.4.3","3.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emu/README.html