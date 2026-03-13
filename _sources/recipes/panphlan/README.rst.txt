:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panphlan'
.. highlight: bash

panphlan
========

.. conda:recipe:: panphlan
   :replaces_section_title:
   :noindex:

   PanPhlAn is a strain\-level metagenomic profiling tool for identifying the gene composition and \*in\-vivo\* transcriptional activity of individual strains in metagenomic samples.

   :homepage: http://github.com/SegataLab/panphlan/
   :license: MIT / MIT
   :recipe: /`panphlan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panphlan/meta.yaml>`_

   


.. conda:package:: panphlan

   |downloads_panphlan| |docker_panphlan|

   :versions:
      
      

      ``3.1-0``,  ``3.0-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2-6``,  ``1.2-5``,  ``1.2-4``,  ``1.2-3``

      

   
   :depends on bowtie2: ``>=2.3.0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.9``
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

    pixi global install panphlan

to add into an existing workspace instead, run::

    pixi add panphlan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panphlan

Alternatively, to install into a new environment, run::

    conda create -n envname panphlan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panphlan:<tag>

(see `panphlan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panphlan| image:: https://img.shields.io/conda/dn/bioconda/panphlan.svg?style=flat
   :target: https://anaconda.org/bioconda/panphlan
   :alt:   (downloads)
.. |docker_panphlan| image:: https://quay.io/repository/biocontainers/panphlan/status
   :target: https://quay.io/repository/biocontainers/panphlan
.. _`panphlan/tags`: https://quay.io/repository/biocontainers/panphlan?tab=tags


.. raw:: html

    <script>
        var package = "panphlan";
        var versions = ["3.1","3.0","1.3","1.3","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panphlan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panphlan/README.html