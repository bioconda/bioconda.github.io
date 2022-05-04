:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-psmstatistics'
.. highlight: bash

proteomiqon-psmstatistics
=========================

.. conda:recipe:: proteomiqon-psmstatistics
   :replaces_section_title:
   :noindex:

   The PSMStatistics tool utilizes semi supervised machine learning techniques to integrate search engine scores as well as the mentioned quality scores into one single consensus score.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/PSMStatistics.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-psmstatistics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-psmstatistics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-psmstatistics/meta.yaml>`_

   To measure the similarity of in silico generated spectra and measured MS\/MS scans we use our own implementations of three established search enginge scores\: 
   SEQUEST\, Andromeda and XTandem. Additionally\, we also record quality control parameters such as the mass difference between the precursor ion and the theoretically 
   calulated mass or the uniquness of each score in comparison to \'competing\' peptides within the search space. The PSMStatistics tool utilizes semi supervised machine 
   learning techniques to integrate search engine scores as well as the mentioned quality scores into one single consensus score.
   Since the search space is extended by so called decoys \- reversed counterparts of peptides within the search space \- we can estimate the distribution of \'true negatives\' and 
   calculate local \(PEP values\) and global \(Q values\) false discovery rates at each consensus score. The reported peptides at user defined local and global FDR cutoffs can then
   be used as inputs for any downstream analysis be it ProteinInference or PSMBasedQuantification.



.. conda:package:: proteomiqon-psmstatistics

   |downloads_proteomiqon-psmstatistics| |docker_proteomiqon-psmstatistics|

   :versions:
      
      

      ``0.0.7-1``,  ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-psmstatistics

   and update with::

      conda update proteomiqon-psmstatistics

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-psmstatistics:<tag>

   (see `proteomiqon-psmstatistics/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-psmstatistics| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-psmstatistics.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-psmstatistics
   :alt:   (downloads)
.. |docker_proteomiqon-psmstatistics| image:: https://quay.io/repository/biocontainers/proteomiqon-psmstatistics/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-psmstatistics
.. _`proteomiqon-psmstatistics/tags`: https://quay.io/repository/biocontainers/proteomiqon-psmstatistics?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-psmstatistics";
        var versions = ["0.0.7","0.0.7","0.0.6","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-psmstatistics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-psmstatistics/README.html