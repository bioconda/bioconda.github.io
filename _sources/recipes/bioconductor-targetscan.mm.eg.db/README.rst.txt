:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetscan.mm.eg.db'
.. highlight: bash

bioconductor-targetscan.mm.eg.db
================================

.. conda:recipe:: bioconductor-targetscan.mm.eg.db
   :replaces_section_title:
   :noindex:

   TargetScan miRNA target predictions for mouse

   :homepage: https://bioconductor.org/packages/3.14/data/annotation/html/targetscan.Mm.eg.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-targetscan.mm.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.mm.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.mm.eg.db/meta.yaml>`_

   TargetScan miRNA target predictions for mouse assembled using data from the TargetScan website. TargetScan predicts biological targets of miRNAs by searching for the presence of conserved 8mer and 7mer sites that match the seed region of each miRNA. Also identified are sites with mismatches in the seed region that are compensated by conserved 3\' pairing. In mammals\, predictions are ranked based on the predicted efficacy of targeting as calculated using the context scores of the sites.


.. conda:package:: bioconductor-targetscan.mm.eg.db

   |downloads_bioconductor-targetscan.mm.eg.db| |docker_bioconductor-targetscan.mm.eg.db|

   :versions:
      
      

      ``0.6.1-9``,  ``0.6.1-8``,  ``0.6.1-7``,  ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-2``,  ``0.6.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.56.0,<1.57.0``
   :depends curl: ``>=7.83.1,<8.0a0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetscan.mm.eg.db

   and update with::

      conda update bioconductor-targetscan.mm.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetscan.mm.eg.db:<tag>

   (see `bioconductor-targetscan.mm.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetscan.mm.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscan.mm.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetscan.mm.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-targetscan.mm.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-targetscan.mm.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscan.mm.eg.db
.. _`bioconductor-targetscan.mm.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-targetscan.mm.eg.db?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetscan.mm.eg.db";
        var versions = ["0.6.1","0.6.1","0.6.1","0.6.1","0.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscan.mm.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscan.mm.eg.db/README.html