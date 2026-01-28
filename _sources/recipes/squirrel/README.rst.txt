:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squirrel'
.. highlight: bash

squirrel
========

.. conda:recipe:: squirrel
   :replaces_section_title:
   :noindex:

   Some QUIck Reconstruction to Resolve Evolutionary Links.

   :homepage: https://github.com/aineniamh/squirrel
   :documentation: https://github.com/aineniamh/squirrel/blob/1.3.2/README.md
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`squirrel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squirrel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squirrel/meta.yaml>`_
   :links: biotools: :biotools:`squirrel`, usegalaxy-eu: :usegalaxy-eu:`squirrel_phylo`, usegalaxy-eu: :usegalaxy-eu:`squirrel_qc`

   


.. conda:package:: squirrel

   |downloads_squirrel| |docker_squirrel|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.2-0</code>,  <code>1.3.1-0</code>,  <code>1.3-0</code>,  <code>1.2.2-0</code>,  <code>1.2-0</code>,  <code>1.1.7-0</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  </span></summary>
      

      ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-0``,  ``1.2.2-0``,  ``1.2-0``,  ``1.1.7-0``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-0``,  ``1.0.13-0``,  ``1.0.12-0``,  ``1.0.11-0``,  ``1.0.10-1``,  ``1.0.10-0``,  ``1.0.9-0``,  ``1.0.8-0``,  ``1.0.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends baltic: 
   :depends biopython: ``>=1.70``
   :depends gofasta: 
   :depends iqtree: 
   :depends jclusterfunk: ``>=0.0.25``
   :depends mako: 
   :depends matplotlib-base: 
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pulp: 
   :depends python: ``>=3.10``
   :depends scikit-learn: ``1.7.1``
   :depends seaborn-base: 
   :depends snakemake-minimal: ``>=9.9.0``
   :depends tabulate: 
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

      mamba install squirrel

   and update with::

      mamba update squirrel

  To create a new environment, run::

      mamba create --name myenvname squirrel

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/squirrel:<tag>

   (see `squirrel/tags`_ for valid values for ``<tag>``)


.. |downloads_squirrel| image:: https://img.shields.io/conda/dn/bioconda/squirrel.svg?style=flat
   :target: https://anaconda.org/bioconda/squirrel
   :alt:   (downloads)
.. |docker_squirrel| image:: https://quay.io/repository/biocontainers/squirrel/status
   :target: https://quay.io/repository/biocontainers/squirrel
.. _`squirrel/tags`: https://quay.io/repository/biocontainers/squirrel?tab=tags


.. raw:: html

    <script>
        var package = "squirrel";
        var versions = ["1.3.2","1.3.1","1.3","1.2.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squirrel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squirrel/README.html