:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fegenie'
.. highlight: bash

fegenie
=======

.. conda:recipe:: fegenie
   :replaces_section_title:
   :noindex:

   HMM\-based identification and categorization of iron genes and iron gene operons in genomes and metagenomes.

   :homepage: https://github.com/Arkadiy-Garber/FeGenie
   :license: AGPL / AGPL-3.0
   :recipe: /`fegenie <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fegenie>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fegenie/meta.yaml>`_
   :links: doi: :doi:`10.3389/fmicb.2020.00037`

   


.. conda:package:: fegenie

   |downloads_fegenie| |docker_fegenie|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.2-5</code>,  <code>1.2-4</code>,  <code>1.2-3</code>,  <code>1.2-2</code>,  <code>1.2-1</code>,  <code>1.2-0</code>,  <code>1.1-2</code>,  <code>1.1-1</code>,  <code>1.1-0</code>,  </span></summary>
      

      ``1.2-5``,  ``1.2-4``,  ``1.2-3``,  ``1.2-2``,  ``1.2-1``,  ``1.2-0``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``,  ``1.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blast: 
   :depends on diamond: 
   :depends on hmmer: 
   :depends on metabat2: 
   :depends on prodigal: 
   :depends on python: ``>=3.7``
   :depends on r-argparse: 
   :depends on r-base: ``4.0.*``
   :depends on r-broom: 
   :depends on r-ggdendro: 
   :depends on r-ggplot2: 
   :depends on r-ggpubr: 
   :depends on r-gridbase: 
   :depends on r-pvclust: 
   :depends on r-reshape: 
   :depends on r-reshape2: 
   :depends on r-stringi: 
   :depends on r-tidyverse: 

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

    pixi global install fegenie

to add into an existing workspace instead, run::

    pixi add fegenie

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fegenie

Alternatively, to install into a new environment, run::

    conda create -n envname fegenie

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fegenie:<tag>

(see `fegenie/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fegenie| image:: https://img.shields.io/conda/dn/bioconda/fegenie.svg?style=flat
   :target: https://anaconda.org/bioconda/fegenie
   :alt:   (downloads)
.. |docker_fegenie| image:: https://quay.io/repository/biocontainers/fegenie/status
   :target: https://quay.io/repository/biocontainers/fegenie
.. _`fegenie/tags`: https://quay.io/repository/biocontainers/fegenie?tab=tags


.. raw:: html

    <script>
        var package = "fegenie";
        var versions = ["1.2","1.2","1.2","1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fegenie/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fegenie/README.html