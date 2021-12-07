:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mseqtools'
.. highlight: bash

mseqtools
=========

.. conda:recipe:: mseqtools
   :replaces_section_title:
   :noindex:

   fastq\/fasta file manipulation toolkit

   :homepage: https://github.com/arumugamlab/mseqtools
   :license: MIT
   :recipe: /`mseqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mseqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mseqtools/meta.yaml>`_

   


.. conda:package:: mseqtools

   |downloads_mseqtools| |docker_mseqtools|

   :versions:
      
      

      ``0.9.0-0``

      

   
   :depends argtable2: 
   :depends gzip: 
   :depends libgcc-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mseqtools

   and update with::

      conda update mseqtools

   or use the docker container::

      docker pull quay.io/biocontainers/mseqtools:<tag>

   (see `mseqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_mseqtools| image:: https://img.shields.io/conda/dn/bioconda/mseqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/mseqtools
   :alt:   (downloads)
.. |docker_mseqtools| image:: https://quay.io/repository/biocontainers/mseqtools/status
   :target: https://quay.io/repository/biocontainers/mseqtools
.. _`mseqtools/tags`: https://quay.io/repository/biocontainers/mseqtools?tab=tags


.. raw:: html

    <script>
        var package = "mseqtools";
        var versions = ["0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mseqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mseqtools/README.html