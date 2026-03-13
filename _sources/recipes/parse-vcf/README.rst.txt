:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'parse-vcf'
.. highlight: bash

parse-vcf
=========

.. conda:recipe:: parse-vcf
   :replaces_section_title:
   :noindex:

   Variant Call Format parser and convenience methods

   :homepage: https://github.com/david-a-parry/parse_vcf.py
   :license: MIT / MIT
   :recipe: /`parse-vcf <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse-vcf>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/parse-vcf/meta.yaml>`_

   


.. conda:package:: parse-vcf

   |downloads_parse-vcf| |docker_parse-vcf|

   :versions:
      
      

      ``0.2.8-1``,  ``0.2.8-0``

      

   
   :depends on pysam: 
   :depends on python: ``>=3.9``

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

    pixi global install parse-vcf

to add into an existing workspace instead, run::

    pixi add parse-vcf

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install parse-vcf

Alternatively, to install into a new environment, run::

    conda create -n envname parse-vcf

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/parse-vcf:<tag>

(see `parse-vcf/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_parse-vcf| image:: https://img.shields.io/conda/dn/bioconda/parse-vcf.svg?style=flat
   :target: https://anaconda.org/bioconda/parse-vcf
   :alt:   (downloads)
.. |docker_parse-vcf| image:: https://quay.io/repository/biocontainers/parse-vcf/status
   :target: https://quay.io/repository/biocontainers/parse-vcf
.. _`parse-vcf/tags`: https://quay.io/repository/biocontainers/parse-vcf?tab=tags


.. raw:: html

    <script>
        var package = "parse-vcf";
        var versions = ["0.2.8","0.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/parse-vcf/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/parse-vcf/README.html