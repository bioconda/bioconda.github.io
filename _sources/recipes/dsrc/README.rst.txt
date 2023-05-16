:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dsrc'
.. highlight: bash

dsrc
====

.. conda:recipe:: dsrc
   :replaces_section_title:
   :noindex:

   high\-performance compression of sequencing reads stored in FASTQ format

   :homepage: https://github.com/refresh-bio/DSRC
   :license: GNU GPL 2
   :recipe: /`dsrc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dsrc/meta.yaml>`_
   :links: biotools: :biotools:`dsrc`

   


.. conda:package:: dsrc

   |downloads_dsrc| |docker_dsrc|

   :versions:
      
      

      ``2015.06.04-6``,  ``2015.06.04-5``,  ``2015.06.04-4``,  ``2015.06.04-3``,  ``2015.06.04-2``,  ``2015.06.04-1``,  ``2015.06.04-0``,  ``2014.12.17-2``,  ``2014.12.17-1``

      

   
   :depends boost-cpp: ``>=1.78.0,<1.78.1.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install dsrc

   and update with::

      conda update dsrc

   or use the docker container::

      docker pull quay.io/biocontainers/dsrc:<tag>

   (see `dsrc/tags`_ for valid values for ``<tag>``)


.. |downloads_dsrc| image:: https://img.shields.io/conda/dn/bioconda/dsrc.svg?style=flat
   :target: https://anaconda.org/bioconda/dsrc
   :alt:   (downloads)
.. |docker_dsrc| image:: https://quay.io/repository/biocontainers/dsrc/status
   :target: https://quay.io/repository/biocontainers/dsrc
.. _`dsrc/tags`: https://quay.io/repository/biocontainers/dsrc?tab=tags


.. raw:: html

    <script>
        var package = "dsrc";
        var versions = ["2015.06.04","2015.06.04","2015.06.04","2015.06.04","2015.06.04"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dsrc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dsrc/README.html