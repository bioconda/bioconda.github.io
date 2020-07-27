:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pileuppy'
.. highlight: bash

pileuppy
========

.. conda:recipe:: pileuppy
   :replaces_section_title:
   :noindex:

   Colorful and fast tool designed to draw alignment pileup.

   :homepage: https://gitlab.com/tprodanov/pileuppy
   :license: MIT
   :recipe: /`pileuppy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pileuppy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pileuppy/meta.yaml>`_

   


.. conda:package:: pileuppy

   |downloads_pileuppy| |docker_pileuppy|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends argparse: 
   :depends colored: 
   :depends pysam: 
   :depends python: ``>=3``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install pileuppy

   and update with::

      conda update pileuppy

   or use the docker container::

      docker pull quay.io/biocontainers/pileuppy:<tag>

   (see `pileuppy/tags`_ for valid values for ``<tag>``)


.. |downloads_pileuppy| image:: https://img.shields.io/conda/dn/bioconda/pileuppy.svg?style=flat
   :target: https://anaconda.org/bioconda/pileuppy
   :alt:   (downloads)
.. |docker_pileuppy| image:: https://quay.io/repository/biocontainers/pileuppy/status
   :target: https://quay.io/repository/biocontainers/pileuppy
.. _`pileuppy/tags`: https://quay.io/repository/biocontainers/pileuppy?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pileuppy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pileuppy/README.html