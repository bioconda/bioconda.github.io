:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tracs'
.. highlight: bash

tracs
=====

.. conda:recipe:: tracs
   :replaces_section_title:
   :noindex:

   Tracs \- Fast pairwise transmission inference from single genome and\/or metagenomic data

   :homepage: https://github.com/gtonkinhill/tracs
   :documentation: https://github.com/gtonkinhill/tracs/tree/main/docs
   
   :license: MIT / MIT
   :recipe: /`tracs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tracs/meta.yaml>`_

   


.. conda:package:: tracs

   |downloads_tracs| |docker_tracs|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends _openmp_mutex: ``* *_llvm``
   :depends _openmp_mutex: ``>=4.5``
   :depends htsbox: 
   :depends joblib: 
   :depends libgcc: ``>=12``
   :depends libstdcxx: ``>=12``
   :depends libzlib: ``>=1.2.13,<2.0a0``
   :depends llvm-openmp: ``>=18.1.7``
   :depends minimap2: 
   :depends ncbi-genome-download: 
   :depends numpy: 
   :depends pandas: 
   :depends plotly: 
   :depends pyfastx: 
   :depends python: ``>=3.12,<3.13.0a0``
   :depends python_abi: ``3.12.* *_cp312``
   :depends samtools: 
   :depends scipy: 
   :depends sourmash: 
   :depends tqdm: 
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

      mamba install tracs

   and update with::

      mamba update tracs

  To create a new environment, run::

      mamba create --name myenvname tracs

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/tracs:<tag>

   (see `tracs/tags`_ for valid values for ``<tag>``)


.. |downloads_tracs| image:: https://img.shields.io/conda/dn/bioconda/tracs.svg?style=flat
   :target: https://anaconda.org/bioconda/tracs
   :alt:   (downloads)
.. |docker_tracs| image:: https://quay.io/repository/biocontainers/tracs/status
   :target: https://quay.io/repository/biocontainers/tracs
.. _`tracs/tags`: https://quay.io/repository/biocontainers/tracs?tab=tags


.. raw:: html

    <script>
        var package = "tracs";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tracs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tracs/README.html