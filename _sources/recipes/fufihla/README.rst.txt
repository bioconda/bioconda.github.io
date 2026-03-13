:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fufihla'
.. highlight: bash

fufihla
=======

.. conda:recipe:: fufihla
   :replaces_section_title:
   :noindex:

   HLA typing pipeline for long reads \(FuFiHLA\) with a location\-aware CLI.

   :homepage: https://github.com/jingqing-hu/FuFiHLA
   :license: MIT
   :recipe: /`fufihla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fufihla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fufihla/meta.yaml>`_

   


.. conda:package:: fufihla

   |downloads_fufihla| |docker_fufihla|

   :versions:
      
      

      ``0.2.4-1``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``,  ``0.2.2-0``,  ``0.1.0-0``

      

   
   :depends on bcftools: 
   :depends on htslib: 
   :depends on longcalld: 
   :depends on minimap2: 
   :depends on python: 
   :depends on samtools: 
   :depends on seqtk: 
   :depends on unzip: 
   :depends on wget: 

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

    pixi global install fufihla

to add into an existing workspace instead, run::

    pixi add fufihla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fufihla

Alternatively, to install into a new environment, run::

    conda create -n envname fufihla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fufihla:<tag>

(see `fufihla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fufihla| image:: https://img.shields.io/conda/dn/bioconda/fufihla.svg?style=flat
   :target: https://anaconda.org/bioconda/fufihla
   :alt:   (downloads)
.. |docker_fufihla| image:: https://quay.io/repository/biocontainers/fufihla/status
   :target: https://quay.io/repository/biocontainers/fufihla
.. _`fufihla/tags`: https://quay.io/repository/biocontainers/fufihla?tab=tags


.. raw:: html

    <script>
        var package = "fufihla";
        var versions = ["0.2.4","0.2.4","0.2.3","0.2.3","0.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fufihla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fufihla/README.html