:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmgf'
.. highlight: bash

bioconductor-msbackendmgf
=========================

.. conda:recipe:: bioconductor-msbackendmgf
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data Backend for Mascot Generic Format \(mgf\) Files

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/MsBackendMgf.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmgf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmgf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmgf/meta.yaml>`_

   Mass spectrometry \(MS\) data backend supporting import and export of MS\/MS spectra data from Mascot Generic Format \(mgf\) files. Objects defined in this package are supposed to be used with the Spectra Bioconductor package. This package thus adds mgf file support to the Spectra package.


.. conda:package:: bioconductor-msbackendmgf

   |downloads_bioconductor-msbackendmgf| |docker_bioconductor-msbackendmgf|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.28.0,<1.29.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-mscoreutils: ``>=1.6.0,<1.7.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends bioconductor-spectra: ``>=1.4.0,<1.5.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msbackendmgf

   and update with::

      conda update bioconductor-msbackendmgf

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendmgf:<tag>

   (see `bioconductor-msbackendmgf/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendmgf| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmgf.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmgf
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmgf| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmgf/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmgf
.. _`bioconductor-msbackendmgf/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmgf?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmgf";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmgf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmgf/README.html