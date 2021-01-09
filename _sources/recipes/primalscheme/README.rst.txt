:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'primalscheme'
.. highlight: bash

primalscheme
============

.. conda:recipe:: primalscheme
   :replaces_section_title:
   :noindex:

   primalscheme is a tool for designing primer panels for multiplex PCR

   :homepage: https://github.com/aresti/primalscheme
   :license: GPL3 / GPL-3
   :recipe: /`primalscheme <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalscheme>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/primalscheme/meta.yaml>`_
   :links: doi: :doi:`10.1038/nprot.2017.066`

   


.. conda:package:: primalscheme

   |downloads_primalscheme| |docker_primalscheme|

   :versions:
      
      

      ``1.3.2-0``

      

   
   :depends biopython: ``>=1,<2``
   :depends click: ``>=7.1.2``
   :depends parasail-python: ``>=1.2``
   :depends primer3-py: ``>=0,<1``
   :depends progress: ``>=1.5``
   :depends python: 
   :depends reportlab: ``>=3,<4``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install primalscheme

   and update with::

      conda update primalscheme

   or use the docker container::

      docker pull quay.io/biocontainers/primalscheme:<tag>

   (see `primalscheme/tags`_ for valid values for ``<tag>``)


.. |downloads_primalscheme| image:: https://img.shields.io/conda/dn/bioconda/primalscheme.svg?style=flat
   :target: https://anaconda.org/bioconda/primalscheme
   :alt:   (downloads)
.. |docker_primalscheme| image:: https://quay.io/repository/biocontainers/primalscheme/status
   :target: https://quay.io/repository/biocontainers/primalscheme
.. _`primalscheme/tags`: https://quay.io/repository/biocontainers/primalscheme?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/primalscheme/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/primalscheme/README.html