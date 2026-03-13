:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf-annotator'
.. highlight: bash

vcf-annotator
=============

.. conda:recipe:: vcf-annotator
   :replaces_section_title:
   :noindex:

   Use the reference GenBank file to add biological annotations to the variant calls in a VCF.

   :homepage: https://github.com/rpetit3/vcf-annotator
   :license: MIT
   :recipe: /`vcf-annotator <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-annotator>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf-annotator/meta.yaml>`_

   


.. conda:package:: vcf-annotator

   |downloads_vcf-annotator| |docker_vcf-annotator|

   :versions:
      
      

      ``0.7-0``,  ``0.6-1``,  ``0.6-0``,  ``0.5-1``,  ``0.5-0``

      

   
   :depends on biopython: 
   :depends on python: ``>=3``
   :depends on pyvcf: 

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

    pixi global install vcf-annotator

to add into an existing workspace instead, run::

    pixi add vcf-annotator

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf-annotator

Alternatively, to install into a new environment, run::

    conda create -n envname vcf-annotator

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf-annotator:<tag>

(see `vcf-annotator/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf-annotator| image:: https://img.shields.io/conda/dn/bioconda/vcf-annotator.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf-annotator
   :alt:   (downloads)
.. |docker_vcf-annotator| image:: https://quay.io/repository/biocontainers/vcf-annotator/status
   :target: https://quay.io/repository/biocontainers/vcf-annotator
.. _`vcf-annotator/tags`: https://quay.io/repository/biocontainers/vcf-annotator?tab=tags


.. raw:: html

    <script>
        var package = "vcf-annotator";
        var versions = ["0.7","0.6","0.6","0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf-annotator/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf-annotator/README.html