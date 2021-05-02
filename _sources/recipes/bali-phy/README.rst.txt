:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bali-phy'
.. highlight: bash

bali-phy
========

.. conda:recipe:: bali-phy
   :replaces_section_title:
   :noindex:

   Phylogenetics \- Bayesian estimation of phylogenies and multiple sequence alignments.

   :homepage: http://www.bali-phy.org
   :developer docs: https://github.com/bredelings/BAli-Phy/
   :license: GPL2
   :recipe: /`bali-phy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bali-phy/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btab129`, biotools: :biotools:`bali-phy`

   


.. conda:package:: bali-phy

   |downloads_bali-phy| |docker_bali-phy|

   :versions:
      
      

      ``3.6.0-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends cairo: ``>=1.16.0,<1.17.0a0``
   :depends eigen: ``>=3.3.7``
   :depends glib: 
   :depends gnuplot: 
   :depends libgcc-ng: ``>=9.3.0``
   :depends libglib: ``>=2.68.1,<3.0a0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends pandoc: 
   :depends perl: 
   :depends python: ``>=3.9,<3.10.0a0``
   :depends r-base: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bali-phy

   and update with::

      conda update bali-phy

   or use the docker container::

      docker pull quay.io/biocontainers/bali-phy:<tag>

   (see `bali-phy/tags`_ for valid values for ``<tag>``)


.. |downloads_bali-phy| image:: https://img.shields.io/conda/dn/bioconda/bali-phy.svg?style=flat
   :target: https://anaconda.org/bioconda/bali-phy
   :alt:   (downloads)
.. |docker_bali-phy| image:: https://quay.io/repository/biocontainers/bali-phy/status
   :target: https://quay.io/repository/biocontainers/bali-phy
.. _`bali-phy/tags`: https://quay.io/repository/biocontainers/bali-phy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bali-phy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bali-phy/README.html