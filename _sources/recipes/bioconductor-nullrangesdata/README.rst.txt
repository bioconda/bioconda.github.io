:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-nullrangesdata'
.. highlight: bash

bioconductor-nullrangesdata
===========================

.. conda:recipe:: bioconductor-nullrangesdata
   :replaces_section_title:
   :noindex:

   ExperimentHub datasets for the nullranges package

   :homepage: https://bioconductor.org/packages/3.16/data/experiment/html/nullrangesData.html
   :license: GPL-3
   :recipe: /`bioconductor-nullrangesdata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nullrangesdata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-nullrangesdata/meta.yaml>`_

   Provides datasets for the nullranges package vignette\, in particular example datasets for DNase hypersensitivity sites \(DHS\)\, CTCF binding sites\, and CTCF genomic interactions. These are used to demonstrate generation of null hypothesis feature sets\, either through block bootstrapping or matching\, in the nullranges vignette.  For more details\, see the data object man pages\, and the R scripts for object construction provided within the package.


.. conda:package:: bioconductor-nullrangesdata

   |downloads_bioconductor-nullrangesdata| |docker_bioconductor-nullrangesdata|

   :versions:
      
      

      ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends bioconductor-data-packages: ``>=20230706``
   :depends bioconductor-experimenthub: ``>=2.8.0,<2.9.0``
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-interactionset: ``>=1.28.0,<1.29.0``
   :depends curl: 
   :depends r-base: ``>=4.3,<4.4.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-nullrangesdata

   and update with::

      conda update bioconductor-nullrangesdata

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-nullrangesdata:<tag>

   (see `bioconductor-nullrangesdata/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-nullrangesdata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-nullrangesdata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-nullrangesdata
   :alt:   (downloads)
.. |docker_bioconductor-nullrangesdata| image:: https://quay.io/repository/biocontainers/bioconductor-nullrangesdata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-nullrangesdata
.. _`bioconductor-nullrangesdata/tags`: https://quay.io/repository/biocontainers/bioconductor-nullrangesdata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-nullrangesdata";
        var versions = ["1.6.0","1.4.0","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-nullrangesdata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-nullrangesdata/README.html