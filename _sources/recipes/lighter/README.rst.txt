:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lighter'
.. highlight: bash

lighter
=======

.. conda:recipe:: lighter
   :replaces_section_title:
   :noindex:

   Lighter is a kmer\-based error correction method for whole genome sequencing data.

   :homepage: https://github.com/mourisl/Lighter
   :documentation: https://github.com/mourisl/Lighter/blob/v1.1.3/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`lighter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lighter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lighter/meta.yaml>`_
   :links: biotools: :biotools:`Lighter`, doi: :doi:`10.1186/s13059-014-0509-9`, usegalaxy-eu: :usegalaxy-eu:`lighter`

   


.. conda:package:: lighter

   |downloads_lighter| |docker_lighter|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.3-2</code>,  <code>1.1.3-1</code>,  <code>1.1.3-0</code>,  <code>1.1.2-6</code>,  <code>1.1.2-5</code>,  <code>1.1.2-4</code>,  <code>1.1.2-3</code>,  <code>1.1.2-2</code>,  <code>1.1.2-1</code>,  </span></summary>
      

      ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-6``,  ``1.1.2-5``,  ``1.1.2-4``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-4``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install lighter

   and update with::

      mamba update lighter

  To create a new environment, run::

      mamba create --name myenvname lighter

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lighter:<tag>

   (see `lighter/tags`_ for valid values for ``<tag>``)


.. |downloads_lighter| image:: https://img.shields.io/conda/dn/bioconda/lighter.svg?style=flat
   :target: https://anaconda.org/bioconda/lighter
   :alt:   (downloads)
.. |docker_lighter| image:: https://quay.io/repository/biocontainers/lighter/status
   :target: https://quay.io/repository/biocontainers/lighter
.. _`lighter/tags`: https://quay.io/repository/biocontainers/lighter?tab=tags


.. raw:: html

    <script>
        var package = "lighter";
        var versions = ["1.1.3","1.1.3","1.1.3","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lighter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lighter/README.html