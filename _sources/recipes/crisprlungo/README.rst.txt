:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'crisprlungo'
.. highlight: bash

crisprlungo
===========

.. conda:recipe:: crisprlungo
   :replaces_section_title:
   :noindex:

   A software pipeline for analyzing single\-anchor amplicon sequencing and quantifying complex genome editing outcomes

   :homepage: https://github.com/pinellolab/CRISPRlungo
   :license: Partners
   :recipe: /`crisprlungo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprlungo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/crisprlungo/meta.yaml>`_

   


.. conda:package:: crisprlungo

   |downloads_crisprlungo| |docker_crisprlungo|

   :versions:
      
      

      ``0.1.14-0``

      

   
   :depends on biopython: 
   :depends on bowtie2: 
   :depends on cas-offinder: 
   :depends on crispresso2: 
   :depends on cutadapt: 
   :depends on numpy: ``>=1.21.6,<2.0a0``
   :depends on pandas: 
   :depends on plotly: 
   :depends on python: ``>3``
   :depends on samtools: ``>=1.17``
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

    pixi global install crisprlungo

to add into an existing workspace instead, run::

    pixi add crisprlungo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install crisprlungo

Alternatively, to install into a new environment, run::

    conda create -n envname crisprlungo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/crisprlungo:<tag>

(see `crisprlungo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_crisprlungo| image:: https://img.shields.io/conda/dn/bioconda/crisprlungo.svg?style=flat
   :target: https://anaconda.org/bioconda/crisprlungo
   :alt:   (downloads)
.. |docker_crisprlungo| image:: https://quay.io/repository/biocontainers/crisprlungo/status
   :target: https://quay.io/repository/biocontainers/crisprlungo
.. _`crisprlungo/tags`: https://quay.io/repository/biocontainers/crisprlungo?tab=tags


.. raw:: html

    <script>
        var package = "crisprlungo";
        var versions = ["0.1.14"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/crisprlungo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/crisprlungo/README.html