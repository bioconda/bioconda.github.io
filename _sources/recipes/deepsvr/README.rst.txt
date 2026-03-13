:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepsvr'
.. highlight: bash

deepsvr
=======

.. conda:recipe:: deepsvr
   :replaces_section_title:
   :noindex:

   DeepSVR stands for deep somatic variant refinement. It uses deep learning to classify real somatic and anomalous variants in paired tumor sequencing data.

   :homepage: https://github.com/griffithlab/deepsvr
   :license: MIT
   :recipe: /`deepsvr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsvr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepsvr/meta.yaml>`_

   


.. conda:package:: deepsvr

   |downloads_deepsvr| |docker_deepsvr|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bam-readcount: 
   :depends on click: 
   :depends on convert_zero_one_based: 
   :depends on h5py: 
   :depends on keras: ``2.0.4``
   :depends on matplotlib: 
   :depends on numpy: ``1.12.1``
   :depends on pandas: ``0.20.3``
   :depends on python: ``3.6.1``
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on tensorflow: ``<=1.0.1``

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

    pixi global install deepsvr

to add into an existing workspace instead, run::

    pixi add deepsvr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepsvr

Alternatively, to install into a new environment, run::

    conda create -n envname deepsvr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepsvr:<tag>

(see `deepsvr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepsvr| image:: https://img.shields.io/conda/dn/bioconda/deepsvr.svg?style=flat
   :target: https://anaconda.org/bioconda/deepsvr
   :alt:   (downloads)
.. |docker_deepsvr| image:: https://quay.io/repository/biocontainers/deepsvr/status
   :target: https://quay.io/repository/biocontainers/deepsvr
.. _`deepsvr/tags`: https://quay.io/repository/biocontainers/deepsvr?tab=tags


.. raw:: html

    <script>
        var package = "deepsvr";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepsvr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepsvr/README.html