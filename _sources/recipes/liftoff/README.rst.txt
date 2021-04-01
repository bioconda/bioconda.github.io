:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'liftoff'
.. highlight: bash

liftoff
=======

.. conda:recipe:: liftoff
   :replaces_section_title:
   :noindex:

   An accurate GFF3\/GTF lift over pipeline

   :homepage: https://github.com/agshumate/Liftoff
   :license: GPL / GPL-3 License
   :recipe: /`liftoff <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftoff>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/liftoff/meta.yaml>`_

   


.. conda:package:: liftoff

   |downloads_liftoff| |docker_liftoff|

   :versions:
      
      

      ``1.6.0-1``,  ``1.6.0-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.3.0-0``

      

   
   :depends biopython: ``>=1.76``
   :depends gffutils: ``>=0.10.1``
   :depends interlap: ``>=0.2.6``
   :depends minimap2: 
   :depends networkx: ``>=2.4``
   :depends numpy: ``>=1.19.0``
   :depends parasail-python: ``>=1.2.1``
   :depends pyfaidx: ``>=0.5.8``
   :depends pysam: ``>=0.16.0.1``
   :depends python: ``>=3``
   :depends ujson: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install liftoff

   and update with::

      conda update liftoff

   or use the docker container::

      docker pull quay.io/biocontainers/liftoff:<tag>

   (see `liftoff/tags`_ for valid values for ``<tag>``)


.. |downloads_liftoff| image:: https://img.shields.io/conda/dn/bioconda/liftoff.svg?style=flat
   :target: https://anaconda.org/bioconda/liftoff
   :alt:   (downloads)
.. |docker_liftoff| image:: https://quay.io/repository/biocontainers/liftoff/status
   :target: https://quay.io/repository/biocontainers/liftoff
.. _`liftoff/tags`: https://quay.io/repository/biocontainers/liftoff?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/liftoff/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/liftoff/README.html