:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquila_stlfr'
.. highlight: bash

aquila_stlfr
============

.. conda:recipe:: aquila_stlfr
   :replaces_section_title:
   :noindex:

   Diploid assembly and variants calling for stLFR and hybrid assembler for both linked\-reads.

   :homepage: https://github.com/maiziex/Aquila_stLFR
   :license: MIT
   :recipe: /`aquila_stlfr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_stlfr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquila_stlfr/meta.yaml>`_

   


.. conda:package:: aquila_stlfr

   |downloads_aquila_stlfr| |docker_aquila_stlfr|

   :versions:
      
      

      ``1.2.11-0``,  ``1.2.10-0``,  ``1.2.9-0``,  ``1.2.8-0``,  ``1.2.4-0``,  ``1.2.1-0``,  ``1.1-2``,  ``1.1-0``

      

   
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on samtools: 
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

    pixi global install aquila_stlfr

to add into an existing workspace instead, run::

    pixi add aquila_stlfr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aquila_stlfr

Alternatively, to install into a new environment, run::

    conda create -n envname aquila_stlfr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aquila_stlfr:<tag>

(see `aquila_stlfr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aquila_stlfr| image:: https://img.shields.io/conda/dn/bioconda/aquila_stlfr.svg?style=flat
   :target: https://anaconda.org/bioconda/aquila_stlfr
   :alt:   (downloads)
.. |docker_aquila_stlfr| image:: https://quay.io/repository/biocontainers/aquila_stlfr/status
   :target: https://quay.io/repository/biocontainers/aquila_stlfr
.. _`aquila_stlfr/tags`: https://quay.io/repository/biocontainers/aquila_stlfr?tab=tags


.. raw:: html

    <script>
        var package = "aquila_stlfr";
        var versions = ["1.2.11","1.2.10","1.2.9","1.2.8","1.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquila_stlfr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquila_stlfr/README.html