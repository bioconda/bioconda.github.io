:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gatb'
.. highlight: bash

gatb
====

.. conda:recipe:: gatb
   :replaces_section_title:
   :noindex:

   The Genome Analysis Toolbox with de\-Bruijn graph

   :homepage: https://gatb.inria.fr/
   :license: AGPL 3.0
   :recipe: /`gatb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gatb/meta.yaml>`_

   


.. conda:package:: gatb

   |downloads_gatb| |docker_gatb|

   :versions:
      
      

      ``1.4.1-2``,  ``1.4.1-1``,  ``1.4.1-0``

      

   
   :depends boost: ``>=1.74.0,<1.74.1.0a0``
   :depends hdf5: ``>=1.10.6,<1.10.7.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gatb

   and update with::

      conda update gatb

   or use the docker container::

      docker pull quay.io/biocontainers/gatb:<tag>

   (see `gatb/tags`_ for valid values for ``<tag>``)


.. |downloads_gatb| image:: https://img.shields.io/conda/dn/bioconda/gatb.svg?style=flat
   :target: https://anaconda.org/bioconda/gatb
   :alt:   (downloads)
.. |docker_gatb| image:: https://quay.io/repository/biocontainers/gatb/status
   :target: https://quay.io/repository/biocontainers/gatb
.. _`gatb/tags`: https://quay.io/repository/biocontainers/gatb?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gatb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gatb/README.html