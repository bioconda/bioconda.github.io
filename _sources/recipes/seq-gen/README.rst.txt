:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seq-gen'
.. highlight: bash

seq-gen
=======

.. conda:recipe:: seq-gen
   :replaces_section_title:

   Seq\-Gen is a program that will simulate the evolution of nucleotide or amino acid sequences along a phylogeny\, using common models of the substitution process.

   :homepage: http://tree.bio.ed.ac.uk/software/Seq-Gen/
   :developer docs: https://github.com/rambaut/Seq-Gen
   :license: BSD / BSD-3-Clause
   :recipe: /`seq-gen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-gen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seq-gen/meta.yaml>`_

   


.. conda:package:: seq-gen

   |downloads_seq-gen| |docker_seq-gen|

   :versions: 1.3.4-2, 1.3.4-0, 1.3.3-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install seq-gen

   and update with::

      conda update seq-gen

   or use the docker container::

      docker pull quay.io/repository/biocontainers/seq-gen:<tag>

   (see `seq-gen/tags`_ for valid values for ``<tag>``)


.. |downloads_seq-gen| image:: https://img.shields.io/conda/dn/bioconda/seq-gen.svg?style=flat
   :alt:   (downloads)
.. |docker_seq-gen| image:: https://quay.io/repository/biocontainers/seq-gen/status
   :target: https://quay.io/repository/biocontainers/seq-gen
.. _`seq-gen/tags`: https://quay.io/repository/biocontainers/seq-gen?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seq-gen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seq-gen/README.html