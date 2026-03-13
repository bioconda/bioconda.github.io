:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'phylovega'
.. highlight: bash

phylovega
=========

.. conda:recipe:: phylovega
   :replaces_section_title:
   :noindex:

   Interactive Phylogenetic trees in Vega.

   :homepage: https://github.com/Zsailer/phylovega
   :license: MIT / MIT
   :recipe: /`phylovega <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylovega>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/phylovega/meta.yaml>`_

   


.. conda:package:: phylovega

   |downloads_phylovega| |docker_phylovega|

   :versions:
      
      

      ``0.3-0``,  ``0.2-0``,  ``0.1-0``

      

   
   :depends on phylopandas: 
   :depends on python: ``>=3.4.0``
   :depends on vega: 

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

    pixi global install phylovega

to add into an existing workspace instead, run::

    pixi add phylovega

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install phylovega

Alternatively, to install into a new environment, run::

    conda create -n envname phylovega

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/phylovega:<tag>

(see `phylovega/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_phylovega| image:: https://img.shields.io/conda/dn/bioconda/phylovega.svg?style=flat
   :target: https://anaconda.org/bioconda/phylovega
   :alt:   (downloads)
.. |docker_phylovega| image:: https://quay.io/repository/biocontainers/phylovega/status
   :target: https://quay.io/repository/biocontainers/phylovega
.. _`phylovega/tags`: https://quay.io/repository/biocontainers/phylovega?tab=tags


.. raw:: html

    <script>
        var package = "phylovega";
        var versions = ["0.3","0.2","0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/phylovega/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/phylovega/README.html