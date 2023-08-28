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

  You need a conda-compatible package manager
  (currently either `micrpmamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install proteomiqon-alignmentbasedquantstatistics

   and update with::

      mamba update proteomiqon-alignmentbasedquantstatistics

  To create a new environment, run::

      mamba create --name myenvname proteomiqon-alignmentbasedquantstatistics

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

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