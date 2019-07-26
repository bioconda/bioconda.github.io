:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'prosampler'
.. highlight: bash

prosampler
==========

.. conda:recipe:: prosampler
   :replaces_section_title:

   An ultra\-fast motif finding program in large ChIP\-seq datasets.

   :homepage: https://github.com/zhengchangsulab/ProSampler
   :license: GPLv3
   :recipe: /`prosampler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosampler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/prosampler/meta.yaml>`_
   :links: biotools: :biotools:`prosampler`

   


.. conda:package:: prosampler

   |downloads_prosampler| |docker_prosampler|

   :versions: 1.0-0
   
   :depends libcxx: >=4.0.1
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install prosampler

   and update with::

      conda update prosampler

   or use the docker container::

      docker pull quay.io/biocontainers/prosampler:<tag>

   (see `prosampler/tags`_ for valid values for ``<tag>``)


.. |downloads_prosampler| image:: https://img.shields.io/conda/dn/bioconda/prosampler.svg?style=flat
   :target: https://anaconda.org/bioconda/prosampler
   :alt:   (downloads)
.. |docker_prosampler| image:: https://quay.io/repository/biocontainers/prosampler/status
   :target: https://quay.io/repository/biocontainers/prosampler
.. _`prosampler/tags`: https://quay.io/repository/biocontainers/prosampler?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/prosampler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/prosampler/README.html