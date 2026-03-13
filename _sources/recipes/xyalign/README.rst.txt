:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xyalign'
.. highlight: bash

xyalign
=======

.. conda:recipe:: xyalign
   :replaces_section_title:
   :noindex:

   Command line tools and python library to infer ploidy\, correct for sex chromosome complement\, and work with NGS data

   :homepage: https://github.com/WilsonSayresLab/XYalign
   :license: GPL / GPL-3.0
   :recipe: /`xyalign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xyalign/meta.yaml>`_

   


.. conda:package:: xyalign

   |downloads_xyalign| |docker_xyalign|

   :versions:
      
      

      ``1.1.5-1``,  ``1.1.5-0``,  ``1.1.4-2``,  ``1.1.4-0``,  ``1.1.3-0``,  ``1.0.0-0``

      

   
   :depends on bbmap: 
   :depends on bedtools: 
   :depends on bwa: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on platypus-variant: 
   :depends on pybedtools: 
   :depends on pysam: 
   :depends on python: ``<3``
   :depends on sambamba: 
   :depends on samtools: 
   :depends on scipy: 

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

    pixi global install xyalign

to add into an existing workspace instead, run::

    pixi add xyalign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xyalign

Alternatively, to install into a new environment, run::

    conda create -n envname xyalign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xyalign:<tag>

(see `xyalign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xyalign| image:: https://img.shields.io/conda/dn/bioconda/xyalign.svg?style=flat
   :target: https://anaconda.org/bioconda/xyalign
   :alt:   (downloads)
.. |docker_xyalign| image:: https://quay.io/repository/biocontainers/xyalign/status
   :target: https://quay.io/repository/biocontainers/xyalign
.. _`xyalign/tags`: https://quay.io/repository/biocontainers/xyalign?tab=tags


.. raw:: html

    <script>
        var package = "xyalign";
        var versions = ["1.1.5","1.1.5","1.1.4","1.1.4","1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xyalign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xyalign/README.html