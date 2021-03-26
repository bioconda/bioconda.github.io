:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ema'
.. highlight: bash

ema
===

.. conda:recipe:: ema
   :replaces_section_title:
   :noindex:

   Fast \& accurate alignment of barcoded short\-reads

   :homepage: http://ema.csail.mit.edu/
   :license: MIT
   :recipe: /`ema <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ema>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ema/meta.yaml>`_
   :links: doi: :doi:`10.1101/220236`

   


.. conda:package:: ema

   |downloads_ema| |docker_ema|

   :versions:
      
      

      ``0.6.2-3``,  ``0.6.2-2``,  ``0.6.2-1``,  ``0.6.2-0``,  ``v0.6.2-1``,  ``v0.6.1-1``,  ``v0.6.1-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install ema

   and update with::

      conda update ema

   or use the docker container::

      docker pull quay.io/biocontainers/ema:<tag>

   (see `ema/tags`_ for valid values for ``<tag>``)


.. |downloads_ema| image:: https://img.shields.io/conda/dn/bioconda/ema.svg?style=flat
   :target: https://anaconda.org/bioconda/ema
   :alt:   (downloads)
.. |docker_ema| image:: https://quay.io/repository/biocontainers/ema/status
   :target: https://quay.io/repository/biocontainers/ema
.. _`ema/tags`: https://quay.io/repository/biocontainers/ema?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ema/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ema/README.html