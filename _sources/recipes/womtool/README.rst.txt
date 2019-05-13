:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'womtool'
.. highlight: bash

womtool
=======

.. conda:recipe:: womtool
   :replaces_section_title:

   Command line utilities for interacting with WDL

   :homepage: https://cromwell.readthedocs.io/en/develop/WOMtool/
   :license: BSD / BSD-3-Clause
   :recipe: /`womtool <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/womtool>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/womtool/meta.yaml>`_
   :links: biotools: :biotools:`womtool`

   


.. conda:package:: womtool

   |downloads_womtool| |docker_womtool|

   :versions: 40-0, 38-0, 36-0, 31-1, 31-0
   
   :depends openjdk: 8.*
   :depends python: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install womtool

   and update with::

      conda update womtool

   or use the docker container::

      docker pull quay.io/biocontainers/womtool:<tag>

   (see `womtool/tags`_ for valid values for ``<tag>``)


.. |downloads_womtool| image:: https://img.shields.io/conda/dn/bioconda/womtool.svg?style=flat
   :target: https://anaconda.org/bioconda/womtool
   :alt:   (downloads)
.. |docker_womtool| image:: https://quay.io/repository/biocontainers/womtool/status
   :target: https://quay.io/repository/biocontainers/womtool
.. _`womtool/tags`: https://quay.io/repository/biocontainers/womtool?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/womtool/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/womtool/README.html