:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquilasv'
.. highlight: bash

aquilasv
========

.. conda:recipe:: aquilasv
   :replaces_section_title:
   :noindex:

   A region\-based diploid assembly and variants calling tool

   :homepage: https://github.com/maiziezhoulab/AquilaSV
   :license: MIT
   :recipe: /`aquilasv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquilasv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquilasv/meta.yaml>`_

   


.. conda:package:: aquilasv

   |downloads_aquilasv| |docker_aquilasv|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends minimap2: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3``
   :depends samtools: 
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aquilasv

   and update with::

      conda update aquilasv

   or use the docker container::

      docker pull quay.io/biocontainers/aquilasv:<tag>

   (see `aquilasv/tags`_ for valid values for ``<tag>``)


.. |downloads_aquilasv| image:: https://img.shields.io/conda/dn/bioconda/aquilasv.svg?style=flat
   :target: https://anaconda.org/bioconda/aquilasv
   :alt:   (downloads)
.. |docker_aquilasv| image:: https://quay.io/repository/biocontainers/aquilasv/status
   :target: https://quay.io/repository/biocontainers/aquilasv
.. _`aquilasv/tags`: https://quay.io/repository/biocontainers/aquilasv?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquilasv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquilasv/README.html