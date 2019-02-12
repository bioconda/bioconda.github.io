:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hgtools'
.. highlight: bash

hgtools
=======

.. conda:recipe:: hgtools
   :replaces_section_title:

   Classes and setuptools plugin for Mercurial and Git repositories

   :homepage: https://github.com/jaraco/hgtools
   :license: GNU General Public License (GPL)
   :recipe: /`hgtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hgtools/meta.yaml>`_

   


.. conda:package:: hgtools

   |downloads_hgtools| |docker_hgtools|

   :versions: 8.1.1-0, 6.5.1-2, 6.5.1-0
   
   :depends backports.unittest_mock: 
   
   :depends python: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install hgtools

   and update with::

      conda update hgtools

   or use the docker container::

      docker pull quay.io/repository/biocontainers/hgtools:<tag>

   (see `hgtools/tags`_ for valid values for ``<tag>``)


.. |downloads_hgtools| image:: https://img.shields.io/conda/dn/bioconda/hgtools.svg?style=flat
   :alt:   (downloads)
.. |docker_hgtools| image:: https://quay.io/repository/biocontainers/hgtools/status
   :target: https://quay.io/repository/biocontainers/hgtools
.. _`hgtools/tags`: https://quay.io/repository/biocontainers/hgtools?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hgtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hgtools/README.html