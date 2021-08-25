:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fqtools'
.. highlight: bash

fqtools
=======

.. conda:recipe:: fqtools
   :replaces_section_title:
   :noindex:

   An efficient FASTQ manipulation suite.

   :homepage: https://github.com/alastair-droop/fqtools
   :license: GPLv3
   :recipe: /`fqtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fqtools/meta.yaml>`_

   


.. conda:package:: fqtools

   |downloads_fqtools| |docker_fqtools|

   :versions:
      
      

      ``2.0-7``,  ``2.0-6``,  ``2.0-5``,  ``2.0-4``,  ``2.0-3``,  ``2.0-2``,  ``2.0-1``,  ``2.0-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.3.0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fqtools

   and update with::

      conda update fqtools

   or use the docker container::

      docker pull quay.io/biocontainers/fqtools:<tag>

   (see `fqtools/tags`_ for valid values for ``<tag>``)


.. |downloads_fqtools| image:: https://img.shields.io/conda/dn/bioconda/fqtools.svg?style=flat
   :target: https://anaconda.org/bioconda/fqtools
   :alt:   (downloads)
.. |docker_fqtools| image:: https://quay.io/repository/biocontainers/fqtools/status
   :target: https://quay.io/repository/biocontainers/fqtools
.. _`fqtools/tags`: https://quay.io/repository/biocontainers/fqtools?tab=tags


.. raw:: html

    <script>
        var package = "fqtools";
        var versions = ["2.0","2.0","2.0","2.0","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fqtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fqtools/README.html