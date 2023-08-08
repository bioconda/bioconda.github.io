:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'skder'
.. highlight: bash

skder
=====

.. conda:recipe:: skder
   :replaces_section_title:
   :noindex:

   skDER\: efficient dynamic dereplication of genomes using skani

   :homepage: https://github.com/raufs/skDER
   :license: BSD / BSD-3-Clause license
   :recipe: /`skder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/skder/meta.yaml>`_

   


.. conda:package:: skder

   |downloads_skder| |docker_skder|

   :versions:
      
      

      ``1.0.1-1``,  ``1.0.1-0``,  ``1.0-0``

      

   
   :depends biopython: ``1.79.*``
   :depends libgcc-ng: ``>=12``
   :depends libstdcxx-ng: ``>=12``
   :depends ncbi-genome-download: 
   :depends pyfastx: 
   :depends python: ``>=3.10,<3.11.0a0``
   :depends python_abi: ``3.10.* *_cp310``
   :depends setuptools: 
   :depends skani: 
   :depends wget: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install skder

   and update with::

      conda update skder

   or use the docker container::

      docker pull quay.io/biocontainers/skder:<tag>

   (see `skder/tags`_ for valid values for ``<tag>``)


.. |downloads_skder| image:: https://img.shields.io/conda/dn/bioconda/skder.svg?style=flat
   :target: https://anaconda.org/bioconda/skder
   :alt:   (downloads)
.. |docker_skder| image:: https://quay.io/repository/biocontainers/skder/status
   :target: https://quay.io/repository/biocontainers/skder
.. _`skder/tags`: https://quay.io/repository/biocontainers/skder?tab=tags


.. raw:: html

    <script>
        var package = "skder";
        var versions = ["1.0.1","1.0.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/skder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/skder/README.html