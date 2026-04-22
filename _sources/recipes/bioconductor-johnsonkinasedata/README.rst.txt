:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-johnsonkinasedata'
.. highlight: bash

bioconductor-johnsonkinasedata
==============================

.. conda:recipe:: bioconductor-johnsonkinasedata
   :replaces_section_title:
   :noindex:

   Kinase PWMs based on data published by Johnson et al. 2023 and Yaron\-Barir et al. 2024

   :homepage: https://bioconductor.org/packages/3.22/data/experiment/html/JohnsonKinaseData.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-johnsonkinasedata <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-johnsonkinasedata>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-johnsonkinasedata/meta.yaml>`_

   The packages provides position specific weight matrices \(PWMs\) for 303 human serine\/threonine and 93 tyrosine kinases originally published in Johnson et al. 2023 \(doi\:10.1038\/s41586\-022\-05575\-3\) and Yaron\-Barir et al. 2024 \(doi\:10.1038\/s41586\-024\-07407\-y\). The package includes basic functionality to score user provided phosphosites. It also includes pre\-computed PWM scores \(\"background scores\"\) for a large collection of curated human phosphosites which can be used to rank PWM scores relative to the background scores \(\"percentile rank\"\).


.. conda:package:: bioconductor-johnsonkinasedata

   |downloads_bioconductor-johnsonkinasedata| |docker_bioconductor-johnsonkinasedata|

   :versions:
      
      

      ``1.6.0-0``

      

   
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-data-packages: ``>=20260207``
   :depends on bioconductor-experimenthub: ``>=3.0.0,<3.1.0``
   :depends on curl: 
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-checkmate: 
   :depends on r-dplyr: 
   :depends on r-purrr: 
   :depends on r-stringr: 
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

    pixi global install bioconductor-johnsonkinasedata

to add into an existing workspace instead, run::

    pixi add bioconductor-johnsonkinasedata

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-johnsonkinasedata

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-johnsonkinasedata

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-johnsonkinasedata:<tag>

(see `bioconductor-johnsonkinasedata/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-johnsonkinasedata| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-johnsonkinasedata.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-johnsonkinasedata
   :alt:   (downloads)
.. |docker_bioconductor-johnsonkinasedata| image:: https://quay.io/repository/biocontainers/bioconductor-johnsonkinasedata/status
   :target: https://quay.io/repository/biocontainers/bioconductor-johnsonkinasedata
.. _`bioconductor-johnsonkinasedata/tags`: https://quay.io/repository/biocontainers/bioconductor-johnsonkinasedata?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-johnsonkinasedata";
        var versions = ["1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-johnsonkinasedata/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-johnsonkinasedata/README.html