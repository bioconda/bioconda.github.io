:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'capc-map'
.. highlight: bash

capc-map
========

.. conda:recipe:: capc-map
   :replaces_section_title:
   :noindex:

   Analysis software for Capture\-C data

   :homepage: https://capc-map.readthedocs.io/
   :license: GNU General Public License v3.0
   :recipe: /`capc-map <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capc-map>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/capc-map/meta.yaml>`_

   


.. conda:package:: capc-map

   |downloads_capc-map| |docker_capc-map|

   :versions:
      
      

      ``1.1.3-5``,  ``1.1.3-4``,  ``1.1.3-3``,  ``1.1.3-2``,  ``1.1.3-1``,  ``1.1.3-0``,  ``1.1.2-0``

      

   
   :depends biopython: ``>=1.70``
   :depends bowtie: ``>=1.1.1``
   :depends cutadapt: ``>=1.11``
   :depends libcxx: ``>=11.1.0``
   :depends numpy: 
   :depends python: ``>=2.7,<2.8.0a0``
   :depends python_abi: ``2.7.* *_cp27m``
   :depends samtools: ``>=1.3.1``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install capc-map

   and update with::

      conda update capc-map

   or use the docker container::

      docker pull quay.io/biocontainers/capc-map:<tag>

   (see `capc-map/tags`_ for valid values for ``<tag>``)


.. |downloads_capc-map| image:: https://img.shields.io/conda/dn/bioconda/capc-map.svg?style=flat
   :target: https://anaconda.org/bioconda/capc-map
   :alt:   (downloads)
.. |docker_capc-map| image:: https://quay.io/repository/biocontainers/capc-map/status
   :target: https://quay.io/repository/biocontainers/capc-map
.. _`capc-map/tags`: https://quay.io/repository/biocontainers/capc-map?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/capc-map/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/capc-map/README.html