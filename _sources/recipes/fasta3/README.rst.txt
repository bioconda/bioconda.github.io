:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasta3'
.. highlight: bash

fasta3
======

.. conda:recipe:: fasta3
   :replaces_section_title:

   The FASTA package \- protein and DNA sequence similarity searching and alignment programs

   :homepage: http://faculty.virginia.edu/wrpearson/fasta
   :license: Apache 2.0
   :recipe: /`fasta3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta3/meta.yaml>`_

   


.. conda:package:: fasta3

   |downloads_fasta3| |docker_fasta3|

   :versions: 36.3.8-4, 36.3.8-3, 36.3.8-2, 36.3.8-1, 36.3.8-0
   
   :depends libgcc-ng: >=4.9
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fasta3

   and update with::

      conda update fasta3

   or use the docker container::

      docker pull quay.io/biocontainers/fasta3:<tag>

   (see `fasta3/tags`_ for valid values for ``<tag>``)


.. |downloads_fasta3| image:: https://img.shields.io/conda/dn/bioconda/fasta3.svg?style=flat
   :alt:   (downloads)
.. |docker_fasta3| image:: https://quay.io/repository/biocontainers/fasta3/status
   :target: https://quay.io/repository/biocontainers/fasta3
.. _`fasta3/tags`: https://quay.io/repository/biocontainers/fasta3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta3/README.html