:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ervmancer'
.. highlight: bash

ervmancer
=========

.. conda:recipe:: ervmancer
   :replaces_section_title:
   :noindex:

   Quantifies HERV short read RNA sequencing expression data

   :homepage: https://github.com/AuslanderLab/ervmancer
   :license: MIT / MIT
   :recipe: /`ervmancer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervmancer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ervmancer/meta.yaml>`_

   ERVmancer quantifies Human Endogenous Retrovirus \(HERV\) short read RNA sequencing expression data by aligning short reads to a curated subset of HERVs and then resolves ambiguity in alignment using a pre\-computed HERV phylogenetic tree.


.. conda:package:: ervmancer

   |downloads_ervmancer| |docker_ervmancer|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``,  ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on bedtools: ``>=2.29.2``
   :depends on bowtie2: ``>=2.4.2``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.8,<3.11``
   :depends on regex: 
   :depends on samtools: ``>=1.20``
   :depends on setuptools: 
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

    pixi global install ervmancer

to add into an existing workspace instead, run::

    pixi add ervmancer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ervmancer

Alternatively, to install into a new environment, run::

    conda create -n envname ervmancer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ervmancer:<tag>

(see `ervmancer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ervmancer| image:: https://img.shields.io/conda/dn/bioconda/ervmancer.svg?style=flat
   :target: https://anaconda.org/bioconda/ervmancer
   :alt:   (downloads)
.. |docker_ervmancer| image:: https://quay.io/repository/biocontainers/ervmancer/status
   :target: https://quay.io/repository/biocontainers/ervmancer
.. _`ervmancer/tags`: https://quay.io/repository/biocontainers/ervmancer?tab=tags


.. raw:: html

    <script>
        var package = "ervmancer";
        var versions = ["0.0.4","0.0.3","0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ervmancer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ervmancer/README.html