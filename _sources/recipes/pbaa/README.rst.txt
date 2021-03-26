:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbaa'
.. highlight: bash

pbaa
====

.. conda:recipe:: pbaa
   :replaces_section_title:
   :noindex:

   PacBio tool to cluster HiFi reads and generate high quality consensus sequences

   :homepage: https://github.com/PacificBiosciences/pbAA
   :license: BSD-3-Clause-Clear
   :recipe: /`pbaa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbaa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbaa/meta.yaml>`_

   


.. conda:package:: pbaa

   |downloads_pbaa| |docker_pbaa|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pbaa

   and update with::

      conda update pbaa

   or use the docker container::

      docker pull quay.io/biocontainers/pbaa:<tag>

   (see `pbaa/tags`_ for valid values for ``<tag>``)


.. |downloads_pbaa| image:: https://img.shields.io/conda/dn/bioconda/pbaa.svg?style=flat
   :target: https://anaconda.org/bioconda/pbaa
   :alt:   (downloads)
.. |docker_pbaa| image:: https://quay.io/repository/biocontainers/pbaa/status
   :target: https://quay.io/repository/biocontainers/pbaa
.. _`pbaa/tags`: https://quay.io/repository/biocontainers/pbaa?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbaa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbaa/README.html