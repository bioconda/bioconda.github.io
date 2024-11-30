:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'savage'
.. highlight: bash

savage
======

.. conda:recipe:: savage
   :replaces_section_title:
   :noindex:

   SAVAGE \(Strain Aware VirAl GEnome assembly\) reconstructs individual \(viral\) haplotypes from a mixed sample.

   :homepage: https://github.com/HaploConduct/HaploConduct/tree/master/savage
   :license: GPL v3
   :recipe: /`savage <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/savage/meta.yaml>`_

   


.. conda:package:: savage

   |downloads_savage| |docker_savage|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.4.2-2</code>,  <code>0.4.2-1</code>,  <code>0.4.2-0</code>,  <code>0.4.1-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  <code>0.4.0-0</code>,  <code>0.3.0-0</code>,  <code>0.2.1-1</code>,  </span></summary>
      

      ``0.4.2-2``,  ``0.4.2-1``,  ``0.4.2-0``,  ``0.4.1-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-1``,  ``0.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bwa: 
   :depends kallisto: ``>=0.43.0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27mu``
   :depends rust-overlaps: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install savage

   and update with::

      mamba update savage

  To create a new environment, run::

      mamba create --name myenvname savage

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/savage:<tag>

   (see `savage/tags`_ for valid values for ``<tag>``)


.. |downloads_savage| image:: https://img.shields.io/conda/dn/bioconda/savage.svg?style=flat
   :target: https://anaconda.org/bioconda/savage
   :alt:   (downloads)
.. |docker_savage| image:: https://quay.io/repository/biocontainers/savage/status
   :target: https://quay.io/repository/biocontainers/savage
.. _`savage/tags`: https://quay.io/repository/biocontainers/savage?tab=tags


.. raw:: html

    <script>
        var package = "savage";
        var versions = ["0.4.2","0.4.2","0.4.2","0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/savage/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/savage/README.html