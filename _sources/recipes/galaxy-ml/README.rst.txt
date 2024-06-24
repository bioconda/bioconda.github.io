:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ml'
.. highlight: bash

galaxy-ml
=========

.. conda:recipe:: galaxy-ml
   :replaces_section_title:
   :noindex:

   APIs for Galaxy machine learning tools

   :homepage: https://github.com/goeckslab/Galaxy-ML
   :license: MIT
   :recipe: /`galaxy-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ml/meta.yaml>`_

   


.. conda:package:: galaxy-ml

   |downloads_galaxy-ml| |docker_galaxy-ml|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.10.0-2</code>,  <code>0.10.0-1</code>,  <code>0.10.0-0</code>,  <code>0.9.1-2</code>,  <code>0.9.1-1</code>,  <code>0.9.1-0</code>,  <code>0.9.0-0</code>,  <code>0.8.3-2</code>,  <code>0.8.3-1</code>,  </span></summary>
      

      ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-2``,  ``0.9.1-1``,  ``0.9.1-0``,  ``0.9.0-0``,  ``0.8.3-2``,  ``0.8.3-1``,  ``0.8.3-0``,  ``0.8.2-5``,  ``0.8.2-4``,  ``0.8.2-3``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``,  ``0.8.0-0``,  ``0.7.12-0``,  ``0.7.11-0``,  ``0.7.10-1``,  ``0.7.10-0``,  ``0.7.9-0``,  ``0.7.8-0``,  ``0.7.7-1``,  ``0.7.7-0``,  ``0.7.5-0``,  ``0.7.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends asteval: ``>=0.9.14``
   :depends bleach: ``>=3.3.0``
   :depends graphviz: ``>=2.40.1``
   :depends h5py: ``>=3.6,<3.8``
   :depends htslib: 
   :depends imbalanced-learn: ``>=0.9,<0.10``
   :depends joblib: ``>=1.0``
   :depends keras: ``>=2.10,<2.11``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends matplotlib-base: ``>=3.1.1``
   :depends mlxtend: ``>=0.21,<0.22``
   :depends numpy: ``>=1.22,<1.23``
   :depends numpy: ``>=1.22.4,<2.0a0``
   :depends pandas: ``>=1.0,<1.3``
   :depends plotly: ``>=4.10.0,<5.0``
   :depends pydot: ``>=1.4``
   :depends pyfaidx: 
   :depends pytabix: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends python_abi: ``3.9.* *_cp39``
   :depends scikit-learn: ``>=1.1,<1.2``
   :depends scikit-optimize: ``>=0.9``
   :depends scipy: ``>=1.3.1``
   :depends six: ``<=1.15.0``
   :depends skrebate: ``>=0.60,<0.70``
   :depends tabix: 
   :depends tensorflow: ``>=2.10,<2.11``
   :depends xgboost: ``>=1.6,<1.8``
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

      mamba install galaxy-ml

   and update with::

      mamba update galaxy-ml

  To create a new environment, run::

      mamba create --name myenvname galaxy-ml

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/galaxy-ml:<tag>

   (see `galaxy-ml/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-ml| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ml
   :alt:   (downloads)
.. |docker_galaxy-ml| image:: https://quay.io/repository/biocontainers/galaxy-ml/status
   :target: https://quay.io/repository/biocontainers/galaxy-ml
.. _`galaxy-ml/tags`: https://quay.io/repository/biocontainers/galaxy-ml?tab=tags


.. raw:: html

    <script>
        var package = "galaxy-ml";
        var versions = ["0.10.0","0.10.0","0.10.0","0.9.1","0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ml/README.html