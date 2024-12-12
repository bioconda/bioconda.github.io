:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'weeder'
.. highlight: bash

weeder
======

.. conda:recipe:: weeder
   :replaces_section_title:
   :noindex:

   Motif \(transcription factor binding sites\) discovery in sequences from coregulated genes of a single species. This is a new Weeder release rewritten to be faster and optimized for large ChIP\-Seq data.

   :homepage: http://159.149.160.51/modtools/
   :license: GPL3
   :recipe: /`weeder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weeder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/weeder/meta.yaml>`_
   :links: biotools: :biotools:`weeder`, doi: :doi:`10.1002/0471250953.bi0211s47`

   


.. conda:package:: weeder

   |downloads_weeder| |docker_weeder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.0-10</code>,  <code>2.0-9</code>,  <code>2.0-8</code>,  <code>2.0-7</code>,  <code>2.0-6</code>,  <code>2.0-5</code>,  <code>2.0-4</code>,  <code>2.0-3</code>,  <code>2.0-2</code>,  </span></summary>
      

      ``2.0-10``,  ``2.0-9``,  ``2.0-8``,  ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends python: 
   :requirements:

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install weeder

   and update with::

      mamba update weeder

  To create a new environment, run::

      mamba create --name myenvname weeder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/weeder:<tag>

   (see `weeder/tags`_ for valid values for ``<tag>``)


.. |downloads_weeder| image:: https://img.shields.io/conda/dn/bioconda/weeder.svg?style=flat
   :target: https://anaconda.org/bioconda/weeder
   :alt:   (downloads)
.. |docker_weeder| image:: https://quay.io/repository/biocontainers/weeder/status
   :target: https://quay.io/repository/biocontainers/weeder
.. _`weeder/tags`: https://quay.io/repository/biocontainers/weeder?tab=tags


.. raw:: html

    <script>
        var package = "weeder";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>





Notes
-----
Includes a simple wrapper script to be able to run weeder from any directory. It passes arguments transparently to the weeder2 executable.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/weeder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/weeder/README.html