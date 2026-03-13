:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sat-bsa'
.. highlight: bash

sat-bsa
=======

.. conda:recipe:: sat-bsa
   :replaces_section_title:
   :noindex:

   Sat\-BSA is a package used for applying local de novo assembly and identifying the structural variants in the assembled region

   :homepage: https://github.com/SegawaTenta/Sat-BSA
   :license: GPL / GPL-3.0-or-later
   :recipe: /`sat-bsa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sat-bsa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sat-bsa/meta.yaml>`_

   


.. conda:package:: sat-bsa

   |downloads_sat-bsa| |docker_sat-bsa|

   :versions:
      
      

      ``1.12-1``,  ``1.12-0``,  ``1.10-0``

      

   
   :depends on minimap2: ``2.17.*``
   :depends on openjdk: 
   :depends on perl: 
   :depends on python: 
   :depends on r-base: 
   :depends on samtools: ``1.9.*``

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

    pixi global install sat-bsa

to add into an existing workspace instead, run::

    pixi add sat-bsa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sat-bsa

Alternatively, to install into a new environment, run::

    conda create -n envname sat-bsa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sat-bsa:<tag>

(see `sat-bsa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sat-bsa| image:: https://img.shields.io/conda/dn/bioconda/sat-bsa.svg?style=flat
   :target: https://anaconda.org/bioconda/sat-bsa
   :alt:   (downloads)
.. |docker_sat-bsa| image:: https://quay.io/repository/biocontainers/sat-bsa/status
   :target: https://quay.io/repository/biocontainers/sat-bsa
.. _`sat-bsa/tags`: https://quay.io/repository/biocontainers/sat-bsa?tab=tags


.. raw:: html

    <script>
        var package = "sat-bsa";
        var versions = ["1.12","1.12","1.10"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sat-bsa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sat-bsa/README.html