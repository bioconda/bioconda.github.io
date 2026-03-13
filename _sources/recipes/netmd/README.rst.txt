:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'netmd'
.. highlight: bash

netmd
=====

.. conda:recipe:: netmd
   :replaces_section_title:
   :noindex:

   NetMD is a computational method for identifying consensus behavior across multiple molecular dynamics simulations.

   :homepage: https://github.com/mazzalab/NetMD
   :documentation: https://mazzalab.github.io/NetMD
   
   :license: MIT / MIT
   :recipe: /`netmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/netmd/meta.yaml>`_

   Using Graph\-based Embeddings and Dynamic Time Warping\, \*NetMD\* aligns trajectories that may be temporally out of sync and 
   pinpoints the replicas that most faithfully represent the overall ensemble behavior. This enables consistent comparisons across simulations 
   and supports reliable characterization of system variants\, making it easier to detect shared patterns and reduce the influence of outliers 
   or simulation artifacts.



.. conda:package:: netmd

   |downloads_netmd| |docker_netmd|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on colorama: 
   :depends on decorator: ``5.1.*``
   :depends on gensim: ``>=4.0.0``
   :depends on h5py: 
   :depends on hdf5: 
   :depends on ipykernel: 
   :depends on matplotlib-base: 
   :depends on nbformat: ``>=4.2.0``
   :depends on networkx: ``>=3.3``
   :depends on numpy: ``>=1.22``
   :depends on pandas: ``>=1.2.0``
   :depends on plotly: 
   :depends on pygsp: 
   :depends on python: ``>=3.10,<=3.12.8``
   :depends on python-levenshtein: 
   :depends on python-louvain: 
   :depends on pyyaml: 
   :depends on ruptures: 
   :depends on scikit-learn: 
   :depends on scipy: ``<1.13``
   :depends on tqdm: 
   :depends on tslearn: 

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

    pixi global install netmd

to add into an existing workspace instead, run::

    pixi add netmd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install netmd

Alternatively, to install into a new environment, run::

    conda create -n envname netmd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/netmd:<tag>

(see `netmd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_netmd| image:: https://img.shields.io/conda/dn/bioconda/netmd.svg?style=flat
   :target: https://anaconda.org/bioconda/netmd
   :alt:   (downloads)
.. |docker_netmd| image:: https://quay.io/repository/biocontainers/netmd/status
   :target: https://quay.io/repository/biocontainers/netmd
.. _`netmd/tags`: https://quay.io/repository/biocontainers/netmd?tab=tags


.. raw:: html

    <script>
        var package = "netmd";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/netmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/netmd/README.html