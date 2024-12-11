:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'srnamapper'
.. highlight: bash

srnamapper
==========

.. conda:recipe:: srnamapper
   :replaces_section_title:
   :noindex:

   Mapping small RNA data to a genome.

   :homepage: https://github.com/mzytnicki/srnaMapper
   :license: GPL-3.0-or-later
   :recipe: /`srnamapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnamapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/srnamapper/meta.yaml>`_

   


.. conda:package:: srnamapper

   |downloads_srnamapper| |docker_srnamapper|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.11-1</code>,  <code>1.0.11-0</code>,  <code>1.0.10-1</code>,  <code>1.0.10-0</code>,  <code>1.0.9-0</code>,  <code>1.0.8-2</code>,  <code>1.0.8-1</code>,  <code>1.0.8-0</code>,  <code>1.0.7-1</code>,  </span></summary>
      

      ``1.0.11-1``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-2``,  ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-1``,  ``1.0.7-0``,  ``1.0.6-0``

      
      .. raw:: html

         </details>
      

   
   :depends libgcc: ``>=13``
   :depends libzlib: ``>=1.3.1,<2.0a0``
   :depends make: 
   :depends zlib: 
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

      mamba install srnamapper

   and update with::

      mamba update srnamapper

  To create a new environment, run::

      mamba create --name myenvname srnamapper

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/srnamapper:<tag>

   (see `srnamapper/tags`_ for valid values for ``<tag>``)


.. |downloads_srnamapper| image:: https://img.shields.io/conda/dn/bioconda/srnamapper.svg?style=flat
   :target: https://anaconda.org/bioconda/srnamapper
   :alt:   (downloads)
.. |docker_srnamapper| image:: https://quay.io/repository/biocontainers/srnamapper/status
   :target: https://quay.io/repository/biocontainers/srnamapper
.. _`srnamapper/tags`: https://quay.io/repository/biocontainers/srnamapper?tab=tags


.. raw:: html

    <script>
        var package = "srnamapper";
        var versions = ["1.0.11","1.0.11","1.0.10","1.0.10","1.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/srnamapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/srnamapper/README.html