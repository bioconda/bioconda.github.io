:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'extract-codon-alignment'
.. highlight: bash

extract-codon-alignment
=======================

.. conda:recipe:: extract-codon-alignment
   :replaces_section_title:

   To extract some codon positions \(1st\, 2nd\, 3rd\) from a CDS alignment.

   :homepage: https://github.com/linzhi2013/extract_codon_alignment
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`extract-codon-alignment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract-codon-alignment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/extract-codon-alignment/meta.yaml>`_

   


.. conda:package:: extract-codon-alignment

   |downloads_extract-codon-alignment| |docker_extract-codon-alignment|

   :versions: 0.0.1-0
   
   :depends biopython: >=1.54
   :depends python: >=3
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install extract-codon-alignment

   and update with::

      conda update extract-codon-alignment

   or use the docker container::

      docker pull quay.io/biocontainers/extract-codon-alignment:<tag>

   (see `extract-codon-alignment/tags`_ for valid values for ``<tag>``)


.. |downloads_extract-codon-alignment| image:: https://img.shields.io/conda/dn/bioconda/extract-codon-alignment.svg?style=flat
   :target: https://anaconda.org/bioconda/extract-codon-alignment
   :alt:   (downloads)
.. |docker_extract-codon-alignment| image:: https://quay.io/repository/biocontainers/extract-codon-alignment/status
   :target: https://quay.io/repository/biocontainers/extract-codon-alignment
.. _`extract-codon-alignment/tags`: https://quay.io/repository/biocontainers/extract-codon-alignment?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/extract-codon-alignment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/extract-codon-alignment/README.html