:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phaser'
.. highlight: bash

phaser
======

.. conda:recipe:: phaser
   :replaces_section_title:
   :noindex:

   phASEr performs haplotype phasing and provides measures of haplotypic expression for RNA based assays.

   :homepage: https://github.com/secastel/phaser
   :license: file
   :recipe: /`phaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phaser/meta.yaml>`_

   


.. conda:package:: phaser

   |downloads_phaser| |docker_phaser|

   :versions:
      
      

      ``0.1.1ad5f89-0``

      

   
   :depends on intervaltree: 
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on pysam: 
   :depends on python: ``>=2.7,<2.8.0a0``
   :depends on python_abi: ``2.7.* *_cp27mu``
   :depends on pyvcf: 
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

    pixi global install phaser

to add into an existing workspace instead, run::

    pixi add phaser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phaser

Alternatively, to install into a new environment, run::

    conda create -n envname phaser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phaser:<tag>

(see `phaser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phaser| image:: https://img.shields.io/conda/dn/bioconda/phaser.svg?style=flat
   :target: https://anaconda.org/bioconda/phaser
   :alt:   (downloads)
.. |docker_phaser| image:: https://quay.io/repository/biocontainers/phaser/status
   :target: https://quay.io/repository/biocontainers/phaser
.. _`phaser/tags`: https://quay.io/repository/biocontainers/phaser?tab=tags


.. raw:: html

    <script>
        var package = "phaser";
        var versions = ["0.1.1ad5f89"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phaser/README.html