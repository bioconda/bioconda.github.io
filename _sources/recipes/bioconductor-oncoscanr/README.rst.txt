:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-oncoscanr'
.. highlight: bash

bioconductor-oncoscanr
======================

.. conda:recipe:: bioconductor-oncoscanr
   :replaces_section_title:
   :noindex:

   Secondary analyses of CNV data \(HRD and more\)

   :homepage: https://bioconductor.org/packages/3.16/bioc/html/oncoscanR.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-oncoscanr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscanr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-oncoscanr/meta.yaml>`_

   The software uses the copy number segments from a text file and identifies all chromosome arms that are globally altered and computes various genome\-wide scores. The following HRD scores \(characteristic of BRCA\-mutated cancers\) are included\: LST\, HR\-LOH\, nLST and gLOH. the package is tailored for the ThermoFisher Oncoscan assay analyzed with their Chromosome Alteration Suite \(ChAS\) but can be adapted to any input.


.. conda:package:: bioconductor-oncoscanr

   |downloads_bioconductor-oncoscanr| |docker_bioconductor-oncoscanr|

   :versions:
      
      

      ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-genomicranges: ``>=1.52.0,<1.53.0``
   :depends bioconductor-iranges: ``>=2.34.0,<2.35.0``
   :depends bioconductor-s4vectors: ``>=0.38.0,<0.39.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-magrittr: 
   :depends r-readr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-oncoscanr

   and update with::

      conda update bioconductor-oncoscanr

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-oncoscanr:<tag>

   (see `bioconductor-oncoscanr/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-oncoscanr| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-oncoscanr.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-oncoscanr
   :alt:   (downloads)
.. |docker_bioconductor-oncoscanr| image:: https://quay.io/repository/biocontainers/bioconductor-oncoscanr/status
   :target: https://quay.io/repository/biocontainers/bioconductor-oncoscanr
.. _`bioconductor-oncoscanr/tags`: https://quay.io/repository/biocontainers/bioconductor-oncoscanr?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-oncoscanr";
        var versions = ["1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-oncoscanr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-oncoscanr/README.html