:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pan-plaster'
.. highlight: bash

pan-plaster
===========

.. conda:recipe:: pan-plaster
   :replaces_section_title:
   :noindex:

   Plaster is a program for quick linear pangenome construction.

   :homepage: https://gitlab.com/treangenlab/plaster
   :license: MIT
   :recipe: /`pan-plaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pan-plaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pan-plaster/meta.yaml>`_

   


.. conda:package:: pan-plaster

   |downloads_pan-plaster| |docker_pan-plaster|

   :versions:
      
      

      ``1.2.1-0``,  ``1.2.0-0``,  ``1.1.2-1``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on mummer4: 
   :depends on python: ``>=3``
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

    pixi global install pan-plaster

to add into an existing workspace instead, run::

    pixi add pan-plaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pan-plaster

Alternatively, to install into a new environment, run::

    conda create -n envname pan-plaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pan-plaster:<tag>

(see `pan-plaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pan-plaster| image:: https://img.shields.io/conda/dn/bioconda/pan-plaster.svg?style=flat
   :target: https://anaconda.org/bioconda/pan-plaster
   :alt:   (downloads)
.. |docker_pan-plaster| image:: https://quay.io/repository/biocontainers/pan-plaster/status
   :target: https://quay.io/repository/biocontainers/pan-plaster
.. _`pan-plaster/tags`: https://quay.io/repository/biocontainers/pan-plaster?tab=tags


.. raw:: html

    <script>
        var package = "pan-plaster";
        var versions = ["1.2.1","1.2.0","1.1.2","1.1.2","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pan-plaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pan-plaster/README.html