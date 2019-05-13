:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plasflow'
.. highlight: bash

plasflow
========

.. conda:recipe:: plasflow
   :replaces_section_title:

   PlasFlow \- predicting plasmid sequences in metagenomic data

   :homepage: https://github.com/smaegol/PlasFlow
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`plasflow <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasflow>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plasflow/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkx1321`

   


.. conda:package:: plasflow

   |downloads_plasflow| |docker_plasflow|

   :versions: 1.1.0-0
   
   :depends bioconductor-biostrings: 
   :depends biopython: 
   :depends numpy: 
   :depends pandas: 
   :depends python: >=3.5,<3.6.0a0
   :depends rpy2: 
   :depends scikit-learn: 
   :depends scipy: 
   :depends tensorflow: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install plasflow

   and update with::

      conda update plasflow

   or use the docker container::

      docker pull quay.io/biocontainers/plasflow:<tag>

   (see `plasflow/tags`_ for valid values for ``<tag>``)


.. |downloads_plasflow| image:: https://img.shields.io/conda/dn/bioconda/plasflow.svg?style=flat
   :target: https://anaconda.org/bioconda/plasflow
   :alt:   (downloads)
.. |docker_plasflow| image:: https://quay.io/repository/biocontainers/plasflow/status
   :target: https://quay.io/repository/biocontainers/plasflow
.. _`plasflow/tags`: https://quay.io/repository/biocontainers/plasflow?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plasflow/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plasflow/README.html