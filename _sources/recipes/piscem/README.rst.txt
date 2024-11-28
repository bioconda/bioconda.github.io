:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'piscem'
.. highlight: bash

piscem
======

.. conda:recipe:: piscem
   :replaces_section_title:
   :noindex:

   piscem is a next\-generation compacted colored de Bruijn Graph\-based indexer and mapper

   :homepage: https://github.com/COMBINE-lab/piscem
   :license: BSD 3-Clause
   :recipe: /`piscem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/piscem/meta.yaml>`_

   


.. conda:package:: piscem

   |downloads_piscem| |docker_piscem|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.11.0-0</code>,  <code>0.10.4-0</code>,  <code>0.10.3-0</code>,  <code>0.10.2-2</code>,  <code>0.10.2-1</code>,  <code>0.10.2-0</code>,  <code>0.10.1-0</code>,  <code>0.10.0-0</code>,  <code>0.9.0-1</code>,  </span></summary>
      

      ``0.11.0-0``,  ``0.10.4-0``,  ``0.10.3-0``,  ``0.10.2-2``,  ``0.10.2-1``,  ``0.10.2-0``,  ``0.10.1-0``,  ``0.10.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-2``,  ``0.6.0-1``,  ``0.6.0-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc: 
   :depends libgcc-ng: ``>=12``
   :depends libjemalloc: ``>=5.3.0``
   :depends libstdcxx: 
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
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

      mamba install piscem

   and update with::

      mamba update piscem

  To create a new environment, run::

      mamba create --name myenvname piscem

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/piscem:<tag>

   (see `piscem/tags`_ for valid values for ``<tag>``)


.. |downloads_piscem| image:: https://img.shields.io/conda/dn/bioconda/piscem.svg?style=flat
   :target: https://anaconda.org/bioconda/piscem
   :alt:   (downloads)
.. |docker_piscem| image:: https://quay.io/repository/biocontainers/piscem/status
   :target: https://quay.io/repository/biocontainers/piscem
.. _`piscem/tags`: https://quay.io/repository/biocontainers/piscem?tab=tags


.. raw:: html

    <script>
        var package = "piscem";
        var versions = ["0.11.0","0.10.4","0.10.3","0.10.2","0.10.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/piscem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/piscem/README.html