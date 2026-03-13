:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zga'
.. highlight: bash

zga
===

.. conda:recipe:: zga
   :replaces_section_title:
   :noindex:

   Prokaryotic genome assembly and annotation pipeline

   :homepage: https://github.com/laxeye/zga
   :developer docs: https://github.com/laxeye/zga/
   :license: BSD / BSD-3-Clause
   :recipe: /`zga <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zga>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zga/meta.yaml>`_

   


.. conda:package:: zga

   |downloads_zga| |docker_zga|

   :versions:
      
      

      ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9.post2-1``,  ``0.0.9.post2-0``,  ``0.0.9-0``,  ``0.0.8-0``,  ``0.0.7-0``

      

   
   :depends on bakta: 
   :depends on bbmap: 
   :depends on biopython: 
   :depends on blast: 
   :depends on checkm-genome: ``>=1.1.0``
   :depends on fastp: 
   :depends on flye: ``>=2.6``
   :depends on mash: ``>=2``
   :depends on minimap2: 
   :depends on nxtrim: 
   :depends on python: ``>=3.8``
   :depends on racon: 
   :depends on samtools: ``>=1.9``
   :depends on spades: ``>=3.12``
   :depends on unicycler: 

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

    pixi global install zga

to add into an existing workspace instead, run::

    pixi add zga

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zga

Alternatively, to install into a new environment, run::

    conda create -n envname zga

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zga:<tag>

(see `zga/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zga| image:: https://img.shields.io/conda/dn/bioconda/zga.svg?style=flat
   :target: https://anaconda.org/bioconda/zga
   :alt:   (downloads)
.. |docker_zga| image:: https://quay.io/repository/biocontainers/zga/status
   :target: https://quay.io/repository/biocontainers/zga
.. _`zga/tags`: https://quay.io/repository/biocontainers/zga?tab=tags


.. raw:: html

    <script>
        var package = "zga";
        var versions = ["0.1.1","0.1.0","0.0.9.post2","0.0.9.post2","0.0.9"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zga/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zga/README.html