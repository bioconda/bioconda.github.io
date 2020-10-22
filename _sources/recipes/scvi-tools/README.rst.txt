:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvi-tools'
.. highlight: bash

scvi-tools
==========

.. conda:recipe:: scvi-tools
   :replaces_section_title:
   :noindex:

   Deep generative models for end\-to\-end analysis of single\-cell omics data.

   :homepage: https://github.com/YosefLab/scvi-tools
   :documentation: https://scvi.readthedocs.io
   
   :license: BSD / BSD-3-Clause
   :recipe: /`scvi-tools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi-tools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvi-tools/meta.yaml>`_

   


.. conda:package:: scvi-tools

   |downloads_scvi-tools| |docker_scvi-tools|

   :versions:
      
      

      ``0.7.1-0``,  ``0.7.0-0``,  ``0.7.0b0-0``,  ``0.7.0a6-0``,  ``0.7.0a5-0``,  ``0.7.0a4-1``,  ``0.7.0a4-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends h5py: ``>=2.9.0``
   :depends hyperopt: ``0.1.2``
   :depends importlib-metadata: ``>=2.0``
   :depends ipywidgets: ``>=7.5.1``
   :depends numba: ``>=0.41.0``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=1.0``
   :depends poetry: ``>=1.0.9``
   :depends python: ``>=3.6``
   :depends pytorch: ``>=1.3``
   :depends rich: ``>=6.2.0``
   :depends scikit-learn: ``>=0.21.2``
   :depends toml: ``>=0.10.1``
   :depends tqdm: ``>=4.31.1``
   :depends typing-extensions: ``>=3.7.4``
   :depends xlrd: ``>=1.2.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scvi-tools

   and update with::

      conda update scvi-tools

   or use the docker container::

      docker pull quay.io/biocontainers/scvi-tools:<tag>

   (see `scvi-tools/tags`_ for valid values for ``<tag>``)


.. |downloads_scvi-tools| image:: https://img.shields.io/conda/dn/bioconda/scvi-tools.svg?style=flat
   :target: https://anaconda.org/bioconda/scvi-tools
   :alt:   (downloads)
.. |docker_scvi-tools| image:: https://quay.io/repository/biocontainers/scvi-tools/status
   :target: https://quay.io/repository/biocontainers/scvi-tools
.. _`scvi-tools/tags`: https://quay.io/repository/biocontainers/scvi-tools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvi-tools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvi-tools/README.html