:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-ddir'
.. highlight: bash

r-ddir
======

.. conda:recipe:: r-ddir
   :replaces_section_title:
   :noindex:

   An R package to access to Omics Discovery Index API

   :homepage: https://github.com/OmicsDI/ddiR
   :license: GPL2
   :recipe: /`r-ddir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ddir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-ddir/meta.yaml>`_

   


.. conda:package:: r-ddir

   |downloads_r-ddir| |docker_r-ddir|

   :versions:
      
      

      ``0.0.3-1``,  ``0.0.3-0``

      

   
   :depends r-base: ``>=4.0,<4.1.0a0``
   :depends r-rjsonio: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install r-ddir

   and update with::

      conda update r-ddir

   or use the docker container::

      docker pull quay.io/biocontainers/r-ddir:<tag>

   (see `r-ddir/tags`_ for valid values for ``<tag>``)


.. |downloads_r-ddir| image:: https://img.shields.io/conda/dn/bioconda/r-ddir.svg?style=flat
   :target: https://anaconda.org/bioconda/r-ddir
   :alt:   (downloads)
.. |docker_r-ddir| image:: https://quay.io/repository/biocontainers/r-ddir/status
   :target: https://quay.io/repository/biocontainers/r-ddir
.. _`r-ddir/tags`: https://quay.io/repository/biocontainers/r-ddir?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-ddir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-ddir/README.html