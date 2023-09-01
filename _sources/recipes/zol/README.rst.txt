:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zol'
.. highlight: bash

zol
===

.. conda:recipe:: zol
   :replaces_section_title:
   :noindex:

   zol \(\& fai\)\: large\-scale targeted detection and evolutionary investigation of gene clusters.

   :homepage: https://github.com/Kalan-Lab/zol
   :license: BSD / BSD-3-Clause license
   :recipe: /`zol <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zol>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zol/meta.yaml>`_

   


.. conda:package:: zol

   |downloads_zol| |docker_zol|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.3.9-0</code>,  <code>1.3.8-0</code>,  <code>1.3.7-0</code>,  <code>1.3.6-0</code>,  <code>1.3.5-0</code>,  <code>1.3.4-0</code>,  <code>1.3.3-0</code>,  <code>1.3.2-0</code>,  <code>1.3.1-0</code>,  </span></summary>
      

      ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.5-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.2.8-0``,  ``1.2.7-0``

      
      .. raw:: html

         </details>
      

   
   :depends axel: 
   :depends bioconductor-ggtree: 
   :depends biopython: ``1.79.*``
   :depends cd-hit: 
   :depends diamond: ``2.0.15.*``
   :depends ete3: 
   :depends fasttree: ``>=2.0.0``
   :depends gzip: 
   :depends hmmer: ``>=3.0.0``
   :depends hyphy: ``2.5.14.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends mcl: 
   :depends miniprot: ``0.7.*``
   :depends muscle: 
   :depends ncbi-genome-download: 
   :depends pal2nal: ``>=14.1``
   :depends pandas: ``>=2.0``
   :depends pomegranate: ``>0.13,<=0.14.8``
   :depends prodigal: 
   :depends pyhmmer: 
   :depends pyrodigal: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends r-base: 
   :depends r-cowplot: 
   :depends r-gggenes: 
   :depends r-ggplot2: 
   :depends r-gridextra: 
   :depends scikit-learn: 
   :depends setuptools: 
   :depends skani: 
   :depends slclust: 
   :depends trimal: 
   :depends xlsxwriter: ``>=3.0.3``
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

      mamba install zol

   and update with::

      mamba update zol

  To create a new environment, run::

      mamba create --name myenvname zol

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/zol:<tag>

   (see `zol/tags`_ for valid values for ``<tag>``)


.. |downloads_zol| image:: https://img.shields.io/conda/dn/bioconda/zol.svg?style=flat
   :target: https://anaconda.org/bioconda/zol
   :alt:   (downloads)
.. |docker_zol| image:: https://quay.io/repository/biocontainers/zol/status
   :target: https://quay.io/repository/biocontainers/zol
.. _`zol/tags`: https://quay.io/repository/biocontainers/zol?tab=tags


.. raw:: html

    <script>
        var package = "zol";
        var versions = ["1.3.9","1.3.8","1.3.7","1.3.6","1.3.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zol/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zol/README.html