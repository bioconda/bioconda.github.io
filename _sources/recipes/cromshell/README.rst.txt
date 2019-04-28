:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cromshell'
.. highlight: bash

cromshell
=========

.. conda:recipe:: cromshell
   :replaces_section_title:

   Command\-line interface to the Cromwell workflow manager

   :homepage: https://github.com/broadinstitute/cromshell
   :license: BSD / BSD-3-Clause
   :recipe: /`cromshell <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromshell>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cromshell/meta.yaml>`_

   


.. conda:package:: cromshell

   |downloads_cromshell| |docker_cromshell|

   :versions: 0.3.3-0, 0.2.3-0
   
   :depends cromwell: 
   :depends jq: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install cromshell

   and update with::

      conda update cromshell

   or use the docker container::

      docker pull quay.io/biocontainers/cromshell:<tag>

   (see `cromshell/tags`_ for valid values for ``<tag>``)


.. |downloads_cromshell| image:: https://img.shields.io/conda/dn/bioconda/cromshell.svg?style=flat
   :alt:   (downloads)
.. |docker_cromshell| image:: https://quay.io/repository/biocontainers/cromshell/status
   :target: https://quay.io/repository/biocontainers/cromshell
.. _`cromshell/tags`: https://quay.io/repository/biocontainers/cromshell?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cromshell/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cromshell/README.html