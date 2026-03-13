:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepnog'
.. highlight: bash

deepnog
=======

.. conda:recipe:: deepnog
   :replaces_section_title:
   :noindex:

   Deep learning tool for protein orthologous group assignment

   :homepage: https://github.com/univieCUBE/deepnog
   :documentation: https://deepnog.readthedocs.io
   
   :license: BSD / BSD 3-Clause
   :recipe: /`deepnog <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepnog>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepnog/meta.yaml>`_

   


.. conda:package:: deepnog

   |downloads_deepnog| |docker_deepnog|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-1``,  ``1.2.3-0``,  ``1.2.1-0``

      

   
   :depends on biopython: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on pytorch: 
   :depends on pyyaml: 
   :depends on scikit-learn: 
   :depends on tensorboard: 
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

    pixi global install deepnog

to add into an existing workspace instead, run::

    pixi add deepnog

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepnog

Alternatively, to install into a new environment, run::

    conda create -n envname deepnog

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepnog:<tag>

(see `deepnog/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepnog| image:: https://img.shields.io/conda/dn/bioconda/deepnog.svg?style=flat
   :target: https://anaconda.org/bioconda/deepnog
   :alt:   (downloads)
.. |docker_deepnog| image:: https://quay.io/repository/biocontainers/deepnog/status
   :target: https://quay.io/repository/biocontainers/deepnog
.. _`deepnog/tags`: https://quay.io/repository/biocontainers/deepnog?tab=tags


.. raw:: html

    <script>
        var package = "deepnog";
        var versions = ["1.2.4","1.2.3","1.2.3","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepnog/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepnog/README.html