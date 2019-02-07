.. title:: Package Recipe 'tirmite'
.. highlight: bash


tirmite
=======

.. conda:recipe:: tirmite
   :replaces_section_title:

   Map TIR\-pHMM models to genomic sequences for annotation of MITES and complete DNA\-Transposons.

   :homepage: https://github.com/Adamtaranto/TIRmite
   :license: MIT / MIT License
   :recipe: /`tirmite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirmite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tirmite/meta.yaml>`_

   Build profile Hidden Markov Models for Terminal Inverted repeat families \(TIR\-pHMMs\) and map to genomic sequences for annotation of MITES and complete DNA\-Transposons with variable internal sequence composition.


.. conda:package:: tirmite

   |downloads_tirmite| |docker_tirmite|

   :versions: 1.1.3, 1.1.1, 1.1.0

   :depends: :conda:package:`biopython` >=1.70 :conda:package:`pandas` >=0.20.3 :conda:package:`pymummer` >=0.10.3 :conda:package:`python` >=3.5,<3.6.0a0 

   :required~by: |required_by_tirmite|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tirmite

   and update with::

      conda update tirmite

   or use the docker container::

      docker pull quay.io/repository/biocontainers/tirmite


.. |required_by_tirmite| conda:required_by:: tirmite
.. |downloads_tirmite| image:: https://img.shields.io/conda/dn/bioconda/tirmite.svg?style=flat
   :alt:   (downloads)
.. |docker_tirmite| image:: https://quay.io/repository/biocontainers/tirmite/status
   :target: https://quay.io/repository/biocontainers/tirmite







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tirmite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tirmite/README.html

