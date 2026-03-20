:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'somatem'
.. highlight: bash

somatem
=======

.. conda:recipe:: somatem
   :replaces_section_title:
   :noindex:

   Best practices pipeline for long\-read metagenomics analysis.

   :homepage: https://github.com/treangenlab/Somatem
   :documentation: https://github.com/treangenlab/Somatem#readme
   
   :license: GPL-3.0
   :recipe: /`somatem <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatem>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/somatem/meta.yaml>`_

   


.. conda:package:: somatem

   |downloads_somatem| |docker_somatem|

   :versions:
      
      

      ``0.7.1-0``

      

   
   :depends on bash: 
   :depends on coreutils: 
   :depends on micromamba: 
   :depends on nextflow: ``>=25.10.2``

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

    pixi global install somatem

to add into an existing workspace instead, run::

    pixi add somatem

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install somatem

Alternatively, to install into a new environment, run::

    conda create -n envname somatem

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/somatem:<tag>

(see `somatem/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_somatem| image:: https://img.shields.io/conda/dn/bioconda/somatem.svg?style=flat
   :target: https://anaconda.org/bioconda/somatem
   :alt:   (downloads)
.. |docker_somatem| image:: https://quay.io/repository/biocontainers/somatem/status
   :target: https://quay.io/repository/biocontainers/somatem
.. _`somatem/tags`: https://quay.io/repository/biocontainers/somatem?tab=tags


.. raw:: html

    <script>
        var package = "somatem";
        var versions = ["0.7.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/somatem/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/somatem/README.html