:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylorank'
.. highlight: bash

phylorank
=========

.. conda:recipe:: phylorank
   :replaces_section_title:
   :noindex:

   PhyloRank provides functionality for calculating the relative evolutionary divergence \(RED\) of taxa in a tree and for finding the best placement of taxonomic labels in a tree.

   :homepage: https://github.com/dparks1134/PhyloRank
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`phylorank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylorank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylorank/meta.yaml>`_

   


.. conda:package:: phylorank

   |downloads_phylorank| |docker_phylorank|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.43-0``

      

   
   :depends biolib: ``>=0.1.0``
   :depends dendropy: ``>=4.1.0``
   :depends jinja2: ``>=2.7.3``
   :depends matplotlib-base: 
   :depends mpld3: ``>=0.2``
   :depends numpy: 
   :depends python: ``>=3.6``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install phylorank

   and update with::

      conda update phylorank

   or use the docker container::

      docker pull quay.io/biocontainers/phylorank:<tag>

   (see `phylorank/tags`_ for valid values for ``<tag>``)


.. |downloads_phylorank| image:: https://img.shields.io/conda/dn/bioconda/phylorank.svg?style=flat
   :target: https://anaconda.org/bioconda/phylorank
   :alt:   (downloads)
.. |docker_phylorank| image:: https://quay.io/repository/biocontainers/phylorank/status
   :target: https://quay.io/repository/biocontainers/phylorank
.. _`phylorank/tags`: https://quay.io/repository/biocontainers/phylorank?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylorank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylorank/README.html