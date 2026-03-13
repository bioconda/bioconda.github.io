:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-targetdecoy'
.. highlight: bash

bioconductor-targetdecoy
========================

.. conda:recipe:: bioconductor-targetdecoy
   :replaces_section_title:
   :noindex:

   Diagnostic Plots to Evaluate the Target Decoy Approach

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/TargetDecoy.html
   :license: Artistic-2.0
   :recipe: /`bioconductor-targetdecoy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetdecoy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-targetdecoy/meta.yaml>`_

   A first step in the data analysis of Mass Spectrometry \(MS\) based proteomics data is to identify peptides and proteins. With this respect the huge number of experimental mass spectra typically have to be assigned to theoretical peptides derived from a sequence database. Search engines are used for this purpose. These tools compare each of the observed spectra to all candidate theoretical spectra derived from the sequence data base and calculate a score for each comparison. The observed spectrum is then assigned to the theoretical peptide with the best score\, which is also referred to as the peptide to spectrum match \(PSM\). It is of course crucial for the downstream analysis to evaluate the quality of these matches. Therefore False Discovery Rate \(FDR\) control is used to return a reliable list PSMs. The FDR\, however\, requires a good characterisation of the score distribution of PSMs that are matched to the wrong peptide \(bad target hits\). In proteomics\, the target decoy approach \(TDA\) is typically used for this purpose. The TDA method matches the spectra to a database of real \(targets\) and nonsense peptides \(decoys\). A popular approach to generate these decoys is to reverse the target database. Hence\, all the PSMs that match to a decoy are known to be bad hits and the distribution of their scores are used to estimate the distribution of the bad scoring target PSMs. A crucial assumption of the TDA is that the decoy PSM hits have similar properties as bad target hits so that the decoy PSM scores are a good simulation of the target PSM scores. Users\, however\, typically do not evaluate these assumptions. To this end we developed TargetDecoy to generate diagnostic plots to evaluate the quality of the target decoy method.


.. conda:package:: bioconductor-targetdecoy

   |downloads_bioconductor-targetdecoy| |docker_bioconductor-targetdecoy|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-mzid: ``>=1.48.0,<1.49.0``
   :depends on bioconductor-mzr: ``>=2.44.0,<2.45.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-miniui: 
   :depends on r-shiny: 

   :additional platforms:
      

Installation
------------

You need a conda-compatible package manager
(currently either `pixi <https://pixi.sh>`__, `conda <https://docs.conda.io/projects/conda>`__, or `micromamba <https://mamba.readthedocs.io>`__)
and the Bioconda channel already activated (see :ref:`bioconda_setup`).
Below, we show how to install with either pixi or conda (for micromamba and mamba, commands are essentially the same as with conda).

Pixi
""""

With pixi_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`),
to install globally, run::

    pixi global install bioconductor-targetdecoy

to add into an existing workspace instead, run::

    pixi add bioconductor-targetdecoy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-targetdecoy

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-targetdecoy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-targetdecoy:<tag>

(see `bioconductor-targetdecoy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-targetdecoy| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-targetdecoy.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-targetdecoy
   :alt:   (downloads)
.. |docker_bioconductor-targetdecoy| image:: https://quay.io/repository/biocontainers/bioconductor-targetdecoy/status
   :target: https://quay.io/repository/biocontainers/bioconductor-targetdecoy
.. _`bioconductor-targetdecoy/tags`: https://quay.io/repository/biocontainers/bioconductor-targetdecoy?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-targetdecoy";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
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