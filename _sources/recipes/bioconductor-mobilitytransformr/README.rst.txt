:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-mobilitytransformr'
.. highlight: bash

bioconductor-mobilitytransformr
===============================

.. conda:recipe:: bioconductor-mobilitytransformr
   :replaces_section_title:
   :noindex:

   Effective mobility scale transformation of CE\-MS\(\/MS\) data

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/MobilityTransformR.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-mobilitytransformr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilitytransformr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-mobilitytransformr/meta.yaml>`_

   MobilityTransformR collects a tool set for effective mobility scale transformation of CE\-MS\/MS data in order to increase reproducibility. It provides functionality to determine the migration times from mobility markers that have been added to the analysis and performs the transformation based on these markers. MobilityTransformR supports the conversion of numeric vectors\, Spectra\-objects\, and MSnOnDiskExp.


.. conda:package:: bioconductor-mobilitytransformr

   |downloads_bioconductor-mobilitytransformr| |docker_bioconductor-mobilitytransformr|

   :versions:
      
      

      ``1.2.0-0``

      

   
   :depends bioconductor-metabocoreutils: ``>=1.6.0,<1.7.0``
   :depends bioconductor-msnbase: ``>=2.24.0,<2.25.0``
   :depends bioconductor-spectra: ``>=1.8.0,<1.9.0``
   :depends bioconductor-xcms: ``>=3.20.0,<3.21.0``
   :depends r-base: ``>=4.2,<4.3.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-mobilitytransformr

   and update with::

      conda update bioconductor-mobilitytransformr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-mobilitytransformr:<tag>

   (see `bioconductor-mobilitytransformr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-mobilitytransformr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-mobilitytransformr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-mobilitytransformr
   :alt:   (downloads)
.. |docker_bioconductor-mobilitytransformr| image:: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr
.. _`bioconductor-mobilitytransformr/tags`: https://quay.io/repository/biocontainers/bioconductor-mobilitytransformr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-mobilitytransformr";
        var versions = ["1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-mobilitytransformr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-mobilitytransformr/README.html