:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-leebamviews'
.. highlight: bash

bioconductor-leebamviews
========================

.. conda:recipe:: bioconductor-leebamviews
   :replaces_section_title:
   :noindex:

   leeBamViews \-\- multiple yeast RNAseq samples excerpted from Lee 2009

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/leeBamViews.html
   :license: Artistic 2.0
   :recipe: /`bioconductor-leebamviews <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leebamviews>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-leebamviews/meta.yaml>`_

   data from PMID 19096707\; prototype for managing multiple NGS samples


.. conda:package:: bioconductor-leebamviews

   |downloads_bioconductor-leebamviews| |docker_bioconductor-leebamviews|

   :versions:
      
      

      ``1.30.0-0``,  ``1.28.0-0``,  ``1.26.0-1``,  ``1.26.0-0``,  ``1.24.0-0``,  ``1.22.0-0``,  ``1.20.0-1``,  ``1.18.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-bsgenome: ``>=1.62.0,<1.63.0``
   :depends bioconductor-genomicalignments: ``>=1.30.0,<1.31.0``
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-rsamtools: ``>=2.10.0,<2.11.0``
   :depends bioconductor-s4vectors: ``>=0.32.0,<0.33.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-leebamviews

   and update with::

      conda update bioconductor-leebamviews

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-leebamviews:<tag>

   (see `bioconductor-leebamviews/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-leebamviews| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-leebamviews.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-leebamviews
   :alt:   (downloads)
.. |docker_bioconductor-leebamviews| image:: https://quay.io/repository/biocontainers/bioconductor-leebamviews/status
   :target: https://quay.io/repository/biocontainers/bioconductor-leebamviews
.. _`bioconductor-leebamviews/tags`: https://quay.io/repository/biocontainers/bioconductor-leebamviews?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-leebamviews";
        var versions = ["1.30.0","1.28.0","1.26.0","1.26.0","1.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-leebamviews/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-leebamviews/README.html