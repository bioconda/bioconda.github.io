:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hypercluster'
.. highlight: bash

hypercluster
============

.. conda:recipe:: hypercluster
   :replaces_section_title:

   A package for automatic clustering hyperparameter optmization

   :homepage: https://github.com/liliblu/hypercluster
   :documentation: https://hypercluster.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`hypercluster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypercluster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hypercluster/meta.yaml>`_

   


.. conda:package:: hypercluster

   |downloads_hypercluster| |docker_hypercluster|

   :versions: 0.1.9-0, 0.1.8-0, 0.1.3-1, 0.1.3-0, 0.1.2-0, 0.0.2-0
   
   :depends hdbscan: >=0.8.24
   :depends matplotlib: >=3.1.0
   :depends networkx: >=2.4
   :depends numpy: >=1.16.4
   :depends pandas: >=0.24.2
   :depends python-louvain: >=0.13
   :depends scikit-learn: >=0.22.0
   :depends scipy: >=1.2.1
   :depends seaborn: >=0.9.0
   :depends snakemake: >=5.8.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hypercluster

   and update with::

      conda update hypercluster

   or use the docker container::

      docker pull quay.io/biocontainers/hypercluster:<tag>

   (see `hypercluster/tags`_ for valid values for ``<tag>``)


.. |downloads_hypercluster| image:: https://img.shields.io/conda/dn/bioconda/hypercluster.svg?style=flat
   :target: https://anaconda.org/bioconda/hypercluster
   :alt:   (downloads)
.. |docker_hypercluster| image:: https://quay.io/repository/biocontainers/hypercluster/status
   :target: https://quay.io/repository/biocontainers/hypercluster
.. _`hypercluster/tags`: https://quay.io/repository/biocontainers/hypercluster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hypercluster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hypercluster/README.html