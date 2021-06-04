:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dvorfs'
.. highlight: bash

dvorfs
======

.. conda:recipe:: dvorfs
   :replaces_section_title:
   :noindex:

   DVORFS tool for mining endogenous viral elements

   :homepage: https://github.com/ilevantis/dvorfs
   :license: MIT
   :recipe: /`dvorfs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dvorfs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dvorfs/meta.yaml>`_

   


.. conda:package:: dvorfs

   |downloads_dvorfs| |docker_dvorfs|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bedtools: 
   :depends emboss: 
   :depends hmmer: 
   :depends hmmer2: 
   :depends numpy: 
   :depends pandas: 
   :depends python: ``>=3.6``
   :depends wise2: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dvorfs

   and update with::

      conda update dvorfs

   or use the docker container::

      docker pull quay.io/biocontainers/dvorfs:<tag>

   (see `dvorfs/tags`_ for valid values for ``<tag>``)


.. |downloads_dvorfs| image:: https://img.shields.io/conda/dn/bioconda/dvorfs.svg?style=flat
   :target: https://anaconda.org/bioconda/dvorfs
   :alt:   (downloads)
.. |docker_dvorfs| image:: https://quay.io/repository/biocontainers/dvorfs/status
   :target: https://quay.io/repository/biocontainers/dvorfs
.. _`dvorfs/tags`: https://quay.io/repository/biocontainers/dvorfs?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dvorfs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dvorfs/README.html