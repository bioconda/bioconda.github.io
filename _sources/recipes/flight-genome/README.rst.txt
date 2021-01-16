:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flight-genome'
.. highlight: bash

flight-genome
=============

.. conda:recipe:: flight-genome
   :replaces_section_title:
   :noindex:

   flight \- metagenomic binner and variant clusterer.

   :homepage: https://github.com/rhysnewell/flight
   :license: BSD / BSD-3
   :recipe: /`flight-genome <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flight-genome>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flight-genome/meta.yaml>`_

   


.. conda:package:: flight-genome

   |downloads_flight-genome| |docker_flight-genome|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends biopython: 
   :depends hdbscan: 
   :depends joblib: ``0.17.0``
   :depends matplotlib-base: 
   :depends numba: 
   :depends numpy: 
   :depends pynndescent: 
   :depends python: 
   :depends scikit-bio: 
   :depends scikit-learn: 
   :depends seaborn: 
   :depends threadpoolctl: 
   :depends umap-learn: ``>=0.5``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install flight-genome

   and update with::

      conda update flight-genome

   or use the docker container::

      docker pull quay.io/biocontainers/flight-genome:<tag>

   (see `flight-genome/tags`_ for valid values for ``<tag>``)


.. |downloads_flight-genome| image:: https://img.shields.io/conda/dn/bioconda/flight-genome.svg?style=flat
   :target: https://anaconda.org/bioconda/flight-genome
   :alt:   (downloads)
.. |docker_flight-genome| image:: https://quay.io/repository/biocontainers/flight-genome/status
   :target: https://quay.io/repository/biocontainers/flight-genome
.. _`flight-genome/tags`: https://quay.io/repository/biocontainers/flight-genome?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flight-genome/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flight-genome/README.html