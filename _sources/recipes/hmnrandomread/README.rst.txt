:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmnrandomread'
.. highlight: bash

hmnrandomread
=============

.. conda:recipe:: hmnrandomread
   :replaces_section_title:
   :noindex:

   A sequence\-read simulator program for NGS

   :homepage: https://github.com/guillaume-gricourt/HmnRandomRead
   :license: MIT
   :recipe: /`hmnrandomread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnrandomread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmnrandomread/meta.yaml>`_

   A sequence\-read simulator program for NGS


.. conda:package:: hmnrandomread

   |downloads_hmnrandomread| |docker_hmnrandomread|

   :versions:
      
      

      ``0.10.0-4``,  ``0.10.0-3``,  ``0.10.0-2``,  ``0.10.0-1``,  ``0.10.0-0``,  ``0.9.1-0``

      

   
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on pytest: 
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

    pixi global install hmnrandomread

to add into an existing workspace instead, run::

    pixi add hmnrandomread

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmnrandomread

Alternatively, to install into a new environment, run::

    conda create -n envname hmnrandomread

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmnrandomread:<tag>

(see `hmnrandomread/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmnrandomread| image:: https://img.shields.io/conda/dn/bioconda/hmnrandomread.svg?style=flat
   :target: https://anaconda.org/bioconda/hmnrandomread
   :alt:   (downloads)
.. |docker_hmnrandomread| image:: https://quay.io/repository/biocontainers/hmnrandomread/status
   :target: https://quay.io/repository/biocontainers/hmnrandomread
.. _`hmnrandomread/tags`: https://quay.io/repository/biocontainers/hmnrandomread?tab=tags


.. raw:: html

    <script>
        var package = "hmnrandomread";
        var versions = ["0.10.0","0.10.0","0.10.0","0.10.0","0.10.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmnrandomread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmnrandomread/README.html