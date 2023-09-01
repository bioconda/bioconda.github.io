:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'checkatlas'
.. highlight: bash

checkatlas
==========

.. conda:recipe:: checkatlas
   :replaces_section_title:
   :noindex:

   One liner tool to check the quality of your single\-cell atlases.

   :homepage: https://checkatlas.readthedocs.io/
   :developer docs: https://github.com/becavin-lab/checkatlas
   :license: BSD / BSD 3-Clause
   :recipe: /`checkatlas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkatlas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/checkatlas/meta.yaml>`_

   


.. conda:package:: checkatlas

   |downloads_checkatlas| |docker_checkatlas|

   :versions:
      
      

      ``0.4.2-0``

      

   
   :depends llvmlite: ``>=0.39.1,<0.40.0``
   :depends numba: ``>=0.56.4,<0.57.0``
   :depends numpy: ``>=1.23.5,<2.0.0``
   :depends poetry: ``>=1.5.1,<2.0.0``
   :depends python: ``>=3.10``
   :depends rpy2: ``3.5.10``
   :depends scanpy: ``>=1.9.1,<2.0.0``
   :depends scikit-learn: ``>=1.2.1,<2.0.0``
   :depends types-pyyaml: ``>=6.0.12.6,<7.0.0.0``
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

      mamba install checkatlas

   and update with::

      mamba update checkatlas

  To create a new environment, run::

      mamba create --name myenvname checkatlas

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/checkatlas:<tag>

   (see `checkatlas/tags`_ for valid values for ``<tag>``)


.. |downloads_checkatlas| image:: https://img.shields.io/conda/dn/bioconda/checkatlas.svg?style=flat
   :target: https://anaconda.org/bioconda/checkatlas
   :alt:   (downloads)
.. |docker_checkatlas| image:: https://quay.io/repository/biocontainers/checkatlas/status
   :target: https://quay.io/repository/biocontainers/checkatlas
.. _`checkatlas/tags`: https://quay.io/repository/biocontainers/checkatlas?tab=tags


.. raw:: html

    <script>
        var package = "checkatlas";
        var versions = ["0.4.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/checkatlas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/checkatlas/README.html