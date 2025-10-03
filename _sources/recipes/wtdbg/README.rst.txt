:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'wtdbg'
.. highlight: bash

wtdbg
=====

.. conda:recipe:: wtdbg
   :replaces_section_title:
   :noindex:

   Wtdbg2\: A fuzzy Bruijn graph approach to long noisy reads assembly.

   :homepage: https://github.com/ruanjue/wtdbg2
   :documentation: https://github.com/ruanjue/wtdbg2/blob/v2.5/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`wtdbg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtdbg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/wtdbg/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0669-3`, biotools: :biotools:`wtdbg2`, usegalaxy-eu: :usegalaxy-eu:`wtdbg`

   


.. conda:package:: wtdbg

   |downloads_wtdbg| |docker_wtdbg|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.5-6</code>,  <code>2.5-5</code>,  <code>2.5-4</code>,  <code>2.5-3</code>,  <code>2.5-2</code>,  <code>2.5-1</code>,  <code>2.5-0</code>,  <code>2.3-0</code>,  <code>2.1-0</code>,  </span></summary>
      

      ``2.5-6``,  ``2.5-5``,  ``2.5-4``,  ``2.5-3``,  ``2.5-2``,  ``2.5-1``,  ``2.5-0``,  ``2.3-0``,  ``2.1-0``,  ``2.0-0``,  ``1.2.8.1-2``,  ``1.2.8.1-0``

      
      .. raw:: html

         </details>
      

   
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

      mamba install wtdbg

   and update with::

      mamba update wtdbg

  To create a new environment, run::

      mamba create --name myenvname wtdbg

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/wtdbg:<tag>

   (see `wtdbg/tags`_ for valid values for ``<tag>``)


.. |downloads_wtdbg| image:: https://img.shields.io/conda/dn/bioconda/wtdbg.svg?style=flat
   :target: https://anaconda.org/bioconda/wtdbg
   :alt:   (downloads)
.. |docker_wtdbg| image:: https://quay.io/repository/biocontainers/wtdbg/status
   :target: https://quay.io/repository/biocontainers/wtdbg
.. _`wtdbg/tags`: https://quay.io/repository/biocontainers/wtdbg?tab=tags


.. raw:: html

    <script>
        var package = "wtdbg";
        var versions = ["2.5","2.5","2.5","2.5","2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/wtdbg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/wtdbg/README.html