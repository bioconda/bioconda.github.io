:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fgap'
.. highlight: bash

fgap
====

.. conda:recipe:: fgap
   :replaces_section_title:

   FGAP\: an automated gap closing tool

   :homepage: https://github.com/pirovc/fgap
   :license: MIT
   :recipe: /`fgap <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgap>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fgap/meta.yaml>`_

   


.. conda:package:: fgap

   |downloads_fgap| |docker_fgap|

   :versions: 1.8.1-1, 1.8.1-0
   
   :depends blast: 
   
   :depends octave: 
   
   :depends xorg-libx11: 
   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fgap

   and update with::

      conda update fgap

   or use the docker container::

      docker pull quay.io/biocontainers/fgap:<tag>

   (see `fgap/tags`_ for valid values for ``<tag>``)


.. |downloads_fgap| image:: https://img.shields.io/conda/dn/bioconda/fgap.svg?style=flat
   :alt:   (downloads)
.. |docker_fgap| image:: https://quay.io/repository/biocontainers/fgap/status
   :target: https://quay.io/repository/biocontainers/fgap
.. _`fgap/tags`: https://quay.io/repository/biocontainers/fgap?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fgap/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fgap/README.html