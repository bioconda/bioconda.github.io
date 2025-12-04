:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drevalpy'
.. highlight: bash

drevalpy
========

.. conda:recipe:: drevalpy
   :replaces_section_title:
   :noindex:

   Drug response evaluation of cancer drug response models in a fair setting

   :homepage: https://github.com/daisybio/drevalpy
   :documentation: https://drevalpy.readthedocs.io/en/latest/index.html
   
   :license: MIT
   :recipe: /`drevalpy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drevalpy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drevalpy/meta.yaml>`_
   :links: https: :https:`//www.biorxiv.org/content/10.1101/2025.05.26.655288v1`

   


.. conda:package:: drevalpy

   |downloads_drevalpy| |docker_drevalpy|

   :versions:
      
      

      ``1.4.0-0``

      

   
   :depends curve-curator: 
   :depends flaky: 
   :depends importlib-resources: 
   :depends matplotlib-base: 
   :depends networkx: 
   :depends numpy: ``>=1.20``
   :depends pandas: 
   :depends plotly: 
   :depends poetry: ``>=2.0.1,<3.0.0``
   :depends python: ``>=3.11,<3.14``
   :depends pytorch: ``>=2.1``
   :depends pytorch-lightning: ``>=2.5``
   :depends pyyaml: 
   :depends ray: 
   :depends requests: 
   :depends scikit-learn: ``>=1.4``
   :depends scikit-posthocs: 
   :depends scipy: 
   :depends starlette: ``>=0.49.1``
   :depends toml: ``>=0.10.2,<0.11.0``
   :depends torch-geometric: 
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

      mamba install drevalpy

   and update with::

      mamba update drevalpy

  To create a new environment, run::

      mamba create --name myenvname drevalpy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/drevalpy:<tag>

   (see `drevalpy/tags`_ for valid values for ``<tag>``)


.. |downloads_drevalpy| image:: https://img.shields.io/conda/dn/bioconda/drevalpy.svg?style=flat
   :target: https://anaconda.org/bioconda/drevalpy
   :alt:   (downloads)
.. |docker_drevalpy| image:: https://quay.io/repository/biocontainers/drevalpy/status
   :target: https://quay.io/repository/biocontainers/drevalpy
.. _`drevalpy/tags`: https://quay.io/repository/biocontainers/drevalpy?tab=tags


.. raw:: html

    <script>
        var package = "drevalpy";
        var versions = ["1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drevalpy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drevalpy/README.html