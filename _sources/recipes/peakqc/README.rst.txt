:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peakqc'
.. highlight: bash

peakqc
======

.. conda:recipe:: peakqc
   :replaces_section_title:
   :noindex:

   Quality control of single cell ATAC\-seq data based on fragment length distributions.

   :homepage: https://github.com/loosolab/PEAKQC
   :documentation: https://loosolab.pages.gwdg.de/software/peakqc/
   
   :license: MIT
   :recipe: /`peakqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peakqc/meta.yaml>`_

   


.. conda:package:: peakqc

   |downloads_peakqc| |docker_peakqc|

   :versions:
      
      

      ``0.1.6-0``

      

   
   :depends on beartype: 
   :depends on pysam: 
   :depends on python: 
   :depends on scanpy: ``>=1.9``
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install peakqc

to add into an existing workspace instead, run::

    pixi add peakqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peakqc

Alternatively, to install into a new environment, run::

    conda create -n envname peakqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peakqc:<tag>

(see `peakqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peakqc| image:: https://img.shields.io/conda/dn/bioconda/peakqc.svg?style=flat
   :target: https://anaconda.org/bioconda/peakqc
   :alt:   (downloads)
.. |docker_peakqc| image:: https://quay.io/repository/biocontainers/peakqc/status
   :target: https://quay.io/repository/biocontainers/peakqc
.. _`peakqc/tags`: https://quay.io/repository/biocontainers/peakqc?tab=tags


.. raw:: html

    <script>
        var package = "peakqc";
        var versions = ["0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peakqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peakqc/README.html