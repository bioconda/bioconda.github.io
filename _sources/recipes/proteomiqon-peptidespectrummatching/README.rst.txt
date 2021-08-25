:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-peptidespectrummatching'
.. highlight: bash

proteomiqon-peptidespectrummatching
===================================

.. conda:recipe:: proteomiqon-peptidespectrummatching
   :replaces_section_title:
   :noindex:

   Given raw an MS run in the mzLite format\, this tool iterates across all MS\/MS scans\, determines precursor charge states and possible peptide spectrum matches using reimplementations of SEQUEST\, Andromeda and XTandem.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/PeptideSpectrumMatching.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-peptidespectrummatching <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-peptidespectrummatching>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-peptidespectrummatching/meta.yaml>`_

   Given raw a MS run in the mzLite or mzml format\, this tool iterates accross all recorded MS\/MS scans and determines the charge state of precursor 
   ions which were selected for fragmentation. With this it is possible to query the peptide data base for every precursor ion mass \+\/\- a
   tolerance \(which defines the so called \'search space\'\) and retrieve peptides that are theoretical candidates for a match. For each of the peptide
   candidates we create an theoretical spectrum in silico and compare it to the measured MS\/MS scan.



.. conda:package:: proteomiqon-peptidespectrummatching

   |downloads_proteomiqon-peptidespectrummatching| |docker_proteomiqon-peptidespectrummatching|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.6-0``,  ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends dotnet-runtime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-peptidespectrummatching

   and update with::

      conda update proteomiqon-peptidespectrummatching

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-peptidespectrummatching:<tag>

   (see `proteomiqon-peptidespectrummatching/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-peptidespectrummatching| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-peptidespectrummatching.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-peptidespectrummatching
   :alt:   (downloads)
.. |docker_proteomiqon-peptidespectrummatching| image:: https://quay.io/repository/biocontainers/proteomiqon-peptidespectrummatching/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-peptidespectrummatching
.. _`proteomiqon-peptidespectrummatching/tags`: https://quay.io/repository/biocontainers/proteomiqon-peptidespectrummatching?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-peptidespectrummatching";
        var versions = ["0.0.7","0.0.6","0.0.5","0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-peptidespectrummatching/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-peptidespectrummatching/README.html