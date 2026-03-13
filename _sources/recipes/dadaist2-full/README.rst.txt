:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dadaist2-full'
.. highlight: bash

dadaist2-full
=============

.. conda:recipe:: dadaist2-full
   :replaces_section_title:
   :noindex:

   Meta\-package for Dadaist2 with full R packages\, VSEARCH\, CD\-HIT and MultiQC

   :homepage: 
   :license: The license for this meta-package is MIT; individual tools vary
   :recipe: /`dadaist2-full <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2-full>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dadaist2-full/meta.yaml>`_

   


.. conda:package:: dadaist2-full

   |downloads_dadaist2-full| |docker_dadaist2-full|

   :versions:
      
      

      ``2.0-0``,  ``1.1-0``,  ``1.0-0``,  ``0.7-1``,  ``0.7-0``

      

   
   :depends on cd-hit: 
   :depends on dadaist2: ``>=1.1``
   :depends on itsxpress: 
   :depends on multiqc: 
   :depends on r-ade4: 
   :depends on r-base: ``>=4``
   :depends on r-cluster: 
   :depends on r-corrplot: 
   :depends on r-fpc: 
   :depends on r-hmisc: 
   :depends on r-optparse: 
   :depends on r-phangorn: 
   :depends on rich: 
   :depends on vsearch: 

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

    pixi global install dadaist2-full

to add into an existing workspace instead, run::

    pixi add dadaist2-full

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dadaist2-full

Alternatively, to install into a new environment, run::

    conda create -n envname dadaist2-full

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dadaist2-full:<tag>

(see `dadaist2-full/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dadaist2-full| image:: https://img.shields.io/conda/dn/bioconda/dadaist2-full.svg?style=flat
   :target: https://anaconda.org/bioconda/dadaist2-full
   :alt:   (downloads)
.. |docker_dadaist2-full| image:: https://quay.io/repository/biocontainers/dadaist2-full/status
   :target: https://quay.io/repository/biocontainers/dadaist2-full
.. _`dadaist2-full/tags`: https://quay.io/repository/biocontainers/dadaist2-full?tab=tags


.. raw:: html

    <script>
        var package = "dadaist2-full";
        var versions = ["2.0","1.1","1.0","0.7","0.7"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dadaist2-full/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dadaist2-full/README.html