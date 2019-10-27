:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbalign'
.. highlight: bash

pbalign
=======

.. conda:recipe:: pbalign
   :replaces_section_title:

   Python wrapper for producing PBBAM valid alignments

   :homepage: https://github.com/PacificBiosciences/pbalign
   :license: BSD-3-Clause-Clear
   :recipe: /`pbalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbalign/meta.yaml>`_

   


.. conda:package:: pbalign

   |downloads_pbalign| |docker_pbalign|

   :versions: 0.3.2-1, 0.3.2-0, 0.3.1-2, 0.3.1-1, 0.3.1-0
   
   :depends blasr: >=5.3.2
   :depends pbbam: >=0.18.0
   :depends pbcommand: >=1.1.1
   :depends pbcore: >=1.6.5
   :depends pysam: >=0.15.1
   :depends python: <3
   :depends samtools: >=1.6
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbalign

   and update with::

      conda update pbalign

   or use the docker container::

      docker pull quay.io/biocontainers/pbalign:<tag>

   (see `pbalign/tags`_ for valid values for ``<tag>``)


.. |downloads_pbalign| image:: https://img.shields.io/conda/dn/bioconda/pbalign.svg?style=flat
   :target: https://anaconda.org/bioconda/pbalign
   :alt:   (downloads)
.. |docker_pbalign| image:: https://quay.io/repository/biocontainers/pbalign/status
   :target: https://quay.io/repository/biocontainers/pbalign
.. _`pbalign/tags`: https://quay.io/repository/biocontainers/pbalign?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbalign/README.html