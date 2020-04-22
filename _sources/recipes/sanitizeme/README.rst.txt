:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sanitizeme'
.. highlight: bash

sanitizeme
==========

.. conda:recipe:: sanitizeme
   :replaces_section_title:

   GUI and CLI tool for removing host DNA from NGS data.

   :homepage: https://github.com/jiangweiyao/SanitizeMe
   :license: APACHE / Apache License 2.0
   :recipe: /`sanitizeme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanitizeme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sanitizeme/meta.yaml>`_

   


.. conda:package:: sanitizeme

   |downloads_sanitizeme| |docker_sanitizeme|

   :versions: 1.0-0
   
   :depends colored: 
   :depends gooey: 
   :depends minimap2: 
   :depends python: 3.6.*
   :depends samtools: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sanitizeme

   and update with::

      conda update sanitizeme

   or use the docker container::

      docker pull quay.io/biocontainers/sanitizeme:<tag>

   (see `sanitizeme/tags`_ for valid values for ``<tag>``)


.. |downloads_sanitizeme| image:: https://img.shields.io/conda/dn/bioconda/sanitizeme.svg?style=flat
   :target: https://anaconda.org/bioconda/sanitizeme
   :alt:   (downloads)
.. |docker_sanitizeme| image:: https://quay.io/repository/biocontainers/sanitizeme/status
   :target: https://quay.io/repository/biocontainers/sanitizeme
.. _`sanitizeme/tags`: https://quay.io/repository/biocontainers/sanitizeme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sanitizeme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sanitizeme/README.html