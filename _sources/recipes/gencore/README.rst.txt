:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gencore'
.. highlight: bash

gencore
=======

.. conda:recipe:: gencore
   :replaces_section_title:
   :noindex:

   Generate consensus reads to reduce sequencing noises and remove duplications

   :homepage: https://github.com/OpenGene/gencore
   :license: MIT
   :recipe: /`gencore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gencore/meta.yaml>`_

   


.. conda:package:: gencore

   |downloads_gencore| |docker_gencore|

   :versions:
      
      

      ``0.13.0-0``

      

   
   :depends htslib: ``>=1.10.2,<1.11.0a0``
   :depends libgcc-ng: ``>=7.3.0``
   :depends libstdcxx-ng: ``>=7.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gencore

   and update with::

      conda update gencore

   or use the docker container::

      docker pull quay.io/biocontainers/gencore:<tag>

   (see `gencore/tags`_ for valid values for ``<tag>``)


.. |downloads_gencore| image:: https://img.shields.io/conda/dn/bioconda/gencore.svg?style=flat
   :target: https://anaconda.org/bioconda/gencore
   :alt:   (downloads)
.. |docker_gencore| image:: https://quay.io/repository/biocontainers/gencore/status
   :target: https://quay.io/repository/biocontainers/gencore
.. _`gencore/tags`: https://quay.io/repository/biocontainers/gencore?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gencore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gencore/README.html