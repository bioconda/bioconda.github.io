:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kipoi_veff'
.. highlight: bash

kipoi_veff
==========

.. conda:recipe:: kipoi_veff
   :replaces_section_title:

   kipoi\_veff\: variant effect prediction plugin for Kipoi

   :homepage: https://github.com/kipoi/kipoi-veff
   :documentation: https://kipoi.org/veff-docs/
   
   :license: MIT / MIT license
   :recipe: /`kipoi_veff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi_veff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kipoi_veff/meta.yaml>`_

   kipoi\_veff\: variant effect prediction plugin for Kipoi


.. conda:package:: kipoi_veff

   |downloads_kipoi_veff| |docker_kipoi_veff|

   :versions: 0.2.2-0, 0.2.1-0, 0.2.0-0, 0.1.2-0
   
   :depends colorlog: 
   :depends cookiecutter: 
   :depends cyvcf2: 
   :depends deepdish: 
   :depends descartes: 
   :depends future: 
   :depends h5py: 
   :depends intervaltree: 
   :depends kipoi: >=0.5.5
   :depends matplotlib: 
   :depends numpy: 
   :depends pandas: 
   :depends pybedtools: 
   :depends pysam: 
   :depends python: 
   :depends pyvcf: 
   :depends seaborn: 
   :depends shapely: 
   :depends tqdm: 
   :depends urllib3: >=1.21.1,<1.23
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kipoi_veff

   and update with::

      conda update kipoi_veff

   or use the docker container::

      docker pull quay.io/biocontainers/kipoi_veff:<tag>

   (see `kipoi_veff/tags`_ for valid values for ``<tag>``)


.. |downloads_kipoi_veff| image:: https://img.shields.io/conda/dn/bioconda/kipoi_veff.svg?style=flat
   :target: https://anaconda.org/bioconda/kipoi_veff
   :alt:   (downloads)
.. |docker_kipoi_veff| image:: https://quay.io/repository/biocontainers/kipoi_veff/status
   :target: https://quay.io/repository/biocontainers/kipoi_veff
.. _`kipoi_veff/tags`: https://quay.io/repository/biocontainers/kipoi_veff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kipoi_veff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kipoi_veff/README.html