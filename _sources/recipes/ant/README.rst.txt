:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ant'
.. highlight: bash

ant
===

.. conda:recipe:: ant
   :replaces_section_title:

   Apache Ant is a Java library and command\-line tool that help building software.

   :homepage: http://ant.apache.org
   :license: Apache 2.0
   :recipe: /`ant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ant/meta.yaml>`_

   


.. conda:package:: ant

   |downloads_ant| |docker_ant|

   :versions: 1.10.0-0, 1.9.6-1, 1.9.6-0
   
   :depends openjdk: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ant

   and update with::

      conda update ant

   or use the docker container::

      docker pull quay.io/biocontainers/ant:<tag>

   (see `ant/tags`_ for valid values for ``<tag>``)


.. |downloads_ant| image:: https://img.shields.io/conda/dn/bioconda/ant.svg?style=flat
   :alt:   (downloads)
.. |docker_ant| image:: https://quay.io/repository/biocontainers/ant/status
   :target: https://quay.io/repository/biocontainers/ant
.. _`ant/tags`: https://quay.io/repository/biocontainers/ant?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ant/README.html