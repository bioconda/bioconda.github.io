:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lohhla'
.. highlight: bash

lohhla
======

.. conda:recipe:: lohhla
   :replaces_section_title:
   :noindex:

   A computational tool to evaluate HLA loss using next\-generation sequencing data.

   :homepage: https://bitbucket.org/mcgranahanlab/lohhla
   :license: UNKNOWN
   :recipe: /`lohhla <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lohhla>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lohhla/meta.yaml>`_

   


.. conda:package:: lohhla

   |downloads_lohhla| |docker_lohhla|

   :versions:
      
      

      ``20171108-3``,  ``20171108-2``,  ``20171108-1``,  ``20171108-0``

      

   
   :depends on bedtools: 
   :depends on bioconductor-biostrings: 
   :depends on bioconductor-rsamtools: 
   :depends on novoalign: 
   :depends on picard: 
   :depends on r-base: 
   :depends on r-beeswarm: 
   :depends on r-optparse: ``<1.6.4``
   :depends on r-seqinr: 
   :depends on r-zoo: 
   :depends on samtools: 

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

    pixi global install lohhla

to add into an existing workspace instead, run::

    pixi add lohhla

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lohhla

Alternatively, to install into a new environment, run::

    conda create -n envname lohhla

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lohhla:<tag>

(see `lohhla/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lohhla| image:: https://img.shields.io/conda/dn/bioconda/lohhla.svg?style=flat
   :target: https://anaconda.org/bioconda/lohhla
   :alt:   (downloads)
.. |docker_lohhla| image:: https://quay.io/repository/biocontainers/lohhla/status
   :target: https://quay.io/repository/biocontainers/lohhla
.. _`lohhla/tags`: https://quay.io/repository/biocontainers/lohhla?tab=tags


.. raw:: html

    <script>
        var package = "lohhla";
        var versions = ["20171108","20171108","20171108","20171108"];
    </script>





Notes
-----
The tool is available as command \`lohhla\`.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lohhla/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lohhla/README.html