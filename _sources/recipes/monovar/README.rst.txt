:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'monovar'
.. highlight: bash

monovar
=======

.. conda:recipe:: monovar
   :replaces_section_title:
   :noindex:

   single cell joint genotyper

   :homepage: https://bitbucket.org/hamimzafar/monovar
   :license: MIT
   :recipe: /`monovar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monovar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/monovar/meta.yaml>`_
   :links: biotools: :biotools:`Monovar`, doi: :doi:`10.1038/nmeth.3835`

   


.. conda:package:: monovar

   |downloads_monovar| |docker_monovar|

   :versions:
      
      

      ``0.0.1-0``,  ``v0.0.1-2``,  ``v0.0.1-1``,  ``v0.0.1-0``

      

   
   :depends numpy: 
   :depends pysam: 
   :depends python: ``<3``
   :depends scipy: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install monovar

   and update with::

      conda update monovar

   or use the docker container::

      docker pull quay.io/biocontainers/monovar:<tag>

   (see `monovar/tags`_ for valid values for ``<tag>``)


.. |downloads_monovar| image:: https://img.shields.io/conda/dn/bioconda/monovar.svg?style=flat
   :target: https://anaconda.org/bioconda/monovar
   :alt:   (downloads)
.. |docker_monovar| image:: https://quay.io/repository/biocontainers/monovar/status
   :target: https://quay.io/repository/biocontainers/monovar
.. _`monovar/tags`: https://quay.io/repository/biocontainers/monovar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/monovar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/monovar/README.html