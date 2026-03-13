:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'feems'
.. highlight: bash

feems
=====

.. conda:recipe:: feems
   :replaces_section_title:
   :noindex:

   Fast Estimation of Effective Migration Surfaces \(FEEMS\) \+ admixture \(FEEMSmix\)

   :homepage: https://github.com/NovembreLab/feems
   :documentation: https://github.com/NovembreLab/feems/blob/v2.0.1/README.md
   
   :license: MIT / MIT
   :recipe: /`feems <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feems>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/feems/meta.yaml>`_
   :links: doi: :doi:`10.7554/eLife.61927`, doi: :doi:`10.1371/journal.pgen.1011612`

   A python package implementing a statistical method for inferring and visualizing gene\-flow in spatial population genetic data.


.. conda:package:: feems

   |downloads_feems| |docker_feems|

   :versions:
      
      

      ``2.0.1-0``,  ``2.0.0-1``,  ``2.0.0-0``,  ``1.0.0-0``

      

   
   :depends on cartopy: 
   :depends on click: 
   :depends on fiona: 
   :depends on flake8: 
   :depends on matplotlib-base: 
   :depends on msprime: 
   :depends on networkx: 
   :depends on numpy: ``<2``
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pandas-plink: 
   :depends on pep8: 
   :depends on pyproj: 
   :depends on pytest: 
   :depends on python: ``>=3.8``
   :depends on pyyaml: 
   :depends on scikit-learn: 
   :depends on scikit-sparse: 
   :depends on scipy: 
   :depends on setuptools: 
   :depends on shapely: 
   :depends on statsmodels: 
   :depends on suitesparse: 
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

    pixi global install feems

to add into an existing workspace instead, run::

    pixi add feems

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install feems

Alternatively, to install into a new environment, run::

    conda create -n envname feems

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/feems:<tag>

(see `feems/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_feems| image:: https://img.shields.io/conda/dn/bioconda/feems.svg?style=flat
   :target: https://anaconda.org/bioconda/feems
   :alt:   (downloads)
.. |docker_feems| image:: https://quay.io/repository/biocontainers/feems/status
   :target: https://quay.io/repository/biocontainers/feems
.. _`feems/tags`: https://quay.io/repository/biocontainers/feems?tab=tags


.. raw:: html

    <script>
        var package = "feems";
        var versions = ["2.0.1","2.0.0","2.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/feems/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/feems/README.html