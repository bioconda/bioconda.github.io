:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sequana'
.. highlight: bash

sequana
=======

.. conda:recipe:: sequana
   :replaces_section_title:
   :noindex:

   A set of standalone application and snakemake pipelines dedicated to NGS \(new generation sequencing\) analysis.

   :homepage: https://sequana.readthedocs.io
   :developer docs: https://github.com/sequana/sequana
   :license: BSD / BSD-3-Clause
   :recipe: /`sequana <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sequana/meta.yaml>`_

   


.. conda:package:: sequana

   |downloads_sequana| |docker_sequana|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.19.6-0</code>,  <code>0.19.5-0</code>,  <code>0.19.4-0</code>,  <code>0.19.3-0</code>,  <code>0.19.2-0</code>,  <code>0.16.4-0</code>,  <code>0.16.3-0</code>,  <code>0.16.1-0</code>,  <code>0.15.4-0</code>,  </span></summary>
      

      ``0.19.6-0``,  ``0.19.5-0``,  ``0.19.4-0``,  ``0.19.3-0``,  ``0.19.2-0``,  ``0.16.4-0``,  ``0.16.3-0``,  ``0.16.1-0``,  ``0.15.4-0``,  ``0.15.3-0``,  ``0.15.2-0``,  ``0.15.1-0``,  ``0.14.3-0``,  ``0.14.2-0``,  ``0.14.1-0``,  ``0.14.0-0``,  ``0.13.2-0``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.0-0``,  ``0.6.3.post1-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.2-0``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.1-0``,  ``0.4.0-0``,  ``0.3.0-0``,  ``0.2.1-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on adjusttext: 
   :depends on aiohttp: 
   :depends on bioservices: ``>=1.10.0``
   :depends on brokenaxes: 
   :depends on bx-python: 
   :depends on click: ``>=8.1.8``
   :depends on colorlog: ``>=6.9.0``
   :depends on colormap: 
   :depends on cookiecutter: ``<2``
   :depends on cython: 
   :depends on deprecated: 
   :depends on docutils: 
   :depends on easydev: 
   :depends on gseapy: 
   :depends on itolapi: 
   :depends on lxml: 
   :depends on matplotlib-base: ``>3``
   :depends on matplotlib-venn: 
   :depends on mock: 
   :depends on multiqc: ``>=1.18,<=1.27``
   :depends on natsort: ``>=8.4.0``
   :depends on packaging: 
   :depends on pandas: ``>=2.2.3``
   :depends on plotly: 
   :depends on psutil: 
   :depends on pulp: ``<2.8.0``
   :depends on pykwalify: 
   :depends on pysam: ``>=0.22.1``
   :depends on python: ``>=3.10``
   :depends on python-kaleido: ``>=0.1``
   :depends on rich-click: 
   :depends on ruamel.yaml: ``>=0.16.0``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
   :depends on selenium: 
   :depends on snakemake-minimal: ``<8``
   :depends on statsmodels: 
   :depends on tqdm: 
   :depends on upsetplot: 
   :depends on vcfpy: 
   :depends on xlrd: 

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

    pixi global install sequana

to add into an existing workspace instead, run::

    pixi add sequana

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sequana

Alternatively, to install into a new environment, run::

    conda create -n envname sequana

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sequana:<tag>

(see `sequana/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sequana| image:: https://img.shields.io/conda/dn/bioconda/sequana.svg?style=flat
   :target: https://anaconda.org/bioconda/sequana
   :alt:   (downloads)
.. |docker_sequana| image:: https://quay.io/repository/biocontainers/sequana/status
   :target: https://quay.io/repository/biocontainers/sequana
.. _`sequana/tags`: https://quay.io/repository/biocontainers/sequana?tab=tags


.. raw:: html

    <script>
        var package = "sequana";
        var versions = ["0.19.6","0.19.5","0.19.4","0.19.3","0.19.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sequana/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sequana/README.html