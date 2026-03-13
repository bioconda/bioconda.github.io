:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hpip'
.. highlight: bash

bioconductor-hpip
=================

.. conda:recipe:: bioconductor-hpip
   :replaces_section_title:
   :noindex:

   Host\-Pathogen Interaction Prediction

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HPiP.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hpip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hpip/meta.yaml>`_

   HPiP \(Host\-Pathogen Interaction Prediction\) uses an ensemble learning algorithm for prediction of host\-pathogen protein\-protein interactions \(HP\-PPIs\) using structural and physicochemical descriptors computed from amino acid\-composition of host and pathogen proteins.The proposed package can effectively address data shortages and data unavailability for HP\-PPI network reconstructions. Moreover\, establishing computational frameworks in that regard will reveal mechanistic insights into infectious diseases and suggest potential HP\-PPI targets\, thus narrowing down the range of possible candidates for subsequent wet\-lab experimental validations.


.. conda:package:: bioconductor-hpip

   |downloads_bioconductor-hpip| |docker_bioconductor-hpip|

   :versions:
      
      

      ``1.16.1-0``,  ``1.12.0-0``,  ``1.8.0-1``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-caret: 
   :depends on r-corrplot: 
   :depends on r-dplyr: ``>=1.0.6``
   :depends on r-ggplot2: 
   :depends on r-httr: ``>=1.4.2``
   :depends on r-igraph: 
   :depends on r-magrittr: 
   :depends on r-mcl: 
   :depends on r-proc: 
   :depends on r-protr: 
   :depends on r-prroc: 
   :depends on r-purrr: 
   :depends on r-readr: 
   :depends on r-stringr: 
   :depends on r-tibble: 
   :depends on r-tidyr: 

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

    pixi global install bioconductor-hpip

to add into an existing workspace instead, run::

    pixi add bioconductor-hpip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hpip

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hpip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hpip:<tag>

(see `bioconductor-hpip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hpip| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hpip.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hpip
   :alt:   (downloads)
.. |docker_bioconductor-hpip| image:: https://quay.io/repository/biocontainers/bioconductor-hpip/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hpip
.. _`bioconductor-hpip/tags`: https://quay.io/repository/biocontainers/bioconductor-hpip?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hpip";
        var versions = ["1.16.1","1.12.0","1.8.0","1.8.0","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hpip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hpip/README.html