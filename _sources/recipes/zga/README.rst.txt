:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zga'
.. highlight: bash

zga
===

.. conda:recipe:: zga
   :replaces_section_title:
   :noindex:

   Prokaryotic genome assembly and annotation pipeline

   :homepage: https://github.com/laxeye/zga
   :developer docs: https://github.com/laxeye/zga/
   :license: BSD / BSD
   :recipe: /`zga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zga/meta.yaml>`_

   


.. conda:package:: zga

   |downloads_zga| |docker_zga|

   :versions:
      
      

      ``0.0.9.post2-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``

      

   
   :depends bbmap: 
   :depends biopython: ``<=1.77``
   :depends blast: 
   :depends checkm-genome: ``>=1.1.0``
   :depends dfast: ``>=1.2.12``
   :depends fastp: 
   :depends flye: ``>=2.6``
   :depends mash: ``>=2``
   :depends nxtrim: 
   :depends python: ``>=3.6``
   :depends racon: 
   :depends samtools: ``>=1.9``
   :depends spades: ``>=3.12``
   :depends unicycler: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install zga

   and update with::

      conda update zga

   or use the docker container::

      docker pull quay.io/biocontainers/zga:<tag>

   (see `zga/tags`_ for valid values for ``<tag>``)


.. |downloads_zga| image:: https://img.shields.io/conda/dn/bioconda/zga.svg?style=flat
   :target: https://anaconda.org/bioconda/zga
   :alt:   (downloads)
.. |docker_zga| image:: https://quay.io/repository/biocontainers/zga/status
   :target: https://quay.io/repository/biocontainers/zga
.. _`zga/tags`: https://quay.io/repository/biocontainers/zga?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zga/README.html