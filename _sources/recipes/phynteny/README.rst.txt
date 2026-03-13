:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phynteny'
.. highlight: bash

phynteny
========

.. conda:recipe:: phynteny
   :replaces_section_title:
   :noindex:

   Phynteny\: Synteny\-based prediction of bacteriophage genes

   :homepage: https://github.com/susiegriggo/Phynteny
   :license: MIT / MIT
   :recipe: /`phynteny <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phynteny/meta.yaml>`_

   


.. conda:package:: phynteny

   |downloads_phynteny| |docker_phynteny|

   :versions:
      
      

      ``0.1.13-0``,  ``0.1.11-0``

      

   
   :depends on alive-progress: 
   :depends on biopython: ``>=1.79``
   :depends on click: 
   :depends on joblib: 
   :depends on loguru: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``<3.11``
   :depends on python_abi: 
   :depends on scikit-learn: ``<=1.2.2``
   :depends on tensorflow-cpu: ``2.9.1``

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

    pixi global install phynteny

to add into an existing workspace instead, run::

    pixi add phynteny

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phynteny

Alternatively, to install into a new environment, run::

    conda create -n envname phynteny

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phynteny:<tag>

(see `phynteny/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phynteny| image:: https://img.shields.io/conda/dn/bioconda/phynteny.svg?style=flat
   :target: https://anaconda.org/bioconda/phynteny
   :alt:   (downloads)
.. |docker_phynteny| image:: https://quay.io/repository/biocontainers/phynteny/status
   :target: https://quay.io/repository/biocontainers/phynteny
.. _`phynteny/tags`: https://quay.io/repository/biocontainers/phynteny?tab=tags


.. raw:: html

    <script>
        var package = "phynteny";
        var versions = ["0.1.13","0.1.11"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phynteny/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phynteny/README.html