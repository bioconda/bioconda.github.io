:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'croo'
.. highlight: bash

croo
====

.. conda:recipe:: croo
   :replaces_section_title:
   :noindex:

   CRomwell Output Organizer

   :homepage: https://github.com/ENCODE-DCC/croo
   :license: MIT
   :recipe: /`croo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/croo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/croo/meta.yaml>`_

   This program parses metadata JSON file generated from Cromwell and organizes its raw outputs


.. conda:package:: croo

   |downloads_croo| |docker_croo|

   :versions:
      
      

      ``0.4.2.1-0``,  ``0.3.4-0``,  ``0.3.3-0``,  ``0.3.1-0``,  ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.8-0``

      

   
   :depends autouri: ``>=0.1.2.1``
   :depends caper: 
   :depends graphviz: 
   :depends miniwdl: 
   :depends python: ``>=3.6``
   :depends python-graphviz: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install croo

   and update with::

      conda update croo

   or use the docker container::

      docker pull quay.io/biocontainers/croo:<tag>

   (see `croo/tags`_ for valid values for ``<tag>``)


.. |downloads_croo| image:: https://img.shields.io/conda/dn/bioconda/croo.svg?style=flat
   :target: https://anaconda.org/bioconda/croo
   :alt:   (downloads)
.. |docker_croo| image:: https://quay.io/repository/biocontainers/croo/status
   :target: https://quay.io/repository/biocontainers/croo
.. _`croo/tags`: https://quay.io/repository/biocontainers/croo?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/croo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/croo/README.html