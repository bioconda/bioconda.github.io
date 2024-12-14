:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haddock_biobb'
.. highlight: bash

haddock_biobb
=============

.. conda:recipe:: haddock_biobb
   :replaces_section_title:
   :noindex:

   HADDOCK3 is the next generation integrative modelling software in the long\-lasting HADDOCK project.

   :homepage: https://github.com/haddocking/haddock3
   :license: APACHE / Apache Software License
   :recipe: /`haddock_biobb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haddock_biobb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haddock_biobb/meta.yaml>`_

   HADDOCK3 is the next generation integrative modelling software in the long\-lasting HADDOCK project. It represents a complete rethinking and rewriting of the HADDOCK2.X series\, implementing a new way to interact with HADDOCK and offering new features to users who can now define custom workflows.


.. conda:package:: haddock_biobb

   |downloads_haddock_biobb| |docker_haddock_biobb|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>3.0.6-2</code>,  <code>3.0.6-1</code>,  <code>3.0.6-0</code>,  <code>3.0.5-1</code>,  <code>3.0.5-0</code>,  <code>3.0.4-0</code>,  <code>3.0.3-0</code>,  <code>3.0.2-0</code>,  <code>3.0.1-0</code>,  </span></summary>
      

      ``3.0.6-2``,  ``3.0.6-1``,  ``3.0.6-0``,  ``3.0.5-1``,  ``3.0.5-0``,  ``3.0.4-0``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends freesasa: 
   :depends git: 
   :depends jsonpickle: 
   :depends kaleido-core: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends numpy: 
   :depends pandas: 
   :depends pdb-tools: 
   :depends pip: 
   :depends plotly: 
   :depends python_abi: ``3.11.* *_cp311``
   :depends pyyaml: 
   :depends scipy: 
   :depends toml: 
   :depends tox: 
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

      mamba install haddock_biobb

   and update with::

      mamba update haddock_biobb

  To create a new environment, run::

      mamba create --name myenvname haddock_biobb

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/haddock_biobb:<tag>

   (see `haddock_biobb/tags`_ for valid values for ``<tag>``)


.. |downloads_haddock_biobb| image:: https://img.shields.io/conda/dn/bioconda/haddock_biobb.svg?style=flat
   :target: https://anaconda.org/bioconda/haddock_biobb
   :alt:   (downloads)
.. |docker_haddock_biobb| image:: https://quay.io/repository/biocontainers/haddock_biobb/status
   :target: https://quay.io/repository/biocontainers/haddock_biobb
.. _`haddock_biobb/tags`: https://quay.io/repository/biocontainers/haddock_biobb?tab=tags


.. raw:: html

    <script>
        var package = "haddock_biobb";
        var versions = ["3.0.6","3.0.6","3.0.6","3.0.5","3.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haddock_biobb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haddock_biobb/README.html