:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'expansionhunterdenovo'
.. highlight: bash

expansionhunterdenovo
=====================

.. conda:recipe:: expansionhunterdenovo
   :replaces_section_title:
   :noindex:

   ExpansionHunter Denovo \(EHdn\) is a suite of tools for detecting novel expansions of short tandem repeats \(STRs\).

   :homepage: https://github.com/Illumina/ExpansionHunterDenovo
   :license: Apache License 2.0
   :recipe: /`expansionhunterdenovo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunterdenovo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/expansionhunterdenovo/meta.yaml>`_

   


.. conda:package:: expansionhunterdenovo

   |downloads_expansionhunterdenovo| |docker_expansionhunterdenovo|

   :versions:
      
      

      ``0.9.0-3``,  ``0.9.0-2``,  ``0.9.0-1``,  ``0.9.0-0``

      

   
   :depends backports.lzma: 
   :depends boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends cmake: 
   :depends htslib: ``>=1.14,<1.15.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends spdlog: ``1.4.2.*``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install expansionhunterdenovo

   and update with::

      conda update expansionhunterdenovo

   or use the docker container::

      docker pull quay.io/biocontainers/expansionhunterdenovo:<tag>

   (see `expansionhunterdenovo/tags`_ for valid values for ``<tag>``)


.. |downloads_expansionhunterdenovo| image:: https://img.shields.io/conda/dn/bioconda/expansionhunterdenovo.svg?style=flat
   :target: https://anaconda.org/bioconda/expansionhunterdenovo
   :alt:   (downloads)
.. |docker_expansionhunterdenovo| image:: https://quay.io/repository/biocontainers/expansionhunterdenovo/status
   :target: https://quay.io/repository/biocontainers/expansionhunterdenovo
.. _`expansionhunterdenovo/tags`: https://quay.io/repository/biocontainers/expansionhunterdenovo?tab=tags


.. raw:: html

    <script>
        var package = "expansionhunterdenovo";
        var versions = ["0.9.0","0.9.0","0.9.0","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/expansionhunterdenovo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/expansionhunterdenovo/README.html