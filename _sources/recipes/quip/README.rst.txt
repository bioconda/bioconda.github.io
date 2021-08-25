:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'quip'
.. highlight: bash

quip
====

.. conda:recipe:: quip
   :replaces_section_title:
   :noindex:

   Aggressive compression of FASTQ and SAM\/BAM files.

   :homepage: http://homes.cs.washington.edu/%7Edcjones/quip/
   :license: Custom
   :recipe: /`quip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/quip/meta.yaml>`_
   :links: biotools: :biotools:`quip`, doi: :doi:`10.1093/nar/gks754`

   


.. conda:package:: quip

   |downloads_quip| |docker_quip|

   :versions:
      
      

      ``1.1.8-1``,  ``1.1.8-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install quip

   and update with::

      conda update quip

   or use the docker container::

      docker pull quay.io/biocontainers/quip:<tag>

   (see `quip/tags`_ for valid values for ``<tag>``)


.. |downloads_quip| image:: https://img.shields.io/conda/dn/bioconda/quip.svg?style=flat
   :target: https://anaconda.org/bioconda/quip
   :alt:   (downloads)
.. |docker_quip| image:: https://quay.io/repository/biocontainers/quip/status
   :target: https://quay.io/repository/biocontainers/quip
.. _`quip/tags`: https://quay.io/repository/biocontainers/quip?tab=tags


.. raw:: html

    <script>
        var package = "quip";
        var versions = ["1.1.8","1.1.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/quip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/quip/README.html