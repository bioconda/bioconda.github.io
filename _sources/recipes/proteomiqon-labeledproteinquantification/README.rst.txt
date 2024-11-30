:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-labeledproteinquantification'
.. highlight: bash

proteomiqon-labeledproteinquantification
========================================

.. conda:recipe:: proteomiqon-labeledproteinquantification
   :replaces_section_title:
   :noindex:

   The tool LabeledProteinQuantification combines the results from ProteomIQon ProteinInference and ProteomIQon PSMBasedQuantification

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/LabeledProteinQuantification.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-labeledproteinquantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-labeledproteinquantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-labeledproteinquantification/meta.yaml>`_

   After quantification and protein inference are performed\, it is known which peptide originated from which protein\, as well as the intensity of each peptide. 
   The information available for each peptide now needs to be aggragated for their proteins. This tool performs the aggregation from the peptides to the protein in several steps. 
   The first step for the labeled protein quantification is the aggregation of the differently labeled peptides. Peptides with the same sequence\, modifications and
   charge are aggregated and the ratio between the intensity from the light and heavy version is calculated. 
   The next two aggregation steps are optional. One of them is the aggregation based on charge state. Similarily to the first step\, peptides with the same sequence 
   and modifications\, but different charge states are being aggregated. 
   The next optional step does the same for peptides with the same sequence\, but different modification. Those steps build upon each other. 
   The last step is the aggregation of all peptides of a protein. 
   The result of each aggregation step is given as a tab separated file. The aggregation is performed according to the given parameters for each step. 
   If an optional aggregation is not performed\, the next step takes the result from the prior aggregation. 
   For example\, if aggregation by charge and modification are skipped\, the protein aggregation gets a collection of peptides\, where a peptidesequence can occur 
   with different charge states and midifications.



.. conda:package:: proteomiqon-labeledproteinquantification

   |downloads_proteomiqon-labeledproteinquantification| |docker_proteomiqon-labeledproteinquantification|

   :versions:
      
      

      ``0.0.3-1``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install proteomiqon-labeledproteinquantification

   and update with::

      mamba update proteomiqon-labeledproteinquantification

  To create a new environment, run::

      mamba create --name myenvname proteomiqon-labeledproteinquantification

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-labeledproteinquantification:<tag>

   (see `proteomiqon-labeledproteinquantification/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-labeledproteinquantification| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-labeledproteinquantification.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-labeledproteinquantification
   :alt:   (downloads)
.. |docker_proteomiqon-labeledproteinquantification| image:: https://quay.io/repository/biocontainers/proteomiqon-labeledproteinquantification/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-labeledproteinquantification
.. _`proteomiqon-labeledproteinquantification/tags`: https://quay.io/repository/biocontainers/proteomiqon-labeledproteinquantification?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-labeledproteinquantification";
        var versions = ["0.0.3","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-labeledproteinquantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-labeledproteinquantification/README.html