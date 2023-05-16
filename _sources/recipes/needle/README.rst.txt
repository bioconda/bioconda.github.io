:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'needle'
.. highlight: bash

needle
======

.. conda:recipe:: needle
   :replaces_section_title:
   :noindex:

   Needle\: A fast and space\-efficient pre\-filter for the quantification of very large collections of nucleotide sequences

   :homepage: https://github.com/seqan/needle
   :license: BSD / BSD-3-Clause License
   :recipe: /`needle <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/needle>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/needle/meta.yaml>`_

   Needle is a tool for approximately quantifiying many queries in large collections of nucleotide sequences.


.. conda:package:: needle

   |downloads_needle| |docker_needle|

   :versions:
      
      

      ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends libzlib: ``>=1.2.13,<1.3.0a0``
   :depends zlib: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install needle

   and update with::

      conda update needle

   or use the docker container::

      docker pull quay.io/biocontainers/needle:<tag>

   (see `needle/tags`_ for valid values for ``<tag>``)


.. |downloads_needle| image:: https://img.shields.io/conda/dn/bioconda/needle.svg?style=flat
   :target: https://anaconda.org/bioconda/needle
   :alt:   (downloads)
.. |docker_needle| image:: https://quay.io/repository/biocontainers/needle/status
   :target: https://quay.io/repository/biocontainers/needle
.. _`needle/tags`: https://quay.io/repository/biocontainers/needle?tab=tags


.. raw:: html

    <script>
        var package = "needle";
        var versions = ["1.0.1","1.0.1","1.0.1","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/needle/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/needle/README.html