:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'taxmapper'
.. highlight: bash

taxmapper
=========

.. conda:recipe:: taxmapper
   :replaces_section_title:

   Analysis pipeline for metagenomic\, microeukaryotic sequencing data.

   :homepage: https://bitbucket.org/dbeisser/taxmapper
   :license: MIT / MIT License
   :recipe: /`taxmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/taxmapper/meta.yaml>`_

   


.. conda:package:: taxmapper

   |downloads_taxmapper| |docker_taxmapper|

   :versions: 1.0.2-2, 1.0.2-0, 1.0.1-0, 1.0.0-0
   
   :depends deepdish: 
   
   :depends matplotlib: 
   
   :depends numpy: 
   
   :depends pandas: 
   
   :depends python: >=3.5,<3.6.0a0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install taxmapper

   and update with::

      conda update taxmapper

   or use the docker container::

      docker pull quay.io/repository/biocontainers/taxmapper:<tag>

   (see `taxmapper/tags`_ for valid values for ``<tag>``)


.. |downloads_taxmapper| image:: https://img.shields.io/conda/dn/bioconda/taxmapper.svg?style=flat
   :alt:   (downloads)
.. |docker_taxmapper| image:: https://quay.io/repository/biocontainers/taxmapper/status
   :target: https://quay.io/repository/biocontainers/taxmapper
.. _`taxmapper/tags`: https://quay.io/repository/biocontainers/taxmapper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/taxmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/taxmapper/README.html