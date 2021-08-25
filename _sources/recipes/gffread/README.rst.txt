:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gffread'
.. highlight: bash

gffread
=======

.. conda:recipe:: gffread
   :replaces_section_title:
   :noindex:

   GFF\/GTF utility providing format conversions\, region filtering\, FASTA sequence extraction and more.

   :homepage: http://ccb.jhu.edu/software/stringtie/gff.shtml
   :developer docs: https://github.com/gpertea/gffread
   :license: MIT
   :recipe: /`gffread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gffread/meta.yaml>`_
   :links: biotools: :biotools:`gffread`

   


.. conda:package:: gffread

   |downloads_gffread| |docker_gffread|

   :versions:
      
      

      ``0.12.1-1``,  ``0.12.1-0``,  ``0.11.7-0``,  ``0.11.6-0``,  ``0.11.4-0``,  ``0.9.12-0``,  ``0.9.9-1``,  ``0.9.9-0``,  ``0.9.8-0``

      

   
   :depends libgcc-ng: ``>=9.3.0``
   :depends libstdcxx-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install gffread

   and update with::

      conda update gffread

   or use the docker container::

      docker pull quay.io/biocontainers/gffread:<tag>

   (see `gffread/tags`_ for valid values for ``<tag>``)


.. |downloads_gffread| image:: https://img.shields.io/conda/dn/bioconda/gffread.svg?style=flat
   :target: https://anaconda.org/bioconda/gffread
   :alt:   (downloads)
.. |docker_gffread| image:: https://quay.io/repository/biocontainers/gffread/status
   :target: https://quay.io/repository/biocontainers/gffread
.. _`gffread/tags`: https://quay.io/repository/biocontainers/gffread?tab=tags


.. raw:: html

    <script>
        var package = "gffread";
        var versions = ["0.12.1","0.12.1","0.11.7","0.11.6","0.11.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gffread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gffread/README.html