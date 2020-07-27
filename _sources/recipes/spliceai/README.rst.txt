:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliceai'
.. highlight: bash

spliceai
========

.. conda:recipe:: spliceai
   :replaces_section_title:
   :noindex:

   A deep learning\-based tool to identify splice variants.

   :homepage: https://github.com/Illumina/SpliceAI
   :license: GPL / GPLv3
   :recipe: /`spliceai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai/meta.yaml>`_

   


.. conda:package:: spliceai

   |downloads_spliceai| |docker_spliceai|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends keras: ``>=2.0.5``
   :depends numpy: ``>=1.14.0``
   :depends pandas: ``>=0.24.2``
   :depends pyfaidx: ``>=0.5.0``
   :depends pysam: ``>=0.10.0``
   :depends python: 
   :depends tensorflow: ``>=1.13.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install spliceai

   and update with::

      conda update spliceai

   or use the docker container::

      docker pull quay.io/biocontainers/spliceai:<tag>

   (see `spliceai/tags`_ for valid values for ``<tag>``)


.. |downloads_spliceai| image:: https://img.shields.io/conda/dn/bioconda/spliceai.svg?style=flat
   :target: https://anaconda.org/bioconda/spliceai
   :alt:   (downloads)
.. |docker_spliceai| image:: https://quay.io/repository/biocontainers/spliceai/status
   :target: https://quay.io/repository/biocontainers/spliceai
.. _`spliceai/tags`: https://quay.io/repository/biocontainers/spliceai?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliceai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliceai/README.html