:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fq'
.. highlight: bash

fq
==

.. conda:recipe:: fq
   :replaces_section_title:
   :noindex:

   fq is a library to generate and validate FASTQ file pairs.

   :homepage: https://github.com/stjude-rust-labs/fq
   :license: MIT
   :recipe: /`fq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fq/meta.yaml>`_

   fq provides subcommands for filtering\, generating\, subsampling\, and validating FASTQ files.



.. conda:package:: fq

   |downloads_fq| |docker_fq|

   :versions:
      
      

      ``0.9.1-0``

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fq

   and update with::

      conda update fq

   or use the docker container::

      docker pull quay.io/biocontainers/fq:<tag>

   (see `fq/tags`_ for valid values for ``<tag>``)


.. |downloads_fq| image:: https://img.shields.io/conda/dn/bioconda/fq.svg?style=flat
   :target: https://anaconda.org/bioconda/fq
   :alt:   (downloads)
.. |docker_fq| image:: https://quay.io/repository/biocontainers/fq/status
   :target: https://quay.io/repository/biocontainers/fq
.. _`fq/tags`: https://quay.io/repository/biocontainers/fq?tab=tags


.. raw:: html

    <script>
        var package = "fq";
        var versions = ["0.9.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fq/README.html