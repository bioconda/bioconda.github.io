:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gblocks'
.. highlight: bash

gblocks
=======

.. conda:recipe:: gblocks
   :replaces_section_title:
   :noindex:

   Selection of conserved blocks from multiple alignments for their use in phylogenetic analysis.

   :homepage: http://molevol.cmima.csic.es/castresana/Gblocks.html
   :license: The software and its accompanying documentation are provided as is, without guarantee of support or maintenance.
   :recipe: /`gblocks <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gblocks>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gblocks/meta.yaml>`_

   


.. conda:package:: gblocks

   |downloads_gblocks| |docker_gblocks|

   :versions:
      
      

      ``0.91b-2``,  ``0.91b-1``,  ``0.91b-0``

      

   

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

    pixi global install gblocks

to add into an existing workspace instead, run::

    pixi add gblocks

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gblocks

Alternatively, to install into a new environment, run::

    conda create -n envname gblocks

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gblocks:<tag>

(see `gblocks/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gblocks| image:: https://img.shields.io/conda/dn/bioconda/gblocks.svg?style=flat
   :target: https://anaconda.org/bioconda/gblocks
   :alt:   (downloads)
.. |docker_gblocks| image:: https://quay.io/repository/biocontainers/gblocks/status
   :target: https://quay.io/repository/biocontainers/gblocks
.. _`gblocks/tags`: https://quay.io/repository/biocontainers/gblocks?tab=tags


.. raw:: html

    <script>
        var package = "gblocks";
        var versions = ["0.91b","0.91b","0.91b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gblocks/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gblocks/README.html