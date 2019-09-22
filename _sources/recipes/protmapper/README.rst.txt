:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protmapper'
.. highlight: bash

protmapper
==========

.. conda:recipe:: protmapper
   :replaces_section_title:

   Map protein sites to human reference sequence.

   :homepage: https://github.com/indralab/protmapper
   :documentation: https://protmapper.readthedocs.io
   
   :license: BSD / BSD
   :recipe: /`protmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protmapper/meta.yaml>`_

   


.. conda:package:: protmapper

   |downloads_protmapper| |docker_protmapper|

   :versions: 0.0.14-0, 0.0.13-0
   
   :depends boto3: 
   :depends python: >=3
   :depends rdflib: 
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install protmapper

   and update with::

      conda update protmapper

   or use the docker container::

      docker pull quay.io/biocontainers/protmapper:<tag>

   (see `protmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_protmapper| image:: https://img.shields.io/conda/dn/bioconda/protmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/protmapper
   :alt:   (downloads)
.. |docker_protmapper| image:: https://quay.io/repository/biocontainers/protmapper/status
   :target: https://quay.io/repository/biocontainers/protmapper
.. _`protmapper/tags`: https://quay.io/repository/biocontainers/protmapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protmapper/README.html