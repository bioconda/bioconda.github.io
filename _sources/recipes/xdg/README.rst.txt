:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xdg'
.. highlight: bash

xdg
===

.. conda:recipe:: xdg
   :replaces_section_title:

   Variables defined by the XDG Base Directory Specification

   :homepage: https://github.com/srstevenson/xdg
   :license: Public-Domain / ISC License (ISCL)
   :recipe: /`xdg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xdg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xdg/meta.yaml>`_

   


.. conda:package:: xdg

   |downloads_xdg| |docker_xdg|

   :versions: 1.0.5-0
   
   :depends python: 2.7*
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install xdg

   and update with::

      conda update xdg

   or use the docker container::

      docker pull quay.io/biocontainers/xdg:<tag>

   (see `xdg/tags`_ for valid values for ``<tag>``)


.. |downloads_xdg| image:: https://img.shields.io/conda/dn/bioconda/xdg.svg?style=flat
   :alt:   (downloads)
.. |docker_xdg| image:: https://quay.io/repository/biocontainers/xdg/status
   :target: https://quay.io/repository/biocontainers/xdg
.. _`xdg/tags`: https://quay.io/repository/biocontainers/xdg?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xdg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xdg/README.html