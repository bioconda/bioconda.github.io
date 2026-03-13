:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fairease-source'
.. highlight: bash

fairease-source
===============

.. conda:recipe:: fairease-source
   :replaces_section_title:
   :noindex:

   SOURCE\: Sea Observations Utility for Reprocessing\, Calibration and Evaluation.

   :homepage: https://github.com/fair-ease/Source
   :license: CC / CC-BY-NC-4.0
   :recipe: /`fairease-source <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fairease-source>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fairease-source/meta.yaml>`_

   


.. conda:package:: fairease-source

   |downloads_fairease-source| |docker_fairease-source|

   :versions:
      
      

      ``1.4.6-0``,  ``1.4.4-0``,  ``1.4.1-0``

      

   
   :depends on gsw: 
   :depends on netcdf4: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on psutil: 
   :depends on pykml: 
   :depends on python: ``>=3.6,<3.13``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seawater: 
   :depends on unidecode: 

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

    pixi global install fairease-source

to add into an existing workspace instead, run::

    pixi add fairease-source

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fairease-source

Alternatively, to install into a new environment, run::

    conda create -n envname fairease-source

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fairease-source:<tag>

(see `fairease-source/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fairease-source| image:: https://img.shields.io/conda/dn/bioconda/fairease-source.svg?style=flat
   :target: https://anaconda.org/bioconda/fairease-source
   :alt:   (downloads)
.. |docker_fairease-source| image:: https://quay.io/repository/biocontainers/fairease-source/status
   :target: https://quay.io/repository/biocontainers/fairease-source
.. _`fairease-source/tags`: https://quay.io/repository/biocontainers/fairease-source?tab=tags


.. raw:: html

    <script>
        var package = "fairease-source";
        var versions = ["1.4.6","1.4.4","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fairease-source/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fairease-source/README.html