:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'slivar'
.. highlight: bash

slivar
======

.. conda:recipe:: slivar
   :replaces_section_title:

   filter\/annotate variants in VCF\/BCF format with simple expressions

   :homepage: https://github.com/brentp/slivar
   :license: MIT
   :recipe: /`slivar <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slivar>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/slivar/meta.yaml>`_

   


.. conda:package:: slivar

   |downloads_slivar| |docker_slivar|

   :versions: 0.1.1-0, 0.1.0-0, 0.0.9-0, 0.0.8-0, 0.0.7-0, 0.0.5-0
   
   :depends htslib: >=1.9,<1.10.0a0
   :depends zlib: >=1.2.11,<1.3.0a0
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install slivar

   and update with::

      conda update slivar

   or use the docker container::

      docker pull quay.io/biocontainers/slivar:<tag>

   (see `slivar/tags`_ for valid values for ``<tag>``)


.. |downloads_slivar| image:: https://img.shields.io/conda/dn/bioconda/slivar.svg?style=flat
   :target: https://anaconda.org/bioconda/slivar
   :alt:   (downloads)
.. |docker_slivar| image:: https://quay.io/repository/biocontainers/slivar/status
   :target: https://quay.io/repository/biocontainers/slivar
.. _`slivar/tags`: https://quay.io/repository/biocontainers/slivar?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/slivar/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/slivar/README.html