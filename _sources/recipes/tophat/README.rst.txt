:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tophat'
.. highlight: bash

tophat
======

.. conda:recipe:: tophat
   :replaces_section_title:
   :noindex:

   A spliced read mapper for RNA\-Seq

   :homepage: http://ccb.jhu.edu/software/tophat/index.shtml
   :license: Boost Software License
   :recipe: /`tophat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tophat/meta.yaml>`_
   :links: biotools: :biotools:`tophat2`, usegalaxy-eu: :usegalaxy-eu:`tophat2`

   


.. conda:package:: tophat

   |downloads_tophat| |docker_tophat|

   :versions:
      
      

      ``2.1.1-3``,  ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.13-5``,  ``2.0.13-4``,  ``2.0.13-3``,  ``2.0.13-2``

      

   
   :depends bowtie2: ``<=2.2.5``
   :depends python: ``>=2.7,<2.8.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install tophat

   and update with::

      conda update tophat

   or use the docker container::

      docker pull quay.io/biocontainers/tophat:<tag>

   (see `tophat/tags`_ for valid values for ``<tag>``)


.. |downloads_tophat| image:: https://img.shields.io/conda/dn/bioconda/tophat.svg?style=flat
   :target: https://anaconda.org/bioconda/tophat
   :alt:   (downloads)
.. |docker_tophat| image:: https://quay.io/repository/biocontainers/tophat/status
   :target: https://quay.io/repository/biocontainers/tophat
.. _`tophat/tags`: https://quay.io/repository/biocontainers/tophat?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tophat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tophat/README.html