.. title:: Package Recipe 'bioconductor-uniquorn'
.. highlight: bash


bioconductor-uniquorn
=====================

.. conda:recipe:: bioconductor-uniquorn
   :replaces_section_title:

   This packages enables users to identify cancer cell lines. Cancer cell line misidentification and cross\-contamination reprents a significant challenge for cancer researchers. The identification is vital and in the frame of this package based on the locations\/ loci of somatic and germline mutations\/ variations. The input format is vcf\/ vcf.gz and the files have to contain a single cancer cell line sample \(i.e. a single member\/genotype\/gt column in the vcf file\). The implemented method is optimized for the Next\-generation whole exome and whole genome DNA\-sequencing technology. RNA\-seq data is very likely to work as well but hasn\'t been rigiously tested yet. Panel\-seq will require manual adjustment of thresholds

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/Uniquorn.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-uniquorn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniquorn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-uniquorn/meta.yaml>`_
   :links: biotools: :biotools:`uniquorn`, doi: :doi:`10.18632/oncotarget.16110`

   


.. conda:package:: bioconductor-uniquorn

   |downloads_bioconductor-uniquorn| |docker_bioconductor-uniquorn|

   :versions: 2.2.0, 2.0.0, 1.6.0

   :depends: :conda:package:`bioconductor-genomicranges` >=1.34.0,<1.35.0 :conda:package:`bioconductor-iranges` >=2.16.0,<2.17.0 :conda:package:`bioconductor-variantannotation` >=1.28.0,<1.29.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-data.table`  :conda:package:`r-doparallel`  :conda:package:`r-foreach`  :conda:package:`r-r.utils`  :conda:package:`r-stringr`  :conda:package:`r-writexls`  

   :required~by: |required_by_bioconductor-uniquorn|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-uniquorn

   and update with::

      conda update bioconductor-uniquorn

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-uniquorn


.. |required_by_bioconductor-uniquorn| conda:required_by:: bioconductor-uniquorn
.. |downloads_bioconductor-uniquorn| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-uniquorn.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-uniquorn| image:: https://quay.io/repository/biocontainers/bioconductor-uniquorn/status
   :target: https://quay.io/repository/biocontainers/bioconductor-uniquorn







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-uniquorn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-uniquorn/README.html

