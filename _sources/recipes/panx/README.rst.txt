:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panx'
.. highlight: bash

panx
====

.. conda:recipe:: panx/1.5.0
   :replaces_section_title:
   :noindex:

   Microbial pan\-genome analysis and exploration tool

   :homepage: http://pangenome.de
   :license: GNU General Public License v3.0
   :recipe: /`panx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panx>`_/`1.5.0 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panx/1.5.0>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panx/1.5.0/meta.yaml>`_

   


.. conda:package:: panx

   |downloads_panx| |docker_panx|

   :versions:
      
      

      ``1.6.0-0``,  ``1.5.0-0``

      

   
   :depends on biopython: 
   :depends on diamond: 
   :depends on ete2: 
   :depends on fasttree: 
   :depends on mafft: 
   :depends on mcl: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``2.7*``
   :depends on raxml: 
   :depends on scipy: 
   :depends on treetime: 

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

    pixi global install panx

to add into an existing workspace instead, run::

    pixi add panx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panx

Alternatively, to install into a new environment, run::

    conda create -n envname panx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panx:<tag>

(see `panx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panx| image:: https://img.shields.io/conda/dn/bioconda/panx.svg?style=flat
   :target: https://anaconda.org/bioconda/panx
   :alt:   (downloads)
.. |docker_panx| image:: https://quay.io/repository/biocontainers/panx/status
   :target: https://quay.io/repository/biocontainers/panx
.. _`panx/tags`: https://quay.io/repository/biocontainers/panx?tab=tags


.. raw:: html

    <script>
        var package = "panx";
        var versions = ["1.6.0","1.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panx/README.html