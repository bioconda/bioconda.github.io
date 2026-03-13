:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'vcf2pandas'
.. highlight: bash

vcf2pandas
==========

.. conda:recipe:: vcf2pandas
   :replaces_section_title:
   :noindex:

   Package to convert a VCF into a pandas dataframe.

   :homepage: https://github.com/trentzz/vcf2pandas
   :license: MIT / MIT
   :recipe: /`vcf2pandas <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2pandas>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/vcf2pandas/meta.yaml>`_

   


.. conda:package:: vcf2pandas

   |downloads_vcf2pandas| |docker_vcf2pandas|

   :versions:
      
      

      ``0.2.0-0``

      

   
   :depends on pandas: ``>=2.1.0``
   :depends on pysam: ``>=0.22.1``
   :depends on pytest: ``>=8.3.5``
   :depends on python: ``>=3.10``

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

    pixi global install vcf2pandas

to add into an existing workspace instead, run::

    pixi add vcf2pandas

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install vcf2pandas

Alternatively, to install into a new environment, run::

    conda create -n envname vcf2pandas

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/vcf2pandas:<tag>

(see `vcf2pandas/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_vcf2pandas| image:: https://img.shields.io/conda/dn/bioconda/vcf2pandas.svg?style=flat
   :target: https://anaconda.org/bioconda/vcf2pandas
   :alt:   (downloads)
.. |docker_vcf2pandas| image:: https://quay.io/repository/biocontainers/vcf2pandas/status
   :target: https://quay.io/repository/biocontainers/vcf2pandas
.. _`vcf2pandas/tags`: https://quay.io/repository/biocontainers/vcf2pandas?tab=tags


.. raw:: html

    <script>
        var package = "vcf2pandas";
        var versions = ["0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/vcf2pandas/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/vcf2pandas/README.html