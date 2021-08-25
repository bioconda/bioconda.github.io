:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hilbertcurve'
.. highlight: bash

bioconductor-hilbertcurve
=========================

.. conda:recipe:: bioconductor-hilbertcurve
   :replaces_section_title:
   :noindex:

   Making 2D Hilbert Curve

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/HilbertCurve.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hilbertcurve <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertcurve>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hilbertcurve/meta.yaml>`_

   Hilbert curve is a type of space\-filling curves that fold one dimensional axis into a two dimensional space\, but with still preserves the locality. This package aims to provide an easy and flexible way to visualize data through Hilbert curve.


.. conda:package:: bioconductor-hilbertcurve

   |downloads_bioconductor-hilbertcurve| |docker_bioconductor-hilbertcurve|

   :versions:
      
      

      ``1.22.0-0``,  ``1.20.0-1``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-0``,  ``1.14.0-1``,  ``1.12.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-hilbertvis: ``>=1.50.0,<1.51.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: ``>=0.3.3``
   :depends r-png: 
   :depends r-polylabelr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-hilbertcurve

   and update with::

      conda update bioconductor-hilbertcurve

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-hilbertcurve:<tag>

   (see `bioconductor-hilbertcurve/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-hilbertcurve| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hilbertcurve.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hilbertcurve
   :alt:   (downloads)
.. |docker_bioconductor-hilbertcurve| image:: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve
.. _`bioconductor-hilbertcurve/tags`: https://quay.io/repository/biocontainers/bioconductor-hilbertcurve?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hilbertcurve";
        var versions = ["1.22.0","1.20.0","1.20.0","1.18.0","1.16.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hilbertcurve/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hilbertcurve/README.html