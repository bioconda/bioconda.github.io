:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'roguenarok'
.. highlight: bash

roguenarok
==========

.. conda:recipe:: roguenarok
   :replaces_section_title:
   :noindex:

   Phylogenetics \- algorithm for the identification of rogue taxa in a tree set.

   :homepage: https://github.com/aberer/RogueNaRok
   :license: GPL-2.0-or-later
   :recipe: /`roguenarok <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roguenarok>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/roguenarok/meta.yaml>`_
   :links: doi: :doi:`10.1093/sysbio/sys078`

   


.. conda:package:: roguenarok

   |downloads_roguenarok| |docker_roguenarok|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends libgcc-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install roguenarok

   and update with::

      conda update roguenarok

   or use the docker container::

      docker pull quay.io/biocontainers/roguenarok:<tag>

   (see `roguenarok/tags`_ for valid values for ``<tag>``)


.. |downloads_roguenarok| image:: https://img.shields.io/conda/dn/bioconda/roguenarok.svg?style=flat
   :target: https://anaconda.org/bioconda/roguenarok
   :alt:   (downloads)
.. |docker_roguenarok| image:: https://quay.io/repository/biocontainers/roguenarok/status
   :target: https://quay.io/repository/biocontainers/roguenarok
.. _`roguenarok/tags`: https://quay.io/repository/biocontainers/roguenarok?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/roguenarok/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/roguenarok/README.html