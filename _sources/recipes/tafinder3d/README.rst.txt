:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tafinder3d'
.. highlight: bash

tafinder3d
==========

.. conda:recipe:: tafinder3d
   :replaces_section_title:
   :noindex:

   Toxin\-antitoxin system identification with 3D structure\-based searching

   :homepage: https://github.com/schmigle/TAfinder3D
   :license: MIT
   :recipe: /`tafinder3d <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tafinder3d>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tafinder3d/meta.yaml>`_

   TAfinder3D identifies Types I\-VIII toxin\-antitoxin loci in bacterial genomes
   using sequence homology \(MMseqs2\)\, domain detection \(HMMER\)\, and 3D
   structure\-based searching \(Foldseek with GPU acceleration\).



.. conda:package:: tafinder3d

   |downloads_tafinder3d| |docker_tafinder3d|

   :versions:
      
      

      ``1.0.9-0``,  ``1.0.7-0``

      

   
   :depends on biopython: 
   :depends on foldseek: 
   :depends on hmmer: ``>=3.4``
   :depends on mmseqs2: 
   :depends on numpy: ``>=2.0``
   :depends on pandas: ``>=2.0``
   :depends on prodigal: ``>=2.6``
   :depends on prodigal-gv: 
   :depends on protobuf: 
   :depends on python: ``>=3.9,<3.13``
   :depends on pytorch: 
   :depends on sentencepiece: 
   :depends on transformers: 

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

    pixi global install tafinder3d

to add into an existing workspace instead, run::

    pixi add tafinder3d

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tafinder3d

Alternatively, to install into a new environment, run::

    conda create -n envname tafinder3d

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tafinder3d:<tag>

(see `tafinder3d/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tafinder3d| image:: https://img.shields.io/conda/dn/bioconda/tafinder3d.svg?style=flat
   :target: https://anaconda.org/bioconda/tafinder3d
   :alt:   (downloads)
.. |docker_tafinder3d| image:: https://quay.io/repository/biocontainers/tafinder3d/status
   :target: https://quay.io/repository/biocontainers/tafinder3d
.. _`tafinder3d/tags`: https://quay.io/repository/biocontainers/tafinder3d?tab=tags


.. raw:: html

    <script>
        var package = "tafinder3d";
        var versions = ["1.0.9","1.0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tafinder3d/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tafinder3d/README.html