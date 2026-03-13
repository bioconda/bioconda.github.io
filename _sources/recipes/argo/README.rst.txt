:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'argo'
.. highlight: bash

argo
====

.. conda:recipe:: argo
   :replaces_section_title:
   :noindex:

   Argo\: species\-resolved profiling of antibiotic resistance genes in complex metagenomes through long\-read overlapping

   :homepage: https://github.com/xinehc/argo
   :license: MIT / MIT
   :recipe: /`argo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/argo/meta.yaml>`_

   


.. conda:package:: argo

   |downloads_argo| |docker_argo|

   :versions:
      
      

      ``0.2.1-0``,  ``0.2.0-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.1-0``

      

   
   :depends on diamond: ``>=2.1.11``
   :depends on melon: ``>=0.3.0``
   :depends on python: ``>=3.7``
   :depends on scikit-learn: 

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

    pixi global install argo

to add into an existing workspace instead, run::

    pixi add argo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install argo

Alternatively, to install into a new environment, run::

    conda create -n envname argo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/argo:<tag>

(see `argo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_argo| image:: https://img.shields.io/conda/dn/bioconda/argo.svg?style=flat
   :target: https://anaconda.org/bioconda/argo
   :alt:   (downloads)
.. |docker_argo| image:: https://quay.io/repository/biocontainers/argo/status
   :target: https://quay.io/repository/biocontainers/argo
.. _`argo/tags`: https://quay.io/repository/biocontainers/argo?tab=tags


.. raw:: html

    <script>
        var package = "argo";
        var versions = ["0.2.1","0.2.0","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/argo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/argo/README.html