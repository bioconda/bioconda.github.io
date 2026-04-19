:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eukfinder'
.. highlight: bash

eukfinder
=========

.. conda:recipe:: eukfinder
   :replaces_section_title:
   :noindex:

   Eukfinder is a tool for detecting eukaryotic sequences in metagenomic data.

   :homepage: https://github.com/RogerLab/Eukfinder
   :license: MIT
   :recipe: /`eukfinder <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukfinder>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eukfinder/meta.yaml>`_

   


.. conda:package:: eukfinder

   |downloads_eukfinder| |docker_eukfinder|

   :versions:
      
      

      ``1.2.4-0``,  ``1.2.3-0``

      

   
   :depends on bowtie2: 
   :depends on centrifuge: 
   :depends on joblib: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pip: 
   :depends on pyqt: ``5.*``
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on seqkit: 
   :depends on spades: 
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

    pixi global install eukfinder

to add into an existing workspace instead, run::

    pixi add eukfinder

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eukfinder

Alternatively, to install into a new environment, run::

    conda create -n envname eukfinder

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eukfinder:<tag>

(see `eukfinder/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eukfinder| image:: https://img.shields.io/conda/dn/bioconda/eukfinder.svg?style=flat
   :target: https://anaconda.org/bioconda/eukfinder
   :alt:   (downloads)
.. |docker_eukfinder| image:: https://quay.io/repository/biocontainers/eukfinder/status
   :target: https://quay.io/repository/biocontainers/eukfinder
.. _`eukfinder/tags`: https://quay.io/repository/biocontainers/eukfinder?tab=tags


.. raw:: html

    <script>
        var package = "eukfinder";
        var versions = ["1.2.4","1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eukfinder/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eukfinder/README.html