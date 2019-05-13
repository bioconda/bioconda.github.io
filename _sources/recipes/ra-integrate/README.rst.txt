:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ra-integrate'
.. highlight: bash

ra-integrate
============

.. conda:recipe:: ra-integrate
   :replaces_section_title:

   Integration of the Ra assembler \- a de novo DNA assembler for third generation sequencing data.

   :homepage: https://github.com/mariokostelac/ra-integrate
   :license: GPL3
   :recipe: /`ra-integrate <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra-integrate>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ra-integrate/meta.yaml>`_

   


.. conda:package:: ra-integrate

   |downloads_ra-integrate| |docker_ra-integrate|

   :versions: 0.1-0
   
   :depends graphviz: 
   :depends libgcc: 
   :depends ra: 
   :depends ruby: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ra-integrate

   and update with::

      conda update ra-integrate

   or use the docker container::

      docker pull quay.io/biocontainers/ra-integrate:<tag>

   (see `ra-integrate/tags`_ for valid values for ``<tag>``)


.. |downloads_ra-integrate| image:: https://img.shields.io/conda/dn/bioconda/ra-integrate.svg?style=flat
   :target: https://anaconda.org/bioconda/ra-integrate
   :alt:   (downloads)
.. |docker_ra-integrate| image:: https://quay.io/repository/biocontainers/ra-integrate/status
   :target: https://quay.io/repository/biocontainers/ra-integrate
.. _`ra-integrate/tags`: https://quay.io/repository/biocontainers/ra-integrate?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ra-integrate/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ra-integrate/README.html