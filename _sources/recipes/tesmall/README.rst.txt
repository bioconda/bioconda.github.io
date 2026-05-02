:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tesmall'
.. highlight: bash

tesmall
=======

.. conda:recipe:: tesmall
   :replaces_section_title:
   :noindex:

   A pipeline for profiling small RNAs

   :homepage: https://github.com/mhammell-laboratory/TEsmall
   :documentation: https://www.mghlab.org/software/tesmall
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`tesmall <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesmall>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tesmall/meta.yaml>`_

   TEsmall is a tool that allows for the simultaneous processing and analysis of a  variety of small RNAs in a single integrated workflow.



.. conda:package:: tesmall

   |downloads_tesmall| |docker_tesmall|

   :versions:
      
      

      ``2.0.9-0``

      

   
   :depends on bedtools: 
   :depends on bokeh: ``>=1.0.0,<3.0.0``
   :depends on bowtie: 
   :depends on cutadapt: ``>=1.10``
   :depends on matplotlib-base: ``>=1.5.1``
   :depends on numpy: ``>=1.11.3,<2.0``
   :depends on pandas: ``>=0.18.1``
   :depends on pybedtools: ``>=0.7.8``
   :depends on pysam: ``>=0.9.1``
   :depends on python: ``>=3.9``
   :depends on samtools: 
   :depends on scipy: ``>=0.18.0``
   :depends on seaborn: ``>=0.7.1``

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

    pixi global install tesmall

to add into an existing workspace instead, run::

    pixi add tesmall

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tesmall

Alternatively, to install into a new environment, run::

    conda create -n envname tesmall

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tesmall:<tag>

(see `tesmall/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tesmall| image:: https://img.shields.io/conda/dn/bioconda/tesmall.svg?style=flat
   :target: https://anaconda.org/bioconda/tesmall
   :alt:   (downloads)
.. |docker_tesmall| image:: https://quay.io/repository/biocontainers/tesmall/status
   :target: https://quay.io/repository/biocontainers/tesmall
.. _`tesmall/tags`: https://quay.io/repository/biocontainers/tesmall?tab=tags


.. raw:: html

    <script>
        var package = "tesmall";
        var versions = ["2.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tesmall/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tesmall/README.html