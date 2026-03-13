:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metagenomescope'
.. highlight: bash

metagenomescope
===============

.. conda:recipe:: metagenomescope
   :replaces_section_title:
   :noindex:

   Visualization tool for \(meta\)genome assembly graphs

   :homepage: https://github.com/marbl/MetagenomeScope
   :license: GPL3 / GPL-3.0-only
   :recipe: /`metagenomescope <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenomescope>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metagenomescope/meta.yaml>`_

   


.. conda:package:: metagenomescope

   |downloads_metagenomescope| |docker_metagenomescope|

   :versions:
      
      

      ``1.1.0-0``

      

   
   :depends on click: 
   :depends on dash: 
   :depends on dash-ag-grid: ``>=33.3.3``
   :depends on dash-bootstrap-components: 
   :depends on gfapy: 
   :depends on graphviz: 
   :depends on networkx: 
   :depends on pandas: 
   :depends on plotly: 
   :depends on pyfastg: ``>=0.2.0``
   :depends on pygraphviz: 
   :depends on python: 

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

    pixi global install metagenomescope

to add into an existing workspace instead, run::

    pixi add metagenomescope

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metagenomescope

Alternatively, to install into a new environment, run::

    conda create -n envname metagenomescope

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metagenomescope:<tag>

(see `metagenomescope/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metagenomescope| image:: https://img.shields.io/conda/dn/bioconda/metagenomescope.svg?style=flat
   :target: https://anaconda.org/bioconda/metagenomescope
   :alt:   (downloads)
.. |docker_metagenomescope| image:: https://quay.io/repository/biocontainers/metagenomescope/status
   :target: https://quay.io/repository/biocontainers/metagenomescope
.. _`metagenomescope/tags`: https://quay.io/repository/biocontainers/metagenomescope?tab=tags


.. raw:: html

    <script>
        var package = "metagenomescope";
        var versions = ["1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metagenomescope/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metagenomescope/README.html