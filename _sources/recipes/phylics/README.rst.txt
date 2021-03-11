:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylics'
.. highlight: bash

phylics
=======

.. conda:recipe:: phylics
   :replaces_section_title:
   :noindex:

   Single\-cell CNV data analysis toolkit

   :homepage: https://github.com/bioinformatics-polito/PhyliCS
   :license: AGPL3
   :recipe: /`phylics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylics/meta.yaml>`_

   


.. conda:package:: phylics

   |downloads_phylics| |docker_phylics|

   :versions:
      
      

      ``1.0.5-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends anndata: ``>=0.7.5``
   :depends hdbscan: ``>=0.8.26``
   :depends ipython: ``>=7.19.0``
   :depends joblib: ``>=1.0.0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends matplotlib-base: ``>=3.3.1``
   :depends numpy: ``>=1.19.5``
   :depends pandas: ``>=1.1.3``
   :depends python: ``>=3.7,<3.8.0a0``
   :depends python_abi: ``3.7.* *_cp37m``
   :depends scikit-learn: ``>=0.24``
   :depends scipy: ``>=1.6.0``
   :depends seaborn: ``>=0.11.1``
   :depends statsmodels: ``>=0.12.0``
   :depends typing: 
   :depends umap-learn: ``>=0.4.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylics

   and update with::

      conda update phylics

   or use the docker container::

      docker pull quay.io/biocontainers/phylics:<tag>

   (see `phylics/tags`_ for valid values for ``<tag>``)


.. |downloads_phylics| image:: https://img.shields.io/conda/dn/bioconda/phylics.svg?style=flat
   :target: https://anaconda.org/bioconda/phylics
   :alt:   (downloads)
.. |docker_phylics| image:: https://quay.io/repository/biocontainers/phylics/status
   :target: https://quay.io/repository/biocontainers/phylics
.. _`phylics/tags`: https://quay.io/repository/biocontainers/phylics?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylics/README.html