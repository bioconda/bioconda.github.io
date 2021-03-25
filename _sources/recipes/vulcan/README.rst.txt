:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vulcan'
.. highlight: bash

vulcan
======

.. conda:recipe:: vulcan
   :replaces_section_title:
   :noindex:

   vulcan\, map long reads and prosper🖖\, a long read mapping pipeline that melds minimap2 and NGMLR

   :homepage: https://gitlab.com/treangenlab/vulcan
   :license: MIT
   :recipe: /`vulcan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vulcan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vulcan/meta.yaml>`_

   


.. conda:package:: vulcan

   |downloads_vulcan| |docker_vulcan|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends bamtools: 
   :depends minimap2: 
   :depends ngmlr: 
   :depends numpy: 
   :depends pysam: 
   :depends python: ``>=3.5``
   :depends samtools: ``1.9``
   :depends tqdm: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install vulcan

   and update with::

      conda update vulcan

   or use the docker container::

      docker pull quay.io/biocontainers/vulcan:<tag>

   (see `vulcan/tags`_ for valid values for ``<tag>``)


.. |downloads_vulcan| image:: https://img.shields.io/conda/dn/bioconda/vulcan.svg?style=flat
   :target: https://anaconda.org/bioconda/vulcan
   :alt:   (downloads)
.. |docker_vulcan| image:: https://quay.io/repository/biocontainers/vulcan/status
   :target: https://quay.io/repository/biocontainers/vulcan
.. _`vulcan/tags`: https://quay.io/repository/biocontainers/vulcan?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vulcan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vulcan/README.html