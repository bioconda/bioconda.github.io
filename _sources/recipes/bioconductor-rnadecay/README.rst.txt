:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-rnadecay'
.. highlight: bash

bioconductor-rnadecay
=====================

.. conda:recipe:: bioconductor-rnadecay
   :replaces_section_title:
   :noindex:

   Maximum Likelihood Decay Modeling of RNA Degradation Data

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/RNAdecay.html
   :license: GPL-2
   :recipe: /`bioconductor-rnadecay <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnadecay>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-rnadecay/meta.yaml>`_

   RNA degradation is monitored through measurement of RNA abundance after inhibiting RNA synthesis. This package has functions and example scripts to facilitate \(1\) data normalization\, \(2\) data modeling using constant decay rate or time\-dependent decay rate models\, \(3\) the evaluation of treatment or genotype effects\, and \(4\) plotting of the data and models. Data Normalization\: functions and scripts make easy the normalization to the initial \(T0\) RNA abundance\, as well as a method to correct for artificial inflation of Reads per Million \(RPM\) abundance in global assessments as the total size of the RNA pool decreases. Modeling\: Normalized data is then modeled using maximum likelihood to fit parameters. For making treatment or genotype comparisons \(up to four\)\, the modeling step models all possible treatment effects on each gene by repeating the modeling with constraints on the model parameters \(i.e.\, the decay rate of treatments A and B are modeled once with them being equal and again allowing them to both vary independently\). Model Selection\: The AICc value is calculated for each model\, and the model with the lowest AICc is chosen. Modeling results of selected models are then compiled into a single data frame. Graphical Plotting\: functions are provided to easily visualize decay data model\, or half\-life distributions using ggplot2 package functions.


.. conda:package:: bioconductor-rnadecay

   |downloads_bioconductor-rnadecay| |docker_bioconductor-rnadecay|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.26.0-0</code>,  <code>1.19.0-0</code>,  <code>1.18.0-2</code>,  <code>1.18.0-1</code>,  <code>1.18.0-0</code>,  <code>1.14.0-2</code>,  <code>1.14.0-1</code>,  <code>1.14.0-0</code>,  <code>1.12.0-0</code>,  </span></summary>
      

      ``1.26.0-0``,  ``1.19.0-0``,  ``1.18.0-2``,  ``1.18.0-1``,  ``1.18.0-0``,  ``1.14.0-2``,  ``1.14.0-1``,  ``1.14.0-0``,  ``1.12.0-0``,  ``1.10.0-1``,  ``1.10.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.2.1-0``,  ``1.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends libblas: ``>=3.9.0,<4.0a0``
   :depends libcxx: ``>=18``
   :depends liblapack: ``>=3.9.0,<4.0a0``
   :depends r-base: ``>=4.4,<4.5.0a0``
   :depends r-ggplot2: 
   :depends r-gplots: 
   :depends r-nloptr: 
   :depends r-scales: 
   :depends r-tmb: 
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

      mamba install bioconductor-rnadecay

   and update with::

      mamba update bioconductor-rnadecay

  To create a new environment, run::

      mamba create --name myenvname bioconductor-rnadecay

  with ``myenvname`` being a reasonable name for the environment
  (see e.g. the `mamba docs <https://mamba.readthedocs.io>`_ for details and further options).

  Alternatively, use the docker container::

      docker pull quay.io/biocontainers/bioconductor-rnadecay:<tag>

   (see `bioconductor-rnadecay/tags`_ for valid values for ``<tag>``)


.. |downloads_bioconductor-rnadecay| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-rnadecay.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-rnadecay
   :alt:   (downloads)
.. |docker_bioconductor-rnadecay| image:: https://quay.io/repository/biocontainers/bioconductor-rnadecay/status
   :target: https://quay.io/repository/biocontainers/bioconductor-rnadecay
.. _`bioconductor-rnadecay/tags`: https://quay.io/repository/biocontainers/bioconductor-rnadecay?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-rnadecay";
        var versions = ["1.26.0","1.19.0","1.18.0","1.18.0","1.18.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-rnadecay/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-rnadecay/README.html