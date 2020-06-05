:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metavelvet-annois'
.. highlight: bash

metavelvet-annois
=================

.. conda:recipe:: metavelvet-annois
   :replaces_section_title:
   :noindex:

   Metavelvet AnnoIS \- an extra package for metavelvet for versions \< 1.2.01

   :homepage: http://metavelvet.dna.bio.keio.ac.jp
   :license: GNU General Public License
   :recipe: /`metavelvet-annois <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-annois>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metavelvet-annois/meta.yaml>`_

   


.. conda:package:: metavelvet-annois

   |downloads_metavelvet-annois| |docker_metavelvet-annois|

   :versions:
      
      

      ``0.2.01-4``,  ``0.2.01-3``,  ``0.2.01-2``,  ``0.2.01-1``,  ``0.2.01-0``

      

   
   :depends perl: ``>=5.26.2,<5.26.3.0a0``
   :depends perl-module-build: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install metavelvet-annois

   and update with::

      conda update metavelvet-annois

   or use the docker container::

      docker pull quay.io/biocontainers/metavelvet-annois:<tag>

   (see `metavelvet-annois/tags`_ for valid values for ``<tag>``)


.. |downloads_metavelvet-annois| image:: https://img.shields.io/conda/dn/bioconda/metavelvet-annois.svg?style=flat
   :target: https://anaconda.org/bioconda/metavelvet-annois
   :alt:   (downloads)
.. |docker_metavelvet-annois| image:: https://quay.io/repository/biocontainers/metavelvet-annois/status
   :target: https://quay.io/repository/biocontainers/metavelvet-annois
.. _`metavelvet-annois/tags`: https://quay.io/repository/biocontainers/metavelvet-annois?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metavelvet-annois/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metavelvet-annois/README.html