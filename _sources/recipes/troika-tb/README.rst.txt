:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'troika-tb'
.. highlight: bash

troika-tb
=========

.. conda:recipe:: troika-tb
   :replaces_section_title:
   :noindex:

   A pipeline implementing TB\-Profiler for batch detection and reporting of anti\-microbial resistance in TB for public health and clinical use.

   :homepage: https://github.com/kristyhoran/troika
   :license: GPL-3.0
   :recipe: /`troika-tb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/troika-tb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/troika-tb/meta.yaml>`_

   


.. conda:package:: troika-tb

   |downloads_troika-tb| |docker_troika-tb|

   :versions:
      
      

      ``0.0.5-0``

      

   
   :depends on amply: 
   :depends on appdirs: 
   :depends on biopython: ``>=1.70``
   :depends on chardet: 
   :depends on configargparse: 
   :depends on docutils: 
   :depends on jinja2: 
   :depends on markupsafe: 
   :depends on nbformat: 
   :depends on numpy: 
   :depends on packaging: 
   :depends on pandas: ``>=1.1.4``
   :depends on pluggy: ``>=0.13.1``
   :depends on psutil: 
   :depends on pyparsing: ``>=2.4.7``
   :depends on pytest: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on requests: 
   :depends on setuptools-scm: 
   :depends on sh: 
   :depends on six: 
   :depends on snakemake: ``>=5.9.1``
   :depends on svgwrite: 
   :depends on toml: 
   :depends on urllib3: 
   :depends on xlsxwriter: 

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

    pixi global install troika-tb

to add into an existing workspace instead, run::

    pixi add troika-tb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install troika-tb

Alternatively, to install into a new environment, run::

    conda create -n envname troika-tb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/troika-tb:<tag>

(see `troika-tb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_troika-tb| image:: https://img.shields.io/conda/dn/bioconda/troika-tb.svg?style=flat
   :target: https://anaconda.org/bioconda/troika-tb
   :alt:   (downloads)
.. |docker_troika-tb| image:: https://quay.io/repository/biocontainers/troika-tb/status
   :target: https://quay.io/repository/biocontainers/troika-tb
.. _`troika-tb/tags`: https://quay.io/repository/biocontainers/troika-tb?tab=tags


.. raw:: html

    <script>
        var package = "troika-tb";
        var versions = ["0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/troika-tb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/troika-tb/README.html