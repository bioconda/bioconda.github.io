:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvi'
.. highlight: bash

scvi
====

.. conda:recipe:: scvi
   :replaces_section_title:

   Single\-cell Variational Inference

   :homepage: https://github.com/YosefLab/scVI
   :documentation: https://scvi.readthedocs.io
   
   :license: MIT / MIT License
   :recipe: /`scvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi/meta.yaml>`_

   Single\-cell Variational Inference


.. conda:package:: scvi

   |downloads_scvi| |docker_scvi|

   :versions: 0.4.1-0, 0.3.0-1, 0.3.0-0, 0.2.4-0, 0.2.3-0, 0.2.2-0, 0.2.1-0, 0.2.0-0, 0.1.6-0, 0.1.5-0, 0.1.4-0, 0.1.3-0, 0.1.2-0
   
   :depends anndata: >=0.6
   :depends h5py: >=2.9
   :depends ipython: >=7.5
   :depends jupyter: >=1.0.0
   :depends leidenalg: >=0.7.0
   :depends loompy: >=2.0.17
   :depends matplotlib: >=3.0
   :depends nbconvert: >=5.5.0
   :depends nbformat: >=4.4.0
   :depends numpy: >=1.16
   :depends pandas: >=0.24
   :depends python: >=3.6
   :depends python-igraph: >=0.7.1
   :depends scikit-learn: >=0.20
   :depends scipy: >=1.2
   :depends seaborn: >=0.9.0
   :depends tqdm: >=4
   :depends umap-learn: >=0.3.7
   :depends xlrd: >=1.2
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scvi

   and update with::

      conda update scvi

   or use the docker container::

      docker pull quay.io/biocontainers/scvi:<tag>

   (see `scvi/tags`_ for valid values for ``<tag>``)


.. |downloads_scvi| image:: https://img.shields.io/conda/dn/bioconda/scvi.svg?style=flat
   :target: https://anaconda.org/bioconda/scvi
   :alt:   (downloads)
.. |docker_scvi| image:: https://quay.io/repository/biocontainers/scvi/status
   :target: https://quay.io/repository/biocontainers/scvi
.. _`scvi/tags`: https://quay.io/repository/biocontainers/scvi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvi/README.html