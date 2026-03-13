:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'haphpipe'
.. highlight: bash

haphpipe
========

.. conda:recipe:: haphpipe
   :replaces_section_title:
   :noindex:

   HAplotype and PHylodynamics pipeline for viral assembly\, population genetics\, and phylodynamics.

   :homepage: https://github.com/gwcbi/haphpipe
   :documentation: https://gwcbi.github.io/haphpipe_docs/
   
   :license: GPL License
   :recipe: /`haphpipe <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphpipe>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/haphpipe/meta.yaml>`_

   


.. conda:package:: haphpipe

   |downloads_haphpipe| |docker_haphpipe|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``,  ``1.0.0-1``,  ``1.0.0-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on flash: 
   :depends on freebayes: 
   :depends on future: 
   :depends on gatk: ``3.8.*``
   :depends on gsutil: 
   :depends on mafft: 
   :depends on modeltest-ng: 
   :depends on mummer: 
   :depends on picard: 
   :depends on python: ``>=3.7``
   :depends on pyyaml: 
   :depends on raxml-ng: 
   :depends on samtools: ``>=1.9``
   :depends on seqtk: 
   :depends on sierrapy: 
   :depends on spades: 
   :depends on sra-tools: 
   :depends on trimmomatic: 

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

    pixi global install haphpipe

to add into an existing workspace instead, run::

    pixi add haphpipe

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install haphpipe

Alternatively, to install into a new environment, run::

    conda create -n envname haphpipe

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/haphpipe:<tag>

(see `haphpipe/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_haphpipe| image:: https://img.shields.io/conda/dn/bioconda/haphpipe.svg?style=flat
   :target: https://anaconda.org/bioconda/haphpipe
   :alt:   (downloads)
.. |docker_haphpipe| image:: https://quay.io/repository/biocontainers/haphpipe/status
   :target: https://quay.io/repository/biocontainers/haphpipe
.. _`haphpipe/tags`: https://quay.io/repository/biocontainers/haphpipe?tab=tags


.. raw:: html

    <script>
        var package = "haphpipe";
        var versions = ["1.0.3","1.0.2","1.0.1","1.0.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/haphpipe/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/haphpipe/README.html