:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mfqe'
.. highlight: bash

mfqe
====

.. conda:recipe:: mfqe
   :replaces_section_title:
   :noindex:

   mfqe is a tool for quickly seperating fasta and fastq files

   :homepage: https://github.com/wwood/mfqe
   :license: GPL3
   :recipe: /`mfqe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mfqe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mfqe/meta.yaml>`_

   


.. conda:package:: mfqe

   |downloads_mfqe| |docker_mfqe|

   :versions:
      
      

      ``0.5.0-4``,  ``0.5.0-3``,  ``0.5.0-2``,  ``0.5.0-1``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.3.0-0``

      

   
   :depends libgcc-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mfqe

   and update with::

      conda update mfqe

   or use the docker container::

      docker pull quay.io/biocontainers/mfqe:<tag>

   (see `mfqe/tags`_ for valid values for ``<tag>``)


.. |downloads_mfqe| image:: https://img.shields.io/conda/dn/bioconda/mfqe.svg?style=flat
   :target: https://anaconda.org/bioconda/mfqe
   :alt:   (downloads)
.. |docker_mfqe| image:: https://quay.io/repository/biocontainers/mfqe/status
   :target: https://quay.io/repository/biocontainers/mfqe
.. _`mfqe/tags`: https://quay.io/repository/biocontainers/mfqe?tab=tags


.. raw:: html

    <script>
        var package = "mfqe";
        var versions = ["0.5.0","0.5.0","0.5.0","0.5.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mfqe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mfqe/README.html