:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnashapes'
.. highlight: bash

rnashapes
=========

.. conda:recipe:: rnashapes/2.1.6
   :replaces_section_title:

   RNAshape abstraction maps structures to a tree\-like domain of shapes\, retaining adjacency and nesting of structural features\, but disregarding helix lengths. Shape abstraction integrates well with dynamic programming algorithms\, and hence it can be applied during structure prediction rather than afterwards. This avoids exponential explosion and can still give us a non\-heuristic and complete account of properties of the molecule\'s folding space.

   :homepage: http://bibiserv.techfak.uni-bielefeld.de/rnashapes
   :license: 
   :recipe: /`rnashapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes>`_/`2.1.6 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/2.1.6>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/2.1.6/meta.yaml>`_

   


.. conda:package:: rnashapes

   |downloads_rnashapes| |docker_rnashapes|

   :versions: 3.3.0-0, 2.1.6-1, 2.1.6-0
   
   :depends bellmans-gapc: 
   
   :depends boost: 1.61*
   
   :depends gsl: 1.16*
   
   :depends libgcc: 
   
   :depends perl: 5.22.0*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rnashapes

   and update with::

      conda update rnashapes

   or use the docker container::

      docker pull quay.io/biocontainers/rnashapes:<tag>

   (see `rnashapes/tags`_ for valid values for ``<tag>``)


.. |downloads_rnashapes| image:: https://img.shields.io/conda/dn/bioconda/rnashapes.svg?style=flat
   :alt:   (downloads)
.. |docker_rnashapes| image:: https://quay.io/repository/biocontainers/rnashapes/status
   :target: https://quay.io/repository/biocontainers/rnashapes
.. _`rnashapes/tags`: https://quay.io/repository/biocontainers/rnashapes?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnashapes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnashapes/README.html