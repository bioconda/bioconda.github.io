:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'astalavista'
.. highlight: bash

astalavista
===========

.. conda:recipe:: astalavista
   :replaces_section_title:

   AStalavista is a computer program to extract alternative splicing \(AS\) events from a given genomic annotation of exon\-intron gene coordinates. By comparing all given transcripts\, AStalavista detects the variations in their splicing structure and identify all AS events \(like exon skipping\, alternate donor\, etc\) by assigning to each of them an AS code.

   :homepage: http://sammeth.net/confluence/display/ASTA/Home
   :license: BSD
   :recipe: /`astalavista <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/astalavista/meta.yaml>`_
   :links: biotools: :biotools:`astalavista`, doi: :doi:`10.1101/gr.121947.111`

   


.. conda:package:: astalavista

   |downloads_astalavista| |docker_astalavista|

   :versions: 4.0-1, 4.0-0, 3.2-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install astalavista

   and update with::

      conda update astalavista

   or use the docker container::

      docker pull quay.io/repository/biocontainers/astalavista:<tag>

   (see `astalavista/tags`_ for valid values for ``<tag>``)


.. |downloads_astalavista| image:: https://img.shields.io/conda/dn/bioconda/astalavista.svg?style=flat
   :alt:   (downloads)
.. |docker_astalavista| image:: https://quay.io/repository/biocontainers/astalavista/status
   :target: https://quay.io/repository/biocontainers/astalavista
.. _`astalavista/tags`: https://quay.io/repository/biocontainers/astalavista?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/astalavista/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/astalavista/README.html