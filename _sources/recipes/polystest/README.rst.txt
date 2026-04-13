:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'polystest'
.. highlight: bash

polystest
=========

.. conda:recipe:: polystest
   :replaces_section_title:
   :noindex:

   Interactive tool for statistical testing\, data browsing and interactive visualization of quantitative omics data

   :homepage: https://bitbucket.org/veitveit/polystest/src/master/
   :license: GPL / GPL (>=2)
   :recipe: /`polystest <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polystest>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/polystest/meta.yaml>`_
   :links: biotools: :biotools:`polystest`, doi: :doi:`10.1074/mcp.RA119.001777`

   PolySTest is a web service \(shiny app\) and command\-line tool for statistical testing\, data browsing and interactive visualization of quantitative omics data. It contains multiple statistical tests and a new method to incorporate missing values. 



.. conda:package:: polystest

   |downloads_polystest| |docker_polystest|

   :versions:
      
      

      ``1.3.4-0``,  ``1.3.2-0``,  ``1.2.2-0``,  ``1.2-0``,  ``1.1-2``,  ``1.01-1``,  ``1.1-1``,  ``1.1-0``,  ``1.01-0``

      

   
   :depends on bioconductor-limma: 
   :depends on bioconductor-qvalue: 
   :depends on r-base: 
   :depends on r-circlize: 
   :depends on r-dt: 
   :depends on r-fdrtool: 
   :depends on r-gplots: 
   :depends on r-heatmaply: 
   :depends on r-knitr: 
   :depends on r-matrixstats: 
   :depends on r-readxl: 
   :depends on r-shiny: 
   :depends on r-shinybs: 
   :depends on r-shinydashboard: 
   :depends on r-upsetr: 
   :depends on r-yaml: 

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

    pixi global install polystest

to add into an existing workspace instead, run::

    pixi add polystest

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install polystest

Alternatively, to install into a new environment, run::

    conda create -n envname polystest

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/polystest:<tag>

(see `polystest/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_polystest| image:: https://img.shields.io/conda/dn/bioconda/polystest.svg?style=flat
   :target: https://anaconda.org/bioconda/polystest
   :alt:   (downloads)
.. |docker_polystest| image:: https://quay.io/repository/biocontainers/polystest/status
   :target: https://quay.io/repository/biocontainers/polystest
.. _`polystest/tags`: https://quay.io/repository/biocontainers/polystest?tab=tags


.. raw:: html

    <script>
        var package = "polystest";
        var versions = ["1.3.4","1.3.2","1.2.2","1.2","1.1"];
    </script>





Notes
-----
PolySTest is available as shiny app via run\_polystest\_app.R or as command\-line tool\: runPolySTestCLI.R



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/polystest/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/polystest/README.html