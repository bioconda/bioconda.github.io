:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'caper'
.. highlight: bash

caper
=====

.. conda:recipe:: caper
   :replaces_section_title:

   Cromwell Assisted Pipeline ExecutoR

   :homepage: https://github.com/ENCODE-DCC/caper
   :license: MIT
   :recipe: /`caper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/caper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/caper/meta.yaml>`_

   Python wrapper for Cromwell


.. conda:package:: caper

   |downloads_caper| |docker_caper|

   :versions: 0.6.3-0, 0.6.2-0, 0.6.1-0, 0.6.0-0, 0.5.6-0, 0.5.4-0, 0.5.2-0, 0.5.1-1, 0.5.1-0, 0.5.0-0, 0.4.1-0, 0.4.0-0
   
   :depends pyhocon: 
   :depends pyopenssl: 
   :depends python: >=3
   :depends requests: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install caper

   and update with::

      conda update caper

   or use the docker container::

      docker pull quay.io/biocontainers/caper:<tag>

   (see `caper/tags`_ for valid values for ``<tag>``)


.. |downloads_caper| image:: https://img.shields.io/conda/dn/bioconda/caper.svg?style=flat
   :target: https://anaconda.org/bioconda/caper
   :alt:   (downloads)
.. |docker_caper| image:: https://quay.io/repository/biocontainers/caper/status
   :target: https://quay.io/repository/biocontainers/caper
.. _`caper/tags`: https://quay.io/repository/biocontainers/caper?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/caper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/caper/README.html