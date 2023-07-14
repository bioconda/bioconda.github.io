:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-tartare'
.. highlight: bash

bioconductor-tartare
====================

.. conda:recipe:: bioconductor-tartare
   :replaces_section_title:
   :noindex:

   Raw ground spectra recorded on Thermo Fisher Scientific mass spectrometers

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/tartare.html
   :license: GPL-3
   :recipe: /`bioconductor-tartare <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tartare>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-tartare/meta.yaml>`_

   Provides raw files recorded on different Liquid Chromatography Mass Spectrometry \(LC\-MS\) instruments. All included MS instruments are manufactured by Thermo Fisher Scientific and belong to the Orbitrap Tribrid or Q Exactive Orbitrap family of instruments. Despite their common origin and shared hardware components \,e.g.\, Orbitrap mass analyser\, the above instruments tend to write data in different \"dialects\" in a shared binary file format \(.raw\). The intention behind tartare is to provide complex but slim real\-world files that can be used to make code robust with respect to this diversity. In other words\, it is intended for enhanced unit testing. The package is considered to be used with the rawrr package and the Spectra MsBackends.


.. conda:package:: bioconductor-tartare

   |downloads_bioconductor-tartare| |docker_bioconductor-tartare|

   :versions:
      
      

      ``1.14.0-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.0-0``,  ``0.99.14-1``

      

   
   :depends bioconductor-annotationhub: ``>=3.8.0,<3.9.0``
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-tartare

   and update with::

      conda update bioconductor-tartare

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-tartare:<tag>

   (see `bioconductor-tartare/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-tartare| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-tartare.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-tartare
   :alt:   (downloads)
.. |docker_bioconductor-tartare| image:: https://quay.io/repository/biocontainers/bioconductor-tartare/status
   :target: https://quay.io/repository/biocontainers/bioconductor-tartare
.. _`bioconductor-tartare/tags`: https://quay.io/repository/biocontainers/bioconductor-tartare?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-tartare";
        var versions = ["1.14.0","1.12.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-tartare/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-tartare/README.html