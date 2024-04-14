:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ms2rescore'
.. highlight: bash

ms2rescore
==========

.. conda:recipe:: ms2rescore
   :replaces_section_title:
   :noindex:

   MS²Rescore\: Sensitive PSM rescoring with predicted MS² peak intensities and retention times.

   :homepage: https://compomics.github.io/projects/ms2rescore/
   :documentation: https://ms2rescore.readthedocs.io/en/stable/
   
   :developer docs: https://github.com/compomics/ms2rescore
   :license: APACHE / Apache-2.0
   :recipe: /`ms2rescore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2rescore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ms2rescore/meta.yaml>`_

   


.. conda:package:: ms2rescore

   |downloads_ms2rescore| |docker_ms2rescore|

   :versions:
      
      

      ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-2``,  ``3.0.1-1``,  ``3.0.1-0``,  ``3.0.0-0``,  ``3.0.0b1-1``,  ``3.0.0b1-0``

      

   
   :depends cascade-config: ``>=0.4.0``
   :depends click: ``>=7``
   :depends customtkinter: ``>=5,<6``
   :depends deeplc: ``>=2.2``
   :depends deeplcretrainer: ``>=0.2``
   :depends jinja2: ``>=3``
   :depends lxml: ``>=4.5``
   :depends matplotlib-base: 
   :depends mokapot: ``>=0.9``
   :depends ms2pip: ``>=4.0.0-dev8``
   :depends ms2rescore-rs: 
   :depends numpy: ``>=1.16.0``
   :depends pandas: ``>=1.0``
   :depends plotly: ``>=5``
   :depends psm-utils: ``>=0.4``
   :depends pydantic: ``>=1.8.2,<2``
   :depends pyopenms: 
   :depends pyteomics: ``>=4.1.0,<=4.6.3``
   :depends python: ``>=3.8``
   :depends rich: ``>=12``
   :depends seaborn: 
   :depends sqlalchemy: ``<2,>=1.3``
   :depends statsmodels: 
   :depends tomli: ``>=2``
   :depends xgboost: ``<2,>=1.3``
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

      mamba install ms2rescore

   and update with::

      mamba update ms2rescore

  To create a new environment, run::

      mamba create --name myenvname ms2rescore

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/ms2rescore:<tag>

   (see `ms2rescore/tags`_ for valid values for ``<tag>``)


.. |downloads_ms2rescore| image:: https://img.shields.io/conda/dn/bioconda/ms2rescore.svg?style=flat
   :target: https://anaconda.org/bioconda/ms2rescore
   :alt:   (downloads)
.. |docker_ms2rescore| image:: https://quay.io/repository/biocontainers/ms2rescore/status
   :target: https://quay.io/repository/biocontainers/ms2rescore
.. _`ms2rescore/tags`: https://quay.io/repository/biocontainers/ms2rescore?tab=tags


.. raw:: html

    <script>
        var package = "ms2rescore";
        var versions = ["3.0.3","3.0.2","3.0.1","3.0.1","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ms2rescore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ms2rescore/README.html