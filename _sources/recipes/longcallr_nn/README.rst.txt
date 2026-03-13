:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longcallr_nn'
.. highlight: bash

longcallr_nn
============

.. conda:recipe:: longcallr_nn
   :replaces_section_title:
   :noindex:

   longcallR\_nn is a variant caller specifically designed for long\-read RNA\-seq data utilizing a ResNet model.

   :homepage: https://github.com/huangnengCSU/longcallR-nn
   :license: MIT / MIT
   :recipe: /`longcallr_nn <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcallr_nn>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longcallr_nn/meta.yaml>`_

   


.. conda:package:: longcallr_nn

   |downloads_longcallr_nn| |docker_longcallr_nn|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-1``,  ``0.0.1-0``

      

   
   :depends on numpy: ``>=1.21.0``
   :depends on pysam: ``>=0.16``
   :depends on python: ``>=3.9,<3.11``
   :depends on pytorch: ``>=1.13``
   :depends on pyyaml: ``>=5.3``
   :depends on requests: 
   :depends on tensorboardx: ``>=2.2``
   :depends on torchmetrics: ``>=0.9``
   :depends on torchvision: ``>=0.14``

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

    pixi global install longcallr_nn

to add into an existing workspace instead, run::

    pixi add longcallr_nn

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longcallr_nn

Alternatively, to install into a new environment, run::

    conda create -n envname longcallr_nn

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longcallr_nn:<tag>

(see `longcallr_nn/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longcallr_nn| image:: https://img.shields.io/conda/dn/bioconda/longcallr_nn.svg?style=flat
   :target: https://anaconda.org/bioconda/longcallr_nn
   :alt:   (downloads)
.. |docker_longcallr_nn| image:: https://quay.io/repository/biocontainers/longcallr_nn/status
   :target: https://quay.io/repository/biocontainers/longcallr_nn
.. _`longcallr_nn/tags`: https://quay.io/repository/biocontainers/longcallr_nn?tab=tags


.. raw:: html

    <script>
        var package = "longcallr_nn";
        var versions = ["0.0.2","0.0.1","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longcallr_nn/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longcallr_nn/README.html