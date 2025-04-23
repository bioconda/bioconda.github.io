:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepdetails'
.. highlight: bash

deepdetails
===========

.. conda:recipe:: deepdetails
   :replaces_section_title:
   :noindex:

   Deep\-learning\-based DEconvolution of Tissue profiles with Accurate Interpretation of Locus\-specific Signals \(DeepDETAILS\)

   :homepage: https://details.yulab.org
   :developer docs: https://github.com/liyao001/DeepDETAILS
   :license: GPL-3.0
   :recipe: /`deepdetails <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepdetails>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepdetails/meta.yaml>`_
   :links: doi: :doi:`10.1101/2025.04.02.646189`

   


.. conda:package:: deepdetails

   |downloads_deepdetails| |docker_deepdetails|

   :versions:
      
      

      ``0.0.1rc2-0``,  ``0.0.1rc1-0``

      

   
   :depends bedtools: 
   :depends biopython: 
   :depends einops: 
   :depends h5py: 
   :depends matplotlib-base: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pybigwig: 
   :depends pyfaidx: 
   :depends python: ``>=3.8``
   :depends pytorch: 
   :depends pytorch-lightning: 
   :depends scikit-learn: 
   :depends scipy: ``>=1.11.1``
   :depends tensorboard: 
   :depends torchmetrics: 
   :depends tqdm: 
   :depends ucsc-bedgraphtobigwig: 
   :depends wandb: 
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

      mamba install deepdetails

   and update with::

      mamba update deepdetails

  To create a new environment, run::

      mamba create --name myenvname deepdetails

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/deepdetails:<tag>

   (see `deepdetails/tags`_ for valid values for ``<tag>``)


.. |downloads_deepdetails| image:: https://img.shields.io/conda/dn/bioconda/deepdetails.svg?style=flat
   :target: https://anaconda.org/bioconda/deepdetails
   :alt:   (downloads)
.. |docker_deepdetails| image:: https://quay.io/repository/biocontainers/deepdetails/status
   :target: https://quay.io/repository/biocontainers/deepdetails
.. _`deepdetails/tags`: https://quay.io/repository/biocontainers/deepdetails?tab=tags


.. raw:: html

    <script>
        var package = "deepdetails";
        var versions = ["0.0.1rc2","0.0.1rc1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepdetails/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepdetails/README.html