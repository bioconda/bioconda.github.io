:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'negative_training_sampler'
.. highlight: bash

negative_training_sampler
=========================

.. conda:recipe:: negative_training_sampler
   :replaces_section_title:

   Generates negative samples with the same GC distribution as the positive samples per chromosome.

   :homepage: https://github.com/kircherlab/negative_training_sampler
   :license: MIT
   :recipe: /`negative_training_sampler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/negative_training_sampler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/negative_training_sampler/meta.yaml>`_

   


.. conda:package:: negative_training_sampler

   |downloads_negative_training_sampler| |docker_negative_training_sampler|

   :versions: 0.1.0-0
   
   :depends click: 
   :depends dask: 
   :depends pandas: 
   :depends pybedtools: 
   :depends python: >=3.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install negative_training_sampler

   and update with::

      conda update negative_training_sampler

   or use the docker container::

      docker pull quay.io/biocontainers/negative_training_sampler:<tag>

   (see `negative_training_sampler/tags`_ for valid values for ``<tag>``)


.. |downloads_negative_training_sampler| image:: https://img.shields.io/conda/dn/bioconda/negative_training_sampler.svg?style=flat
   :target: https://anaconda.org/bioconda/negative_training_sampler
   :alt:   (downloads)
.. |docker_negative_training_sampler| image:: https://quay.io/repository/biocontainers/negative_training_sampler/status
   :target: https://quay.io/repository/biocontainers/negative_training_sampler
.. _`negative_training_sampler/tags`: https://quay.io/repository/biocontainers/negative_training_sampler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/negative_training_sampler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/negative_training_sampler/README.html