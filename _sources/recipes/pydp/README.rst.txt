:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pydp'
.. highlight: bash

pydp
====

.. conda:recipe:: pydp
   :replaces_section_title:
   :noindex:

   PyDP is library for implementing Dirichlet Process mixture models \(DPMM\)

   :homepage: https://github.com/Roth-Lab/pydp/
   :license: GPL v3
   :recipe: /`pydp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pydp/meta.yaml>`_

   


.. conda:package:: pydp

   |downloads_pydp| |docker_pydp|

   :versions:
      
      

      ``0.2.4-0``

      

   
   :depends on numba: 
   :depends on numpy: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install pydp

to add into an existing workspace instead, run::

    pixi add pydp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pydp

Alternatively, to install into a new environment, run::

    conda create -n envname pydp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pydp:<tag>

(see `pydp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pydp| image:: https://img.shields.io/conda/dn/bioconda/pydp.svg?style=flat
   :target: https://anaconda.org/bioconda/pydp
   :alt:   (downloads)
.. |docker_pydp| image:: https://quay.io/repository/biocontainers/pydp/status
   :target: https://quay.io/repository/biocontainers/pydp
.. _`pydp/tags`: https://quay.io/repository/biocontainers/pydp?tab=tags


.. raw:: html

    <script>
        var package = "pydp";
        var versions = ["0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pydp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pydp/README.html