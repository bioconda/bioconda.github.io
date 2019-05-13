:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mgf-formatter'
.. highlight: bash

mgf-formatter
=============

.. conda:recipe:: mgf-formatter
   :replaces_section_title:

   Tools for convert peak lists into MGF files formatted for particular downstream applications

   :homepage: https://bitbucket.org/galaxyp-applications/mgf-formatter
   :license: Eclipse Public License
   :recipe: /`mgf-formatter <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgf-formatter>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mgf-formatter/meta.yaml>`_

   


.. conda:package:: mgf-formatter

   |downloads_mgf-formatter| |docker_mgf-formatter|

   :versions: 1.0.0-2, 1.0.0-1, 1.0.0-0
   
   :depends openjdk: 
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mgf-formatter

   and update with::

      conda update mgf-formatter

   or use the docker container::

      docker pull quay.io/biocontainers/mgf-formatter:<tag>

   (see `mgf-formatter/tags`_ for valid values for ``<tag>``)


.. |downloads_mgf-formatter| image:: https://img.shields.io/conda/dn/bioconda/mgf-formatter.svg?style=flat
   :target: https://anaconda.org/bioconda/mgf-formatter
   :alt:   (downloads)
.. |docker_mgf-formatter| image:: https://quay.io/repository/biocontainers/mgf-formatter/status
   :target: https://quay.io/repository/biocontainers/mgf-formatter
.. _`mgf-formatter/tags`: https://quay.io/repository/biocontainers/mgf-formatter?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mgf-formatter/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mgf-formatter/README.html