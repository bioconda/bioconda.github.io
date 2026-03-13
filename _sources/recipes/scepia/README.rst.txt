:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scepia'
.. highlight: bash

scepia
======

.. conda:recipe:: scepia
   :replaces_section_title:
   :noindex:

   Single Cell Epigenome\-based Inference of Activity

   :homepage: https://github.com/vanheeringen-lab/scepia
   :license: MIT / MIT
   :recipe: /`scepia <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scepia>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scepia/meta.yaml>`_
   :links: biotools: :biotools:`scepia`

   


.. conda:package:: scepia

   |downloads_scepia| |docker_scepia|

   :versions:
      
      

      ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends on adjusttext: 
   :depends on geosketch: 
   :depends on gimmemotifs: ``>=0.15.2,<=0.17.1``
   :depends on leidenalg: 
   :depends on loguru: 
   :depends on louvain: 
   :depends on python: ``>=3.7``
   :depends on scanpy: 

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

    pixi global install scepia

to add into an existing workspace instead, run::

    pixi add scepia

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scepia

Alternatively, to install into a new environment, run::

    conda create -n envname scepia

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scepia:<tag>

(see `scepia/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scepia| image:: https://img.shields.io/conda/dn/bioconda/scepia.svg?style=flat
   :target: https://anaconda.org/bioconda/scepia
   :alt:   (downloads)
.. |docker_scepia| image:: https://quay.io/repository/biocontainers/scepia/status
   :target: https://quay.io/repository/biocontainers/scepia
.. _`scepia/tags`: https://quay.io/repository/biocontainers/scepia?tab=tags


.. raw:: html

    <script>
        var package = "scepia";
        var versions = ["0.5.1","0.5.1","0.5.0","0.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scepia/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scepia/README.html