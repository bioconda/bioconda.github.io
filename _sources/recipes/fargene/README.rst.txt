:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fargene'
.. highlight: bash

fargene
=======

.. conda:recipe:: fargene
   :replaces_section_title:
   :noindex:

   Fragmented Antibiotic Resistance Gene iENntifiEr takes either fragmented metagenomic data or longer sequences as input and predicts and delivers full\-length antiobiotic resistance genes as output

   :homepage: https://github.com/fannyhb/fargene
   :license: MIT
   :recipe: /`fargene <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fargene>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fargene/meta.yaml>`_

   


.. conda:package:: fargene

   |downloads_fargene| |docker_fargene|

   :versions:
      
      

      ``0.1-4``,  ``0.1-3``,  ``0.1-2``,  ``0.1-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on clustalo: 
   :depends on emboss: 
   :depends on hmmer: 
   :depends on matplotlib: 
   :depends on numpy: 
   :depends on pip: 
   :depends on prodigal: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on pyyaml: 
   :depends on seqtk: 
   :depends on spades: 
   :depends on trim-galore: 

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

    pixi global install fargene

to add into an existing workspace instead, run::

    pixi add fargene

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fargene

Alternatively, to install into a new environment, run::

    conda create -n envname fargene

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fargene:<tag>

(see `fargene/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fargene| image:: https://img.shields.io/conda/dn/bioconda/fargene.svg?style=flat
   :target: https://anaconda.org/bioconda/fargene
   :alt:   (downloads)
.. |docker_fargene| image:: https://quay.io/repository/biocontainers/fargene/status
   :target: https://quay.io/repository/biocontainers/fargene
.. _`fargene/tags`: https://quay.io/repository/biocontainers/fargene?tab=tags


.. raw:: html

    <script>
        var package = "fargene";
        var versions = ["0.1","0.1","0.1","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fargene/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fargene/README.html