:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metastrand'
.. highlight: bash

metastrand
==========

.. conda:recipe:: metastrand
   :replaces_section_title:
   :noindex:

   Metastrand\: Making sense of antisense

   :homepage: https://gitlab.com/mpust/metastrand
   :license: MIT
   :recipe: /`metastrand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metastrand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metastrand/meta.yaml>`_

   


.. conda:package:: metastrand

   |downloads_metastrand| |docker_metastrand|

   :versions:
      
      

      ``0.1.1-0``

      

   
   :depends on bbmap: ``>=39.52``
   :depends on bedtools: ``>=2.31.1``
   :depends on bwa: 
   :depends on htslib: ``>=1.23``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.9``
   :depends on sambamba: ``>=1.0.1``
   :depends on samtools: ``>=1.23``
   :depends on scipy: 
   :depends on subread: ``>=2.1.1``

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

    pixi global install metastrand

to add into an existing workspace instead, run::

    pixi add metastrand

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metastrand

Alternatively, to install into a new environment, run::

    conda create -n envname metastrand

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metastrand:<tag>

(see `metastrand/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metastrand| image:: https://img.shields.io/conda/dn/bioconda/metastrand.svg?style=flat
   :target: https://anaconda.org/bioconda/metastrand
   :alt:   (downloads)
.. |docker_metastrand| image:: https://quay.io/repository/biocontainers/metastrand/status
   :target: https://quay.io/repository/biocontainers/metastrand
.. _`metastrand/tags`: https://quay.io/repository/biocontainers/metastrand?tab=tags


.. raw:: html

    <script>
        var package = "metastrand";
        var versions = ["0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metastrand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metastrand/README.html