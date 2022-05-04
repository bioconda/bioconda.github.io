:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'proteomiqon-labelfreeproteinquantification'
.. highlight: bash

proteomiqon-labelfreeproteinquantification
==========================================

.. conda:recipe:: proteomiqon-labelfreeproteinquantification
   :replaces_section_title:
   :noindex:

   The tool LabelFreeProteinQuantification estimates protein abundances using quantified peptide ions.

   :homepage: https://csbiology.github.io/ProteomIQon/
   :documentation: https://csbiology.github.io/ProteomIQon/tools/LabelFreeProteinQuantification.html
   
   :developer docs: https://github.com/CSBiology/ProteomIQon
   :license: MIT
   :recipe: /`proteomiqon-labelfreeproteinquantification <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-labelfreeproteinquantification>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/proteomiqon-labelfreeproteinquantification/meta.yaml>`_

   After quantification and protein inference are performed\, it is known which peptide originated from which protein\, as well as the intensity of each peptide. 
   The information available for each peptide now needs to be aggragated for their proteins.
   This tool performs the aggregation from the peptides to the protein in several steps. The first two aggregation steps are optional. One of them is the 
   aggregation based on charge state. Peptides with the same sequence and modifications\, but different charge states are being aggregated. The next optional step 
   does the same for peptides with the same sequence\, but different modifications. Those steps build upon each other. The last step is the aggregation of all 
   peptides of a protein. The result of each aggregation step is given as a tab separated file. The aggregation is performed according to the given parameters for 
   each step. If an optional aggregation is not performed\, the next step takes the result from the prior aggregation. For example\, if aggregation by charge and 
   modification are skipped\, the protein aggregation is performed on previously unaggregated peptides\, where a peptidesequence can occur with different charge 
   states and modifications.



.. conda:package:: proteomiqon-labelfreeproteinquantification

   |downloads_proteomiqon-labelfreeproteinquantification| |docker_proteomiqon-labelfreeproteinquantification|

   :versions:
      
      

      ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends dotnet-runtime: ``5.0.*``
   :depends openssl: ``1.1.*``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install proteomiqon-labelfreeproteinquantification

   and update with::

      conda update proteomiqon-labelfreeproteinquantification

   or use the docker container::

      docker pull quay.io/biocontainers/proteomiqon-labelfreeproteinquantification:<tag>

   (see `proteomiqon-labelfreeproteinquantification/tags`_ for valid values for ``<tag>``)


.. |downloads_proteomiqon-labelfreeproteinquantification| image:: https://img.shields.io/conda/dn/bioconda/proteomiqon-labelfreeproteinquantification.svg?style=flat
   :target: https://anaconda.org/bioconda/proteomiqon-labelfreeproteinquantification
   :alt:   (downloads)
.. |docker_proteomiqon-labelfreeproteinquantification| image:: https://quay.io/repository/biocontainers/proteomiqon-labelfreeproteinquantification/status
   :target: https://quay.io/repository/biocontainers/proteomiqon-labelfreeproteinquantification
.. _`proteomiqon-labelfreeproteinquantification/tags`: https://quay.io/repository/biocontainers/proteomiqon-labelfreeproteinquantification?tab=tags


.. raw:: html

    <script>
        var package = "proteomiqon-labelfreeproteinquantification";
        var versions = ["0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/proteomiqon-labelfreeproteinquantification/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/proteomiqon-labelfreeproteinquantification/README.html