:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'array-as-vcf'
.. highlight: bash

array-as-vcf
============

.. conda:recipe:: array-as-vcf
   :replaces_section_title:
   :noindex:

   Convert SNP array to VCF

   :homepage: https://github.com/LUMC/array-as-vcf
   :license: MIT / MIT
   :recipe: /`array-as-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/array-as-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/array-as-vcf/meta.yaml>`_

   


.. conda:package:: array-as-vcf

   |downloads_array-as-vcf| |docker_array-as-vcf|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.1-0``,  ``1.0.0-0``

      

   
   :depends on python: ``>=3.6``

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

    pixi global install array-as-vcf

to add into an existing workspace instead, run::

    pixi add array-as-vcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install array-as-vcf

Alternatively, to install into a new environment, run::

    conda create -n envname array-as-vcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/array-as-vcf:<tag>

(see `array-as-vcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_array-as-vcf| image:: https://img.shields.io/conda/dn/bioconda/array-as-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/array-as-vcf
   :alt:   (downloads)
.. |docker_array-as-vcf| image:: https://quay.io/repository/biocontainers/array-as-vcf/status
   :target: https://quay.io/repository/biocontainers/array-as-vcf
.. _`array-as-vcf/tags`: https://quay.io/repository/biocontainers/array-as-vcf?tab=tags


.. raw:: html

    <script>
        var package = "array-as-vcf";
        var versions = ["1.1.0","1.0.1","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/array-as-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/array-as-vcf/README.html