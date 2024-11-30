:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scib'
.. highlight: bash

scib
====

.. conda:recipe:: scib
   :replaces_section_title:
   :noindex:

   Evaluating single\-cell data integration methods

   :homepage: https://github.com/theislab/scib
   :documentation: https://scib.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`scib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scib/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-021-01336-8`

   


.. conda:package:: scib

   |downloads_scib| |docker_scib|

   :versions:
      
      

      ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-1``,  ``1.1.4-0``

      

   
   :depends anndata: ``>=0.7.2``
   :depends deprecated: 
   :depends h5py: 
   :depends igraph: ``>=0.10``
   :depends leidenalg: 
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends llvmlite: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: ``<2``
   :depends pydot: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends scanpy: ``>=1.5,<1.10``
   :depends scikit-learn: 
   :depends scikit-misc: 
   :depends scipy: 
   :depends seaborn: 
   :depends umap-learn: 
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

      mamba install scib

   and update with::

      mamba update scib

  To create a new environment, run::

      mamba create --name myenvname scib

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/scib:<tag>

   (see `scib/tags`_ for valid values for ``<tag>``)


.. |downloads_scib| image:: https://img.shields.io/conda/dn/bioconda/scib.svg?style=flat
   :target: https://anaconda.org/bioconda/scib
   :alt:   (downloads)
.. |docker_scib| image:: https://quay.io/repository/biocontainers/scib/status
   :target: https://quay.io/repository/biocontainers/scib
.. _`scib/tags`: https://quay.io/repository/biocontainers/scib?tab=tags


.. raw:: html

    <script>
        var package = "scib";
        var versions = ["1.1.5","1.1.5","1.1.4","1.1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scib/README.html