:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dist_est'
.. highlight: bash

dist_est
========

.. conda:recipe:: dist_est
   :replaces_section_title:
   :noindex:

   Estimation of Rates\-Across\-Sites Distributions in Phylogenetic Subsititution Models

   :homepage: https://www.mathstat.dal.ca/~tsusko/doc/ras.pdf
   :license: GPL3 / GNU General Public v3 or later (GPLv3+)
   :recipe: /`dist_est <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dist_est>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dist_est/meta.yaml>`_

   


.. conda:package:: dist_est

   |downloads_dist_est| |docker_dist_est|

   :versions:
      
      

      ``1.1-3``,  ``1.1-2``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libgfortran: 
   :depends on libgfortran5: ``>=13.3.0``
   :depends on libstdcxx: ``>=13``

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

    pixi global install dist_est

to add into an existing workspace instead, run::

    pixi add dist_est

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dist_est

Alternatively, to install into a new environment, run::

    conda create -n envname dist_est

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dist_est:<tag>

(see `dist_est/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dist_est| image:: https://img.shields.io/conda/dn/bioconda/dist_est.svg?style=flat
   :target: https://anaconda.org/bioconda/dist_est
   :alt:   (downloads)
.. |docker_dist_est| image:: https://quay.io/repository/biocontainers/dist_est/status
   :target: https://quay.io/repository/biocontainers/dist_est
.. _`dist_est/tags`: https://quay.io/repository/biocontainers/dist_est?tab=tags


.. raw:: html

    <script>
        var package = "dist_est";
        var versions = ["1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dist_est/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dist_est/README.html