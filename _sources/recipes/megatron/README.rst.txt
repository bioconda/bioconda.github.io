:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'megatron'
.. highlight: bash

megatron
========

.. conda:recipe:: megatron
   :replaces_section_title:
   :noindex:

   MEGATRON \- MEGA TRajectories of clONes

   :homepage: https://github.com/pinellolab/MEGATRON
   :license: BSD / BSD-3
   :recipe: /`megatron <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megatron>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/megatron/meta.yaml>`_

   


.. conda:package:: megatron

   |downloads_megatron| |docker_megatron|

   :versions:
      
      

      ``0.1a-0``

      

   
   :depends anndata: ``>=0.7.4``
   :depends matplotlib-base: ``>=3.3``
   :depends numpy: ``>=1.17.0``
   :depends pandas: ``>=1.0,!=1.1``
   :depends python: 
   :depends scikit-learn: ``>=0.19``
   :depends scipy: ``>=1.4``
   :depends seaborn: ``>=0.11``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install megatron

   and update with::

      conda update megatron

   or use the docker container::

      docker pull quay.io/biocontainers/megatron:<tag>

   (see `megatron/tags`_ for valid values for ``<tag>``)


.. |downloads_megatron| image:: https://img.shields.io/conda/dn/bioconda/megatron.svg?style=flat
   :target: https://anaconda.org/bioconda/megatron
   :alt:   (downloads)
.. |docker_megatron| image:: https://quay.io/repository/biocontainers/megatron/status
   :target: https://quay.io/repository/biocontainers/megatron
.. _`megatron/tags`: https://quay.io/repository/biocontainers/megatron?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/megatron/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/megatron/README.html