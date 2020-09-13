:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'atlas-data-import'
.. highlight: bash

atlas-data-import
=================

.. conda:recipe:: atlas-data-import
   :replaces_section_title:
   :noindex:

   Scripts for extracting expression\- and metadata from Single Cell Expression Atlas in a programmatic way.

   :homepage: https://github.com/ebi-gene-expression-group/atlas-data-import
   :license: MIT
   :recipe: /`atlas-data-import <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-data-import>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/atlas-data-import/meta.yaml>`_

   


.. conda:package:: atlas-data-import

   |downloads_atlas-data-import| |docker_atlas-data-import|

   :versions:
      
      

      ``0.0.11-0``,  ``0.0.10-0``,  ``0.0.9-0``,  ``0.0.7-0``,  ``0.0.6-0``

      

   
   :depends r-base: 
   :depends r-optparse: 
   :depends r-r.utils: 
   :depends r-rcurl: 
   :depends r-workflowscriptscommon: 
   :depends r-yaml: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install atlas-data-import

   and update with::

      conda update atlas-data-import

   or use the docker container::

      docker pull quay.io/biocontainers/atlas-data-import:<tag>

   (see `atlas-data-import/tags`_ for valid values for ``<tag>``)


.. |downloads_atlas-data-import| image:: https://img.shields.io/conda/dn/bioconda/atlas-data-import.svg?style=flat
   :target: https://anaconda.org/bioconda/atlas-data-import
   :alt:   (downloads)
.. |docker_atlas-data-import| image:: https://quay.io/repository/biocontainers/atlas-data-import/status
   :target: https://quay.io/repository/biocontainers/atlas-data-import
.. _`atlas-data-import/tags`: https://quay.io/repository/biocontainers/atlas-data-import?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/atlas-data-import/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/atlas-data-import/README.html