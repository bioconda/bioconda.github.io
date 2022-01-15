:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rustybam'
.. highlight: bash

rustybam
========

.. conda:recipe:: rustybam
   :replaces_section_title:
   :noindex:

   Mitchell Vollger\'s bioinformatics rust utilities.

   :homepage: https://github.com/mrvollger/rustybam
   :license: MIT
   :recipe: /`rustybam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustybam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rustybam/meta.yaml>`_

   


.. conda:package:: rustybam

   |downloads_rustybam| |docker_rustybam|

   :versions:
      
      

      ``0.1.26-1``,  ``0.1.26-0``,  ``0.1.25-0``,  ``0.1.24-1``,  ``0.1.24-0``,  ``0.1.23-0``,  ``0.1.20-0``

      

   
   :depends bzip2: ``>=1.0.8,<2.0a0``
   :depends gsl: ``>=2.7,<2.8.0a0``
   :depends libcblas: ``>=3.8.0,<4.0a0``
   :depends libcurl: ``>=7.81.0,<8.0a0``
   :depends libdeflate: ``>=1.9,<1.10.0a0``
   :depends libgcc-ng: ``>=9.4.0``
   :depends libstdcxx-ng: ``>=9.4.0``
   :depends libzlib: ``>=1.2.11,<1.3.0a0``
   :depends openssl: ``>=1.1.1l,<1.1.2a``
   :depends xz: ``>=5.2.5,<5.3.0a0``
   :depends zlib: ``>=1.2.11,<1.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install rustybam

   and update with::

      conda update rustybam

   or use the docker container::

      docker pull quay.io/biocontainers/rustybam:<tag>

   (see `rustybam/tags`_ for valid values for ``<tag>``)


.. |downloads_rustybam| image:: https://img.shields.io/conda/dn/bioconda/rustybam.svg?style=flat
   :target: https://anaconda.org/bioconda/rustybam
   :alt:   (downloads)
.. |docker_rustybam| image:: https://quay.io/repository/biocontainers/rustybam/status
   :target: https://quay.io/repository/biocontainers/rustybam
.. _`rustybam/tags`: https://quay.io/repository/biocontainers/rustybam?tab=tags


.. raw:: html

    <script>
        var package = "rustybam";
        var versions = ["0.1.26","0.1.26","0.1.25","0.1.24","0.1.24"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rustybam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rustybam/README.html