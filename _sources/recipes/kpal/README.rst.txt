:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kpal'
.. highlight: bash

kpal
====

.. conda:recipe:: kpal
   :replaces_section_title:

   Analysis toolkit and programming library for k\-mer profiles

   :homepage: https://kpal.readthedocs.org
   :license: MIT License
   :recipe: /`kpal <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpal>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kpal/meta.yaml>`_

   


.. conda:package:: kpal

   |downloads_kpal| |docker_kpal|

   :versions: 2.1.1-1, 2.1.1-0
   
   :depends biopython: 
   :depends future: 
   :depends h5py: >=2.1
   :depends python: 
   :depends semantic_version: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kpal

   and update with::

      conda update kpal

   or use the docker container::

      docker pull quay.io/biocontainers/kpal:<tag>

   (see `kpal/tags`_ for valid values for ``<tag>``)


.. |downloads_kpal| image:: https://img.shields.io/conda/dn/bioconda/kpal.svg?style=flat
   :alt:   (downloads)
.. |docker_kpal| image:: https://quay.io/repository/biocontainers/kpal/status
   :target: https://quay.io/repository/biocontainers/kpal
.. _`kpal/tags`: https://quay.io/repository/biocontainers/kpal?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kpal/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kpal/README.html