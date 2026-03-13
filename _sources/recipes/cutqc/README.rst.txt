:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cutqc'
.. highlight: bash

cutqc
=====

.. conda:recipe:: cutqc
   :replaces_section_title:
   :noindex:

   generate aggregated fastqc report of both before and after trimming.

   :homepage: https://github.com/obenno/cutqc
   :license: MIT
   :recipe: /`cutqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cutqc/meta.yaml>`_

   


.. conda:package:: cutqc

   |downloads_cutqc| |docker_cutqc|

   :versions:
      
      

      ``0.07-0``,  ``0.06-0``

      

   
   :depends on cutadapt: 
   :depends on fastqc: 
   :depends on gawk: 
   :depends on r-base: 
   :depends on r-plotly: 
   :depends on r-rmarkdown: 
   :depends on r-scales: 
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

    pixi global install cutqc

to add into an existing workspace instead, run::

    pixi add cutqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cutqc

Alternatively, to install into a new environment, run::

    conda create -n envname cutqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cutqc:<tag>

(see `cutqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cutqc| image:: https://img.shields.io/conda/dn/bioconda/cutqc.svg?style=flat
   :target: https://anaconda.org/bioconda/cutqc
   :alt:   (downloads)
.. |docker_cutqc| image:: https://quay.io/repository/biocontainers/cutqc/status
   :target: https://quay.io/repository/biocontainers/cutqc
.. _`cutqc/tags`: https://quay.io/repository/biocontainers/cutqc?tab=tags


.. raw:: html

    <script>
        var package = "cutqc";
        var versions = ["0.07","0.06"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cutqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cutqc/README.html