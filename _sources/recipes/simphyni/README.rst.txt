:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'simphyni'
.. highlight: bash

simphyni
========

.. conda:recipe:: simphyni
   :replaces_section_title:
   :noindex:

   SimPhyni\: a tool for phylogenetic trait simulation and inference.

   :homepage: https://github.com/jpeyemi/SimPhyNI
   :license: MIT
   :recipe: /`simphyni <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simphyni>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/simphyni/meta.yaml>`_

   


.. conda:package:: simphyni

   |downloads_simphyni| |docker_simphyni|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends annotated-types: ``>=0.7.0``
   :depends biopython: ``>=1.85``
   :depends certifi: ``>=2025.1.31``
   :depends charset-normalizer: ``>=3.4.1``
   :depends ete3: ``>=3.1.3``
   :depends idna: ``>=3.10``
   :depends itolapi: ``>=4.1.5``
   :depends jinja2: ``>=3.1.6``
   :depends joblib: ``>=1.4.2``
   :depends markupsafe: ``>=3.0.2``
   :depends matplotlib-base: ``>=3.10.1``
   :depends numba: ``>=0.62.0``
   :depends numpy: ``>=2.2.3``
   :depends pandas: ``>=2.2.3``
   :depends pastml: ``>=1.9.50``
   :depends pydantic: ``>=2.10.6``
   :depends pydantic-core: ``>=2.27.2``
   :depends python: ``>=3.11,<3.13``
   :depends requests: ``>=2.32.3``
   :depends scikit-learn: ``>=1.6.1``
   :depends scipy: ``1.14.0.*``
   :depends seaborn: ``>=0.13.0,<0.14``
   :depends snakemake: ``>=9.10``
   :depends statsmodels: ``>=0.14.4``
   :depends urllib3: ``>=2.4.0``
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

      mamba install simphyni

   and update with::

      mamba update simphyni

  To create a new environment, run::

      mamba create --name myenvname simphyni

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/simphyni:<tag>

   (see `simphyni/tags`_ for valid values for ``<tag>``)


.. |downloads_simphyni| image:: https://img.shields.io/conda/dn/bioconda/simphyni.svg?style=flat
   :target: https://anaconda.org/bioconda/simphyni
   :alt:   (downloads)
.. |docker_simphyni| image:: https://quay.io/repository/biocontainers/simphyni/status
   :target: https://quay.io/repository/biocontainers/simphyni
.. _`simphyni/tags`: https://quay.io/repository/biocontainers/simphyni?tab=tags


.. raw:: html

    <script>
        var package = "simphyni";
        var versions = ["1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/simphyni/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/simphyni/README.html