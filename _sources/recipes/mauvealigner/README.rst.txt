:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mauvealigner'
.. highlight: bash

mauvealigner
============

.. conda:recipe:: mauvealigner
   :replaces_section_title:

   The mauveAligner and progressiveMauve command\-line tools for generating multiple genome alignments in the presence of large\-scale evolutionary events

   :homepage: http://darlinglab.org/mauve/
   :developer docs: https://sourceforge.net/projects/mauve/
   :license: GPL / GPL-2.0
   :recipe: /`mauvealigner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mauvealigner/meta.yaml>`_

   


.. conda:package:: mauvealigner

   |downloads_mauvealigner| |docker_mauvealigner|

   :versions: 1.2.0-0
   
   :depends boost-cpp: >=1.65.1,<1.65.2.0a0
   :depends libgcc-ng: >=4.9
   :depends libgenome: 
   :depends libmems: 
   :depends libmuscle: 
   :depends libstdcxx-ng: >=4.9
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mauvealigner

   and update with::

      conda update mauvealigner

   or use the docker container::

      docker pull quay.io/biocontainers/mauvealigner:<tag>

   (see `mauvealigner/tags`_ for valid values for ``<tag>``)


.. |downloads_mauvealigner| image:: https://img.shields.io/conda/dn/bioconda/mauvealigner.svg?style=flat
   :target: https://anaconda.org/bioconda/mauvealigner
   :alt:   (downloads)
.. |docker_mauvealigner| image:: https://quay.io/repository/biocontainers/mauvealigner/status
   :target: https://quay.io/repository/biocontainers/mauvealigner
.. _`mauvealigner/tags`: https://quay.io/repository/biocontainers/mauvealigner?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mauvealigner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mauvealigner/README.html