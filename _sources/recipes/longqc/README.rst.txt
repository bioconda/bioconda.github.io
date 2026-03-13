:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longqc'
.. highlight: bash

longqc
======

.. conda:recipe:: longqc
   :replaces_section_title:
   :noindex:

   LongQC is a tool for the data quality control of the PacBio and ONT long reads

   :homepage: https://github.com/yfukasawa/LongQC
   :license: MIT
   :recipe: /`longqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longqc/meta.yaml>`_

   


.. conda:package:: longqc

   |downloads_longqc| |docker_longqc|

   :versions:
      
      

      ``1.2.0c-0``

      

   
   :depends on h5py: 
   :depends on jinja2: 
   :depends on matplotlib-base: ``>=2.1.2``
   :depends on minimap2-coverage: 
   :depends on numpy: 
   :depends on pandas: ``>=0.24.0``
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on python-edlib: 
   :depends on scikit-learn: 
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

    pixi global install longqc

to add into an existing workspace instead, run::

    pixi add longqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longqc

Alternatively, to install into a new environment, run::

    conda create -n envname longqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longqc:<tag>

(see `longqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longqc| image:: https://img.shields.io/conda/dn/bioconda/longqc.svg?style=flat
   :target: https://anaconda.org/bioconda/longqc
   :alt:   (downloads)
.. |docker_longqc| image:: https://quay.io/repository/biocontainers/longqc/status
   :target: https://quay.io/repository/biocontainers/longqc
.. _`longqc/tags`: https://quay.io/repository/biocontainers/longqc?tab=tags


.. raw:: html

    <script>
        var package = "longqc";
        var versions = ["1.2.0c"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longqc/README.html