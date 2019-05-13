:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bcbio-prioritize'
.. highlight: bash

bcbio-prioritize
================

.. conda:recipe:: bcbio-prioritize
   :replaces_section_title:

   Prioritize small variants\, structural variants and coverage based on biological inputs

   :homepage: https://github.com/chapmanb/bcbio.prioritize
   :license: MIT
   :recipe: /`bcbio-prioritize <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-prioritize>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bcbio-prioritize/meta.yaml>`_

   


.. conda:package:: bcbio-prioritize

   |downloads_bcbio-prioritize| |docker_bcbio-prioritize|

   :versions: 0.0.8-2, 0.0.8-1, 0.0.8-0, 0.0.7-0, 0.0.6-1, 0.0.5-1, 0.0.5-0, 0.0.4-0, 0.0.2-0
   
   :depends openjdk: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bcbio-prioritize

   and update with::

      conda update bcbio-prioritize

   or use the docker container::

      docker pull quay.io/biocontainers/bcbio-prioritize:<tag>

   (see `bcbio-prioritize/tags`_ for valid values for ``<tag>``)


.. |downloads_bcbio-prioritize| image:: https://img.shields.io/conda/dn/bioconda/bcbio-prioritize.svg?style=flat
   :target: https://anaconda.org/bioconda/bcbio-prioritize
   :alt:   (downloads)
.. |docker_bcbio-prioritize| image:: https://quay.io/repository/biocontainers/bcbio-prioritize/status
   :target: https://quay.io/repository/biocontainers/bcbio-prioritize
.. _`bcbio-prioritize/tags`: https://quay.io/repository/biocontainers/bcbio-prioritize?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bcbio-prioritize/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bcbio-prioritize/README.html