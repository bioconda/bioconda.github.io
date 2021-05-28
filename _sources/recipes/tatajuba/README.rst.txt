:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tatajuba'
.. highlight: bash

tatajuba
========

.. conda:recipe:: tatajuba
   :replaces_section_title:
   :noindex:

   Identification and classification of homopolymeric tracts from reads

   :homepage: https://github.com/quadram-institute-bioscience/tatajuba
   :license: GPLv3
   :recipe: /`tatajuba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tatajuba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tatajuba/meta.yaml>`_
   :links: biotools: :biotools:`tatajuba`

   


.. conda:package:: tatajuba

   |downloads_tatajuba| |docker_tatajuba|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends _openmp_mutex: ``>=4.5``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tatajuba

   and update with::

      conda update tatajuba

   or use the docker container::

      docker pull quay.io/biocontainers/tatajuba:<tag>

   (see `tatajuba/tags`_ for valid values for ``<tag>``)


.. |downloads_tatajuba| image:: https://img.shields.io/conda/dn/bioconda/tatajuba.svg?style=flat
   :target: https://anaconda.org/bioconda/tatajuba
   :alt:   (downloads)
.. |docker_tatajuba| image:: https://quay.io/repository/biocontainers/tatajuba/status
   :target: https://quay.io/repository/biocontainers/tatajuba
.. _`tatajuba/tags`: https://quay.io/repository/biocontainers/tatajuba?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tatajuba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tatajuba/README.html