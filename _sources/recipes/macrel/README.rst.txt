:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'macrel'
.. highlight: bash

macrel
======

.. conda:recipe:: macrel
   :replaces_section_title:
   :noindex:

   A pipeline for AMP \(antimicrobial peptide\) prediction

   :homepage: https://github.com/BigDataBiology/macrel
   :license: GPLv3
   :recipe: /`macrel <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macrel>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/macrel/meta.yaml>`_
   :links: doi: :doi:`10.1101/2019.12.17.880385`

   Used for the prediction of AMPs in \(meta\)genomes.



.. conda:package:: macrel

   |downloads_macrel| |docker_macrel|

   :versions:
      
      

      ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.0-0``,  ``0.3.1-1``,  ``0.3.1-0``,  ``0.2-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends megahit: 
   :depends ngless: 
   :depends paladin: 
   :depends pandas: 
   :depends python: ``>=3.6,<3.7.0a0``
   :depends python_abi: ``3.6.* *_cp36m``
   :depends r-base: 
   :depends r-essentials: 
   :depends r-peptides: 
   :depends rpy2: 
   :depends scikit-learn: 
   :depends tzlocal: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install macrel

   and update with::

      conda update macrel

   or use the docker container::

      docker pull quay.io/biocontainers/macrel:<tag>

   (see `macrel/tags`_ for valid values for ``<tag>``)


.. |downloads_macrel| image:: https://img.shields.io/conda/dn/bioconda/macrel.svg?style=flat
   :target: https://anaconda.org/bioconda/macrel
   :alt:   (downloads)
.. |docker_macrel| image:: https://quay.io/repository/biocontainers/macrel/status
   :target: https://quay.io/repository/biocontainers/macrel
.. _`macrel/tags`: https://quay.io/repository/biocontainers/macrel?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/macrel/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/macrel/README.html