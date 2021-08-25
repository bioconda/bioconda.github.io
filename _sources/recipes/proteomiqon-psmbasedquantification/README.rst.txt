:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-psmbasedquantification'
.. highlight: bash

proteomiqon-psmbasedquantification
==================================

.. conda:recipe:: proteomiqon-psmbasedquantification
   :replaces_section_title:
   :noindex:

   The quantification tool was designed to allow label\-free quantification as well as quantification of full metabolic labeled samples.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/PSMBasedQuantification.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-psmbasedquantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-psmbasedquantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-psmbasedquantification/meta.yaml>`_

   Given an MS run in the mzLite or mzml format and a list of fdr controlled peptide spectrum matches\, this tool iterates accross all identified MS\/MS scans and groups them by
   the assigned peptide ion. The scan times of each MS\/MS spectrum are then weighted according to the quality of each match to build an reliable estimator for the scan time of
   the peptide ion in question. This scan time estimator\, combined with the monoisotopic m\/z\, is then used to extract an ion chromatogram. Using wavelet based peak detection 
   techniques we identify all peaks present in the XIC and select the most probable peak our target for quantification. Using parameter estimation techniques we subsequently 
   use peak fitting to fit a set of two gaussian models to the detected peak\, from whom the one with the better fit is selected. This allows us not only to report how well 
   the signal fitted to the theoretical expected peak shape but also to obtain accurate estimates for the peak area\, our estimator for peptide ion abundance.
   The quantification tool was designed to allow label\-free quantification as well as quantification of full metabolic labeled samples. For this we use the known identity 
   of one of the the peptide ions and calculate the m\/z of the unobserved differentially labeled counterpart to extract and quantify the corresponding XIC.



.. conda:package:: proteomiqon-psmbasedquantification

   |downloads_proteomiqon-psmbasedquantification| |docker_proteomiqon-psmbasedquantification|

   :versions:
      
      

      ``0.0.7-0``,  ``0.0.5-0``,  ``0.0.4-0``

      

   
   :depends dotnet-runtime: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-psmbasedquantification

   and update with::

      conda update proteomiqon-psmbasedquantification

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-psmbasedquantification:<tag>

   (see `proteomiqon-psmbasedquantification/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-psmbasedquantification| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-psmbasedquantification.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-psmbasedquantification
   :alt:   (downloads)
.. |docker_proteomiqon-psmbasedquantification| image:: https://quay.io/repository/biocontainers/proteomiqon-psmbasedquantification/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-psmbasedquantification
.. _`proteomiqon-psmbasedquantification/tags`: https://quay.io/repository/biocontainers/proteomiqon-psmbasedquantification?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-psmbasedquantification";
        var versions = ["0.0.7","0.0.5","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-psmbasedquantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-psmbasedquantification/README.html