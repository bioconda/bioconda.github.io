:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-alignmentbasedquantstatistics'
.. highlight: bash

proteomiqon-alignmentbasedquantstatistics
=========================================

.. conda:recipe:: proteomiqon-alignmentbasedquantstatistics
   :replaces_section_title:
   :noindex:

   The tool ProteomIQon.AlignmentBasedQuantStatistics scores peptide ion quantifications obtained through alignment between runs.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/AlignmentBasedQuantStatistics.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-alignmentbasedquantstatistics <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantstatistics>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-alignmentbasedquantstatistics/meta.yaml>`_

   MS\-based shotgun proteomics estimates protein abundances using a proxy\: peptides. 
   Due to the acquisition method for MS2\, not every peptide ion present can be identified in every run. One approach to mitigate this problem is to 
   align information obtained from similar runs to the current run\, therefore getting more quantifications. This tool scores the quantifications 
   obtained through alignment based on peak and run properties to obtain a measurement of reliability for the alignments.



.. conda:package:: proteomiqon-alignmentbasedquantstatistics

   |downloads_proteomiqon-alignmentbasedquantstatistics| |docker_proteomiqon-alignmentbasedquantstatistics|

   :versions:
      
      

      ``0.0.3-0``,  ``0.0.1-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-alignmentbasedquantstatistics

   and update with::

      conda update proteomiqon-alignmentbasedquantstatistics

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-alignmentbasedquantstatistics:<tag>

   (see `proteomiqon-alignmentbasedquantstatistics/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-alignmentbasedquantstatistics| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-alignmentbasedquantstatistics.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-alignmentbasedquantstatistics
   :alt:   (downloads)
.. |docker_proteomiqon-alignmentbasedquantstatistics| image:: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantstatistics/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantstatistics
.. _`proteomiqon-alignmentbasedquantstatistics/tags`: https://quay.io/repository/biocontainers/proteomiqon-alignmentbasedquantstatistics?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-alignmentbasedquantstatistics";
        var versions = ["0.0.3","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantstatistics/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-alignmentbasedquantstatistics/README.html