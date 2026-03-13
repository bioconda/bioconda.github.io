:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ribowaltz'
.. highlight: bash

ribowaltz
=========

.. conda:recipe:: ribowaltz
   :replaces_section_title:
   :noindex:

   Calculation of optimal P\-site offsets\, diagnostic analysis and visual inspection of ribosome profiling data.

   :homepage: https://github.com/LabTranslationalArchitectomics/riboWaltz
   :license: MIT / MIT
   :recipe: /`ribowaltz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribowaltz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ribowaltz/meta.yaml>`_

   


.. conda:package:: ribowaltz

   |downloads_ribowaltz| |docker_ribowaltz|

   :versions:
      
      

      ``2.0-1``,  ``2.0-0``,  ``1.2.0-1``,  ``1.2.0-0``

      

   
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-genomicalignments: 
   :depends on bioconductor-genomicfeatures: 
   :depends on bioconductor-genomicranges: 
   :depends on bioconductor-iranges: 
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-data.table: 
   :depends on r-devtools: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 

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

    pixi global install ribowaltz

to add into an existing workspace instead, run::

    pixi add ribowaltz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ribowaltz

Alternatively, to install into a new environment, run::

    conda create -n envname ribowaltz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ribowaltz:<tag>

(see `ribowaltz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ribowaltz| image:: https://img.shields.io/conda/dn/bioconda/ribowaltz.svg?style=flat
   :target: https://anaconda.org/bioconda/ribowaltz
   :alt:   (downloads)
.. |docker_ribowaltz| image:: https://quay.io/repository/biocontainers/ribowaltz/status
   :target: https://quay.io/repository/biocontainers/ribowaltz
.. _`ribowaltz/tags`: https://quay.io/repository/biocontainers/ribowaltz?tab=tags


.. raw:: html

    <script>
        var package = "ribowaltz";
        var versions = ["2.0","2.0","1.2.0","1.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ribowaltz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ribowaltz/README.html