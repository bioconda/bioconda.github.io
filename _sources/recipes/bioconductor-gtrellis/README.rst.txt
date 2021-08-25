:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-gtrellis'
.. highlight: bash

bioconductor-gtrellis
=====================

.. conda:recipe:: bioconductor-gtrellis
   :replaces_section_title:
   :noindex:

   Genome Level Trellis Layout

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/gtrellis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-gtrellis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gtrellis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-gtrellis/meta.yaml>`_
   :links: biotools: :biotools:`gtrellis`

   Genome level Trellis graph visualizes genomic data conditioned by genomic categories \(e.g. chromosomes\). For each genomic category\, multiple dimensional data which are represented as tracks describe different features from different aspects. This package provides high flexibility to arrange genomic categories and to add self\-defined graphics in the plot.


.. conda:package:: bioconductor-gtrellis

   |downloads_bioconductor-gtrellis| |docker_bioconductor-gtrellis|

   :versions:
      
      

      ``1.24.0-0``,  ``1.22.0-1``,  ``1.22.0-0``,  ``1.20.0-0``,  ``1.18.0-0``,  ``1.16.0-1``,  ``1.14.0-0``,  ``1.12.1-0``,  ``1.11.1-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.44.0,<1.45.0``
   :depends bioconductor-iranges: ``>=2.26.0,<2.27.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-circlize: ``>=0.4.8``
   :depends r-getoptlong: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-gtrellis

   and update with::

      conda update bioconductor-gtrellis

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-gtrellis:<tag>

   (see `bioconductor-gtrellis/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-gtrellis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-gtrellis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-gtrellis
   :alt:   (downloads)
.. |docker_bioconductor-gtrellis| image:: https://quay.io/repository/biocontainers/bioconductor-gtrellis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-gtrellis
.. _`bioconductor-gtrellis/tags`: https://quay.io/repository/biocontainers/bioconductor-gtrellis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-gtrellis";
        var versions = ["1.24.0","1.22.0","1.22.0","1.20.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-gtrellis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-gtrellis/README.html