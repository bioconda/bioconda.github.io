:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'optbuild'
.. highlight: bash

optbuild
========

.. conda:recipe:: optbuild
   :replaces_section_title:

   build command lines for external programs

   :homepage: http://noble.gs.washington.edu/~mmh1/software/optbuild/
   :license: GNU GPLv2
   :recipe: /`optbuild <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optbuild>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/optbuild/meta.yaml>`_

   


.. conda:package:: optbuild

   |downloads_optbuild| |docker_optbuild|

   :versions: 0.2.1-0, 0.2-0, 0.1.11-2, 0.1.11-0
   
   :depends autolog: 
   
   :depends python: 
   
   :depends six: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install optbuild

   and update with::

      conda update optbuild

   or use the docker container::

      docker pull quay.io/biocontainers/optbuild:<tag>

   (see `optbuild/tags`_ for valid values for ``<tag>``)


.. |downloads_optbuild| image:: https://img.shields.io/conda/dn/bioconda/optbuild.svg?style=flat
   :alt:   (downloads)
.. |docker_optbuild| image:: https://quay.io/repository/biocontainers/optbuild/status
   :target: https://quay.io/repository/biocontainers/optbuild
.. _`optbuild/tags`: https://quay.io/repository/biocontainers/optbuild?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/optbuild/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/optbuild/README.html