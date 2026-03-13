:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'iptkl'
.. highlight: bash

iptkl
=====

.. conda:recipe:: iptkl
   :replaces_section_title:
   :noindex:

   IPTK is a library specialized in the analysis of HLA\-peptidomes identified through an immunopeptidomics pipeline.

   :homepage: https://github.com/ikmb/iptoolkit
   :documentation: https://iptk.readthedocs.io/en/latest/
   
   :license: MIT / MIT
   :recipe: /`iptkl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iptkl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/iptkl/meta.yaml>`_

   


.. conda:package:: iptkl

   |downloads_iptkl| |docker_iptkl|

   :versions:
      
      

      ``0.6.8-0``,  ``0.6.5-0``,  ``0.6.4-0``

      

   
   :depends on biopython: 
   :depends on bokeh: 
   :depends on colour: 
   :depends on dash: 
   :depends on goatools: 
   :depends on h5py: 
   :depends on holoviews: 
   :depends on logomaker: 
   :depends on lxml: 
   :depends on matplotlib-base: 
   :depends on mhcnames: 
   :depends on nglview: 
   :depends on numba: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyopenms: 
   :depends on pyteomics: 
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
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

    pixi global install iptkl

to add into an existing workspace instead, run::

    pixi add iptkl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install iptkl

Alternatively, to install into a new environment, run::

    conda create -n envname iptkl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/iptkl:<tag>

(see `iptkl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_iptkl| image:: https://img.shields.io/conda/dn/bioconda/iptkl.svg?style=flat
   :target: https://anaconda.org/bioconda/iptkl
   :alt:   (downloads)
.. |docker_iptkl| image:: https://quay.io/repository/biocontainers/iptkl/status
   :target: https://quay.io/repository/biocontainers/iptkl
.. _`iptkl/tags`: https://quay.io/repository/biocontainers/iptkl?tab=tags


.. raw:: html

    <script>
        var package = "iptkl";
        var versions = ["0.6.8","0.6.5","0.6.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/iptkl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/iptkl/README.html