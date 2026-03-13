:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'novae'
.. highlight: bash

novae
=====

.. conda:recipe:: novae
   :replaces_section_title:
   :noindex:

   Graph\-based foundation model for spatial transcriptomics data.

   :homepage: https://mics-lab.github.io/novae
   :developer docs: https://github.com/MICS-Lab/novae
   :license: BSD / BSD-3-Clause
   :recipe: /`novae <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novae>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/novae/meta.yaml>`_

   


.. conda:package:: novae

   |downloads_novae| |docker_novae|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.2.4-0``,  ``0.2.2-0``

      

   
   :depends on fast-array-utils: ``>=1.3.1``
   :depends on huggingface_hub: ``>=0.32.0``
   :depends on lightning: ``>=2.2.1``
   :depends on pandas: ``>=2.0.0``
   :depends on python: ``>=3.10,<3.13``
   :depends on python-igraph: ``>=0.11.8``
   :depends on pytorch: ``>=2.2.1``
   :depends on pytorch_geometric: ``>=2.5.2``
   :depends on safetensors: ``>=0.4.3``
   :depends on scanpy: ``>=1.9.8``

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

    pixi global install novae

to add into an existing workspace instead, run::

    pixi add novae

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install novae

Alternatively, to install into a new environment, run::

    conda create -n envname novae

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/novae:<tag>

(see `novae/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_novae| image:: https://img.shields.io/conda/dn/bioconda/novae.svg?style=flat
   :target: https://anaconda.org/bioconda/novae
   :alt:   (downloads)
.. |docker_novae| image:: https://quay.io/repository/biocontainers/novae/status
   :target: https://quay.io/repository/biocontainers/novae
.. _`novae/tags`: https://quay.io/repository/biocontainers/novae?tab=tags


.. raw:: html

    <script>
        var package = "novae";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/novae/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/novae/README.html