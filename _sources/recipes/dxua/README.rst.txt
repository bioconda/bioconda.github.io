:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dxua'
.. highlight: bash

dxua
====

.. conda:recipe:: dxua
   :replaces_section_title:

   command\-line tool for uploading files to the DNAnexus Platform

   :homepage: https://wiki.dnanexus.com/Downloads#Upload-Agent
   :license: Apache v2.0
   :recipe: /`dxua <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxua>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dxua/meta.yaml>`_

   


.. conda:package:: dxua

   |downloads_dxua| |docker_dxua|

   :versions: 1.5.26-1, 1.5.26-0, 1.5.11-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dxua

   and update with::

      conda update dxua

   or use the docker container::

      docker pull quay.io/repository/biocontainers/dxua:<tag>

   (see `dxua/tags`_ for valid values for ``<tag>``)


.. |downloads_dxua| image:: https://img.shields.io/conda/dn/bioconda/dxua.svg?style=flat
   :alt:   (downloads)
.. |docker_dxua| image:: https://quay.io/repository/biocontainers/dxua/status
   :target: https://quay.io/repository/biocontainers/dxua
.. _`dxua/tags`: https://quay.io/repository/biocontainers/dxua?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dxua/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dxua/README.html