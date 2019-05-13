:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pomoxis'
.. highlight: bash

pomoxis
=======

.. conda:recipe:: pomoxis
   :replaces_section_title:

   Assembly\, consensensus\, and analysis tools by ONT research

   :homepage: https://github.com/nanoporetech/pomoxis
   :documentation: https://nanoporetech.github.io/pomoxis/index.html
   
   :license: OTHER / Mozilla Public License 2.0
   :recipe: /`pomoxis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pomoxis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pomoxis/meta.yaml>`_

   


.. conda:package:: pomoxis

   |downloads_pomoxis| |docker_pomoxis|

   :versions: 0.2.2-0
   
   :depends aiozmq: 
   :depends bcftools: 
   :depends biopython: >=1.63
   :depends cffi: 
   :depends fast5-research: 
   :depends intervaltree: >=3
   :depends mappy: 
   :depends matplotlib: 
   :depends miniasm: 
   :depends minimap2: 
   :depends msgpack-python: 
   :depends numpy: 
   :depends pandas: 
   :depends porechop: 
   :depends pysam: 
   :depends python: >=3.4,<3.7
   :depends racon: 
   :depends samtools: 
   :depends scrappie: 
   :depends seqkit: 
   :depends watchdog: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pomoxis

   and update with::

      conda update pomoxis

   or use the docker container::

      docker pull quay.io/biocontainers/pomoxis:<tag>

   (see `pomoxis/tags`_ for valid values for ``<tag>``)


.. |downloads_pomoxis| image:: https://img.shields.io/conda/dn/bioconda/pomoxis.svg?style=flat
   :target: https://anaconda.org/bioconda/pomoxis
   :alt:   (downloads)
.. |docker_pomoxis| image:: https://quay.io/repository/biocontainers/pomoxis/status
   :target: https://quay.io/repository/biocontainers/pomoxis
.. _`pomoxis/tags`: https://quay.io/repository/biocontainers/pomoxis?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pomoxis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pomoxis/README.html