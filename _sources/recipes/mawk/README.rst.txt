:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mawk'
.. highlight: bash

mawk
====

.. conda:recipe:: mawk
   :replaces_section_title:
   :noindex:

   mawk is an interpreter for the AWK Programming Language.

   :homepage: http://invisible-island.net/mawk
   :license: Copyright (c) 2009-2014,2015 by Thomas E. Dickey
   :recipe: /`mawk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mawk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mawk/meta.yaml>`_

   


.. conda:package:: mawk

   |downloads_mawk| |docker_mawk|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.4-11</code>,  <code>1.3.4-10</code>,  <code>1.3.4-9</code>,  <code>1.3.4-8</code>,  <code>1.3.4-7</code>,  <code>1.3.4-6</code>,  <code>1.3.4-5</code>,  <code>1.3.4-4</code>,  <code>1.3.4-3</code>,  </span></summary>
      

      ``1.3.4-11``,  ``1.3.4-10``,  ``1.3.4-9``,  ``1.3.4-8``,  ``1.3.4-7``,  ``1.3.4-6``,  ``1.3.4-5``,  ``1.3.4-4``,  ``1.3.4-3``,  ``1.3.4-2``,  ``1.3.4-1``,  ``1.3.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
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

      mamba install mawk

   and update with::

      mamba update mawk

  To create a new environment, run::

      mamba create --name myenvname mawk

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/mawk:<tag>

   (see `mawk/tags`_ for valid values for ``<tag>``)


.. |downloads_mawk| image:: https://img.shields.io/conda/dn/bioconda/mawk.svg?style=flat
   :target: https://anaconda.org/bioconda/mawk
   :alt:   (downloads)
.. |docker_mawk| image:: https://quay.io/repository/biocontainers/mawk/status
   :target: https://quay.io/repository/biocontainers/mawk
.. _`mawk/tags`: https://quay.io/repository/biocontainers/mawk?tab=tags


.. raw:: html

    <script>
        var package = "mawk";
        var versions = ["1.3.4","1.3.4","1.3.4","1.3.4","1.3.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mawk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mawk/README.html