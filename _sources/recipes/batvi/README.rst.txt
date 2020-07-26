:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'batvi'
.. highlight: bash

batvi
=====

.. conda:recipe:: batvi
   :replaces_section_title:
   :noindex:

   Detect viral integrations

   :homepage: https://www.comp.nus.edu.sg/~bioinfo/batvi/
   :license: GPLv3+
   :recipe: /`batvi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/batvi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/batvi/meta.yaml>`_

   


.. conda:package:: batvi

   |downloads_batvi| |docker_batvi|

   :versions:
      
      

      ``1.04-5``,  ``1.04-4``,  ``1.04-3``,  ``1.04-2``,  ``1.04-1``

      

   
   :depends bedtools: 
   :depends blast: 
   :depends bwa: 
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends openjdk: 
   :depends picard: 
   :depends samtools: 
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install batvi

   and update with::

      conda update batvi

   or use the docker container::

      docker pull quay.io/biocontainers/batvi:<tag>

   (see `batvi/tags`_ for valid values for ``<tag>``)


.. |downloads_batvi| image:: https://img.shields.io/conda/dn/bioconda/batvi.svg?style=flat
   :target: https://anaconda.org/bioconda/batvi
   :alt:   (downloads)
.. |docker_batvi| image:: https://quay.io/repository/biocontainers/batvi/status
   :target: https://quay.io/repository/biocontainers/batvi
.. _`batvi/tags`: https://quay.io/repository/biocontainers/batvi?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/batvi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/batvi/README.html