:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphmap'
.. highlight: bash

graphmap
========

.. conda:recipe:: graphmap
   :replaces_section_title:
   :noindex:

   A highly sensitive and accurate mapper for long\, error\-prone reads.

   :homepage: https://github.com/lbcb-sci/graphmap2
   :documentation: https://www.nature.com/articles/ncomms11307
   
   :license: MIT
   :recipe: /`graphmap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphmap/meta.yaml>`_

   


.. conda:package:: graphmap

   |downloads_graphmap| |docker_graphmap|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.6.4-0</code>,  <code>0.6.3-4</code>,  <code>0.6.3-3</code>,  <code>0.6.3-2</code>,  <code>0.6.3-1</code>,  <code>0.6.3-0</code>,  <code>0.5.2-2</code>,  <code>0.5.2-1</code>,  <code>0.5.2-0</code>,  </span></summary>
      

      ``0.6.4-0``,  ``0.6.3-4``,  ``0.6.3-3``,  ``0.6.3-2``,  ``0.6.3-1``,  ``0.6.3-0``,  ``0.5.2-2``,  ``0.5.2-1``,  ``0.5.2-0``,  ``0.4.0-0``,  ``0.3.1p1-1``,  ``0.3.1p1-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends zlib: 
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

      mamba install graphmap

   and update with::

      mamba update graphmap

  To create a new environment, run::

      mamba create --name myenvname graphmap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/graphmap:<tag>

   (see `graphmap/tags`_ for valid values for ``<tag>``)


.. |downloads_graphmap| image:: https://img.shields.io/conda/dn/bioconda/graphmap.svg?style=flat
   :target: https://anaconda.org/bioconda/graphmap
   :alt:   (downloads)
.. |docker_graphmap| image:: https://quay.io/repository/biocontainers/graphmap/status
   :target: https://quay.io/repository/biocontainers/graphmap
.. _`graphmap/tags`: https://quay.io/repository/biocontainers/graphmap?tab=tags


.. raw:: html

    <script>
        var package = "graphmap";
        var versions = ["0.6.4","0.6.3","0.6.3","0.6.3","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphmap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphmap/README.html