:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unitem'
.. highlight: bash

unitem
======

.. conda:recipe:: unitem
   :replaces_section_title:
   :noindex:

   Ensemble binning strategies for combining the output of multiple binning methods.

   :homepage: https://github.com/dparks1134/UniteM
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`unitem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unitem/meta.yaml>`_

   


.. conda:package:: unitem

   |downloads_unitem| |docker_unitem|

   :versions:
      
      

      ``0.0.18-0``

      

   
   :depends binsanity: ``>=0.2.5``
   :depends biolib: ``>=0.0.46,<0.1.0``
   :depends checkm-genome: ``>=1.0.7``
   :depends future: 
   :depends groopm: 
   :depends maxbin2: ``>=2.2.2``
   :depends metabat2: ``>=2.10.2``
   :depends python: ``<3``
   :depends svgwrite: ``>=1.1.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unitem

   and update with::

      conda update unitem

   or use the docker container::

      docker pull quay.io/biocontainers/unitem:<tag>

   (see `unitem/tags`_ for valid values for ``<tag>``)


.. |downloads_unitem| image:: https://img.shields.io/conda/dn/bioconda/unitem.svg?style=flat
   :target: https://anaconda.org/bioconda/unitem
   :alt:   (downloads)
.. |docker_unitem| image:: https://quay.io/repository/biocontainers/unitem/status
   :target: https://quay.io/repository/biocontainers/unitem
.. _`unitem/tags`: https://quay.io/repository/biocontainers/unitem?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unitem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unitem/README.html