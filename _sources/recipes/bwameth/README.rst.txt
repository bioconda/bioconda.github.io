:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwameth'
.. highlight: bash

bwameth
=======

.. conda:recipe:: bwameth
   :replaces_section_title:
   :noindex:

   A fast and accurate aligner of BS\-seq reads

   :homepage: https://github.com/brentp/bwa-meth
   :license: MIT
   :recipe: /`bwameth <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwameth/meta.yaml>`_

   


.. conda:package:: bwameth

   |downloads_bwameth| |docker_bwameth|

   :versions:
      
      

      ``0.2.2-2``,  ``0.2.2-1``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``

      

   
   :depends bwa: 
   :depends python: 
   :depends samtools: 
   :depends toolshed: ``>=0.3.9``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwameth

   and update with::

      conda update bwameth

   or use the docker container::

      docker pull quay.io/biocontainers/bwameth:<tag>

   (see `bwameth/tags`_ for valid values for ``<tag>``)


.. |downloads_bwameth| image:: https://img.shields.io/conda/dn/bioconda/bwameth.svg?style=flat
   :target: https://anaconda.org/bioconda/bwameth
   :alt:   (downloads)
.. |docker_bwameth| image:: https://quay.io/repository/biocontainers/bwameth/status
   :target: https://quay.io/repository/biocontainers/bwameth
.. _`bwameth/tags`: https://quay.io/repository/biocontainers/bwameth?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwameth/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwameth/README.html