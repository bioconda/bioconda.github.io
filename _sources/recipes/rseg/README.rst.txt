:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rseg'
.. highlight: bash

rseg
====

.. conda:recipe:: rseg
   :replaces_section_title:
   :noindex:

   The RSEG software package is used to analyze ChIP\-Seq data\, especially for identifying genomic regions and their boundaries marked by diffusive histone modification markers\, such as H3K36me3 and H3K27me3.

   :homepage: http://smithlabresearch.org/software/rseg
   :license: GPLv3
   :recipe: /`rseg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rseg/meta.yaml>`_

   


.. conda:package:: rseg

   |downloads_rseg| |docker_rseg|

   :versions:
      
      

      ``0.4.9-1``,  ``0.4.9-0``

      

   
   :depends libstdcxx-ng: ``>=4.9``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rseg

   and update with::

      conda update rseg

   or use the docker container::

      docker pull quay.io/biocontainers/rseg:<tag>

   (see `rseg/tags`_ for valid values for ``<tag>``)


.. |downloads_rseg| image:: https://img.shields.io/conda/dn/bioconda/rseg.svg?style=flat
   :target: https://anaconda.org/bioconda/rseg
   :alt:   (downloads)
.. |docker_rseg| image:: https://quay.io/repository/biocontainers/rseg/status
   :target: https://quay.io/repository/biocontainers/rseg
.. _`rseg/tags`: https://quay.io/repository/biocontainers/rseg?tab=tags


.. raw:: html

    <script>
        var package = "rseg";
        var versions = ["0.4.9","0.4.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rseg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rseg/README.html