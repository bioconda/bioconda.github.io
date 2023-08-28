:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-joinquantpepionswithproteins'
.. highlight: bash

proteomiqon-joinquantpepionswithproteins
========================================

.. conda:recipe:: proteomiqon-joinquantpepionswithproteins
   :replaces_section_title:
   :noindex:

   The tool JoinQuantPepIonsWithProteins combines results from ProteinInference and PSMBasedQuantification.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/JoinQuantPepIonsWithProteins.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-joinquantpepionswithproteins <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-joinquantpepionswithproteins>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-joinquantpepionswithproteins/meta.yaml>`_

   Results from PSMBasedQuantification contain detailed information about the quantification of every peptide\, but only basic informations about the protein they 
   originated from. This information is obtained during the ProteinInference. This tool takes the results from both tools and combines the quantification information 
   of each peptide with the more accurate information about the corresponding protein including its q\-value.



.. conda:package:: proteomiqon-joinquantpepionswithproteins

   |downloads_proteomiqon-joinquantpepionswithproteins| |docker_proteomiqon-joinquantpepionswithproteins|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
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

      mamba install proteomiqon-joinquantpepionswithproteins

   and update with::

      mamba update proteomiqon-joinquantpepionswithproteins

  To create a new environment, run::

      mamba create --name myenvname proteomiqon-joinquantpepionswithproteins

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-joinquantpepionswithproteins:<tag>

   (see `proteomiqon-joinquantpepionswithproteins/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-joinquantpepionswithproteins| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-joinquantpepionswithproteins.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-joinquantpepionswithproteins
   :alt:   (downloads)
.. |docker_proteomiqon-joinquantpepionswithproteins| image:: https://quay.io/repository/biocontainers/proteomiqon-joinquantpepionswithproteins/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-joinquantpepionswithproteins
.. _`proteomiqon-joinquantpepionswithproteins/tags`: https://quay.io/repository/biocontainers/proteomiqon-joinquantpepionswithproteins?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-joinquantpepionswithproteins";
        var versions = ["0.0.2","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-joinquantpepionswithproteins/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-joinquantpepionswithproteins/README.html