:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'unmerge'
.. highlight: bash

unmerge
=======

.. conda:recipe:: unmerge
   :replaces_section_title:
   :noindex:

   Interlaced forward and reverse paired\-end reads to individual forward and reverse files

   :homepage: https://github.com/andvides/unmerge.git
   :license: GPL / GPL-3.0
   :recipe: /`unmerge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unmerge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/unmerge/meta.yaml>`_

   


.. conda:package:: unmerge

   |downloads_unmerge| |docker_unmerge|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install unmerge

   and update with::

      conda update unmerge

   or use the docker container::

      docker pull quay.io/biocontainers/unmerge:<tag>

   (see `unmerge/tags`_ for valid values for ``<tag>``)


.. |downloads_unmerge| image:: https://img.shields.io/conda/dn/bioconda/unmerge.svg?style=flat
   :target: https://anaconda.org/bioconda/unmerge
   :alt:   (downloads)
.. |docker_unmerge| image:: https://quay.io/repository/biocontainers/unmerge/status
   :target: https://quay.io/repository/biocontainers/unmerge
.. _`unmerge/tags`: https://quay.io/repository/biocontainers/unmerge?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/unmerge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/unmerge/README.html