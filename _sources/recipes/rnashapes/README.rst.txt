:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnashapes'
.. highlight: bash

rnashapes
=========

.. conda:recipe:: rnashapes
   :replaces_section_title:
   :noindex:

   RNAshape abstraction maps structures to a tree\-like domain of shapes\, retaining adjacency and nesting of structural features\, but disregarding helix lengths. Shape abstraction integrates well with dynamic programming algorithms\, and hence it can be applied during structure prediction rather than afterwards. This avoids exponential explosion and can still give us a non\-heuristic and complete account of properties of the molecule\'s folding space.

   :homepage: https://bibiserv.cebitec.uni-bielefeld.de/rnashapes
   :license: GPLv3+
   :recipe: /`rnashapes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnashapes/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btu649`

   


.. conda:package:: rnashapes

   |downloads_rnashapes| |docker_rnashapes|

   :versions:
      
      

      ``3.3.0-5``,  ``3.3.0-4``,  ``3.3.0-3``,  ``3.3.0-0``,  ``2.1.6-4``,  ``2.1.6-3``,  ``2.1.6-2``,  ``2.1.6-1``,  ``2.1.6-0``

      

   
   :depends bellmans-gapc: ``>=2020.12.08``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
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
   :target: https://anaconda.org/bioconda/rnashapes
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