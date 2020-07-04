:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cellrank'
.. highlight: bash

cellrank
========

.. conda:recipe:: cellrank
   :replaces_section_title:
   :noindex:

   Continuous Lineage Decisions Uncovered by RNA Velocity

   :homepage: https://github.com/theislab/cellrank
   :documentation: http://cellrank.org
   
   :license: BSD
   :recipe: /`cellrank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellrank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cellrank/meta.yaml>`_

   CellRank is a toolkit to uncover cellular dynamics based on scRNA\-seq data with RNA velocity annotation\,
   see La Manno et al. \(2018\) and Bergen et al. \(2019\). CellRank models cellular dynamics as a Markov chain\,
   where transition probabilities are computed based on RNA velocity and transcriptomic similarity\,
   taking into account uncertainty in the velocities.



.. conda:package:: cellrank

   |downloads_cellrank| |docker_cellrank|

   :versions:
      
      

      ``1.0.0b3-0``

      

   
   :depends anndata: ``>=0.7.2``
   :depends future_fstrings: 
   :depends joblib: ``>=0.13.1``
   :depends matplotlib-base: ``>=3.0.3``
   :depends networkx: ``>=2.2``
   :depends numpy: ``>=1.16.4``
   :depends pandas: ``>=0.23.4``
   :depends python: ``>=3.6``
   :depends scanpy: ``>=1.5.0``
   :depends scikit-learn: ``>=0.21.3``
   :depends scipy: ``>=1.2.0``
   :depends scvelo: ``>=0.2.1``
   :depends seaborn: ``>=0.10.0``
   :depends setuptools: ``>=41.0.1``
   :depends tqdm: ``>=4.47.0``
   :depends tzlocal: ``>=1.5.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cellrank

   and update with::

      conda update cellrank

   or use the docker container::

      docker pull quay.io/biocontainers/cellrank:<tag>

   (see `cellrank/tags`_ for valid values for ``<tag>``)


.. |downloads_cellrank| image:: https://img.shields.io/conda/dn/bioconda/cellrank.svg?style=flat
   :target: https://anaconda.org/bioconda/cellrank
   :alt:   (downloads)
.. |docker_cellrank| image:: https://quay.io/repository/biocontainers/cellrank/status
   :target: https://quay.io/repository/biocontainers/cellrank
.. _`cellrank/tags`: https://quay.io/repository/biocontainers/cellrank?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cellrank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cellrank/README.html