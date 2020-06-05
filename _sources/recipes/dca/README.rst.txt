:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dca'
.. highlight: bash

dca
===

.. conda:recipe:: dca
   :replaces_section_title:
   :noindex:

   Count autoencoder for scRNA\-seq denoising

   :homepage: https://github.com/theislab/dca
   :license: APACHE / Apache Software
   :recipe: /`dca <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dca/meta.yaml>`_
   :links: doi: :doi:`10.1101/300681`

   


.. conda:package:: dca

   |downloads_dca| |docker_dca|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends h5py: 
   :depends keras: ``>=2.0.8``
   :depends kopt: 
   :depends numpy: ``>=1.7``
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends scanpy: 
   :depends scikit-learn: 
   :depends six: ``>=1.10.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dca

   and update with::

      conda update dca

   or use the docker container::

      docker pull quay.io/biocontainers/dca:<tag>

   (see `dca/tags`_ for valid values for ``<tag>``)


.. |downloads_dca| image:: https://img.shields.io/conda/dn/bioconda/dca.svg?style=flat
   :target: https://anaconda.org/bioconda/dca
   :alt:   (downloads)
.. |docker_dca| image:: https://quay.io/repository/biocontainers/dca/status
   :target: https://quay.io/repository/biocontainers/dca
.. _`dca/tags`: https://quay.io/repository/biocontainers/dca?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dca/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dca/README.html