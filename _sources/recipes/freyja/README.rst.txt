:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'freyja'
.. highlight: bash

freyja
======

.. conda:recipe:: freyja
   :replaces_section_title:
   :noindex:

   Freyja recovers relative lineage abundances from mixed SARS\-CoV\-2 samples and provides functionality to analyze lineage dynamics.

   :homepage: https://github.com/andersen-lab/Freyja
   :documentation: https://andersen-lab.github.io/Freyja
   
   :license: BSD / BSD-2-Clause
   :recipe: /`freyja <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freyja>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/freyja/meta.yaml>`_
   :links: biotools: :biotools:`freyja`, usegalaxy-eu: :usegalaxy-eu:`freyja_demix`, usegalaxy-eu: :usegalaxy-eu:`freyja_variants`, usegalaxy-eu: :usegalaxy-eu:`freyja_boot`, usegalaxy-eu: :usegalaxy-eu:`freyja_aggregate_plot`

   


.. conda:package:: freyja

   |downloads_freyja| |docker_freyja|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.5.3-3</code>,  <code>1.5.3-2</code>,  <code>1.5.3-1</code>,  <code>1.5.3-0</code>,  <code>1.5.2-0</code>,  <code>1.5.1-1</code>,  <code>1.5.1-0</code>,  <code>1.5.0-0</code>,  <code>1.4.9-0</code>,  </span></summary>
      

      ``1.5.3-3``,  ``1.5.3-2``,  ``1.5.3-1``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-1``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.12-0``,  ``1.3.11-0``,  ``1.3.10-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-0``,  ``1.2-0``,  ``1.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends biopython: 
   :depends click: 
   :depends cvxpy: 
   :depends epiweeks: 
   :depends ivar: 
   :depends joblib: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pyarrow: ``>=10.0.1``
   :depends pysam: 
   :depends python: ``>=3.11,<3.12.0a0``
   :depends python_abi: ``3.11.* *_cp311``
   :depends pyyaml: 
   :depends requests: 
   :depends samtools: 
   :depends seaborn-base: 
   :depends sphinx: 
   :depends sphinx-click: 
   :depends sphinx_rtd_theme: 
   :depends tqdm: 
   :depends usher: 
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

      mamba install freyja

   and update with::

      mamba update freyja

  To create a new environment, run::

      mamba create --name myenvname freyja

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/freyja:<tag>

   (see `freyja/tags`_ for valid values for ``<tag>``)


.. |downloads_freyja| image:: https://img.shields.io/conda/dn/bioconda/freyja.svg?style=flat
   :target: https://anaconda.org/bioconda/freyja
   :alt:   (downloads)
.. |docker_freyja| image:: https://quay.io/repository/biocontainers/freyja/status
   :target: https://quay.io/repository/biocontainers/freyja
.. _`freyja/tags`: https://quay.io/repository/biocontainers/freyja?tab=tags


.. raw:: html

    <script>
        var package = "freyja";
        var versions = ["1.5.3","1.5.3","1.5.3","1.5.3","1.5.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/freyja/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/freyja/README.html