:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scanorama'
.. highlight: bash

scanorama
=========

.. conda:recipe:: scanorama
   :replaces_section_title:
   :noindex:

   Panoramic stitching of heterogeneous single\-cell transcriptomic data

   :homepage: https://github.com/brianhie/scanorama/
   :license: MIT
   :recipe: /`scanorama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanorama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scanorama/meta.yaml>`_
   :links: doi: :doi:`10.1038/s41587-019-0113-3`

   


.. conda:package:: scanorama

   |downloads_scanorama| |docker_scanorama|

   :versions:
      
      

      ``1.7-0``,  ``1.6-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5-0``

      

   
   :depends fbpca: ``>=1.0``
   :depends geosketch: ``>=1``
   :depends intervaltree: ``2.1``
   :depends matplotlib-base: ``>=2.0.2``
   :depends numpy: ``>=1.12``
   :depends python: ``>=3.6``
   :depends python-annoy: ``>=1.11.5``
   :depends scikit-learn: 
   :depends scipy: ``>=1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scanorama

   and update with::

      conda update scanorama

   or use the docker container::

      docker pull quay.io/biocontainers/scanorama:<tag>

   (see `scanorama/tags`_ for valid values for ``<tag>``)


.. |downloads_scanorama| image:: https://img.shields.io/conda/dn/bioconda/scanorama.svg?style=flat
   :target: https://anaconda.org/bioconda/scanorama
   :alt:   (downloads)
.. |docker_scanorama| image:: https://quay.io/repository/biocontainers/scanorama/status
   :target: https://quay.io/repository/biocontainers/scanorama
.. _`scanorama/tags`: https://quay.io/repository/biocontainers/scanorama?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scanorama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scanorama/README.html