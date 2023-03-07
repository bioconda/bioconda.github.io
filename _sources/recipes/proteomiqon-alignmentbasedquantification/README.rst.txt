:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-alignmentbasedquantification'
.. highlight: bash

proteomiqon-alignmentbasedquantification
========================================

.. conda:recipe:: proteomiqon-alignmentbasedquantification
   :replaces_section_title:
   :noindex:

   Given an MS run in the mzLite or mzml format and a list of a list of peptides deduced by alignment\, this tool iterates accross all and performs an XIC extration and quantification in similar to the PSMbasedQuantification tool.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/AlignmentBasedQuantification.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-alignmentbasedquantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantification/meta.yaml>`_

   Given an MS run in the mzLite or mzml format and a list of a list of peptides deduced by alignment.\, this tool iterates accross all and performs an XIC extration and quantification in similar to the PSMbasedQuantification tool. 
   One of the drawbacks of data\-dependent acquisition is the stochastic nature of peptide ion selection for MSMS fragmentation as a prerequisite for peptide identification and quantification. A way to overcome this drawback is the transfer of identified ions from one run to another using the assumption that the run is merely lacking a successful MSMS scan\, but still containing the peptide itself. 
   For each peptide ion the tools uses the scan time prediction derived using the quant based alignment tool to extract a XIC. To refine the derived scan time estimate\, we then locally align the extracted XIC to the XIC of the aligned peptide using dynamic time warping. 
   Using this scan time estimate\, we use wavelet based peak detection techniques to identify all peaks present in the XIC and select the most probable peak as our target for quantification. Using parameter estimation techniques we subsequently use peak fitting to fit a set of two gaussian models to the detected peak\, from whom the one with the better fit is selected. This allows us not only to report how well the signal fitted to the theoretical expected peak shape but also to obtain accurate estimates for the peak area\, our estimator for peptide ion abundance.



.. conda:package:: proteomiqon-alignmentbasedquantification

   |downloads_proteomiqon-alignmentbasedquantification| |docker_proteomiqon-alignmentbasedquantification|

   :versions:
      
      

      ``0.0.2-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-alignmentbasedquantification

   and update with::

      conda update proteomiqon-alignmentbasedquantification

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-alignmentbasedquantification:<tag>

   (see `proteomiqon-alignmentbasedquantification/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-alignmentbasedquantification| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-alignmentbasedquantification.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-alignmentbasedquantification
   :alt:   (downloads)
.. |docker_proteomiqon-alignmentbasedquantification| image:: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantification/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantification
.. _`proteomiqon-alignmentbasedquantification/tags`: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantification?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-alignmentbasedquantification";
        var versions = ["0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantification/README.html