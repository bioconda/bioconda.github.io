:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mosaicatcher'
.. highlight: bash

mosaicatcher
============

.. conda:recipe:: mosaicatcher
   :replaces_section_title:
   :noindex:

   mosaicatcher\: counts Strand\-seq reads and classifies strand states of each chromosome in each cell using a Hidden Markov Model.

   :homepage: https://github.com/friendsofstrandseq/mosaicatcher/
   :license: MIT / MIT License
   :recipe: /`mosaicatcher <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaicatcher>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mosaicatcher/meta.yaml>`_

   


.. conda:package:: mosaicatcher

   |downloads_mosaicatcher| |docker_mosaicatcher|

   :versions:
      
      

      ``0.3.1-1``,  ``0.3.1-0``

      

   
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends htslib: ``>=1.16,<1.17.0a0``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install mosaicatcher

   and update with::

      conda update mosaicatcher

   or use the docker container::

      docker pull quay.io/biocontainers/mosaicatcher:<tag>

   (see `mosaicatcher/tags`_ for valid values for ``<tag>``)


.. |downloads_mosaicatcher| image:: https://img.shields.io/conda/dn/bioconda/mosaicatcher.svg?style=flat
   :target: https://anaconda.org/bioconda/mosaicatcher
   :alt:   (downloads)
.. |docker_mosaicatcher| image:: https://quay.io/repository/biocontainers/mosaicatcher/status
   :target: https://quay.io/repository/biocontainers/mosaicatcher
.. _`mosaicatcher/tags`: https://quay.io/repository/biocontainers/mosaicatcher?tab=tags


.. raw:: html

    <script>
        var package = "mosaicatcher";
        var versions = ["0.3.1","0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mosaicatcher/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mosaicatcher/README.html