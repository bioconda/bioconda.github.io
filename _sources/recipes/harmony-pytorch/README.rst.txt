:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'harmony-pytorch'
.. highlight: bash

harmony-pytorch
===============

.. conda:recipe:: harmony-pytorch
   :replaces_section_title:
   :noindex:

   This is a Pytorch implementation of Harmony algorithm on single\-cell sequencing data integration.

   :homepage: https://github.com/lilab-bcb/harmony-pytorch
   :license: BSD
   :recipe: /`harmony-pytorch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmony-pytorch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/harmony-pytorch/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41592-019-0619-0`

   


.. conda:package:: harmony-pytorch

   |downloads_harmony-pytorch| |docker_harmony-pytorch|

   :versions:
      
      

      ``0.1.6-0``,  ``0.1.5-0``

      

   
   :depends importlib_metadata: ``>=0.7``
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends pytorch: 
   :depends scikit-learn: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install harmony-pytorch

   and update with::

      conda update harmony-pytorch

   or use the docker container::

      docker pull quay.io/biocontainers/harmony-pytorch:<tag>

   (see `harmony-pytorch/tags`_ for valid values for ``<tag>``)


.. |downloads_harmony-pytorch| image:: https://img.shields.io/conda/dn/bioconda/harmony-pytorch.svg?style=flat
   :target: https://anaconda.org/bioconda/harmony-pytorch
   :alt:   (downloads)
.. |docker_harmony-pytorch| image:: https://quay.io/repository/biocontainers/harmony-pytorch/status
   :target: https://quay.io/repository/biocontainers/harmony-pytorch
.. _`harmony-pytorch/tags`: https://quay.io/repository/biocontainers/harmony-pytorch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/harmony-pytorch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/harmony-pytorch/README.html