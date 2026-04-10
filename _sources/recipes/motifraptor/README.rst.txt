:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'motifraptor'
.. highlight: bash

motifraptor
===========

.. conda:recipe:: motifraptor
   :replaces_section_title:
   :noindex:

   Motif\-centric analysis on GWAS data

   :homepage: https://github.com/pinellolab/MotifRaptor
   :license: Partners
   :recipe: /`motifraptor <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifraptor>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/motifraptor/meta.yaml>`_

   


.. conda:package:: motifraptor

   |downloads_motifraptor| |docker_motifraptor|

   :versions:
      
      

      ``0.3.0-5``,  ``0.3.0-4``,  ``0.3.0-3``,  ``0.3.0-2``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.4-0``,  ``0.2.3-1``,  ``0.2.3-0``

      

   
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.17.5,<2.0a0``
   :depends on pandas: 
   :depends on pybedtools: 
   :depends on pybigwig: 
   :depends on python: ``>=3.6,<3.7.0a0``
   :depends on python_abi: ``3.6.* *_cp36m``
   :depends on scipy: 
   :depends on seaborn: ``0.9.0.*``
   :depends on twobitreader: 

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

    pixi global install motifraptor

to add into an existing workspace instead, run::

    pixi add motifraptor

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install motifraptor

Alternatively, to install into a new environment, run::

    conda create -n envname motifraptor

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/motifraptor:<tag>

(see `motifraptor/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_motifraptor| image:: https://img.shields.io/conda/dn/bioconda/motifraptor.svg?style=flat
   :target: https://anaconda.org/bioconda/motifraptor
   :alt:   (downloads)
.. |docker_motifraptor| image:: https://quay.io/repository/biocontainers/motifraptor/status
   :target: https://quay.io/repository/biocontainers/motifraptor
.. _`motifraptor/tags`: https://quay.io/repository/biocontainers/motifraptor?tab=tags


.. raw:: html

    <script>
        var package = "motifraptor";
        var versions = ["0.3.0","0.3.0","0.3.0","0.3.0","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/motifraptor/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/motifraptor/README.html