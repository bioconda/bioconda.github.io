:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'homoeditdistance'
.. highlight: bash

homoeditdistance
================

.. conda:recipe:: homoeditdistance
   :replaces_section_title:
   :noindex:

   An implementation of the homo\-edit distance algorithm.

   :homepage: https://github.com/AlBi-HHU/homo-edit-distance
   :license: MIT
   :recipe: /`homoeditdistance <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homoeditdistance>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/homoeditdistance/meta.yaml>`_

   A homo\-insertion is an insertion of a string of equal characters\, which we also call a block\, into another string. A homo\-deletion is the inverse operation\, that is\, the deletion of such a block. We consider the following problem\: Given two strings\, what is the minimum number of homo\-insertions or homo\-deletions needed to convert one into the other\? We refer to this number as the homo\-edit distance.


.. conda:package:: homoeditdistance

   |downloads_homoeditdistance| |docker_homoeditdistance|

   :versions:
      
      

      ``0.0.1-0``

      

   
   :depends numpy: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install homoeditdistance

   and update with::

      conda update homoeditdistance

   or use the docker container::

      docker pull quay.io/biocontainers/homoeditdistance:<tag>

   (see `homoeditdistance/tags`_ for valid values for ``<tag>``)


.. |downloads_homoeditdistance| image:: https://img.shields.io/conda/dn/bioconda/homoeditdistance.svg?style=flat
   :target: https://anaconda.org/bioconda/homoeditdistance
   :alt:   (downloads)
.. |docker_homoeditdistance| image:: https://quay.io/repository/biocontainers/homoeditdistance/status
   :target: https://quay.io/repository/biocontainers/homoeditdistance
.. _`homoeditdistance/tags`: https://quay.io/repository/biocontainers/homoeditdistance?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/homoeditdistance/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/homoeditdistance/README.html