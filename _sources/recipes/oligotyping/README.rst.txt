:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'oligotyping'
.. highlight: bash

oligotyping
===========

.. conda:recipe:: oligotyping
   :replaces_section_title:
   :noindex:

   The oligotyping and minimum entropy decomposition \(MED\) pipeline for the analysis of marker gene amplicons

   :homepage: http://oligotyping.org
   :license: GNU General Public License v3 or later (GPLv3+)
   :recipe: /`oligotyping <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/oligotyping/meta.yaml>`_

   


.. conda:package:: oligotyping

   |downloads_oligotyping| |docker_oligotyping|

   :versions:
      
      

      ``2.1-0``,  ``2.0-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on django: 
   :depends on matplotlib: 
   :depends on python: ``2.7*``
   :depends on r-compute.es: 
   :depends on r-ggplot2: 
   :depends on r-gplots: 
   :depends on r-gtools: 
   :depends on r-optparse: 
   :depends on r-pheatmap: 
   :depends on r-rcolorbrewer: 
   :depends on r-reshape: 
   :depends on r-vegan: 
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

    pixi global install oligotyping

to add into an existing workspace instead, run::

    pixi add oligotyping

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install oligotyping

Alternatively, to install into a new environment, run::

    conda create -n envname oligotyping

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/oligotyping:<tag>

(see `oligotyping/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_oligotyping| image:: https://img.shields.io/conda/dn/bioconda/oligotyping.svg?style=flat
   :target: https://anaconda.org/bioconda/oligotyping
   :alt:   (downloads)
.. |docker_oligotyping| image:: https://quay.io/repository/biocontainers/oligotyping/status
   :target: https://quay.io/repository/biocontainers/oligotyping
.. _`oligotyping/tags`: https://quay.io/repository/biocontainers/oligotyping?tab=tags


.. raw:: html

    <script>
        var package = "oligotyping";
        var versions = ["2.1","2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/oligotyping/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/oligotyping/README.html