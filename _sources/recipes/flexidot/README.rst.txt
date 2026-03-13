:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'flexidot'
.. highlight: bash

flexidot
========

.. conda:recipe:: flexidot
   :replaces_section_title:
   :noindex:

   Flexible dotplotting of genomic sequences.

   :homepage: https://github.com/flexidot-bio/flexidot
   :documentation: https://github.com/flexidot-bio/flexidot/blob/v2.1.0/README.md
   
   :license: LGPL / GPL-3
   :recipe: /`flexidot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexidot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/flexidot/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/bty395`

   


.. conda:package:: flexidot

   |downloads_flexidot| |docker_flexidot|

   :versions:
      
      

      ``2.1.0-0``,  ``2.0.2-0``,  ``2.0.1-0``

      

   
   :depends on biopython: 
   :depends on colormap: ``>=1.3.0``
   :depends on colour: 
   :depends on easydev: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on python: ``>=3.8``
   :depends on regex: 
   :depends on rich: 

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

    pixi global install flexidot

to add into an existing workspace instead, run::

    pixi add flexidot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install flexidot

Alternatively, to install into a new environment, run::

    conda create -n envname flexidot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/flexidot:<tag>

(see `flexidot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_flexidot| image:: https://img.shields.io/conda/dn/bioconda/flexidot.svg?style=flat
   :target: https://anaconda.org/bioconda/flexidot
   :alt:   (downloads)
.. |docker_flexidot| image:: https://quay.io/repository/biocontainers/flexidot/status
   :target: https://quay.io/repository/biocontainers/flexidot
.. _`flexidot/tags`: https://quay.io/repository/biocontainers/flexidot?tab=tags


.. raw:: html

    <script>
        var package = "flexidot";
        var versions = ["2.1.0","2.0.2","2.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/flexidot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/flexidot/README.html