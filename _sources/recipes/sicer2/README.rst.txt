:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sicer2'
.. highlight: bash

sicer2
======

.. conda:recipe:: sicer2
   :replaces_section_title:
   :noindex:

   Redesigned and improved ChIP\-seq broad peak calling tool SICER.

   :homepage: https://pypi.org/project/SICER2/
   :developer docs: https://github.com/zanglab/SICER2
   :license: MIT / MIT
   :recipe: /`sicer2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sicer2/meta.yaml>`_

   


.. conda:package:: sicer2

   |downloads_sicer2| |docker_sicer2|

   :versions:
      
      

      ``2.1.0-0``,  ``1.0.3-3``,  ``1.0.3-2``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on libgcc: ``>=14``
   :depends on numpy: ``>=1.21,<3``
   :depends on numpy: ``>=2.2.6,<3.0a0``
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: ``>=1``

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

    pixi global install sicer2

to add into an existing workspace instead, run::

    pixi add sicer2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sicer2

Alternatively, to install into a new environment, run::

    conda create -n envname sicer2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sicer2:<tag>

(see `sicer2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sicer2| image:: https://img.shields.io/conda/dn/bioconda/sicer2.svg?style=flat
   :target: https://anaconda.org/bioconda/sicer2
   :alt:   (downloads)
.. |docker_sicer2| image:: https://quay.io/repository/biocontainers/sicer2/status
   :target: https://quay.io/repository/biocontainers/sicer2
.. _`sicer2/tags`: https://quay.io/repository/biocontainers/sicer2?tab=tags


.. raw:: html

    <script>
        var package = "sicer2";
        var versions = ["2.1.0","1.0.3","1.0.3","1.0.3","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sicer2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sicer2/README.html