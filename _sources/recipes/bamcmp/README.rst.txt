:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bamcmp'
.. highlight: bash

bamcmp
======

.. conda:recipe:: bamcmp
   :replaces_section_title:
   :noindex:

   Tools for deconvolving host and graft reads using full\-length alignments and their scores.

   :homepage: https://github.com/CRUKMI-ComputationalBiology/bamcmp
   :license: GPL-3
   :recipe: /`bamcmp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamcmp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bamcmp/meta.yaml>`_

   


.. conda:package:: bamcmp

   |downloads_bamcmp| |docker_bamcmp|

   :versions:
      
      

      ``2.2-0``

      

   
   :depends htslib: ``>=1.12,<1.13.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bamcmp

   and update with::

      conda update bamcmp

   or use the docker container::

      docker pull quay.io/biocontainers/bamcmp:<tag>

   (see `bamcmp/tags`_ for valid values for ``<tag>``)


.. |downloads_bamcmp| image:: https://img.shields.io/conda/dn/bioconda/bamcmp.svg?style=flat
   :target: https://anaconda.org/bioconda/bamcmp
   :alt:   (downloads)
.. |docker_bamcmp| image:: https://quay.io/repository/biocontainers/bamcmp/status
   :target: https://quay.io/repository/biocontainers/bamcmp
.. _`bamcmp/tags`: https://quay.io/repository/biocontainers/bamcmp?tab=tags


.. raw:: html

    <script>
        var package = "bamcmp";
        var versions = ["2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bamcmp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bamcmp/README.html