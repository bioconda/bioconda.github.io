:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'msoma'
.. highlight: bash

msoma
=====

.. conda:recipe:: msoma
   :replaces_section_title:
   :noindex:

   mSOMA\: Somatic Mutation Detection using a betabinomial null model

   :homepage: https://github.com/AkeyLab/mSOMA
   :documentation: https://akeylab.github.io/mSOMA/
   
   :license: MIT / MIT
   :recipe: /`msoma <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msoma>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/msoma/meta.yaml>`_

   


.. conda:package:: msoma

   |downloads_msoma| |docker_msoma|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``

      

   
   :depends on bamutil: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-qvalue: 
   :depends on bioconductor-survcomp: 
   :depends on click: ``>=8.0``
   :depends on importlib_resources: ``>=5.4``
   :depends on numpy: ``>=1.19``
   :depends on pandas: ``>=1.1``
   :depends on pysam: ``>=0.19``
   :depends on python: ``>=3.7.1``
   :depends on r-argparse: 
   :depends on r-base: 
   :depends on r-bbmle: 
   :depends on r-data.table: 
   :depends on r-dplyr: 
   :depends on r-r.utils: 
   :depends on r-tidyverse: 
   :depends on r-vgam: 
   :depends on samtools: 
   :depends on scipy: ``>=1.5``
   :depends on statsmodels: ``>=0.12``

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

    pixi global install msoma

to add into an existing workspace instead, run::

    pixi add msoma

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install msoma

Alternatively, to install into a new environment, run::

    conda create -n envname msoma

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/msoma:<tag>

(see `msoma/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_msoma| image:: https://img.shields.io/conda/dn/bioconda/msoma.svg?style=flat
   :target: https://anaconda.org/bioconda/msoma
   :alt:   (downloads)
.. |docker_msoma| image:: https://quay.io/repository/biocontainers/msoma/status
   :target: https://quay.io/repository/biocontainers/msoma
.. _`msoma/tags`: https://quay.io/repository/biocontainers/msoma?tab=tags


.. raw:: html

    <script>
        var package = "msoma";
        var versions = ["0.1.2","0.1.1","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/msoma/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/msoma/README.html