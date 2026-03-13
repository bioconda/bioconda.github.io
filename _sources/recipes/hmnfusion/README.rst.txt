:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnfusion'
.. highlight: bash

hmnfusion
=========

.. conda:recipe:: hmnfusion
   :replaces_section_title:
   :noindex:

   Fusion analysis from DNA genomics.

   :homepage: https://github.com/guillaume-gricourt/HmnFusion
   :license: MIT / MIT
   :recipe: /`hmnfusion <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnfusion>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnfusion/meta.yaml>`_

   


.. conda:package:: hmnfusion

   |downloads_hmnfusion| |docker_hmnfusion|

   :versions:
      
      

      ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.0-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.12-0``,  ``1.2.6-0``,  ``1.2.3-0``

      

   
   :depends on beautifulsoup4: 
   :depends on et-xmlfile: 
   :depends on lxml: 
   :depends on matplotlib-base: 
   :depends on natsort: 
   :depends on networkx: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on pytest: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on requests: 
   :depends on snakemake: 

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

    pixi global install hmnfusion

to add into an existing workspace instead, run::

    pixi add hmnfusion

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmnfusion

Alternatively, to install into a new environment, run::

    conda create -n envname hmnfusion

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmnfusion:<tag>

(see `hmnfusion/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmnfusion| image:: https://img.shields.io/conda/dn/bioconda/hmnfusion.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnfusion
   :alt:   (downloads)
.. |docker_hmnfusion| image:: https://quay.io/repository/biocontainers/hmnfusion/status
   :target: https://quay.io/repository/biocontainers/hmnfusion
.. _`hmnfusion/tags`: https://quay.io/repository/biocontainers/hmnfusion?tab=tags


.. raw:: html

    <script>
        var package = "hmnfusion";
        var versions = ["1.5.1","1.5.0","1.4.0","1.3.1","1.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnfusion/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnfusion/README.html