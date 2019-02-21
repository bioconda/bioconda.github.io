:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet'
.. highlight: bash

metavelvet
==========

.. conda:recipe:: metavelvet
   :replaces_section_title:

   MetaVelvet \: An extension of Velvet assembler to de novo metagenome assembly from short sequence reads

   :homepage: http://metavelvet.dna.bio.keio.ac.jp
   :license: GNU General Public License
   :recipe: /`metavelvet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet/meta.yaml>`_

   


.. conda:package:: metavelvet

   |downloads_metavelvet| |docker_metavelvet|

   :versions: 1.2.02-2, 1.2.02-1, 1.1.01-1, 1.1.01-0
   
   :depends libgcc: 
   
   :depends perl: 5.22.0*
   
   :depends perl-module-build: 
   
   :depends velvet: 
   
   :depends zlib: 1.2.11*
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metavelvet

   and update with::

      conda update metavelvet

   or use the docker container::

      docker pull quay.io/biocontainers/metavelvet:<tag>

   (see `metavelvet/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet| image:: https://img.shields.io/conda/dn/bioconda/metavelvet.svg?style=flat
   :alt:   (downloads)
.. |docker_metavelvet| image:: https://quay.io/repository/biocontainers/metavelvet/status
   :target: https://quay.io/repository/biocontainers/metavelvet
.. _`metavelvet/tags`: https://quay.io/repository/biocontainers/metavelvet?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet/README.html