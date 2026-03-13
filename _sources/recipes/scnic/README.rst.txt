:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scnic'
.. highlight: bash

scnic
=====

.. conda:recipe:: scnic
   :replaces_section_title:
   :noindex:

   SCNIC\: Sparse Cooccurence Network Investigation for Compositional data

   :homepage: https://github.com/lozuponelab/SCNIC
   :license: BSD / BSD-3-Clause
   :recipe: /`scnic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scnic/meta.yaml>`_

   


.. conda:package:: scnic

   |downloads_scnic| |docker_scnic|

   :versions:
      
      

      ``0.6.6-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.3-0``,  ``0.5.1-0``

      

   
   :depends on biom-format: 
   :depends on fastspar: 
   :depends on h5py: 
   :depends on matplotlib-base: 
   :depends on networkx: ``>=2``
   :depends on numpy: 
   :depends on pandas: ``>=1``
   :depends on python: ``>=3``
   :depends on scikit-bio: 
   :depends on scipy: ``>=1.9.0,<=1.10.1``
   :depends on seaborn-base: 
   :depends on statsmodels: 
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

    pixi global install scnic

to add into an existing workspace instead, run::

    pixi add scnic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scnic

Alternatively, to install into a new environment, run::

    conda create -n envname scnic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scnic:<tag>

(see `scnic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scnic| image:: https://img.shields.io/conda/dn/bioconda/scnic.svg?style=flat
   :target: https://anaconda.org/bioconda/scnic
   :alt:   (downloads)
.. |docker_scnic| image:: https://quay.io/repository/biocontainers/scnic/status
   :target: https://quay.io/repository/biocontainers/scnic
.. _`scnic/tags`: https://quay.io/repository/biocontainers/scnic?tab=tags


.. raw:: html

    <script>
        var package = "scnic";
        var versions = ["0.6.6","0.6.3","0.6.2","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scnic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scnic/README.html