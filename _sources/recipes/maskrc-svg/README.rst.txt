:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'maskrc-svg'
.. highlight: bash

maskrc-svg
==========

.. conda:recipe:: maskrc-svg
   :replaces_section_title:
   :noindex:

   Masks recombinant regions in an alignment based on ClonalFrameML or Gubbins output Option to draw SVG of recombinant regions.

   :homepage: https://github.com/kwongj/maskrc-svg
   :license: GPL-3.0
   :recipe: /`maskrc-svg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maskrc-svg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/maskrc-svg/meta.yaml>`_

   


.. conda:package:: maskrc-svg

   |downloads_maskrc-svg| |docker_maskrc-svg|

   :versions:
      
      

      ``0.5-1``,  ``0.5-0``

      

   
   :depends on bcbio-gff: 
   :depends on biopython: 
   :depends on ete3: 
   :depends on python: 
   :depends on svgwrite: 

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

    pixi global install maskrc-svg

to add into an existing workspace instead, run::

    pixi add maskrc-svg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install maskrc-svg

Alternatively, to install into a new environment, run::

    conda create -n envname maskrc-svg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/maskrc-svg:<tag>

(see `maskrc-svg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_maskrc-svg| image:: https://img.shields.io/conda/dn/bioconda/maskrc-svg.svg?style=flat
   :target: https://anaconda.org/bioconda/maskrc-svg
   :alt:   (downloads)
.. |docker_maskrc-svg| image:: https://quay.io/repository/biocontainers/maskrc-svg/status
   :target: https://quay.io/repository/biocontainers/maskrc-svg
.. _`maskrc-svg/tags`: https://quay.io/repository/biocontainers/maskrc-svg?tab=tags


.. raw:: html

    <script>
        var package = "maskrc-svg";
        var versions = ["0.5","0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/maskrc-svg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/maskrc-svg/README.html