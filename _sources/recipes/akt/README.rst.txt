.. title:: Package Recipe 'akt'
.. highlight: bash


akt
===

.. conda:recipe:: akt
   :replaces_section_title:

   Ancestry and Kinship Tools \(AKT\) provides a handful of useful statistical genetics routines using the htslib API for input\/output. This means it can seamlessly read BCF\/VCF files and play nicely with bcftools.

   :homepage: https://github.com/Illumina/akt
   :license: GPL3
   :recipe: /`akt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/akt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/akt/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw576`

   


.. conda:package:: akt

   |downloads_akt| |docker_akt|

   :versions: 0.3.2, 0.2.0

   :depends: :conda:package:`libgcc`  :conda:package:`openmp`  :conda:package:`zlib` 1.2.11* 

   :required~by: |required_by_akt|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install akt

   and update with::

      conda update akt

   or use the docker container::

      docker pull quay.io/repository/biocontainers/akt


.. |required_by_akt| conda:required_by:: akt
.. |downloads_akt| image:: https://img.shields.io/conda/dn/bioconda/akt.svg?style=flat
   :alt:   (downloads)
.. |docker_akt| image:: https://quay.io/repository/biocontainers/akt/status
   :target: https://quay.io/repository/biocontainers/akt







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/akt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/akt/README.html

