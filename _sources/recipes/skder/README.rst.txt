:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skder'
.. highlight: bash

skder
=====

.. conda:recipe:: skder
   :replaces_section_title:
   :noindex:

   skDER \& CiDDER\: efficient \& high\-resolution dereplication methods for microbial genomes

   :homepage: https://github.com/raufs/skDER
   :license: BSD / BSD-3-Clause license
   :recipe: /`skder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skder/meta.yaml>`_

   


.. conda:package:: skder

   |downloads_skder| |docker_skder|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2.7-0</code>,  <code>1.2.6-0</code>,  <code>1.2.5-0</code>,  <code>1.2.4-0</code>,  <code>1.2.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2.1-1</code>,  <code>1.2.1-0</code>,  <code>1.1.1-0</code>,  </span></summary>
      

      ``1.2.7-0``,  ``1.2.6-0``,  ``1.2.5-0``,  ``1.2.4-0``,  ``1.2.3-0``,  ``1.2.2-0``,  ``1.2.1-1``,  ``1.2.1-0``,  ``1.1.1-0``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends cd-hit: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends matplotlib-base: 
   :depends ncbi-genome-download: 
   :depends pandas: 
   :depends pyrodigal: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python-igraph: 
   :depends python_abi: ``3.10.* *_cp310``
   :depends seaborn: 
   :depends setuptools: 
   :depends skani: 
   :depends wget: 
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

      mamba install skder

   and update with::

      mamba update skder

  To create a new environment, run::

      mamba create --name myenvname skder

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/skder:<tag>

   (see `skder/tags`_ for valid values for ``<tag>``)


.. |downloads_skder| image:: https://img.shields.io/conda/dn/bioconda/skder.svg?style=flat
   :target: https://anaconda.org/bioconda/skder
   :alt:   (downloads)
.. |docker_skder| image:: https://quay.io/repository/biocontainers/skder/status
   :target: https://quay.io/repository/biocontainers/skder
.. _`skder/tags`: https://quay.io/repository/biocontainers/skder?tab=tags


.. raw:: html

    <script>
        var package = "skder";
        var versions = ["1.2.7","1.2.6","1.2.5","1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skder/README.html