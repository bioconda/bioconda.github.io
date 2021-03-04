:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'usher'
.. highlight: bash

usher
=====

.. conda:recipe:: usher
   :replaces_section_title:
   :noindex:

   Ultrafast Sample Placement on Existing Trees \(UShER\)

   :homepage: https://github.com/yatisht/usher
   :license: MIT / MIT
   :recipe: /`usher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/usher/meta.yaml>`_

   


.. conda:package:: usher

   |downloads_usher| |docker_usher|

   :versions:
      
      

      ``0.1.3-0``

      

   
   :depends biopython: 
   :depends boost-cpp: ``>=1.75.0,<1.75.1.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libprotobuf: ``>=3.11.4,<3.12.0a0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :depends mafft: 
   :depends python: 
   :depends ucsc-fatovcf: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install usher

   and update with::

      conda update usher

   or use the docker container::

      docker pull quay.io/biocontainers/usher:<tag>

   (see `usher/tags`_ for valid values for ``<tag>``)


.. |downloads_usher| image:: https://img.shields.io/conda/dn/bioconda/usher.svg?style=flat
   :target: https://anaconda.org/bioconda/usher
   :alt:   (downloads)
.. |docker_usher| image:: https://quay.io/repository/biocontainers/usher/status
   :target: https://quay.io/repository/biocontainers/usher
.. _`usher/tags`: https://quay.io/repository/biocontainers/usher?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/usher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/usher/README.html