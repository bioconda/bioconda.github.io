:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spapros'
.. highlight: bash

spapros
=======

.. conda:recipe:: spapros
   :replaces_section_title:
   :noindex:

   Probe set selection for targeted spatial transcriptomics.

   :homepage: https://github.com/theislab/spapros
   :license: MIT
   :recipe: /`spapros <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spapros>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spapros/meta.yaml>`_

   


.. conda:package:: spapros

   |downloads_spapros| |docker_spapros|

   :versions:
      
      

      ``0.1.5-0``

      

   
   :depends bandit: ``>=1.7.6``
   :depends click: ``>=8.0.1``
   :depends jinja2: ``>=3.0.1``
   :depends jupyter-sphinx: ``>=0.3.2``
   :depends leidenalg: ``>=0.8.7``
   :depends matplotlib-base: ``>=3.6.3``
   :depends nox: ``>=2023.04.22``
   :depends nox-poetry: ``>=1.0.3``
   :depends numpy: ``1.26.4``
   :depends pandas: ``>=1.3.0,<2.0.0``
   :depends pandoc: ``>=2.1``
   :depends pillow: ``>=10.0.2``
   :depends python: ``>=3.9,<3.10``
   :depends pyyaml: ``>=6.0.1``
   :depends questionary: ``>=1.10.0``
   :depends rich: ``>=10.1.0``
   :depends ruamel.yaml: ``>=0.17.10``
   :depends scanpy: ``>=1.9.8``
   :depends seaborn: ``>=0.11.1``
   :depends upsetplot: ``>=0.7.0``
   :depends venndata: ``>=0.1.0``
   :depends xgboost: ``>=1.6.1``
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

      mamba install spapros

   and update with::

      mamba update spapros

  To create a new environment, run::

      mamba create --name myenvname spapros

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/spapros:<tag>

   (see `spapros/tags`_ for valid values for ``<tag>``)


.. |downloads_spapros| image:: https://img.shields.io/conda/dn/bioconda/spapros.svg?style=flat
   :target: https://anaconda.org/bioconda/spapros
   :alt:   (downloads)
.. |docker_spapros| image:: https://quay.io/repository/biocontainers/spapros/status
   :target: https://quay.io/repository/biocontainers/spapros
.. _`spapros/tags`: https://quay.io/repository/biocontainers/spapros?tab=tags


.. raw:: html

    <script>
        var package = "spapros";
        var versions = ["0.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spapros/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spapros/README.html