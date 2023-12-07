:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetdecoy'
.. highlight: bash

bioconductor-targetdecoy
========================

.. conda:recipe:: bioconductor-targetdecoy
   :replaces_section_title:
   :noindex:

   Diagnostic Plots to Evaluate the Target Decoy Approach

   :homepage: https://bioconductor.org/packages/3.17/bioc/html/TargetDecoy.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-targetdecoy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetdecoy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetdecoy/meta.yaml>`_

   A first step in the data analysis of Mass Spectrometry \(MS\) based proteomics data is to identify peptides and proteins. With this respect the huge number of experimental mass spectra typically have to be assigned to theoretical peptides derived from a sequence database. Search engines are used for this purpose. These tools compare each of the observed spectra to all candidate theoretical spectra derived from the sequence data base and calculate a score for each comparison. The observed spectrum is then assigned to the theoretical peptide with the best score\, which is also referred to as the peptide to spectrum match \(PSM\). It is of course crucial for the downstream analysis to evaluate the quality of these matches. Therefore False Discovery Rate \(FDR\) control is used to return a reliable list PSMs. The FDR\, however\, requires a good characterisation of the score distribution of PSMs that are matched to the wrong peptide \(bad target hits\). In proteomics\, the target decoy approach \(TDA\) is typically used for this purpose. The TDA method matches the spectra to a database of real \(targets\) and nonsense peptides \(decoys\). A popular approach to generate these decoys is to reverse the target database. Hence\, all the PSMs that match to a decoy are known to be bad hits and the distribution of their scores are used to estimate the distribution of the bad scoring target PSMs. A crucial assumption of the TDA is that the decoy PSM hits have similar properties as bad target hits so that the decoy PSM scores are a good simulation of the target PSM scores. Users\, however\, typically do not evaluate these assumptions. To this end we developed TargetDecoy to generate diagnostic plots to evaluate the quality of the target decoy method.


.. conda:package:: bioconductor-targetdecoy

   |downloads_bioconductor-targetdecoy| |docker_bioconductor-targetdecoy|

   :versions:
      
      

      ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends bioconductor-mzid: ``>=1.40.0,<1.41.0``
   :depends bioconductor-mzr: ``>=2.36.0,<2.37.0``
   :depends r-base: ``>=4.3,<4.4.0a0``
   :depends r-ggplot2: 
   :depends r-ggpubr: 
   :depends r-miniui: 
   :depends r-shiny: 
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

      mamba install bioconductor-targetdecoy

   and update with::

      mamba update bioconductor-targetdecoy

  To create a new environment, run::

      mamba create --name myenvname bioconductor-targetdecoy

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-targetdecoy:<tag>

   (see `bioconductor-targetdecoy/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-targetdecoy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetdecoy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetdecoy
   :alt:   (downloads)
.. |docker_bioconductor-targetdecoy| image:: https://quay.io/repository/biocontainers/bioconductor-targetdecoy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetdecoy
.. _`bioconductor-targetdecoy/tags`: https://quay.io/repository/biocontainers/bioconductor-targetdecoy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetdecoy";
        var versions = ["1.8.0","1.6.0","1.4.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-targetdecoy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-targetdecoy/README.html