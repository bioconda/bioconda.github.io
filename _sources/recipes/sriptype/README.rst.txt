:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sriptype'
.. highlight: bash

sriptype
========

.. conda:recipe:: sriptype
   :replaces_section_title:
   :noindex:

   SRIPType \- A bioinformatics tool for 51k\-SINE\-RIP chip genotyping

   :homepage: https://github.com/mobilome/SRIPType
   :license: MIT / MIT
   :recipe: /`sriptype <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sriptype>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sriptype/meta.yaml>`_

   


.. conda:package:: sriptype

   |downloads_sriptype| |docker_sriptype|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bedtools: 
   :depends on blast: 
   :depends on flash: 
   :depends on pigz: 
   :depends on python: ``>=3.8``
   :depends on samtools: 
   :depends on seqkit: 

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

    pixi global install sriptype

to add into an existing workspace instead, run::

    pixi add sriptype

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sriptype

Alternatively, to install into a new environment, run::

    conda create -n envname sriptype

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sriptype:<tag>

(see `sriptype/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sriptype| image:: https://img.shields.io/conda/dn/bioconda/sriptype.svg?style=flat
   :target: https://anaconda.org/bioconda/sriptype
   :alt:   (downloads)
.. |docker_sriptype| image:: https://quay.io/repository/biocontainers/sriptype/status
   :target: https://quay.io/repository/biocontainers/sriptype
.. _`sriptype/tags`: https://quay.io/repository/biocontainers/sriptype?tab=tags


.. raw:: html

    <script>
        var package = "sriptype";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sriptype/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sriptype/README.html