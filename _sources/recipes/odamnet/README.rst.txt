:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'odamnet'
.. highlight: bash

odamnet
=======

.. conda:recipe:: odamnet
   :replaces_section_title:
   :noindex:

   Study molecular relationships between chemicals and rare diseases

   :homepage: https://pypi.org/project/ODAMNet/1.1.0/
   :developer docs: https://github.com/MOohTus/ODAMNet/tree/v1.1.0
   :license: MIT
   :recipe: /`odamnet <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odamnet>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/odamnet/meta.yaml>`_

   


.. conda:package:: odamnet

   |downloads_odamnet| |docker_odamnet|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on alive-progress: ``>=2.4.1``
   :depends on click: ``>=8.0.1``
   :depends on click-option-group: ``>=0.5.3``
   :depends on docutils: ``0.18.1``
   :depends on multixrank: ``>=0.1``
   :depends on ndex2: ``>=3.5.0``
   :depends on networkx: ``2.5``
   :depends on pandas: ``>=1.3.5``
   :depends on python: ``>=3.9``
   :depends on requests: ``>=2.27.1``
   :depends on scipy: ``>=1.7.3``
   :depends on sparqlwrapper: ``>=1.8.5``
   :depends on statsmodels: ``>=0.13.2``

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

    pixi global install odamnet

to add into an existing workspace instead, run::

    pixi add odamnet

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install odamnet

Alternatively, to install into a new environment, run::

    conda create -n envname odamnet

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/odamnet:<tag>

(see `odamnet/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_odamnet| image:: https://img.shields.io/conda/dn/bioconda/odamnet.svg?style=flat
   :target: https://anaconda.org/bioconda/odamnet
   :alt:   (downloads)
.. |docker_odamnet| image:: https://quay.io/repository/biocontainers/odamnet/status
   :target: https://quay.io/repository/biocontainers/odamnet
.. _`odamnet/tags`: https://quay.io/repository/biocontainers/odamnet?tab=tags


.. raw:: html

    <script>
        var package = "odamnet";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/odamnet/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/odamnet/README.html