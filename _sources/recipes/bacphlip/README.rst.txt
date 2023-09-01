:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bacphlip'
.. highlight: bash

bacphlip
========

.. conda:recipe:: bacphlip
   :replaces_section_title:
   :noindex:

   A Random Forest classifier to predict bacteriophage lifestyle

   :homepage: https://github.com/adamhockenberry/bacphlip
   :license: MIT / MIT
   :recipe: /`bacphlip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacphlip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bacphlip/meta.yaml>`_

   


.. conda:package:: bacphlip

   |downloads_bacphlip| |docker_bacphlip|

   :versions:
      
      

      ``0.9.6-0``

      

   
   :depends biopython: ``>=1.7``
   :depends joblib: ``>=0.13``
   :depends pandas: ``>=0.25``
   :depends python: ``>=3.6``
   :depends scikit-learn: ``0.23.1``
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

      mamba install bacphlip

   and update with::

      mamba update bacphlip

  To create a new environment, run::

      mamba create --name myenvname bacphlip

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bacphlip:<tag>

   (see `bacphlip/tags`_ for valid values for ``<tag>``)


.. |downloads_bacphlip| image:: https://img.shields.io/conda/dn/bioconda/bacphlip.svg?style=flat
   :target: https://anaconda.org/bioconda/bacphlip
   :alt:   (downloads)
.. |docker_bacphlip| image:: https://quay.io/repository/biocontainers/bacphlip/status
   :target: https://quay.io/repository/biocontainers/bacphlip
.. _`bacphlip/tags`: https://quay.io/repository/biocontainers/bacphlip?tab=tags


.. raw:: html

    <script>
        var package = "bacphlip";
        var versions = ["0.9.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bacphlip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bacphlip/README.html