:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fasta_windows'
.. highlight: bash

fasta_windows
=============

.. conda:recipe:: fasta_windows
   :replaces_section_title:
   :noindex:

   Generate fast sequence statistics in windows for each record in a fasta file.

   :homepage: https://github.com/tolkit/fasta_windows
   :license: MIT
   :recipe: /`fasta_windows <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta_windows>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fasta_windows/meta.yaml>`_

   


.. conda:package:: fasta_windows

   |downloads_fasta_windows| |docker_fasta_windows|

   :versions:
      
      

      ``0.2.3-0``,  ``0.2.2-1``,  ``0.2.2-0``

      

   
   :depends libgcc-ng: ``>=10.3.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fasta_windows

   and update with::

      conda update fasta_windows

   or use the docker container::

      docker pull quay.io/biocontainers/fasta_windows:<tag>

   (see `fasta_windows/tags`_ for valid values for ``<tag>``)


.. |downloads_fasta_windows| image:: https://img.shields.io/conda/dn/bioconda/fasta_windows.svg?style=flat
   :target: https://anaconda.org/bioconda/fasta_windows
   :alt:   (downloads)
.. |docker_fasta_windows| image:: https://quay.io/repository/biocontainers/fasta_windows/status
   :target: https://quay.io/repository/biocontainers/fasta_windows
.. _`fasta_windows/tags`: https://quay.io/repository/biocontainers/fasta_windows?tab=tags


.. raw:: html

    <script>
        var package = "fasta_windows";
        var versions = ["0.2.3","0.2.2","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fasta_windows/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fasta_windows/README.html