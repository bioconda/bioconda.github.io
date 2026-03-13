:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pycistopic'
.. highlight: bash

pycistopic
==========

.. conda:recipe:: pycistopic
   :replaces_section_title:
   :noindex:

   pycisTopic is a Python module to simultaneously identify cell states and cis\-regulatory topics from single cell epigenomics data.

   :homepage: https://github.com/aertslab/pycistopic
   :license: OTHER
   :recipe: /`pycistopic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycistopic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pycistopic/meta.yaml>`_

   


.. conda:package:: pycistopic

   |downloads_pycistopic| |docker_pycistopic|

   :versions:
      
      

      ``2.0a-0``

      

   
   :depends on adjusttext: 
   :depends on bbknn: 
   :depends on bs4: 
   :depends on gensim: 
   :depends on harmonypy: 
   :depends on igraph: 
   :depends on leidenalg: 
   :depends on loomxpy: 
   :depends on lxml: 
   :depends on macs2: 
   :depends on matplotlib-base: ``<3.7``
   :depends on numpy: ``>=1.20.3``
   :depends on pandas: ``>=1.5,<2``
   :depends on polars: ``>=0.18.3``
   :depends on pyarrow: ``>=8.0.0``
   :depends on pybiomart: 
   :depends on pyranges: ``<0.0.128``
   :depends on pyscenic: 
   :depends on python: ``>=3.9``
   :depends on ray-default: 
   :depends on scanorama: 
   :depends on scanpy: 
   :depends on scatac-fragment-tools: 
   :depends on scikit-learn: 
   :depends on scrublet: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on tmtoolkit: 

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

    pixi global install pycistopic

to add into an existing workspace instead, run::

    pixi add pycistopic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pycistopic

Alternatively, to install into a new environment, run::

    conda create -n envname pycistopic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pycistopic:<tag>

(see `pycistopic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pycistopic| image:: https://img.shields.io/conda/dn/bioconda/pycistopic.svg?style=flat
   :target: https://anaconda.org/bioconda/pycistopic
   :alt:   (downloads)
.. |docker_pycistopic| image:: https://quay.io/repository/biocontainers/pycistopic/status
   :target: https://quay.io/repository/biocontainers/pycistopic
.. _`pycistopic/tags`: https://quay.io/repository/biocontainers/pycistopic?tab=tags


.. raw:: html

    <script>
        var package = "pycistopic";
        var versions = ["2.0a"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pycistopic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pycistopic/README.html