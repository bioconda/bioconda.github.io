:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mtglink'
.. highlight: bash

mtglink
=======

.. conda:recipe:: mtglink
   :replaces_section_title:
   :noindex:

   MTG\-link is a tool for gap\-filling of scaffolds with linked\-read data using MindTheGap

   :homepage: https://github.com/anne-gcd/MTG-Link
   :license: file
   :recipe: /`mtglink <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtglink>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mtglink/meta.yaml>`_

   


.. conda:package:: mtglink

   |downloads_mtglink| |docker_mtglink|

   :versions:
      
      

      ``1.1.0-2``,  ``1.1.0-0``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends biopython: 
   :depends blast: 
   :depends gfapy: 
   :depends indexed_gzip: 
   :depends lrez: ``1.1.*``
   :depends mindthegap: 
   :depends mummer: 
   :depends pathos: 
   :depends python: ``>=3``
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mtglink

   and update with::

      conda update mtglink

   or use the docker container::

      docker pull quay.io/biocontainers/mtglink:<tag>

   (see `mtglink/tags`_ for valid values for ``<tag>``)


.. |downloads_mtglink| image:: https://img.shields.io/conda/dn/bioconda/mtglink.svg?style=flat
   :target: https://anaconda.org/bioconda/mtglink
   :alt:   (downloads)
.. |docker_mtglink| image:: https://quay.io/repository/biocontainers/mtglink/status
   :target: https://quay.io/repository/biocontainers/mtglink
.. _`mtglink/tags`: https://quay.io/repository/biocontainers/mtglink?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mtglink/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mtglink/README.html