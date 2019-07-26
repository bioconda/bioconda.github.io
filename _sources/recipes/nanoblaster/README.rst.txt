:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nanoblaster'
.. highlight: bash

nanoblaster
===========

.. conda:recipe:: nanoblaster
   :replaces_section_title:

   Basic Local Alignment and Search Tool for Oxford Nanopore Long Sequences

   :homepage: https://github.com/ruhulsbu/NanoBLASTer
   :license: MIT
   :recipe: /`nanoblaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoblaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nanoblaster/meta.yaml>`_

   


.. conda:package:: nanoblaster

   |downloads_nanoblaster| |docker_nanoblaster|

   :versions: 0.16-1, 0.16-0
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install nanoblaster

   and update with::

      conda update nanoblaster

   or use the docker container::

      docker pull quay.io/biocontainers/nanoblaster:<tag>

   (see `nanoblaster/tags`_ for valid values for ``<tag>``)


.. |downloads_nanoblaster| image:: https://img.shields.io/conda/dn/bioconda/nanoblaster.svg?style=flat
   :target: https://anaconda.org/bioconda/nanoblaster
   :alt:   (downloads)
.. |docker_nanoblaster| image:: https://quay.io/repository/biocontainers/nanoblaster/status
   :target: https://quay.io/repository/biocontainers/nanoblaster
.. _`nanoblaster/tags`: https://quay.io/repository/biocontainers/nanoblaster?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nanoblaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nanoblaster/README.html