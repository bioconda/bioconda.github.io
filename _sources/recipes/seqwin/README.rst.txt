:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqwin'
.. highlight: bash

seqwin
======

.. conda:recipe:: seqwin
   :replaces_section_title:
   :noindex:

   Ultrafast identification of signature sequences in microbial genomes

   :homepage: https://github.com/treangenlab/Seqwin
   :license: GPL3 / GPL-3.0-only
   :recipe: /`seqwin <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwin>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqwin/meta.yaml>`_

   


.. conda:package:: seqwin

   |downloads_seqwin| |docker_seqwin|

   :versions:
      
      

      ``0.2.2-1``,  ``0.2.2-0``,  ``0.2.1-0``,  ``0.2.0-1``,  ``0.2.0-0``,  ``0.1.0-2``,  ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on blast: 
   :depends on btllib: 
   :depends on mash: 
   :depends on ncbi-datasets-cli: 
   :depends on networkx: 
   :depends on numba: 
   :depends on numpy: ``>=2``
   :depends on pandas: ``>=2``
   :depends on pydantic: ``>=2``
   :depends on python: ``>=3.10``
   :depends on typer: 

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

    pixi global install seqwin

to add into an existing workspace instead, run::

    pixi add seqwin

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqwin

Alternatively, to install into a new environment, run::

    conda create -n envname seqwin

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqwin:<tag>

(see `seqwin/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqwin| image:: https://img.shields.io/conda/dn/bioconda/seqwin.svg?style=flat
   :target: https://anaconda.org/bioconda/seqwin
   :alt:   (downloads)
.. |docker_seqwin| image:: https://quay.io/repository/biocontainers/seqwin/status
   :target: https://quay.io/repository/biocontainers/seqwin
.. _`seqwin/tags`: https://quay.io/repository/biocontainers/seqwin?tab=tags


.. raw:: html

    <script>
        var package = "seqwin";
        var versions = ["0.2.2","0.2.2","0.2.1","0.2.0","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqwin/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqwin/README.html