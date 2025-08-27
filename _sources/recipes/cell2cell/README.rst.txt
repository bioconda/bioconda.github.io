:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cell2cell'
.. highlight: bash

cell2cell
=========

.. conda:recipe:: cell2cell
   :replaces_section_title:
   :noindex:

   Inferring cell\-cell interactions from transcriptomes with cell2cell

   :homepage: https://github.com/earmingol/cell2cell
   :license: BSD-3-Clause
   :recipe: /`cell2cell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cell2cell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cell2cell/meta.yaml>`_

   


.. conda:package:: cell2cell

   |downloads_cell2cell| |docker_cell2cell|

   :versions:
      
      

      ``0.7.4-3``,  ``0.7.4-2``,  ``0.7.4-1``,  ``0.7.4-0``

      

   
   :depends gseapy: ``>=1.1.3``
   :depends kneed: 
   :depends libgcc: ``>=13``
   :depends libstdcxx: ``>=13``
   :depends matplotlib-base: ``>=3.2.0,<3.7.3``
   :depends networkx: ``>=2.3``
   :depends numpy: ``>=1.16,<2.0``
   :depends openpyxl: ``>=2.6.2``
   :depends pandas: ``>=1.0.0``
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scanpy: ``<=1.9.3``
   :depends scikit-learn: 
   :depends seaborn: ``>=0.11.0``
   :depends statannotations: 
   :depends statsmodels: 
   :depends tensorly: ``0.8.1``
   :depends tqdm: 
   :depends umap-learn: 
   :depends xlrd: ``>=1.1``
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

      mamba install cell2cell

   and update with::

      mamba update cell2cell

  To create a new environment, run::

      mamba create --name myenvname cell2cell

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cell2cell:<tag>

   (see `cell2cell/tags`_ for valid values for ``<tag>``)


.. |downloads_cell2cell| image:: https://img.shields.io/conda/dn/bioconda/cell2cell.svg?style=flat
   :target: https://anaconda.org/bioconda/cell2cell
   :alt:   (downloads)
.. |docker_cell2cell| image:: https://quay.io/repository/biocontainers/cell2cell/status
   :target: https://quay.io/repository/biocontainers/cell2cell
.. _`cell2cell/tags`: https://quay.io/repository/biocontainers/cell2cell?tab=tags


.. raw:: html

    <script>
        var package = "cell2cell";
        var versions = ["0.7.4","0.7.4","0.7.4","0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cell2cell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cell2cell/README.html