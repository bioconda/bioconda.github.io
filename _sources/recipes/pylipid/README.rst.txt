:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pylipid'
.. highlight: bash

pylipid
=======

.. conda:recipe:: pylipid
   :replaces_section_title:
   :noindex:

   PyLipID \- A Python Library For Lipid Interaction Analysis

   :homepage: https://github.com/wlsong/PyLipID
   :license: MIT
   :recipe: /`pylipid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylipid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pylipid/meta.yaml>`_

   


.. conda:package:: pylipid

   |downloads_pylipid| |docker_pylipid|

   :versions:
      
      

      ``1.5.14-0``

      

   
   :depends on kneebow: 
   :depends on logomaker: 
   :depends on matplotlib-base: ``>=3.3.3``
   :depends on mdtraj: 
   :depends on netcdf4: 
   :depends on networkx: 
   :depends on numpy: ``>=1.20``
   :depends on p-tqdm: 
   :depends on pandas: 
   :depends on python: ``>=3.6,<4.0``
   :depends on python-louvain: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on statsmodels: 

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

    pixi global install pylipid

to add into an existing workspace instead, run::

    pixi add pylipid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pylipid

Alternatively, to install into a new environment, run::

    conda create -n envname pylipid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pylipid:<tag>

(see `pylipid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pylipid| image:: https://img.shields.io/conda/dn/bioconda/pylipid.svg?style=flat
   :target: https://anaconda.org/bioconda/pylipid
   :alt:   (downloads)
.. |docker_pylipid| image:: https://quay.io/repository/biocontainers/pylipid/status
   :target: https://quay.io/repository/biocontainers/pylipid
.. _`pylipid/tags`: https://quay.io/repository/biocontainers/pylipid?tab=tags


.. raw:: html

    <script>
        var package = "pylipid";
        var versions = ["1.5.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pylipid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pylipid/README.html