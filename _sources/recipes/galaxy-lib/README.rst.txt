:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-lib'
.. highlight: bash

galaxy-lib
==========

.. conda:recipe:: galaxy-lib
   :replaces_section_title:

   Subset of Galaxy \(http\:\/\/galaxyproject.org\/\) core code base designed to be used a library.

   :homepage: https://github.com/galaxyproject/galaxy-lib
   :documentation: https://galaxy-lib.readthedocs.org
   
   :license: OTHER / Academic Free (AFL)
   :recipe: /`galaxy-lib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-lib/meta.yaml>`_

   


.. conda:package:: galaxy-lib

   |downloads_galaxy-lib| |docker_galaxy-lib|

   :versions: 19.5.1-0, 18.9.2-0, 18.9.1-0, 18.5.13-2, 18.5.13-0, 18.5.5-0, 18.5.4-0, 17.9.10-0, 17.9.9-0, 17.9.7-1, 17.9.7-0, 17.5.9-1, 17.5.9-0, 17.1.2-0, 16.10.9-1, 16.10.9-0, 16.10.8-1, 16.10.8-0, 16.10.6-0, 16.10.4-1, 16.10.4-0, 16.10.3-0, 16.7.10-1, 16.7.10-0, 16.4.0-1, 16.4.0-0
   
   :depends boltons: 
   :depends docutils: 
   :depends markupsafe: 
   :depends packaging: 
   :depends python: 
   :depends pyyaml: 
   :depends six: >=1.9.0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-lib

   and update with::

      conda update galaxy-lib

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-lib:<tag>

   (see `galaxy-lib/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-lib| image:: https://img.shields.io/conda/dn/bioconda/galaxy-lib.svg?style=flat
   :alt:   (downloads)
.. |docker_galaxy-lib| image:: https://quay.io/repository/biocontainers/galaxy-lib/status
   :target: https://quay.io/repository/biocontainers/galaxy-lib
.. _`galaxy-lib/tags`: https://quay.io/repository/biocontainers/galaxy-lib?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-lib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-lib/README.html