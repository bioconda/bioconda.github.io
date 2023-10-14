:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'corgi'
.. highlight: bash

corgi
=====

.. conda:recipe:: corgi
   :replaces_section_title:
   :noindex:

   Classifier for ORganelle Genomes Inter alia

   :homepage: https://pypi.org/project/bio-corgi/
   :documentation: https://rbturnbull.github.io/corgi/
   
   :developer docs: https://github.com/rbturnbull/corgi
   :license: Apache-2.0
   :recipe: /`corgi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corgi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/corgi/meta.yaml>`_

   


.. conda:package:: corgi

   |downloads_corgi| |docker_corgi|

   :versions:
      
      

      ``0.4.0-0``

      

   
   :depends appdirs: ``>=1.4.4,<2.0.0``
   :depends beautifulsoup4: ``>=4.10.0,<5.0.0``
   :depends biopython: ``>=1.79.0,<2.0.0``
   :depends cryptography: ``>=36.0.1,<37.0.0``
   :depends dask-core: ``>=2021.7.1,<2022.0.0``
   :depends fastai: ``>=2.4.1,<3.0.0``
   :depends h5py: ``>=3.1.0,<4.0.0``
   :depends httpx: ``>=0.20.0,<0.21.0``
   :depends humanize: ``>=3.10.0,<4.0.0``
   :depends optuna: ``>=2.10.0,<3.0.0``
   :depends plotly: ``>=5.3.1,<6.0.0``
   :depends progressbar2: ``>=3.53.1,<4.0.0``
   :depends pyarrow: ``>=5.0.0``
   :depends pymysql: ``>=1.0.2,<2.0.0``
   :depends python: ``>=3.8,<3.12``
   :depends termgraph: ``>=0.5.3,<0.6.0``
   :depends torchapp: ``>=0.3.1``
   :depends wandb: ``>=0.12.9,<0.13.0``
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

      mamba install corgi

   and update with::

      mamba update corgi

  To create a new environment, run::

      mamba create --name myenvname corgi

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/corgi:<tag>

   (see `corgi/tags`_ for valid values for ``<tag>``)


.. |downloads_corgi| image:: https://img.shields.io/conda/dn/bioconda/corgi.svg?style=flat
   :target: https://anaconda.org/bioconda/corgi
   :alt:   (downloads)
.. |docker_corgi| image:: https://quay.io/repository/biocontainers/corgi/status
   :target: https://quay.io/repository/biocontainers/corgi
.. _`corgi/tags`: https://quay.io/repository/biocontainers/corgi?tab=tags


.. raw:: html

    <script>
        var package = "corgi";
        var versions = ["0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/corgi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/corgi/README.html