:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'multivelo'
.. highlight: bash

multivelo
=========

.. conda:recipe:: multivelo
   :replaces_section_title:
   :noindex:

   Multi\-omic extension of single\-cell RNA velocity

   :homepage: https://github.com/welch-lab/MultiVelo
   :license: BSD / BSD-3-Clause
   :recipe: /`multivelo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multivelo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/multivelo/meta.yaml>`_

   


.. conda:package:: multivelo

   |downloads_multivelo| |docker_multivelo|

   :versions:
      
      

      ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends anndata: ``>=0.7.5``
   :depends h5py: ``>=2.10.0``
   :depends ipywidgets: ``<=7.7.1``
   :depends joblib: 
   :depends loompy: ``>=2.0.12``
   :depends matplotlib-base: ``>=3.3.0``
   :depends numba: ``>=0.41.0``
   :depends numpy: ``>=1.17``
   :depends pandas: ``>=0.23``
   :depends python: ``>=3.7``
   :depends scanpy: ``>=1.5``
   :depends scikit-learn: ``>=0.23.0``
   :depends scipy: ``>=1.4.1``
   :depends scvelo: ``>=0.2.3``
   :depends seaborn: ``>=0.11.0``
   :depends tqdm: 
   :depends umap-learn: ``>=0.3.10``
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

      mamba install multivelo

   and update with::

      mamba update multivelo

  To create a new environment, run::

      mamba create --name myenvname multivelo

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/multivelo:<tag>

   (see `multivelo/tags`_ for valid values for ``<tag>``)


.. |downloads_multivelo| image:: https://img.shields.io/conda/dn/bioconda/multivelo.svg?style=flat
   :target: https://anaconda.org/bioconda/multivelo
   :alt:   (downloads)
.. |docker_multivelo| image:: https://quay.io/repository/biocontainers/multivelo/status
   :target: https://quay.io/repository/biocontainers/multivelo
.. _`multivelo/tags`: https://quay.io/repository/biocontainers/multivelo?tab=tags


.. raw:: html

    <script>
        var package = "multivelo";
        var versions = ["0.1.3","0.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/multivelo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/multivelo/README.html