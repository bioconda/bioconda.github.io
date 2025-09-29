:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lsabgc'
.. highlight: bash

lsabgc
======

.. conda:recipe:: lsabgc
   :replaces_section_title:
   :noindex:

   lsaBGC\-Pan \- refined workflow for pan\-BGC\-omic evolutionary investigations.

   :homepage: https://github.com/Kalan-Lab/lsaBGC-Pan
   :documentation: https://github.com/Kalan-Lab/lsaBGC-Pan/wiki
   
   :license: BSD / BSD-3-Clause
   :recipe: /`lsabgc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsabgc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lsabgc/meta.yaml>`_

   


.. conda:package:: lsabgc

   |downloads_lsabgc| |docker_lsabgc|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.9-0</code>,  <code>1.1.8-0</code>,  <code>1.1.7-1</code>,  <code>1.1.7-0</code>,  <code>1.1.6-1</code>,  <code>1.1.6-0</code>,  <code>1.1.5-0</code>,  <code>1.1.4-0</code>,  <code>1.1.3-0</code>,  </span></summary>
      

      ``1.1.9-0``,  ``1.1.8-0``,  ``1.1.7-1``,  ``1.1.7-0``,  ``1.1.6-1``,  ``1.1.6-0``,  ``1.1.5-0``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.1.2-3``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-ggtree: 
   :depends biopython: 
   :depends cd-hit: 
   :depends edlib: 
   :depends gecco: ``0.9.6.*``
   :depends gffutils: 
   :depends intbitset: 
   :depends joblib: 
   :depends muscle: ``5.1.*``
   :depends networkx: 
   :depends numpy: ``>=2.0.0,<=2.2.6``
   :depends orthofinder: ``2.5.5.*``
   :depends pandas: 
   :depends prodigal: 
   :depends pyhmmer: ``0.10.15.*``
   :depends pyrodigal: 
   :depends pyseer: ``>=1.3``
   :depends python: ``>=3.10``
   :depends r-ape: 
   :depends r-base: 
   :depends r-cowplot: 
   :depends r-data.table: 
   :depends r-dplyr: 
   :depends r-gggenes: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends r-phytools: 
   :depends r-plyr: 
   :depends scikit-learn: 
   :depends tar: 
   :depends xlsxwriter: ``>=3.0.3``
   :depends zol: ``>=1.6.10``
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

      mamba install lsabgc

   and update with::

      mamba update lsabgc

  To create a new environment, run::

      mamba create --name myenvname lsabgc

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/lsabgc:<tag>

   (see `lsabgc/tags`_ for valid values for ``<tag>``)


.. |downloads_lsabgc| image:: https://img.shields.io/conda/dn/bioconda/lsabgc.svg?style=flat
   :target: https://anaconda.org/bioconda/lsabgc
   :alt:   (downloads)
.. |docker_lsabgc| image:: https://quay.io/repository/biocontainers/lsabgc/status
   :target: https://quay.io/repository/biocontainers/lsabgc
.. _`lsabgc/tags`: https://quay.io/repository/biocontainers/lsabgc?tab=tags


.. raw:: html

    <script>
        var package = "lsabgc";
        var versions = ["1.1.9","1.1.8","1.1.7","1.1.7","1.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lsabgc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lsabgc/README.html