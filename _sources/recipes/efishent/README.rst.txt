:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'efishent'
.. highlight: bash

efishent
========

.. conda:recipe:: efishent
   :replaces_section_title:
   :noindex:

   A tool to design RNA FISH oligos\/probes

   :homepage: https://github.com/bbquercus/eFISHent/
   :license: MIT / MIT
   :recipe: /`efishent <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/efishent>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/efishent/meta.yaml>`_

   


.. conda:package:: efishent

   |downloads_efishent| |docker_efishent|

   :versions:
      
      

      ``0.0.5-0``,  ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on bowtie: 
   :depends on entrez-direct: 
   :depends on gtfparse: 
   :depends on jellyfish: 
   :depends on luigi: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyarrow: 
   :depends on pyomo: 
   :depends on pysam: 
   :depends on python: ``>=3.9``
   :depends on rnastructure: 
   :depends on samtools: 
   :depends on tqdm: 

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

    pixi global install efishent

to add into an existing workspace instead, run::

    pixi add efishent

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install efishent

Alternatively, to install into a new environment, run::

    conda create -n envname efishent

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/efishent:<tag>

(see `efishent/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_efishent| image:: https://img.shields.io/conda/dn/bioconda/efishent.svg?style=flat
   :target: https://anaconda.org/bioconda/efishent
   :alt:   (downloads)
.. |docker_efishent| image:: https://quay.io/repository/biocontainers/efishent/status
   :target: https://quay.io/repository/biocontainers/efishent
.. _`efishent/tags`: https://quay.io/repository/biocontainers/efishent?tab=tags


.. raw:: html

    <script>
        var package = "efishent";
        var versions = ["0.0.5","0.0.4","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/efishent/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/efishent/README.html