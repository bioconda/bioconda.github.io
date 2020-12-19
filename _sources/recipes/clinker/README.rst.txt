:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'clinker'
.. highlight: bash

clinker
=======

.. conda:recipe:: clinker
   :replaces_section_title:
   :noindex:

   Clinker is a bioinformatics pipeline that generates a superTranscriptome from popular fusion finder outputs \(JAFFA\, tophatFusion\, SOAP\, deFUSE\, Pizzly\, etc\)\, that can be then be either viewed in genome viewers such as IGV or through the included plotting feature developed with GViz.

   :homepage: https://github.com/Oshlack/Clinker
   :license: MIT
   :recipe: /`clinker <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/clinker/meta.yaml>`_

   


.. conda:package:: clinker

   |downloads_clinker| |docker_clinker|

   :versions:
      
      

      ``1.32-1``,  ``1.32-0``

      

   
   :depends bioconductor-biomart: 
   :depends bioconductor-gviz: 
   :depends bpipe: 
   :depends python: ``2.7.*``
   :depends samtools: 
   :depends star: ``>=2.5.3a``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install clinker

   and update with::

      conda update clinker

   or use the docker container::

      docker pull quay.io/biocontainers/clinker:<tag>

   (see `clinker/tags`_ for valid values for ``<tag>``)


.. |downloads_clinker| image:: https://img.shields.io/conda/dn/bioconda/clinker.svg?style=flat
   :target: https://anaconda.org/bioconda/clinker
   :alt:   (downloads)
.. |docker_clinker| image:: https://quay.io/repository/biocontainers/clinker/status
   :target: https://quay.io/repository/biocontainers/clinker
.. _`clinker/tags`: https://quay.io/repository/biocontainers/clinker?tab=tags






Notes
-----
Wrapper script provided to indicate clinker is a bpipe pipeline\, provide example command from wiki\, and also a passthrough option.


Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/clinker/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/clinker/README.html