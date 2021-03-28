:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xtea'
.. highlight: bash

xtea
====

.. conda:recipe:: xtea
   :replaces_section_title:
   :noindex:

   TE insertion caller for both short and long reads

   :homepage: https://github.com/parklab/xTea
   :license: AGPL-3.0-only
   :recipe: /`xtea <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtea>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xtea/meta.yaml>`_

   


.. conda:package:: xtea

   |downloads_xtea| |docker_xtea|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends bwa: ``>=0.7.17``
   :depends minimap2: 
   :depends numpy: 
   :depends pandas: 
   :depends pysam: ``>=0.15.0``
   :depends python: 
   :depends samtools: ``>=1.0``
   :depends scikit-learn: ``0.18.1``
   :depends sortedcontainers: 
   :depends wtdbg: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xtea

   and update with::

      conda update xtea

   or use the docker container::

      docker pull quay.io/biocontainers/xtea:<tag>

   (see `xtea/tags`_ for valid values for ``<tag>``)


.. |downloads_xtea| image:: https://img.shields.io/conda/dn/bioconda/xtea.svg?style=flat
   :target: https://anaconda.org/bioconda/xtea
   :alt:   (downloads)
.. |docker_xtea| image:: https://quay.io/repository/biocontainers/xtea/status
   :target: https://quay.io/repository/biocontainers/xtea
.. _`xtea/tags`: https://quay.io/repository/biocontainers/xtea?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xtea/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xtea/README.html