:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sracat'
.. highlight: bash

sracat
======

.. conda:recipe:: sracat
   :replaces_section_title:
   :noindex:

   a command\-line tool for extracting unordered read data from SRA files

   :homepage: https://github.com/lanl/sracat
   :license: BSD / BSD-3-Clause
   :recipe: /`sracat <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sracat>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sracat/meta.yaml>`_

   sracat is small C\+\+ program that uses the NCBI sra\-toolkit C\+\+ API to
   extract sequence \(and optionally quailty scores\) from SRA records. Unlike
   the fasterq\-dump program included with the sra\-toolkit\, sracat does not
   output the reads in their origianlly submitted order\, but rather outputs
   reads in the order in which they are stored in the SRA file.



.. conda:package:: sracat

   |downloads_sracat| |docker_sracat|

   :versions:
      
      

      ``0.2-2``,  ``0.2-1``,  ``0.2-0``

      

   
   :depends ca-certificates: 
   :depends libcxx: ``>=15.0.7``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install sracat

   and update with::

      conda update sracat

   or use the docker container::

      docker pull quay.io/biocontainers/sracat:<tag>

   (see `sracat/tags`_ for valid values for ``<tag>``)


.. |downloads_sracat| image:: https://img.shields.io/conda/dn/bioconda/sracat.svg?style=flat
   :target: https://anaconda.org/bioconda/sracat
   :alt:   (downloads)
.. |docker_sracat| image:: https://quay.io/repository/biocontainers/sracat/status
   :target: https://quay.io/repository/biocontainers/sracat
.. _`sracat/tags`: https://quay.io/repository/biocontainers/sracat?tab=tags


.. raw:: html

    <script>
        var package = "sracat";
        var versions = ["0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sracat/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sracat/README.html