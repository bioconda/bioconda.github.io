:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deepmicroclass'
.. highlight: bash

deepmicroclass
==============

.. conda:recipe:: deepmicroclass
   :replaces_section_title:
   :noindex:

   DeepMicroClass\, a deep learning based contig prediction tool \(CPU version\)

   :homepage: https://github.com/chengsly/DeepMicroClass
   :license: BSD-2-Clause
   :recipe: /`deepmicroclass <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicroclass>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deepmicroclass/meta.yaml>`_

   


.. conda:package:: deepmicroclass

   |downloads_deepmicroclass| |docker_deepmicroclass|

   :versions:
      
      

      ``1.0.3-1``,  ``1.0.3-0``

      

   
   :depends on biopython: 
   :depends on ete3: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.8``
   :depends on pytorch: 
   :depends on pytorch-lightning: 
   :depends on scikit-learn: 
   :depends on tensorboard: 
   :depends on torchmetrics: 
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

    pixi global install deepmicroclass

to add into an existing workspace instead, run::

    pixi add deepmicroclass

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deepmicroclass

Alternatively, to install into a new environment, run::

    conda create -n envname deepmicroclass

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deepmicroclass:<tag>

(see `deepmicroclass/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deepmicroclass| image:: https://img.shields.io/conda/dn/bioconda/deepmicroclass.svg?style=flat
   :target: https://anaconda.org/bioconda/deepmicroclass
   :alt:   (downloads)
.. |docker_deepmicroclass| image:: https://quay.io/repository/biocontainers/deepmicroclass/status
   :target: https://quay.io/repository/biocontainers/deepmicroclass
.. _`deepmicroclass/tags`: https://quay.io/repository/biocontainers/deepmicroclass?tab=tags


.. raw:: html

    <script>
        var package = "deepmicroclass";
        var versions = ["1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deepmicroclass/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deepmicroclass/README.html