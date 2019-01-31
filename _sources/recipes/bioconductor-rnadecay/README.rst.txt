.. _`bioconductor-rnadecay`:

bioconductor-rnadecay
=====================

|downloads|

RNA degradation is monitored through measurement of RNA abundance after inhibiting RNA synthesis. This package has functions and example scripts to facilitate \(1\) data normalization\, \(2\) data modeling using constant decay rate or time\-dependent decay rate models\, \(3\) the evaluation of treatment or genotype effects\, and \(4\) plotting of the data and models. Data Normalization\: functions and scripts make easy the normalization to the initial \(T0\) RNA abundance\, as well as a method to correct for artificial inflation of Reads per Million \(RPM\) abundance in global assessments as the total size of the RNA pool decreases. Modeling\: Normalized data is then modeled using maximum likelihood to fit parameters. For making treatment or genotype comparisons \(up to four\)\, the modeling step models all possible treatment effects on each gene by repeating the modeling with constraints on the model parameters \(i.e.\, the decay rate of treatments A and B are modeled once with them being equal and again allowing them to both vary independently\). Model Selection\: The AICc value is calculated for each model\, and the model with the lowest AICc is chosen. Modeling results of selected models are then compiled into a single data frame. Graphical Plotting\: a function is provided to easily visualize the data and the selected model using ggplot2 package functions.

============= ===========
Home          https://bioconductor.org/packages/3.8/bioc/html/RNAdecay.html
Versions      
License       GPL-2
Recipe        https://github.com/bioconda/bioconda-recipes/tree/master/recipes//bioconductor-rnadecay/meta.yaml



============= ===========



Installation
------------

.. highlight: bash

With an activated Bioconda channel (see :ref:`set-up-channels`), install with::

   conda install bioconductor-rnadecay

and update with::

   conda update bioconductor-rnadecay



|docker|

A Docker container is available at https://quay.io/repository/biocontainers/bioconductor-rnadecay.

Link to this page
-----------------

Render an |badge| badge with the following Markdown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square)](http://bioconda.github.io/recipes/bioconductor-rnadecay/README.html)

.. |badge| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat-square
           :target: http://bioconda.github.io/recipes/bioconductor-rnadecay/README.html
.. |downloads| image:: https://anaconda.org/bioconda/bioconductor-rnadecay/badges/downloads.svg
               :target: https://anaconda.org/bioconda/bioconductor-rnadecay
.. |docker| image:: https://quay.io/repository/biocontainers/bioconductor-rnadecay/status
                :target: https://quay.io/repository/biocontainers/bioconductor-rnadecay

