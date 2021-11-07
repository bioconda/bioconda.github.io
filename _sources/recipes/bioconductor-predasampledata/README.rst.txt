:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-predasampledata'
.. highlight: bash

bioconductor-predasampledata
============================

.. conda:recipe:: bioconductor-predasampledata
   :replaces_section_title:
   :noindex:

   expression and copy number data on clear cell renal carcinoma samples

   :homepage: https://bioconductor.org/packages/3.13/data/experiment/html/PREDAsampledata.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-predasampledata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-predasampledata/meta.yaml>`_

   Sample data for PREDA package. \(annotations objects synchronized with GeneAnnot custom CDFs version 2.2.0\)


.. conda:package:: bioconductor-predasampledata

   |downloads_bioconductor-predasampledata| |docker_bioconductor-predasampledata|

   :versions:
      
      

      ``0.34.0-0``,  ``0.32.0-0``,  ``0.30.0-1``,  ``0.30.0-0``,  ``0.28.0-0``,  ``0.26.0-0``,  ``0.24.0-1``,  ``0.22.0-0``

      

   
   :depends bioconductor-affy: ``>=1.72.0,<1.73.0``
   :depends bioconductor-annotate: ``>=1.72.0,<1.73.0``
   :depends bioconductor-biobase: ``>=2.54.0,<2.55.0``
   :depends bioconductor-preda: ``>=1.40.0,<1.41.0``
   :depends curl: ``>=7.79.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-predasampledata

   and update with::

      conda update bioconductor-predasampledata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-predasampledata:<tag>

   (see `bioconductor-predasampledata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-predasampledata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-predasampledata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-predasampledata
   :alt:   (downloads)
.. |docker_bioconductor-predasampledata| image:: https://quay.io/repository/biocontainers/bioconductor-predasampledata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-predasampledata
.. _`bioconductor-predasampledata/tags`: https://quay.io/repository/biocontainers/bioconductor-predasampledata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-predasampledata";
        var versions = ["0.34.0","0.32.0","0.30.0","0.30.0","0.28.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-predasampledata/README.html