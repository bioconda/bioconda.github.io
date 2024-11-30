:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyscenic'
.. highlight: bash

pyscenic
========

.. conda:recipe:: pyscenic
   :replaces_section_title:
   :noindex:

   Python implementation of the SCENIC pipeline for transcription factor inference from single\-cell transcriptomics experiments.

   :homepage: https://github.com/aertslab/pySCENIC
   :documentation: https://scenic.aertslab.org
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`pyscenic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscenic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyscenic/meta.yaml>`_
   :links: doi: :doi:`10.1038/nmeth.4463`, doi: :doi:`10.1038/s41592-023-01938-4`, biotools: :biotools:`scenic`

   


.. conda:package:: pyscenic

   |downloads_pyscenic| |docker_pyscenic|

   :versions:
      
      

      ``0.12.1-0``

      

   
   :depends aiohttp: 
   :depends arboreto: 
   :depends attrs: 
   :depends boltons: 
   :depends cloudpickle: 
   :depends ctxcore: 
   :depends cytoolz: 
   :depends dask-core: ``>=2023.4.1``
   :depends dill: 
   :depends distributed: ``>=2023.4.1,<2023.5.0``
   :depends frozendict: 
   :depends fsspec: 
   :depends interlap: 
   :depends llvmlite: 
   :depends loompy: 
   :depends networkx: 
   :depends numba: ``>=0.51.2``
   :depends numexpr: 
   :depends numpy: ``1.23.5``
   :depends pandas: ``>=1.3.5``
   :depends pyarrow: 
   :depends python: ``>=3.6``
   :depends pyyaml: 
   :depends requests: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tqdm: 
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

      mamba install pyscenic

   and update with::

      mamba update pyscenic

  To create a new environment, run::

      mamba create --name myenvname pyscenic

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/pyscenic:<tag>

   (see `pyscenic/tags`_ for valid values for ``<tag>``)


.. |downloads_pyscenic| image:: https://img.shields.io/conda/dn/bioconda/pyscenic.svg?style=flat
   :target: https://anaconda.org/bioconda/pyscenic
   :alt:   (downloads)
.. |docker_pyscenic| image:: https://quay.io/repository/biocontainers/pyscenic/status
   :target: https://quay.io/repository/biocontainers/pyscenic
.. _`pyscenic/tags`: https://quay.io/repository/biocontainers/pyscenic?tab=tags


.. raw:: html

    <script>
        var package = "pyscenic";
        var versions = ["0.12.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyscenic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyscenic/README.html