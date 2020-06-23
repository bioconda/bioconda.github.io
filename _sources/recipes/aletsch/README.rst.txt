:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aletsch'
.. highlight: bash

aletsch
=======

.. conda:recipe:: aletsch
   :replaces_section_title:
   :noindex:

   Aletsch is a scalable\, accurate\, and versatile assembler for multiple RNA\-seq samples.

   :homepage: https://github.com/Shao-Group/aletsch
   :license: BSD 3-Clause License
   :recipe: /`aletsch <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aletsch>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aletsch/meta.yaml>`_

   


.. conda:package:: aletsch

   |downloads_aletsch| |docker_aletsch|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends boost-cpp: ``>=1.70.0,<1.70.1.0a0``
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install aletsch

   and update with::

      conda update aletsch

   or use the docker container::

      docker pull quay.io/biocontainers/aletsch:<tag>

   (see `aletsch/tags`_ for valid values for ``<tag>``)


.. |downloads_aletsch| image:: https://img.shields.io/conda/dn/bioconda/aletsch.svg?style=flat
   :target: https://anaconda.org/bioconda/aletsch
   :alt:   (downloads)
.. |docker_aletsch| image:: https://quay.io/repository/biocontainers/aletsch/status
   :target: https://quay.io/repository/biocontainers/aletsch
.. _`aletsch/tags`: https://quay.io/repository/biocontainers/aletsch?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aletsch/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aletsch/README.html