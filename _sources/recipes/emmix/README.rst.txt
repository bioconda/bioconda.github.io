:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'emmix'
.. highlight: bash

emmix
=====

.. conda:recipe:: emmix/1.3
   :replaces_section_title:
   :noindex:

   A tool that fits a mixture model of multivariate normal or t\-distributed components to a given data set.

   :homepage: https://people.smp.uq.edu.au/GeoffMcLachlan/emmix/emmix.html
   :license: Available freely for non-commercial use only
   :recipe: /`emmix <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmix>`_/`1.3 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmix/1.3>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/emmix/1.3/meta.yaml>`_

   


.. conda:package:: emmix

   |downloads_emmix| |docker_emmix|

   :versions:
      
      

      ``1.3-4``,  ``1.3-3``,  ``1.3-2``,  ``1.3-1``,  ``1.3-0``

      

   
   :depends on libgcc-ng: ``>=7.5.0``
   :depends on libgfortran-ng: ``>=7,<8.0a0``

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

    pixi global install emmix

to add into an existing workspace instead, run::

    pixi add emmix

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install emmix

Alternatively, to install into a new environment, run::

    conda create -n envname emmix

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/emmix:<tag>

(see `emmix/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_emmix| image:: https://img.shields.io/conda/dn/bioconda/emmix.svg?style=flat
   :target: https://anaconda.org/bioconda/emmix
   :alt:   (downloads)
.. |docker_emmix| image:: https://quay.io/repository/biocontainers/emmix/status
   :target: https://quay.io/repository/biocontainers/emmix
.. _`emmix/tags`: https://quay.io/repository/biocontainers/emmix?tab=tags


.. raw:: html

    <script>
        var package = "emmix";
        var versions = ["1.3","1.3","1.3","1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/emmix/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/emmix/README.html