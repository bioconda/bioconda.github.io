:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scvelo'
.. highlight: bash

scvelo
======

.. conda:recipe:: scvelo
   :replaces_section_title:
   :noindex:

   single\-cell RNA velocity generalized to transient cell states

   :homepage: https://github.com/theislab/scvelo
   :license: BSD / BSD
   :recipe: /`scvelo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvelo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scvelo/meta.yaml>`_

   


.. conda:package:: scvelo

   |downloads_scvelo| |docker_scvelo|

   :versions:
      
      

      ``0.2.1-0``,  ``0.1.25-0``,  ``0.1.24-0``

      

   
   :depends anndata: ``>=0.6.18``
   :depends loompy: ``>=2.0.12``
   :depends matplotlib-base: ``>=2.2``
   :depends numpy: ``>=1.17``
   :depends pandas: ``>=0.23``
   :depends python: ``>=3.6``
   :depends scanpy: ``>=1.4``
   :depends scikit-learn: ``>=0.21.2``
   :depends scipy: ``>=1.0``
   :depends umap-learn: ``>=0.3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install scvelo

   and update with::

      conda update scvelo

   or use the docker container::

      docker pull quay.io/biocontainers/scvelo:<tag>

   (see `scvelo/tags`_ for valid values for ``<tag>``)


.. |downloads_scvelo| image:: https://img.shields.io/conda/dn/bioconda/scvelo.svg?style=flat
   :target: https://anaconda.org/bioconda/scvelo
   :alt:   (downloads)
.. |docker_scvelo| image:: https://quay.io/repository/biocontainers/scvelo/status
   :target: https://quay.io/repository/biocontainers/scvelo
.. _`scvelo/tags`: https://quay.io/repository/biocontainers/scvelo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scvelo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scvelo/README.html