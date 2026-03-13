:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rjchallis-assembly-stats'
.. highlight: bash

rjchallis-assembly-stats
========================

.. conda:recipe:: rjchallis-assembly-stats
   :replaces_section_title:
   :noindex:

   Assembly metric visualisations to facilitate rapid assessment and comparison of assembly quality.

   :homepage: https://github.com/rjchallis/assembly-stats
   :license: MIT / MIT
   :recipe: /`rjchallis-assembly-stats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rjchallis-assembly-stats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rjchallis-assembly-stats/meta.yaml>`_
   :links: doi: :doi:`10.5281/zenodo.322347`

   


.. conda:package:: rjchallis-assembly-stats

   |downloads_rjchallis-assembly-stats| |docker_rjchallis-assembly-stats|

   :versions:
      
      

      ``17.02-0``

      

   
   :depends on perl: 
   :depends on perl-json: 

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

    pixi global install rjchallis-assembly-stats

to add into an existing workspace instead, run::

    pixi add rjchallis-assembly-stats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rjchallis-assembly-stats

Alternatively, to install into a new environment, run::

    conda create -n envname rjchallis-assembly-stats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rjchallis-assembly-stats:<tag>

(see `rjchallis-assembly-stats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rjchallis-assembly-stats| image:: https://img.shields.io/conda/dn/bioconda/rjchallis-assembly-stats.svg?style=flat
   :target: https://anaconda.org/bioconda/rjchallis-assembly-stats
   :alt:   (downloads)
.. |docker_rjchallis-assembly-stats| image:: https://quay.io/repository/biocontainers/rjchallis-assembly-stats/status
   :target: https://quay.io/repository/biocontainers/rjchallis-assembly-stats
.. _`rjchallis-assembly-stats/tags`: https://quay.io/repository/biocontainers/rjchallis-assembly-stats?tab=tags


.. raw:: html

    <script>
        var package = "rjchallis-assembly-stats";
        var versions = ["17.02"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rjchallis-assembly-stats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rjchallis-assembly-stats/README.html