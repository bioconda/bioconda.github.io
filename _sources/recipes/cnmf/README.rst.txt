:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cnmf'
.. highlight: bash

cnmf
====

.. conda:recipe:: cnmf
   :replaces_section_title:
   :noindex:

   Consensus NMF for scRNA\-Seq data.

   :homepage: https://github.com/dylkot/cNMF
   :license: MIT / MIT
   :recipe: /`cnmf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnmf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cnmf/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.43803`

   


.. conda:package:: cnmf

   |downloads_cnmf| |docker_cnmf|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends anndata: ``>=0.9``
   :depends fastcluster: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends palettable: 
   :depends pandas: 
   :depends python: ``>=3.7``
   :depends pyyaml: 
   :depends scanpy: 
   :depends scikit-learn: ``>=1.0``
   :depends scipy: 
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

      mamba install cnmf

   and update with::

      mamba update cnmf

  To create a new environment, run::

      mamba create --name myenvname cnmf

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/cnmf:<tag>

   (see `cnmf/tags`_ for valid values for ``<tag>``)


.. |downloads_cnmf| image:: https://img.shields.io/conda/dn/bioconda/cnmf.svg?style=flat
   :target: https://anaconda.org/bioconda/cnmf
   :alt:   (downloads)
.. |docker_cnmf| image:: https://quay.io/repository/biocontainers/cnmf/status
   :target: https://quay.io/repository/biocontainers/cnmf
.. _`cnmf/tags`: https://quay.io/repository/biocontainers/cnmf?tab=tags


.. raw:: html

    <script>
        var package = "cnmf";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cnmf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cnmf/README.html