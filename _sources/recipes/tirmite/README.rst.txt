:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tirmite'
.. highlight: bash

tirmite
=======

.. conda:recipe:: tirmite
   :replaces_section_title:
   :noindex:

   Map TIR\-pHMM models to genomic sequences for annotation of MITES and complete DNA\-Transposons.

   :homepage: https://github.com/Adamtaranto/TIRmite
   :license: MIT / MIT License
   :recipe: /`tirmite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirmite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirmite/meta.yaml>`_

   Build profile Hidden Markov Models for Terminal Inverted repeat families \(TIR\-pHMMs\) and map to genomic sequences for annotation of MITES and complete DNA\-Transposons with variable internal sequence composition.


.. conda:package:: tirmite

   |downloads_tirmite| |docker_tirmite|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.1-0``,  ``1.1.0-1``,  ``1.1.0-0``

      

   
   :depends biopython: ``>=1.70``
   :depends pandas: ``>=0.20.3``
   :depends pymummer: ``>=0.10.3``
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tirmite

   and update with::

      conda update tirmite

   or use the docker container::

      docker pull quay.io/biocontainers/tirmite:<tag>

   (see `tirmite/tags`_ for valid values for ``<tag>``)


.. |downloads_tirmite| image:: https://img.shields.io/conda/dn/bioconda/tirmite.svg?style=flat
   :target: https://anaconda.org/bioconda/tirmite
   :alt:   (downloads)
.. |docker_tirmite| image:: https://quay.io/repository/biocontainers/tirmite/status
   :target: https://quay.io/repository/biocontainers/tirmite
.. _`tirmite/tags`: https://quay.io/repository/biocontainers/tirmite?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tirmite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tirmite/README.html