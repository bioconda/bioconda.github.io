:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigcheck'
.. highlight: bash

bioconductor-sigcheck
=====================

.. conda:recipe:: bioconductor-sigcheck
   :replaces_section_title:
   :noindex:

   Check a gene signature\'s prognostic performance against random signatures\, known signatures\, and permuted data\/metadata

   :homepage: https://bioconductor.org/packages/3.13/bioc/html/SigCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sigcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigcheck/meta.yaml>`_

   While gene signatures are frequently used to predict phenotypes \(e.g. predict prognosis of cancer patients\)\, it it not always clear how optimal or meaningful they are \(cf David Venet\, Jacques E. Dumont\, and Vincent Detours\' paper \"Most Random Gene Expression Signatures Are Significantly Associated with Breast Cancer Outcome\"\). Based on suggestions in that paper\, SigCheck accepts a data set \(as an ExpressionSet\) and a gene signature\, and compares its performance on survival and\/or classification tasks against a\) random gene signatures of the same length\; b\) known\, related and unrelated gene signatures\; and c\) permuted data and\/or metadata.


.. conda:package:: bioconductor-sigcheck

   |downloads_bioconductor-sigcheck| |docker_bioconductor-sigcheck|

   :versions:
      
      

      ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      

   
   :depends bioconductor-biobase: ``>=2.52.0,<2.53.0``
   :depends bioconductor-biocparallel: ``>=1.26.0,<1.27.0``
   :depends bioconductor-mlinterfaces: ``>=1.72.0,<1.73.0``
   :depends r-base: ``>=4.1,<4.2.0a0``
   :depends r-e1071: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigcheck

   and update with::

      conda update bioconductor-sigcheck

   or use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigcheck:<tag>

   (see `bioconductor-sigcheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigcheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigcheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigcheck
   :alt:   (downloads)
.. |docker_bioconductor-sigcheck| image:: https://quay.io/repository/biocontainers/bioconductor-sigcheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigcheck
.. _`bioconductor-sigcheck/tags`: https://quay.io/repository/biocontainers/bioconductor-sigcheck?tab=tags







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html