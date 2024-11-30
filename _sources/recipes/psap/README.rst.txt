:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'psap'
.. highlight: bash

psap
====

.. conda:recipe:: psap
   :replaces_section_title:
   :noindex:

   CLI interface for the PSAP classifier. PSAP implements a RandomForest approach to predict the probability of proteins to mediate protein phase separation \(PPS\).

   :homepage: https://github.com/vanheeringen-lab/psap
   :license: MIT
   :recipe: /`psap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/psap/meta.yaml>`_

   


.. conda:package:: psap

   |downloads_psap| |docker_psap|

   :versions:
      
      

      ``1.0.7-0``,  ``1.0.6-0``

      

   
   :depends biopython: ``>=1.73``
   :depends black: ``>=20.8b1``
   :depends loguru: ``>=0.5.3``
   :depends matplotlib-base: ``>=3.3.4``
   :depends pandas: ``>=1.0.1``
   :depends python: ``>=3.7``
   :depends scikit-learn: ``>=0.21.3``
   :depends scipy: ``>=1.2.0``
   :depends seaborn: ``>=0.11.1``
   :depends sklearn-json: ``>=0.1.0``
   :depends tqdm: ``>=4.38.0``
   :depends versioneer: ``>=0.19``
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

      mamba install psap

   and update with::

      mamba update psap

  To create a new environment, run::

      mamba create --name myenvname psap

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/psap:<tag>

   (see `psap/tags`_ for valid values for ``<tag>``)


.. |downloads_psap| image:: https://img.shields.io/conda/dn/bioconda/psap.svg?style=flat
   :target: https://anaconda.org/bioconda/psap
   :alt:   (downloads)
.. |docker_psap| image:: https://quay.io/repository/biocontainers/psap/status
   :target: https://quay.io/repository/biocontainers/psap
.. _`psap/tags`: https://quay.io/repository/biocontainers/psap?tab=tags


.. raw:: html

    <script>
        var package = "psap";
        var versions = ["1.0.7","1.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/psap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/psap/README.html