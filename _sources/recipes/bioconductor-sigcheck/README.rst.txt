:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-sigcheck'
.. highlight: bash

bioconductor-sigcheck
=====================

.. conda:recipe:: bioconductor-sigcheck
   :replaces_section_title:
   :noindex:

   Check a gene signature\'s prognostic performance against random signatures\, known signatures\, and permuted data\/metadata

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/SigCheck.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-sigcheck <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigcheck>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-sigcheck/meta.yaml>`_

   While gene signatures are frequently used to predict phenotypes \(e.g. predict prognosis of cancer patients\)\, it it not always clear how optimal or meaningful they are \(cf David Venet\, Jacques E. Dumont\, and Vincent Detours\' paper \"Most Random Gene Expression Signatures Are Significantly Associated with Breast Cancer Outcome\"\). Based on suggestions in that paper\, SigCheck accepts a data set \(as an ExpressionSet\) and a gene signature\, and compares its performance on survival and\/or classification tasks against a\) random gene signatures of the same length\; b\) known\, related and unrelated gene signatures\; and c\) permuted data and\/or metadata.


.. conda:package:: bioconductor-sigcheck

   |downloads_bioconductor-sigcheck| |docker_bioconductor-sigcheck|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.34.0-0</code>,  <code>2.32.0-0</code>,  <code>2.30.0-0</code>,  <code>2.26.0-0</code>,  <code>2.24.0-0</code>,  <code>2.22.0-1</code>,  <code>2.22.0-0</code>,  <code>2.20.0-0</code>,  <code>2.18.0-0</code>,  </span></summary>
      

      ``2.34.0-0``,  ``2.32.0-0``,  ``2.30.0-0``,  ``2.26.0-0``,  ``2.24.0-0``,  ``2.22.0-1``,  ``2.22.0-0``,  ``2.20.0-0``,  ``2.18.0-0``,  ``2.16.0-1``,  ``2.14.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends bioconductor-biobase: ``>=2.62.0,<2.63.0``
   :depends bioconductor-biocparallel: ``>=1.36.0,<1.37.0``
   :depends bioconductor-mlinterfaces: ``>=1.82.0,<1.83.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-e1071: 
   :depends r-survival: 
   :requirements:

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-sigcheck

   and update with::

      mamba update bioconductor-sigcheck

  To create a new environment, run::

      mamba create --name myenvname bioconductor-sigcheck

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-sigcheck:<tag>

   (see `bioconductor-sigcheck/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-sigcheck| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-sigcheck.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-sigcheck
   :alt:   (downloads)
.. |docker_bioconductor-sigcheck| image:: https://quay.io/repository/biocontainers/bioconductor-sigcheck/status
   :target: https://quay.io/repository/biocontainers/bioconductor-sigcheck
.. _`bioconductor-sigcheck/tags`: https://quay.io/repository/biocontainers/bioconductor-sigcheck?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-sigcheck";
        var versions = ["2.34.0","2.32.0","2.30.0","2.26.0","2.24.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-sigcheck/README.html