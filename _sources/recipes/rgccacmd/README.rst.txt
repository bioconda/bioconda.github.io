:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rgccacmd'
.. highlight: bash

rgccacmd
========

.. conda:recipe:: rgccacmd
   :replaces_section_title:
   :noindex:

   Multiblock data analysis concerns the analysis of several sets of variables \(blocks\) observed on the same group of individuals. The main aims of the RGCCA package are \(i\) to study the relationships between blocks and \(ii\) to identify subsets of variables of each block which are active in their relationships with the other blocks.

   :homepage: https://CRAN.R-project.org/package=RGCCA
   :documentation: https://github.com/BrainAndSpineInstitute/rgcca_ui#readme
   
   :license: GPL3 / GPL-2.0-or-later
   :recipe: /`rgccacmd <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgccacmd>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rgccacmd/meta.yaml>`_

   


.. conda:package:: rgccacmd

   |downloads_rgccacmd| |docker_rgccacmd|

   :versions:
      
      

      ``3.0.3-2``,  ``3.0.3-1``,  ``3.0.3-0``,  ``3.0.2-0``,  ``3.0.1-0``,  ``3.0.0-2``,  ``3.0.0-1``,  ``3.0.0-0``

      

   
   :depends on r-base: ``>=4.4,<4.5.0a0``
   :depends on r-deriv: 
   :depends on r-ggplot2: 
   :depends on r-ggrepel: 
   :depends on r-gridextra: 
   :depends on r-igraph: 
   :depends on r-mass: 
   :depends on r-openxlsx: 
   :depends on r-optparse: 
   :depends on r-pbapply: 
   :depends on r-plotly: 
   :depends on r-rlang: 
   :depends on r-scales: 
   :depends on r-vegan: 
   :depends on wget: 

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

    pixi global install rgccacmd

to add into an existing workspace instead, run::

    pixi add rgccacmd

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rgccacmd

Alternatively, to install into a new environment, run::

    conda create -n envname rgccacmd

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rgccacmd:<tag>

(see `rgccacmd/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rgccacmd| image:: https://img.shields.io/conda/dn/bioconda/rgccacmd.svg?style=flat
   :target: https://anaconda.org/bioconda/rgccacmd
   :alt:   (downloads)
.. |docker_rgccacmd| image:: https://quay.io/repository/biocontainers/rgccacmd/status
   :target: https://quay.io/repository/biocontainers/rgccacmd
.. _`rgccacmd/tags`: https://quay.io/repository/biocontainers/rgccacmd?tab=tags


.. raw:: html

    <script>
        var package = "rgccacmd";
        var versions = ["3.0.3","3.0.3","3.0.3","3.0.2","3.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rgccacmd/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rgccacmd/README.html