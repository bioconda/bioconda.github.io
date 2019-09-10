:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-ml'
.. highlight: bash

galaxy-ml
=========

.. conda:recipe:: galaxy-ml
   :replaces_section_title:

   APIs for Galaxy machine learning tools

   :homepage: https://github.com/goeckslab/Galaxy-ML
   :license: MIT
   :recipe: /`galaxy-ml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ml>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-ml/meta.yaml>`_

   


.. conda:package:: galaxy-ml

   |downloads_galaxy-ml| |docker_galaxy-ml|

   :versions: 0.7.12-0, 0.7.11-0, 0.7.10-1, 0.7.10-0, 0.7.9-0, 0.7.8-0, 0.7.7-1, 0.7.7-0, 0.7.5-0, 0.7.4.1-0
   
   :depends asteval: 0.9.13
   :depends imbalanced-learn: 0.4.3
   :depends joblib: 0.13.2
   :depends keras: 2.2.4
   :depends libgcc-ng: >=7.3.0
   :depends libstdcxx-ng: >=7.3.0
   :depends mlxtend: 0.16.0
   :depends numpy: 1.16.4
   :depends pandas: 0.24.2
   :depends pyfaidx: 
   :depends pytabix: 
   :depends python: >=3.6,<3.7.0a0
   :depends readme_renderer: >=23.0
   :depends scikit-learn: 0.20.3
   :depends scipy: 1.3.0
   :depends skrebate: 0.6
   :depends tabix: 
   :depends tensorflow: 1.13.1
   :depends xgboost: 0.80
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-ml

   and update with::

      conda update galaxy-ml

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-ml:<tag>

   (see `galaxy-ml/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-ml| image:: https://img.shields.io/conda/dn/bioconda/galaxy-ml.svg?style=flat
   :target: https://anaconda.org/bioconda/galaxy-ml
   :alt:   (downloads)
.. |docker_galaxy-ml| image:: https://quay.io/repository/biocontainers/galaxy-ml/status
   :target: https://quay.io/repository/biocontainers/galaxy-ml
.. _`galaxy-ml/tags`: https://quay.io/repository/biocontainers/galaxy-ml?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-ml/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-ml/README.html