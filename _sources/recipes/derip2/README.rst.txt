:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'derip2'
.. highlight: bash

derip2
======

.. conda:recipe:: derip2
   :replaces_section_title:
   :noindex:

   Predict ancestral sequence of fungal repeat elements by correcting for RIP\-like mutations in multi\-sequence DNA alignments.

   :homepage: https://github.com/Adamtaranto/deRIP2
   :license: MIT
   :recipe: /`derip2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derip2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/derip2/meta.yaml>`_

   


.. conda:package:: derip2

   |downloads_derip2| |docker_derip2|

   :versions:
      
      

      ``0.4.1-0``,  ``0.4.0-0``

      

   
   :depends on biopython: ``>1.80``
   :depends on click: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.8``
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

    pixi global install derip2

to add into an existing workspace instead, run::

    pixi add derip2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install derip2

Alternatively, to install into a new environment, run::

    conda create -n envname derip2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/derip2:<tag>

(see `derip2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_derip2| image:: https://img.shields.io/conda/dn/bioconda/derip2.svg?style=flat
   :target: https://anaconda.org/bioconda/derip2
   :alt:   (downloads)
.. |docker_derip2| image:: https://quay.io/repository/biocontainers/derip2/status
   :target: https://quay.io/repository/biocontainers/derip2
.. _`derip2/tags`: https://quay.io/repository/biocontainers/derip2?tab=tags


.. raw:: html

    <script>
        var package = "derip2";
        var versions = ["0.4.1","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/derip2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/derip2/README.html