.. title:: Package Recipe 'bioconductor-sigcheck'
.. highlight: bash


bioconductor-sigcheck
=====================

.. conda:recipe:: bioconductor-sigcheck
   :replaces_section_title:

   While gene signatures are frequently used to predict phenotypes \(e.g. predict prognosis of cancer patients\)\, it it not always clear how optimal or meaningful they are \(cf David Venet\, Jacques E. Dumont\, and Vincent Detours\' paper \"Most Random Gene Expression Signatures Are Significantly Associated with Breast Cancer Outcome\"\). Based on suggestions in that paper\, SigCheck accepts a data set \(as an ExpressionSet\) and a gene signature\, and compares its performance on survival and\/or classification tasks against a\) random gene signatures of the same length\; b\) known\, related and unrelated gene signatures\; and c\) permuted data and\/or metadata.

   :homepage: https://bioconductor.org/packages/3.8/bioc/html/SigCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sigcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigcheck/meta.yaml>`_

   


.. conda:package:: bioconductor-sigcheck

   |downloads_bioconductor-sigcheck| |docker_bioconductor-sigcheck|

   :versions: 2.14.0

   :depends: :conda:package:`bioconductor-biobase` >=2.42.0,<2.43.0 :conda:package:`bioconductor-biocparallel` >=1.16.0,<1.17.0 :conda:package:`bioconductor-mlinterfaces` >=1.62.0,<1.63.0 :conda:package:`r-base` >=3.5.1,<3.5.2.0a0 :conda:package:`r-e1071`  :conda:package:`r-survival`  

   :required~by: |required_by_bioconductor-sigcheck|

   .. rubric:: Installation

   With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

      conda install bioconductor-sigcheck

   and update with::

      conda update bioconductor-sigcheck

   or use the docker container::

      docker pull quay.io/repository/biocontainers/bioconductor-sigcheck


.. |required_by_bioconductor-sigcheck| conda:required_by:: bioconductor-sigcheck
.. |downloads_bioconductor-sigcheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigcheck.svg?style=flat
   :alt:   (downloads)
.. |docker_bioconductor-sigcheck| image:: https://quay.io/repository/biocontainers/bioconductor-sigcheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigcheck







Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html

