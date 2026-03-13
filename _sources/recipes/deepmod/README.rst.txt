:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmod'
.. highlight: bash

deepmod
=======

.. conda:recipe:: deepmod
   :replaces_section_title:
   :noindex:

   A deep\-learning method for DNA modifcation \(5mC and 6mA\) prediction.

   :homepage: https://github.com/WGLab/DeepMod
   :license: GPL3
   :recipe: /`deepmod <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmod>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmod/meta.yaml>`_

   


.. conda:package:: deepmod

   |downloads_deepmod| |docker_deepmod|

   :versions:
      
      

      ``0.1.3-1``,  ``0.1.3-0``

      

   
   :depends on bwa: 
   :depends on h5py: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on python: 
   :depends on r-base: ``>=3.6``
   :depends on r-ggplot2: 
   :depends on r-gridextra: 
   :depends on r-plyr: 
   :depends on r-rcolorbrewer: 
   :depends on rpy2: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on tensorflow: ``1.7.*``

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

    pixi global install deepmod

to add into an existing workspace instead, run::

    pixi add deepmod

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepmod

Alternatively, to install into a new environment, run::

    conda create -n envname deepmod

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepmod:<tag>

(see `deepmod/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepmod| image:: https://img.shields.io/conda/dn/bioconda/deepmod.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmod
   :alt:   (downloads)
.. |docker_deepmod| image:: https://quay.io/repository/biocontainers/deepmod/status
   :target: https://quay.io/repository/biocontainers/deepmod
.. _`deepmod/tags`: https://quay.io/repository/biocontainers/deepmod?tab=tags


.. raw:: html

    <script>
        var package = "deepmod";
        var versions = ["0.1.3","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmod/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmod/README.html