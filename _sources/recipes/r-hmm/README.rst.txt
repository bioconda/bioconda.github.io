:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-hmm'
.. highlight: bash

r-hmm
=====

.. conda:recipe:: r-hmm
   :replaces_section_title:
   :noindex:

   Functions for hidden Markov Models \(HMM\).

   :homepage: https://cran.r-project.org/package=HMM
   :license: GPL-3
   :recipe: /`r-hmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-hmm/meta.yaml>`_

   


.. conda:package:: r-hmm

   |downloads_r-hmm| |docker_r-hmm|

   :versions:
      
      

      ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install r-hmm

to add into an existing workspace instead, run::

    pixi add r-hmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-hmm

Alternatively, to install into a new environment, run::

    conda create -n envname r-hmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-hmm:<tag>

(see `r-hmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-hmm| image:: https://img.shields.io/conda/dn/bioconda/r-hmm.svg?style=flat
   :target: https://anaconda.org/bioconda/r-hmm
   :alt:   (downloads)
.. |docker_r-hmm| image:: https://quay.io/repository/biocontainers/r-hmm/status
   :target: https://quay.io/repository/biocontainers/r-hmm
.. _`r-hmm/tags`: https://quay.io/repository/biocontainers/r-hmm?tab=tags


.. raw:: html

    <script>
        var package = "r-hmm";
        var versions = ["1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-hmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-hmm/README.html