:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'nomadic'
.. highlight: bash

nomadic
=======

.. conda:recipe:: nomadic
   :replaces_section_title:
   :noindex:

   Mobile sequencing and analysis in real\-time

   :homepage: https://jasonahendry.github.io/nomadic/
   :developer docs: https://github.com/JasonAHendry/nomadic
   :license: MIT
   :recipe: /`nomadic <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nomadic>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/nomadic/meta.yaml>`_

   Nomadic is a real\-time bioinformatics pipeline and dashboard for nanopore sequencing data. While sequencing is still ongoing\, it performs read mapping and sample quality control\, as well as variant calling and annotation. This information is displayed in real\-time to a graphical dashboard that has interactive features.



.. conda:package:: nomadic

   |downloads_nomadic| |docker_nomadic|

   :versions:
      
      

      ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-0``

      

   
   :depends on bcftools: ``>=1.20``
   :depends on bedtools: 
   :depends on click: 
   :depends on dash: 
   :depends on delve-bio: ``0.2.*``
   :depends on i18nice: 
   :depends on minimap2: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on platformdirs: 
   :depends on pysam: 
   :depends on python: ``>=3.10``
   :depends on pyyaml: 
   :depends on rsync: 
   :depends on samtools: ``>=1.20``
   :depends on seaborn: 

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

    pixi global install nomadic

to add into an existing workspace instead, run::

    pixi add nomadic

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install nomadic

Alternatively, to install into a new environment, run::

    conda create -n envname nomadic

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/nomadic:<tag>

(see `nomadic/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_nomadic| image:: https://img.shields.io/conda/dn/bioconda/nomadic.svg?style=flat
   :target: https://anaconda.org/bioconda/nomadic
   :alt:   (downloads)
.. |docker_nomadic| image:: https://quay.io/repository/biocontainers/nomadic/status
   :target: https://quay.io/repository/biocontainers/nomadic
.. _`nomadic/tags`: https://quay.io/repository/biocontainers/nomadic?tab=tags


.. raw:: html

    <script>
        var package = "nomadic";
        var versions = ["0.7.2","0.7.1","0.7.0","0.6.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/nomadic/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/nomadic/README.html