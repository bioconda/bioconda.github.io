:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'kggseq'
.. highlight: bash

kggseq
======

.. conda:recipe:: kggseq
   :replaces_section_title:
   :noindex:

   KGGSeq is a software platform constituted of Bioinformatics and statistical genetics functions making use of valuable biologic resources and knowledge for sequencing\-based genetic mapping of variants\/genes responsible for human diseases\/traits.

   :homepage: http://grass.cgs.hku.hk/limx/kggseq/
   :license: APACHE / Apache License 2.0
   :recipe: /`kggseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kggseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/kggseq/meta.yaml>`_

   


.. conda:package:: kggseq

   |downloads_kggseq| |docker_kggseq|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends openjdk: ``>=8``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install kggseq

   and update with::

      conda update kggseq

   or use the docker container::

      docker pull quay.io/biocontainers/kggseq:<tag>

   (see `kggseq/tags`_ for valid values for ``<tag>``)


.. |downloads_kggseq| image:: https://img.shields.io/conda/dn/bioconda/kggseq.svg?style=flat
   :target: https://anaconda.org/bioconda/kggseq
   :alt:   (downloads)
.. |docker_kggseq| image:: https://quay.io/repository/biocontainers/kggseq/status
   :target: https://quay.io/repository/biocontainers/kggseq
.. _`kggseq/tags`: https://quay.io/repository/biocontainers/kggseq?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/kggseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/kggseq/README.html