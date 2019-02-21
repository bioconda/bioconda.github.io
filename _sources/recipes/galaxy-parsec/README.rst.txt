:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'galaxy-parsec'
.. highlight: bash

galaxy-parsec
=============

.. conda:recipe:: galaxy-parsec
   :replaces_section_title:

   Command\-line utilities to assist in interacting with Galaxy servers \(http\:\/\/galaxyproject.org\/\).

   :homepage: https://github.com/galaxy-iuc/parsec
   :license: MIT / MIT
   :recipe: /`galaxy-parsec <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-parsec>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/galaxy-parsec/meta.yaml>`_

   


.. conda:package:: galaxy-parsec

   |downloads_galaxy-parsec| |docker_galaxy-parsec|

   :versions: 1.0.6-0, 1.0.5-0, 1.0.4-1, 1.0.4-0
   
   :depends bioblend: 
   
   :depends click: >=6.7
   
   :depends future: 
   
   :depends justbackoff: 
   
   :depends python: 
   
   :depends pyyaml: 
   
   :depends wrapt: 
   
   :depends xunit-wrapper: >=0.12
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install galaxy-parsec

   and update with::

      conda update galaxy-parsec

   or use the docker container::

      docker pull quay.io/biocontainers/galaxy-parsec:<tag>

   (see `galaxy-parsec/tags`_ for valid values for ``<tag>``)


.. |downloads_galaxy-parsec| image:: https://img.shields.io/conda/dn/bioconda/galaxy-parsec.svg?style=flat
   :alt:   (downloads)
.. |docker_galaxy-parsec| image:: https://quay.io/repository/biocontainers/galaxy-parsec/status
   :target: https://quay.io/repository/biocontainers/galaxy-parsec
.. _`galaxy-parsec/tags`: https://quay.io/repository/biocontainers/galaxy-parsec?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/galaxy-parsec/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/galaxy-parsec/README.html