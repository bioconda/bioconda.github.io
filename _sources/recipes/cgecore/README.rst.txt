:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgecore'
.. highlight: bash

cgecore
=======

.. conda:recipe:: cgecore
   :replaces_section_title:
   :noindex:

   Center for Genomic Epidemiology Core Module

   :homepage: https://bitbucket.org/genomicepidemiology/cge_core_module
   :license: Apache / Apache-2.0
   :recipe: /`cgecore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgecore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgecore/meta.yaml>`_

   


.. conda:package:: cgecore

   |downloads_cgecore| |docker_cgecore|

   :versions:
      
      

      ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``

      

   
   :depends biopython: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cgecore

   and update with::

      conda update cgecore

   or use the docker container::

      docker pull quay.io/biocontainers/cgecore:<tag>

   (see `cgecore/tags`_ for valid values for ``<tag>``)


.. |downloads_cgecore| image:: https://img.shields.io/conda/dn/bioconda/cgecore.svg?style=flat
   :target: https://anaconda.org/bioconda/cgecore
   :alt:   (downloads)
.. |docker_cgecore| image:: https://quay.io/repository/biocontainers/cgecore/status
   :target: https://quay.io/repository/biocontainers/cgecore
.. _`cgecore/tags`: https://quay.io/repository/biocontainers/cgecore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgecore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgecore/README.html