:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shortcut'
.. highlight: bash

shortcut
========

.. conda:recipe:: shortcut
   :replaces_section_title:
   :noindex:

   ShortCut Small RNA\-seq data trimmer and quality control tool

   :homepage: https://github.com/Aez35/ShortCut
   :license: MIT / MIT
   :recipe: /`shortcut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortcut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shortcut/meta.yaml>`_

   


.. conda:package:: shortcut

   |downloads_shortcut| |docker_shortcut|

   :versions:
      
      

      ``1.0-0``

      

   
   :depends on biopython: ``>=1.85``
   :depends on cutadapt: ``>=4.8``
   :depends on python: ``>=3.6``
   :depends on r-base: ``>=4.3.3``
   :depends on r-ggplot2: ``>=3.5.2``
   :depends on r-tidyverse: ``>=2.0``
   :depends on rpy2: 
   :depends on shortstack: ``>=4.0.4``

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

    pixi global install shortcut

to add into an existing workspace instead, run::

    pixi add shortcut

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shortcut

Alternatively, to install into a new environment, run::

    conda create -n envname shortcut

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shortcut:<tag>

(see `shortcut/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shortcut| image:: https://img.shields.io/conda/dn/bioconda/shortcut.svg?style=flat
   :target: https://anaconda.org/bioconda/shortcut
   :alt:   (downloads)
.. |docker_shortcut| image:: https://quay.io/repository/biocontainers/shortcut/status
   :target: https://quay.io/repository/biocontainers/shortcut
.. _`shortcut/tags`: https://quay.io/repository/biocontainers/shortcut?tab=tags


.. raw:: html

    <script>
        var package = "shortcut";
        var versions = ["1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shortcut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shortcut/README.html