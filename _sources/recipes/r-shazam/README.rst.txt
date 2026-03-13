:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-shazam'
.. highlight: bash

r-shazam
========

.. conda:recipe:: r-shazam
   :replaces_section_title:
   :noindex:

   Provides a computational framework for analyzing mutations in immunoglobulin \(Ig\) sequences. Includes methods for Bayesian estimation of antigen\-driven selection pressure\, mutational load quantification\, building of somatic hypermutation \(SHM\) models\, and model\-dependent distance calculations. Also includes empirically derived models of SHM for both mice and humans. Citations\: Gupta and Vander Heiden\, et al \(2015\) \<doi\:10.1093\/bioinformatics\/btv359\>\, Yaari\, et al \(2012\) \<doi\:10.1093\/nar\/gks457\>\, Yaari\, et al \(2013\) \<doi\:10.3389\/fimmu.2013.00358\>\, Cui\, et al \(2016\) \<doi\:10.4049\/jimmunol.1502263\>.

   :homepage: http://shazam.readthedocs.io
   :license: AGPL / AGPL-3
   :recipe: /`r-shazam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shazam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-shazam/meta.yaml>`_

   


.. conda:package:: r-shazam

   |downloads_r-shazam| |docker_r-shazam|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.1.2-1</code>,  <code>1.1.2-0</code>,  <code>1.1.0-0</code>,  <code>0.2.3-1</code>,  <code>0.2.3-0</code>,  <code>0.2.2-0</code>,  <code>0.2.1-1</code>,  <code>0.2.1-0</code>,  <code>0.1.11-0</code>,  </span></summary>
      

      ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.0-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.2.1-1``,  ``0.2.1-0``,  ``0.1.11-0``,  ``0.1.10-1``,  ``0.1.10-0``,  ``0.1.9-2``

      
      .. raw:: html

         </details>
      

   
   :depends on r-alakazam: ``>=1.1.0``
   :depends on r-ape: 
   :depends on r-base: ``>=4.2,<4.3.0a0``
   :depends on r-diptest: 
   :depends on r-doparallel: 
   :depends on r-dplyr: ``>=0.8.1``
   :depends on r-foreach: 
   :depends on r-ggplot2: ``>=3.3.4``
   :depends on r-igraph: 
   :depends on r-iterators: 
   :depends on r-kedd: 
   :depends on r-kernsmooth: 
   :depends on r-lazyeval: 
   :depends on r-mass: 
   :depends on r-progress: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-seqinr: 
   :depends on r-stringi: ``>=1.1.3``
   :depends on r-tidyr: 
   :depends on r-tidyselect: 

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

    pixi global install r-shazam

to add into an existing workspace instead, run::

    pixi add r-shazam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-shazam

Alternatively, to install into a new environment, run::

    conda create -n envname r-shazam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-shazam:<tag>

(see `r-shazam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-shazam| image:: https://img.shields.io/conda/dn/bioconda/r-shazam.svg?style=flat
   :target: https://anaconda.org/bioconda/r-shazam
   :alt:   (downloads)
.. |docker_r-shazam| image:: https://quay.io/repository/biocontainers/r-shazam/status
   :target: https://quay.io/repository/biocontainers/r-shazam
.. _`r-shazam/tags`: https://quay.io/repository/biocontainers/r-shazam?tab=tags


.. raw:: html

    <script>
        var package = "r-shazam";
        var versions = ["1.1.2","1.1.2","1.1.0","0.2.3","0.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-shazam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-shazam/README.html