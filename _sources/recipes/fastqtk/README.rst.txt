:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastqtk'
.. highlight: bash

fastqtk
=======

.. conda:recipe:: fastqtk
   :replaces_section_title:
   :noindex:

   fastqtk is a fast and lightweight tool for interleaving\/deinterleaving\/counting\/trimming FASTQ files.

   :homepage: https://github.com/ndaniel/fastqtk
   :license: MIT / MIT
   :recipe: /`fastqtk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqtk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastqtk/meta.yaml>`_

   


.. conda:package:: fastqtk

   |downloads_fastqtk| |docker_fastqtk|

   :versions:
      
      

      ``0.27-3``,  ``0.27-2``,  ``0.27-1``,  ``0.27-0``

      

   
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install fastqtk

   and update with::

      conda update fastqtk

   or use the docker container::

      docker pull quay.io/biocontainers/fastqtk:<tag>

   (see `fastqtk/tags`_ for valid values for ``<tag>``)


.. |downloads_fastqtk| image:: https://img.shields.io/conda/dn/bioconda/fastqtk.svg?style=flat
   :target: https://anaconda.org/bioconda/fastqtk
   :alt:   (downloads)
.. |docker_fastqtk| image:: https://quay.io/repository/biocontainers/fastqtk/status
   :target: https://quay.io/repository/biocontainers/fastqtk
.. _`fastqtk/tags`: https://quay.io/repository/biocontainers/fastqtk?tab=tags


.. raw:: html

    <script>
        var package = "fastqtk";
        var versions = ["0.27","0.27","0.27","0.27"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastqtk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastqtk/README.html