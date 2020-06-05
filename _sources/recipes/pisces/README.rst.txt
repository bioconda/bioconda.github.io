:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pisces'
.. highlight: bash

pisces
======

.. conda:recipe:: pisces
   :replaces_section_title:
   :noindex:

   Somatic and germline variant caller for amplicon data. Recommended caller for tumor\-only workflows.

   :homepage: https://github.com/Illumina/Pisces
   :license: GPLv3
   :recipe: /`pisces <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pisces>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pisces/meta.yaml>`_

   


.. conda:package:: pisces

   |downloads_pisces| |docker_pisces|

   :versions:
      
      

      ``5.2.10.49-0``,  ``5.2.9.122-0``,  ``5.2.7.47-2``,  ``5.2.7.47-1``,  ``5.2.7.47-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pisces

   and update with::

      conda update pisces

   or use the docker container::

      docker pull quay.io/biocontainers/pisces:<tag>

   (see `pisces/tags`_ for valid values for ``<tag>``)


.. |downloads_pisces| image:: https://img.shields.io/conda/dn/bioconda/pisces.svg?style=flat
   :target: https://anaconda.org/bioconda/pisces
   :alt:   (downloads)
.. |docker_pisces| image:: https://quay.io/repository/biocontainers/pisces/status
   :target: https://quay.io/repository/biocontainers/pisces
.. _`pisces/tags`: https://quay.io/repository/biocontainers/pisces?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pisces/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pisces/README.html