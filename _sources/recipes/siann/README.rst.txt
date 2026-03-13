:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'siann'
.. highlight: bash

siann
=====

.. conda:recipe:: siann
   :replaces_section_title:
   :noindex:

   SIANN was created to allow creation of local small sets of bacterial\/viral genomes to perform strain level differentiation from fastq data

   :homepage: https://github.com/signaturescience/siann/wiki
   :license: GPL3
   :recipe: /`siann <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siann>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/siann/meta.yaml>`_

   


.. conda:package:: siann

   |downloads_siann| |docker_siann|

   :versions:
      
      

      ``1.3-0``,  ``1.2-1``,  ``1.2-0``,  ``1.1-0``,  ``1.0-0``

      

   
   :depends on bowtie2: 
   :depends on mummer: 
   :depends on parallel: 
   :depends on python: ``2.*``
   :depends on scipy: 
   :depends on time: 

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

    pixi global install siann

to add into an existing workspace instead, run::

    pixi add siann

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install siann

Alternatively, to install into a new environment, run::

    conda create -n envname siann

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/siann:<tag>

(see `siann/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_siann| image:: https://img.shields.io/conda/dn/bioconda/siann.svg?style=flat
   :target: https://anaconda.org/bioconda/siann
   :alt:   (downloads)
.. |docker_siann| image:: https://quay.io/repository/biocontainers/siann/status
   :target: https://quay.io/repository/biocontainers/siann
.. _`siann/tags`: https://quay.io/repository/biocontainers/siann?tab=tags


.. raw:: html

    <script>
        var package = "siann";
        var versions = ["1.3","1.2","1.2","1.1","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/siann/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/siann/README.html