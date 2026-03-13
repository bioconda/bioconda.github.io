:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ciriquant'
.. highlight: bash

ciriquant
=========

.. conda:recipe:: ciriquant
   :replaces_section_title:
   :noindex:

   Circular RNA quantification pipeline.

   :homepage: https://github.com/bioinfo-biols/CIRIquant
   :documentation: https://ciri-cookbook.readthedocs.io/en/latest/CIRIquant_0_home.html
   
   :license: MIT / MIT
   :recipe: /`ciriquant <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciriquant>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ciriquant/meta.yaml>`_

   


.. conda:package:: ciriquant

   |downloads_ciriquant| |docker_ciriquant|

   :versions:
      
      

      ``1.1.3-0``,  ``1.1.2-2``,  ``1.1.2-1``,  ``1.1.2-0``

      

   
   :depends on bwa: 
   :depends on hisat2: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on pyyaml: 
   :depends on samtools: ``>=1.10``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on stringtie: 

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

    pixi global install ciriquant

to add into an existing workspace instead, run::

    pixi add ciriquant

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ciriquant

Alternatively, to install into a new environment, run::

    conda create -n envname ciriquant

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ciriquant:<tag>

(see `ciriquant/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ciriquant| image:: https://img.shields.io/conda/dn/bioconda/ciriquant.svg?style=flat
   :target: https://anaconda.org/bioconda/ciriquant
   :alt:   (downloads)
.. |docker_ciriquant| image:: https://quay.io/repository/biocontainers/ciriquant/status
   :target: https://quay.io/repository/biocontainers/ciriquant
.. _`ciriquant/tags`: https://quay.io/repository/biocontainers/ciriquant?tab=tags


.. raw:: html

    <script>
        var package = "ciriquant";
        var versions = ["1.1.3","1.1.2","1.1.2","1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ciriquant/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ciriquant/README.html