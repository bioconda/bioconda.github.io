:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribotools'
.. highlight: bash

ribotools
=========

.. conda:recipe:: ribotools
   :replaces_section_title:
   :noindex:

   Ribotools\: a toolbox for translation efficiency \(TE\) and differential expression \(DE\) analyses.

   :homepage: https://github.com/eboileau/ribotools
   :documentation: https://ribotools.readthedocs.io/en/latest
   
   :license: MIT / MIT
   :recipe: /`ribotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribotools/meta.yaml>`_

   


.. conda:package:: ribotools

   |downloads_ribotools| |docker_ribotools|

   :versions:
      
      

      ``2.0.0-0``,  ``1.0.4-0``

      

   
   :depends on bioconductor-apeglm: 
   :depends on bioconductor-deseq2: 
   :depends on bioconductor-ihw: 
   :depends on htseq: 
   :depends on python: ``>=3.11,<3.14``
   :depends on r-argparser: 
   :depends on r-ashr: 
   :depends on r-base: ``>=4.4.3``
   :depends on r-devtools: 
   :depends on r-openxlsx: 
   :depends on r-r.utils: 
   :depends on r-tidyverse: 
   :depends on r-yaml: 
   :depends on rpbp: ``>=4.0.1``

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

    pixi global install ribotools

to add into an existing workspace instead, run::

    pixi add ribotools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribotools

Alternatively, to install into a new environment, run::

    conda create -n envname ribotools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribotools:<tag>

(see `ribotools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribotools| image:: https://img.shields.io/conda/dn/bioconda/ribotools.svg?style=flat
   :target: https://anaconda.org/bioconda/ribotools
   :alt:   (downloads)
.. |docker_ribotools| image:: https://quay.io/repository/biocontainers/ribotools/status
   :target: https://quay.io/repository/biocontainers/ribotools
.. _`ribotools/tags`: https://quay.io/repository/biocontainers/ribotools?tab=tags


.. raw:: html

    <script>
        var package = "ribotools";
        var versions = ["2.0.0","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribotools/README.html