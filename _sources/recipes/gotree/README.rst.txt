:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gotree'
.. highlight: bash

gotree
======

.. conda:recipe:: gotree
   :replaces_section_title:
   :noindex:

   gotree is a set of command line tools to manipulate phylogenetic trees.

   :homepage: https://github.com/evolbioinfo/gotree
   :documentation: https://github.com/evolbioinfo/gotree/blob/v0.5.1/README.md
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`gotree <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotree>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gotree/meta.yaml>`_
   :links: doi: :doi:`10.1093/nargab/lqab075`, biotools: :biotools:`gotree`

   


.. conda:package:: gotree

   |downloads_gotree| |docker_gotree|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.5.1-0</code>,  <code>0.5.0-0</code>,  <code>0.4.5-0</code>,  <code>0.4.4-0</code>,  <code>0.4.3-2</code>,  <code>0.4.3-1</code>,  <code>0.4.3-0</code>,  <code>0.4.2-0</code>,  <code>0.4.1-1</code>,  </span></summary>
      

      ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.5-0``,  ``0.4.4-0``,  ``0.4.3-2``,  ``0.4.3-1``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-1``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.2.10-1``,  ``0.2.10-0``

      
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

      mamba install gotree

   and update with::

      mamba update gotree

  To create a new environment, run::

      mamba create --name myenvname gotree

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/gotree:<tag>

   (see `gotree/tags`_ for valid values for ``<tag>``)


.. |downloads_gotree| image:: https://img.shields.io/conda/dn/bioconda/gotree.svg?style=flat
   :target: https://anaconda.org/bioconda/gotree
   :alt:   (downloads)
.. |docker_gotree| image:: https://quay.io/repository/biocontainers/gotree/status
   :target: https://quay.io/repository/biocontainers/gotree
.. _`gotree/tags`: https://quay.io/repository/biocontainers/gotree?tab=tags


.. raw:: html

    <script>
        var package = "gotree";
        var versions = ["0.5.1","0.5.0","0.4.5","0.4.4","0.4.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gotree/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gotree/README.html