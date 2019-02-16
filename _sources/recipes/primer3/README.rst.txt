:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primer3'
.. highlight: bash

primer3
=======

.. conda:recipe:: primer3
   :replaces_section_title:

   Design PCR primers from DNA sequence. From mispriming libraries to sequence quality data to the generation of internal oligos\, primer3 does it.

   :homepage: https://github.com/primer3-org/primer3
   :license: GPLv2
   :recipe: /`primer3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primer3/meta.yaml>`_
   :links: biotools: :biotools:`primer3`, doi: :doi:`10.1093/nar/gks596`

   


.. conda:package:: primer3

   |downloads_primer3| |docker_primer3|

   :versions: 2.4.1a-0, 2.4.0-0, 2.3.7-1, 2.3.7-0, 2.0.0a-1, 2.0.0a-0, 1.1.4-1, 1.1.4-0
   
   :depends libgcc-ng: >=4.9
   
   :depends libstdcxx-ng: >=4.9
   
   :depends perl: >=5.26.2,<5.26.3.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primer3

   and update with::

      conda update primer3

   or use the docker container::

      docker pull quay.io/repository/biocontainers/primer3:<tag>

   (see `primer3/tags`_ for valid values for ``<tag>``)


.. |downloads_primer3| image:: https://img.shields.io/conda/dn/bioconda/primer3.svg?style=flat
   :alt:   (downloads)
.. |docker_primer3| image:: https://quay.io/repository/biocontainers/primer3/status
   :target: https://quay.io/repository/biocontainers/primer3
.. _`primer3/tags`: https://quay.io/repository/biocontainers/primer3?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primer3/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primer3/README.html