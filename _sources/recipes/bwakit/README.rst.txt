:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bwakit'
.. highlight: bash

bwakit
======

.. conda:recipe:: bwakit
   :replaces_section_title:

   A self\-consistent installation\-free package of scripts and precompiled binaries\, providing an end\-to\-end solution to read mapping

   :homepage: https://github.com/lh3/bwa/tree/master/bwakit
   :license: GPLv3
   :recipe: /`bwakit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwakit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bwakit/meta.yaml>`_

   


.. conda:package:: bwakit

   |downloads_bwakit| |docker_bwakit|

   :versions: 0.7.15-1, 0.7.15-0, 0.7.12-0
   
   :depends perl: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bwakit

   and update with::

      conda update bwakit

   or use the docker container::

      docker pull quay.io/biocontainers/bwakit:<tag>

   (see `bwakit/tags`_ for valid values for ``<tag>``)


.. |downloads_bwakit| image:: https://img.shields.io/conda/dn/bioconda/bwakit.svg?style=flat
   :alt:   (downloads)
.. |docker_bwakit| image:: https://quay.io/repository/biocontainers/bwakit/status
   :target: https://quay.io/repository/biocontainers/bwakit
.. _`bwakit/tags`: https://quay.io/repository/biocontainers/bwakit?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bwakit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bwakit/README.html