:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'selam'
.. highlight: bash

selam
=====

.. conda:recipe:: selam
   :replaces_section_title:
   :noindex:

   Simulation of Epistasis Local adaptation\, with Ancestry and Mate choice

   :homepage: https://github.com/russcd/SELAM/
   :license: GPL3
   :recipe: /`selam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/selam/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btw365`

   SELAM \(Simulation of Epistasis\, Local adaptation with Admixture and Mate
   choice\) is a forward time population genetic simulation for studying
   admixture between ancestral subpopulations. This program tracks local
   ancestry along chromosomes. SELAM supports complex demography
   scenarios\, including changes in population sizes\, migration rates\, and
   arbitrary numbers of subpopulations. This program can also accommodate
   sophisticated selective regimes\, including dominance\, epistasis\, local
   adaptation\, and mate choice.



.. conda:package:: selam

   |downloads_selam| |docker_selam|

   :versions:
      
      

      

      

   
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install selam

   and update with::

      conda update selam

   or use the docker container::

      docker pull quay.io/biocontainers/selam:<tag>

   (see `selam/tags`_ for valid values for ``<tag>``)


.. |downloads_selam| image:: https://img.shields.io/conda/dn/bioconda/selam.svg?style=flat
   :target: https://anaconda.org/bioconda/selam
   :alt:   (downloads)
.. |docker_selam| image:: https://quay.io/repository/biocontainers/selam/status
   :target: https://quay.io/repository/biocontainers/selam
.. _`selam/tags`: https://quay.io/repository/biocontainers/selam?tab=tags


.. raw:: html

    <script>
        var package = "selam";
        var versions = [];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/selam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/selam/README.html