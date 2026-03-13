:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-speaq'
.. highlight: bash

r-speaq
=======

.. conda:recipe:: r-speaq
   :replaces_section_title:
   :noindex:

   Makes Nuclear Magnetic Resonance spectroscopy \(NMR spectroscopy\) data analysis as easy as possible by only requiring a small set of functions to perform an entire analysis. \'speaq\' offers the possibility of raw spectra alignment and quantitation but also an analysis based on features whereby the spectra are converted to peaks which are then grouped and turned into features. These features can be processed with any number of statistical tools either included in \'speaq\' or available elsewhere on CRAN. More detail can be found in Vu et al. \(2011\) \<doi\:10.1186\/1471\-2105\-12\-405\> and Beirnaert et al. \(2018\) \<doi\:10.1371\/journal.pcbi.1006018\>. 

   :homepage: https://CRAN.R-project.org/package=speaq
   :license: APACHE / Apache-2.0
   :recipe: /`r-speaq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-speaq/meta.yaml>`_

   


.. conda:package:: r-speaq

   |downloads_r-speaq| |docker_r-speaq|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2.7.0-4</code>,  <code>2.7.0-3</code>,  <code>2.7.0-2</code>,  <code>2.7.0-1</code>,  <code>2.7.0-0</code>,  <code>2.6.1-3</code>,  <code>2.6.1-2</code>,  <code>2.6.1-1</code>,  <code>2.6.1-0</code>,  </span></summary>
      

      ``2.7.0-4``,  ``2.7.0-3``,  ``2.7.0-2``,  ``2.7.0-1``,  ``2.7.0-0``,  ``2.6.1-3``,  ``2.6.1-2``,  ``2.6.1-1``,  ``2.6.1-0``,  ``2.6.0-0``,  ``2.3.3-1``,  ``2.3.3-0``,  ``2.1.0-0``,  ``1.2.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bioconductor-impute: 
   :depends on bioconductor-massspecwavelet: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-cluster: 
   :depends on r-data.table: 
   :depends on r-dosnow: 
   :depends on r-foreach: 
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-missforest: 
   :depends on r-reshape2: 
   :depends on r-rfast: 
   :depends on r-rvest: 
   :depends on r-xml2: 

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

    pixi global install r-speaq

to add into an existing workspace instead, run::

    pixi add r-speaq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-speaq

Alternatively, to install into a new environment, run::

    conda create -n envname r-speaq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-speaq:<tag>

(see `r-speaq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-speaq| image:: https://img.shields.io/conda/dn/bioconda/r-speaq.svg?style=flat
   :target: https://anaconda.org/bioconda/r-speaq
   :alt:   (downloads)
.. |docker_r-speaq| image:: https://quay.io/repository/biocontainers/r-speaq/status
   :target: https://quay.io/repository/biocontainers/r-speaq
.. _`r-speaq/tags`: https://quay.io/repository/biocontainers/r-speaq?tab=tags


.. raw:: html

    <script>
        var package = "r-speaq";
        var versions = ["2.7.0","2.7.0","2.7.0","2.7.0","2.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-speaq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-speaq/README.html