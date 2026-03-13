:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gfmix'
.. highlight: bash

gfmix
=====

.. conda:recipe:: gfmix
   :replaces_section_title:
   :noindex:

   Accelerated Estimation of Frequency Classes in Site\-heterogeneous Profile Mixture Models

   :homepage: https://www.mathstat.dal.ca/~tsusko/doc/gfmix.pdf
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`gfmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfmix>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gfmix/meta.yaml>`_

   


.. conda:package:: gfmix

   |downloads_gfmix| |docker_gfmix|

   :versions:
      
      

      ``1.0.2-3``,  ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on libiconv: 
   :depends on libstdcxx: ``>=13``
   :depends on r-base: 
   :depends on readline: 

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

    pixi global install gfmix

to add into an existing workspace instead, run::

    pixi add gfmix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gfmix

Alternatively, to install into a new environment, run::

    conda create -n envname gfmix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gfmix:<tag>

(see `gfmix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gfmix| image:: https://img.shields.io/conda/dn/bioconda/gfmix.svg?style=flat
   :target: https://anaconda.org/bioconda/gfmix
   :alt:   (downloads)
.. |docker_gfmix| image:: https://quay.io/repository/biocontainers/gfmix/status
   :target: https://quay.io/repository/biocontainers/gfmix
.. _`gfmix/tags`: https://quay.io/repository/biocontainers/gfmix?tab=tags


.. raw:: html

    <script>
        var package = "gfmix";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gfmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gfmix/README.html