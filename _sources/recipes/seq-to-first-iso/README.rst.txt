:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-to-first-iso'
.. highlight: bash

seq-to-first-iso
================

.. conda:recipe:: seq-to-first-iso
   :replaces_section_title:
   :noindex:

   Compute first two isotopologues intensity from peptide sequence

   :homepage: https://github.com/pierrepo/seq-to-first-iso
   :documentation: https://seq-to-first-iso.readthedocs.io/
   
   :license: BSD / BSD 3-Clause License
   :recipe: /`seq-to-first-iso <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-to-first-iso>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-to-first-iso/meta.yaml>`_

   Seq\-to\-first\-iso is a Python package that computes isotopologues M0 and M1
   of peptides with a 99.99 \% 12C enrichment for quantification by SLIM\-labeling.
   It simulates auxotrophies by differentiating labelled and unlabelled
   amino acids.



.. conda:package:: seq-to-first-iso

   |downloads_seq-to-first-iso| |docker_seq-to-first-iso|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.0-0``,  ``0.5.1-0``,  ``0.5.0-0``

      

   
   :depends pandas: 
   :depends pyteomics: 
   :depends python: ``>=3.6``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq-to-first-iso

   and update with::

      conda update seq-to-first-iso

   or use the docker container::

      docker pull quay.io/biocontainers/seq-to-first-iso:<tag>

   (see `seq-to-first-iso/tags`_ for valid values for ``<tag>``)


.. |downloads_seq-to-first-iso| image:: https://img.shields.io/conda/dn/bioconda/seq-to-first-iso.svg?style=flat
   :target: https://anaconda.org/bioconda/seq-to-first-iso
   :alt:   (downloads)
.. |docker_seq-to-first-iso| image:: https://quay.io/repository/biocontainers/seq-to-first-iso/status
   :target: https://quay.io/repository/biocontainers/seq-to-first-iso
.. _`seq-to-first-iso/tags`: https://quay.io/repository/biocontainers/seq-to-first-iso?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-to-first-iso/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-to-first-iso/README.html