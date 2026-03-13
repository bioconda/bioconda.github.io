:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'circtools'
.. highlight: bash

circtools
=========

.. conda:recipe:: circtools
   :replaces_section_title:
   :noindex:

   circtools \- a circular RNA toolbox.

   :homepage: https://github.com/jakobilab/circtools
   :documentation: https://docs.circ.tools/en/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`circtools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circtools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/circtools/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty948`, biotools: :biotools:`circtools`

   


.. conda:package:: circtools

   |downloads_circtools| |docker_circtools|

   :versions:
      
      

      ``2.0.4-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.2-0``,  ``1.2.1-0``

      

   
   :depends on bioconductor-ballgown: 
   :depends on bioconductor-biomart: 
   :depends on bioconductor-edger: 
   :depends on bioconductor-genomicfeatures: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-ggbio: 
   :depends on biopython: ``>=1.71``
   :depends on htseq: ``>=2.0.0``
   :depends on numpy: ``>=1.14.5``
   :depends on pandas: ``>=0.25.0``
   :depends on pathos: ``>=0.3.0``
   :depends on pybedtools: ``>=0.7.10``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.8``
   :depends on pyyaml: ``>=6.0.2``
   :depends on r-amap: 
   :depends on r-aod: 
   :depends on r-base: 
   :depends on r-data.table: 
   :depends on r-devtools: 
   :depends on r-dplyr: 
   :depends on r-formattable: 
   :depends on r-ggfortify: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gplots: 
   :depends on r-gridextra: 
   :depends on r-hmisc: 
   :depends on r-kableextra: 
   :depends on r-openxlsx: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape2: 
   :depends on reportlab: ``>=3.3.0``
   :depends on requests: ``>=2.32.3``
   :depends on scipy: ``>=0.19.0``
   :depends on star: 
   :depends on statsmodels: 
   :depends on stringtie: 
   :depends on tqdm: ``>=4.67.1``

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

    pixi global install circtools

to add into an existing workspace instead, run::

    pixi add circtools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install circtools

Alternatively, to install into a new environment, run::

    conda create -n envname circtools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/circtools:<tag>

(see `circtools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_circtools| image:: https://img.shields.io/conda/dn/bioconda/circtools.svg?style=flat
   :target: https://anaconda.org/bioconda/circtools
   :alt:   (downloads)
.. |docker_circtools| image:: https://quay.io/repository/biocontainers/circtools/status
   :target: https://quay.io/repository/biocontainers/circtools
.. _`circtools/tags`: https://quay.io/repository/biocontainers/circtools?tab=tags


.. raw:: html

    <script>
        var package = "circtools";
        var versions = ["2.0.4","2.0.3","2.0.2","2.0.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/circtools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/circtools/README.html