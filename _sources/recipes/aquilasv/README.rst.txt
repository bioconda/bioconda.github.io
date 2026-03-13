:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'aquilasv'
.. highlight: bash

aquilasv
========

.. conda:recipe:: aquilasv
   :replaces_section_title:
   :noindex:

   A region\-based diploid assembly and variants calling tool

   :homepage: https://github.com/maiziezhoulab/AquilaSV
   :license: MIT
   :recipe: /`aquilasv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquilasv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/aquilasv/meta.yaml>`_

   


.. conda:package:: aquilasv

   |downloads_aquilasv| |docker_aquilasv|

   :versions:
      
      

      ``1.5-0``,  ``1.4-0``,  ``1.3-0``,  ``1.1-0``

      

   
   :depends on minimap2: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3``
   :depends on samtools: 
   :depends on scipy: 
   :depends on spades: 

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

    pixi global install aquilasv

to add into an existing workspace instead, run::

    pixi add aquilasv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install aquilasv

Alternatively, to install into a new environment, run::

    conda create -n envname aquilasv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/aquilasv:<tag>

(see `aquilasv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_aquilasv| image:: https://img.shields.io/conda/dn/bioconda/aquilasv.svg?style=flat
   :target: https://anaconda.org/bioconda/aquilasv
   :alt:   (downloads)
.. |docker_aquilasv| image:: https://quay.io/repository/biocontainers/aquilasv/status
   :target: https://quay.io/repository/biocontainers/aquilasv
.. _`aquilasv/tags`: https://quay.io/repository/biocontainers/aquilasv?tab=tags


.. raw:: html

    <script>
        var package = "aquilasv";
        var versions = ["1.5","1.4","1.3","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/aquilasv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/aquilasv/README.html