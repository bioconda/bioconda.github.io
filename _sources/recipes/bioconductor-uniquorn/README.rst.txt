:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-uniquorn'
.. highlight: bash

bioconductor-uniquorn
=====================

.. conda:recipe:: bioconductor-uniquorn
   :replaces_section_title:
   :noindex:

   Identification of cancer cell lines based on their weighted mutational\/ variational fingerprint

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/Uniquorn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-uniquorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniquorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniquorn/meta.yaml>`_
   :links: biotools: :biotools:`uniquorn`, doi: :doi:`10.18632/oncotarget.16110`

   This packages enables users to identify cancer cell lines. Cancer cell line misidentification and cross\-contamination reprents a significant challenge for cancer researchers. The identification is vital and in the frame of this package based on the locations\/ loci of somatic and germline mutations\/ variations. The input format is vcf\/ vcf.gz and the files have to contain a single cancer cell line sample \(i.e. a single member\/genotype\/gt column in the vcf file\). The implemented method is optimized for the Next\-generation whole exome and whole genome DNA\-sequencing technology. RNA\-seq data is very likely to work as well but hasn\'t been rigiously tested yet. Panel\-seq will require manual adjustment of thresholds


.. conda:package:: bioconductor-uniquorn

   |downloads_bioconductor-uniquorn| |docker_bioconductor-uniquorn|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.14.0-0</code>,  <code>2.12.0-0</code>,  <code>2.10.0-1</code>,  <code>2.10.0-0</code>,  <code>2.8.0-0</code>,  <code>2.6.0-0</code>,  <code>2.4.0-1</code>,  <code>2.2.0-0</code>,  <code>2.0.0-0</code>,  </span></summary>
      

      ``2.14.0-0``,  ``2.12.0-0``,  ``2.10.0-1``,  ``2.10.0-0``,  ``2.8.0-0``,  ``2.6.0-0``,  ``2.4.0-1``,  ``2.2.0-0``,  ``2.0.0-0``,  ``1.6.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-genomicranges: ``>=1.46.0,<1.47.0``
   :depends bioconductor-iranges: ``>=2.28.0,<2.29.0``
   :depends bioconductor-variantannotation: ``>=1.40.0,<1.41.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-doparallel: 
   :depends r-foreach: 
   :depends r-r.utils: 
   :depends r-stringr: 
   :depends r-writexls: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-uniquorn

   and update with::

      conda update bioconductor-uniquorn

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-uniquorn:<tag>

   (see `bioconductor-uniquorn/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-uniquorn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uniquorn.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-uniquorn
   :alt:   (downloads)
.. |docker_bioconductor-uniquorn| image:: https://quay.io/repository/biocontainers/bioconductor-uniquorn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uniquorn
.. _`bioconductor-uniquorn/tags`: https://quay.io/repository/biocontainers/bioconductor-uniquorn?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-uniquorn";
        var versions = ["2.14.0","2.12.0","2.10.0","2.10.0","2.8.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uniquorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uniquorn/README.html