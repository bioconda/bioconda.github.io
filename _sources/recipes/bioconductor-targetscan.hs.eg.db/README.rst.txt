:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetscan.hs.eg.db'
.. highlight: bash

bioconductor-targetscan.hs.eg.db
================================

.. conda:recipe:: bioconductor-targetscan.hs.eg.db
   :replaces_section_title:
   :noindex:

   TargetScan miRNA target predictions for human

   :homepage: https://bioconductor.org/packages/3.12/data/annotation/html/targetscan.Hs.eg.db.html
   :license: file LICENSE
   :recipe: /`bioconductor-targetscan.hs.eg.db <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.hs.eg.db>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetscan.hs.eg.db/meta.yaml>`_

   TargetScan miRNA target predictions for human assembled using data from the TargetScan website. TargetScan predicts biological targets of miRNAs by searching for the presence of conserved 8mer and 7mer sites that match the seed region of each miRNA. Also identified are sites with mismatches in the seed region that are compensated by conserved 3\' pairing. In mammals\, predictions are ranked based on the predicted efficacy of targeting as calculated using the context scores of the sites.


.. conda:package:: bioconductor-targetscan.hs.eg.db

   |downloads_bioconductor-targetscan.hs.eg.db| |docker_bioconductor-targetscan.hs.eg.db|

   :versions:
      
      

      ``0.6.1-6``,  ``0.6.1-5``,  ``0.6.1-4``,  ``0.6.1-3``,  ``0.6.1-1``,  ``0.6.1-0``

      

   
   :depends bioconductor-annotationdbi: ``>=1.52.0,<1.53.0``
   :depends curl: ``>=7.71.1,<8.0a0``
   :depends r-base: ``>=4.0,<4.1.0a0``
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-targetscan.hs.eg.db

   and update with::

      conda update bioconductor-targetscan.hs.eg.db

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetscan.hs.eg.db:<tag>

   (see `bioconductor-targetscan.hs.eg.db/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetscan.hs.eg.db| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetscan.hs.eg.db.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetscan.hs.eg.db
   :alt:   (downloads)
.. |docker_bioconductor-targetscan.hs.eg.db| image:: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db
.. _`bioconductor-targetscan.hs.eg.db/tags`: https://quay.io/repository/biocontainers/bioconductor-targetscan.hs.eg.db?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetscan.hs.eg.db/README.html