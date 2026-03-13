:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2maf-umccr'
.. highlight: bash

vcf2maf-umccr
=============

.. conda:recipe:: vcf2maf-umccr
   :replaces_section_title:
   :noindex:

   Convert a VCF into a MAF where each variant is annotated to only one of all possible gene isoforms

   :homepage: https://github.com/umccr/vcf2maf/
   :license: Apache / Apache-2.0
   :recipe: /`vcf2maf-umccr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf-umccr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2maf-umccr/meta.yaml>`_

   


.. conda:package:: vcf2maf-umccr

   |downloads_vcf2maf-umccr| |docker_vcf2maf-umccr|

   :versions:
      
      

      ``1.6.21.20230511-0``

      

   
   :depends on htslib: 
   :depends on perl: 
   :depends on samtools: 

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

    pixi global install vcf2maf-umccr

to add into an existing workspace instead, run::

    pixi add vcf2maf-umccr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2maf-umccr

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2maf-umccr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2maf-umccr:<tag>

(see `vcf2maf-umccr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2maf-umccr| image:: https://img.shields.io/conda/dn/bioconda/vcf2maf-umccr.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2maf-umccr
   :alt:   (downloads)
.. |docker_vcf2maf-umccr| image:: https://quay.io/repository/biocontainers/vcf2maf-umccr/status
   :target: https://quay.io/repository/biocontainers/vcf2maf-umccr
.. _`vcf2maf-umccr/tags`: https://quay.io/repository/biocontainers/vcf2maf-umccr?tab=tags


.. raw:: html

    <script>
        var package = "vcf2maf-umccr";
        var versions = ["1.6.21.20230511"];
    </script>





Notes
-----
This package incorporates the latest changes of the original tool \[vcf2maf\]\(https\:\/\/github.com\/mskcc\/vcf2maf\)
from its main branch but released from the \[umccr fork\]\(https\:\/\/github.com\/umccr\/vcf2maf\/\). 


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2maf-umccr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2maf-umccr/README.html