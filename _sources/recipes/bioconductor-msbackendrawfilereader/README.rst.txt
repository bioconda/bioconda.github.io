:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendrawfilereader'
.. highlight: bash

bioconductor-msbackendrawfilereader
===================================

.. conda:recipe:: bioconductor-msbackendrawfilereader
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Backend for Reading Thermo Fisher Scientific raw Files

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/MsBackendRawFileReader.html
   :license: GPL-3
   :recipe: /`bioconductor-msbackendrawfilereader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendrawfilereader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendrawfilereader/meta.yaml>`_

   implements a MsBackend for the Spectra package using Thermo Fisher Scientific\'s NewRawFileReader .Net libraries. The package is generalizing the functionality introduced by the rawrr package Methods defined in this package are supposed to extend the Spectra Bioconductor package.


.. conda:package:: bioconductor-msbackendrawfilereader

   |downloads_bioconductor-msbackendrawfilereader| |docker_bioconductor-msbackendrawfilereader|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.34.0,<1.35.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-mscoreutils: ``>=1.12.0,<1.13.0``
   :depends bioconductor-rawrr: ``>=1.8.0,<1.9.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends bioconductor-spectra: ``>=1.10.0,<1.11.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msbackendrawfilereader

   and update with::

      conda update bioconductor-msbackendrawfilereader

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendrawfilereader:<tag>

   (see `bioconductor-msbackendrawfilereader/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendrawfilereader| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendrawfilereader.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendrawfilereader
   :alt:   (downloads)
.. |docker_bioconductor-msbackendrawfilereader| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendrawfilereader/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendrawfilereader
.. _`bioconductor-msbackendrawfilereader/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendrawfilereader?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendrawfilereader";
        var versions = ["1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendrawfilereader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendrawfilereader/README.html