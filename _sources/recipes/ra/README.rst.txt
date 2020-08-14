:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ra'
.. highlight: bash

ra
==

.. conda:recipe:: ra
   :replaces_section_title:
   :noindex:

   Ra is short for RNA Assembler and it is a C\+\+ implementation of an overlap\-layout\-consensus transcriptome assembler.

   :homepage: https://github.com/mariokostelac/ra
   :license: GPL3
   :recipe: /`ra <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra/meta.yaml>`_

   


.. conda:package:: ra

   |downloads_ra| |docker_ra|

   :versions:
      
      

      ``0.9-2``,  ``0.9-1``,  ``0.9-0``

      

   
   :depends libgcc-ng: ``>=7.5.0``
   :depends libstdcxx-ng: ``>=7.5.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ra

   and update with::

      conda update ra

   or use the docker container::

      docker pull quay.io/biocontainers/ra:<tag>

   (see `ra/tags`_ for valid values for ``<tag>``)


.. |downloads_ra| image:: https://img.shields.io/conda/dn/bioconda/ra.svg?style=flat
   :target: https://anaconda.org/bioconda/ra
   :alt:   (downloads)
.. |docker_ra| image:: https://quay.io/repository/biocontainers/ra/status
   :target: https://quay.io/repository/biocontainers/ra
.. _`ra/tags`: https://quay.io/repository/biocontainers/ra?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ra/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ra/README.html