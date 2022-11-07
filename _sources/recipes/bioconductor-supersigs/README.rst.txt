:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-supersigs'
.. highlight: bash

bioconductor-supersigs
======================

.. conda:recipe:: bioconductor-supersigs
   :replaces_section_title:
   :noindex:

   Supervised mutational signatures

   :homepage: https://bioconductor.org/packages/3.14/bioc/html/supersigs.html
   :license: GPL-3
   :recipe: /`bioconductor-supersigs <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-supersigs>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-supersigs/meta.yaml>`_

   Generate SuperSigs \(supervised mutational signatures\) from single nucleotide variants in the cancer genome. Functions included in the package allow the user to learn supervised mutational signatures from their data and apply them to new data. The methodology is based on the one described in Afsari \(2021\, ELife\).


.. conda:package:: bioconductor-supersigs

   |downloads_bioconductor-supersigs| |docker_bioconductor-supersigs|

   :versions:
      
      

      ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-biostrings: ``>=2.66.0,<2.67.0``
   :depends bioconductor-summarizedexperiment: ``>=1.28.0,<1.29.0``
   :depends r-assertthat: 
   :depends r-base: ``>=4.2,<4.3.0a0``
   :depends r-caret: 
   :depends r-dplyr: 
   :depends r-rlang: 
   :depends r-rsample: 
   :depends r-tidyr: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-supersigs

   and update with::

      conda update bioconductor-supersigs

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-supersigs:<tag>

   (see `bioconductor-supersigs/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-supersigs| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-supersigs.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-supersigs
   :alt:   (downloads)
.. |docker_bioconductor-supersigs| image:: https://quay.io/repository/biocontainers/bioconductor-supersigs/status
   :target: https://quay.io/repository/biocontainers/bioconductor-supersigs
.. _`bioconductor-supersigs/tags`: https://quay.io/repository/biocontainers/bioconductor-supersigs?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-supersigs";
        var versions = ["1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-supersigs/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-supersigs/README.html