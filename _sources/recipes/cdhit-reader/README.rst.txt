:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cdhit-reader'
.. highlight: bash

cdhit-reader
============

.. conda:recipe:: cdhit-reader
   :replaces_section_title:
   :noindex:

   Parse CD\-HIT cluster files

   :homepage: https://github.com/telatin/cdhit-parser
   :license: MIT
   :recipe: /`cdhit-reader <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdhit-reader>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cdhit-reader/meta.yaml>`_

   


.. conda:package:: cdhit-reader

   |downloads_cdhit-reader| |docker_cdhit-reader|

   :versions:
      
      

      ``0.2.0-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.6-0``

      

   
   :depends on cd-hit: 
   :depends on click: 
   :depends on more-itertools: 
   :depends on python: ``>=3.6,<3.9``
   :depends on xopen: 

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

    pixi global install cdhit-reader

to add into an existing workspace instead, run::

    pixi add cdhit-reader

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cdhit-reader

Alternatively, to install into a new environment, run::

    conda create -n envname cdhit-reader

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cdhit-reader:<tag>

(see `cdhit-reader/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cdhit-reader| image:: https://img.shields.io/conda/dn/bioconda/cdhit-reader.svg?style=flat
   :target: https://anaconda.org/bioconda/cdhit-reader
   :alt:   (downloads)
.. |docker_cdhit-reader| image:: https://quay.io/repository/biocontainers/cdhit-reader/status
   :target: https://quay.io/repository/biocontainers/cdhit-reader
.. _`cdhit-reader/tags`: https://quay.io/repository/biocontainers/cdhit-reader?tab=tags


.. raw:: html

    <script>
        var package = "cdhit-reader";
        var versions = ["0.2.0","0.1.1","0.1.0","0.0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cdhit-reader/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cdhit-reader/README.html