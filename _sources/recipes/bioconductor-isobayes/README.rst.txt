:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-isobayes'
.. highlight: bash

bioconductor-isobayes
=====================

.. conda:recipe:: bioconductor-isobayes
   :replaces_section_title:
   :noindex:

   IsoBayes\: Single Isoform protein inference Method via Bayesian Analyses

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/IsoBayes.html
   :license: GPL-3
   :recipe: /`bioconductor-isobayes <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isobayes>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-isobayes/meta.yaml>`_

   IsoBayes is a Bayesian method to perform inference on single protein isoforms. Our approach infers the presence\/absence of protein isoforms\, and also estimates their abundance\; additionally\, it provides a measure of the uncertainty of these estimates\, via\: i\) the posterior probability that a protein isoform is present in the sample\; ii\) a posterior credible interval of its abundance. IsoBayes inputs liquid cromatography mass spectrometry \(MS\) data\, and can work with both PSM counts\, and intensities. When available\, trascript isoform abundances \(i.e.\, TPMs\) are also incorporated\: TPMs are used to formulate an informative prior for the respective protein isoform relative abundance. We further identify isoforms where the relative abundance of proteins and transcripts significantly differ. We use a two\-layer latent variable approach to model two sources of uncertainty typical of MS data\: i\) peptides may be erroneously detected \(even when absent\)\; ii\) many peptides are compatible with multiple protein isoforms. In the first layer\, we sample the presence\/absence of each peptide based on its estimated probability of being mistakenly detected\, also known as PEP \(i.e.\, posterior error probability\). In the second layer\, for peptides that were estimated as being present\, we allocate their abundance across the protein isoforms they map to. These two steps allow us to recover the presence and abundance of each protein isoform.


.. conda:package:: bioconductor-isobayes

   |downloads_bioconductor-isobayes| |docker_bioconductor-isobayes|

   :versions:
      
      

      ``1.4.0-0``,  ``1.0.1-0``

      

   
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0``
   :depends bioconductor-s4vectors: ``>=0.44.0,<0.45.0a0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0``
   :depends bioconductor-summarizedexperiment: ``>=1.36.0,<1.37.0a0``
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libgcc: ``>=13``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends libstdcxx: ``>=13``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-data.table: 
   :depends r-doparallel: 
   :depends r-dorng: 
   :depends r-foreach: 
   :depends r-ggplot2: 
   :depends r-glue: 
   :depends r-hdinterval: 
   :depends r-iterators: 
   :depends r-rcpp: 
   :depends r-rcpparmadillo: 
   :requirements:

   :additional platforms:
      

   .. rubric:: Installation

  You need a conda-compatible package manager
  (currently either `micromamba <https://mamba.readthedocs.io>`_, `mamba <https://mamba.readthedocs.io>`_, or `conda <https://docs.conda.io/projects/conda>`_)
  and the Bioconda channel already activated (see :ref:`set-up-channels`).

  While any of above package managers is fine, it is currently recommended to use either
  micromamba or mamba (see `here <https://mamba.readthedocs.io>`_ for installation instructions).
  We will show all commands using mamba below, but the arguments are the same for the two
  others.

  Given that you already have a conda environment in which you want to have this package, install with::

      mamba install bioconductor-isobayes

   and update with::

      mamba update bioconductor-isobayes

  To create a new environment, run::

      mamba create --name myenvname bioconductor-isobayes

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-isobayes:<tag>

   (see `bioconductor-isobayes/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-isobayes| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-isobayes.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-isobayes
   :alt:   (downloads)
.. |docker_bioconductor-isobayes| image:: https://quay.io/repository/biocontainers/bioconductor-isobayes/status
   :target: https://quay.io/repository/biocontainers/bioconductor-isobayes
.. _`bioconductor-isobayes/tags`: https://quay.io/repository/biocontainers/bioconductor-isobayes?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-isobayes";
        var versions = ["1.4.0","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-isobayes/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-isobayes/README.html