:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbintk'
.. highlight: bash

gbintk
======

.. conda:recipe:: gbintk
   :replaces_section_title:
   :noindex:

   GraphBin\-Tk\: assembly graph\-based metagenomic binning toolkit

   :homepage: https://github.com/metagentools/gbintk
   :documentation: https://gbintk.readthedocs.io/
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`gbintk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbintk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbintk/meta.yaml>`_

   GraphBin\-Tk is a toolkit that combines assembly graph\-based metagenomic bin\-refinement and binning techniques GraphBin\, GraphBin2 and MetaCoAG.



.. conda:package:: gbintk

   |downloads_gbintk| |docker_gbintk|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends on cairo: 
   :depends on cairocffi: 
   :depends on click: 
   :depends on cogent3: 
   :depends on fraggenescan: 
   :depends on graphbin: 
   :depends on graphbin2: 
   :depends on hmmer: 
   :depends on metacoag: ``>=1.2.1``
   :depends on networkx: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pkg-config: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-igraph: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on scipy: 
   :depends on tabulate: 
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

    pixi global install gbintk

to add into an existing workspace instead, run::

    pixi add gbintk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gbintk

Alternatively, to install into a new environment, run::

    conda create -n envname gbintk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gbintk:<tag>

(see `gbintk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gbintk| image:: https://img.shields.io/conda/dn/bioconda/gbintk.svg?style=flat
   :target: https://anaconda.org/bioconda/gbintk
   :alt:   (downloads)
.. |docker_gbintk| image:: https://quay.io/repository/biocontainers/gbintk/status
   :target: https://quay.io/repository/biocontainers/gbintk
.. _`gbintk/tags`: https://quay.io/repository/biocontainers/gbintk?tab=tags


.. raw:: html

    <script>
        var package = "gbintk";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbintk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbintk/README.html