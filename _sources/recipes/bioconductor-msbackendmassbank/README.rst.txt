:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-msbackendmassbank'
.. highlight: bash

bioconductor-msbackendmassbank
==============================

.. conda:recipe:: bioconductor-msbackendmassbank
   :replaces_section_title:
   :noindex:

   Mass Spectrometry Data Backend for MassBank record Files

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MsBackendMassbank.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-msbackendmassbank <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmassbank>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-msbackendmassbank/meta.yaml>`_

   Mass spectrometry \(MS\) data backend supporting import and export of MS\/MS library spectra from MassBank record files. Different backends are available that allow handling of data in plain MassBank text file format or allow also to interact directly with MassBank SQL databases. Objects from this package are supposed to be used with the Spectra Bioconductor package. This package thus adds MassBank support to the Spectra package.


.. conda:package:: bioconductor-msbackendmassbank

   |downloads_bioconductor-msbackendmassbank| |docker_bioconductor-msbackendmassbank|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biocparallel: ``>=1.32.0,<1.33.0``
   :depends bioconductor-iranges: ``>=2.32.0,<2.33.0``
   :depends bioconductor-mscoreutils: ``>=1.10.0,<1.11.0``
   :depends bioconductor-protgenerics: ``>=1.30.0,<1.31.0``
   :depends bioconductor-s4vectors: ``>=0.36.0,<0.37.0``
   :depends bioconductor-spectra: ``>=1.8.0,<1.9.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-dbi: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-msbackendmassbank

   and update with::

      conda update bioconductor-msbackendmassbank

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-msbackendmassbank:<tag>

   (see `bioconductor-msbackendmassbank/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-msbackendmassbank| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-msbackendmassbank.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-msbackendmassbank
   :alt:   (downloads)
.. |docker_bioconductor-msbackendmassbank| image:: https://quay.io/repository/biocontainers/bioconductor-msbackendmassbank/status
   :target: https://quay.io/repository/biocontainers/bioconductor-msbackendmassbank
.. _`bioconductor-msbackendmassbank/tags`: https://quay.io/repository/biocontainers/bioconductor-msbackendmassbank?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-msbackendmassbank";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-msbackendmassbank/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-msbackendmassbank/README.html