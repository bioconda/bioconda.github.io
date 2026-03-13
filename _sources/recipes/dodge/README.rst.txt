:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'dodge'
.. highlight: bash

dodge
=====

.. conda:recipe:: dodge
   :replaces_section_title:
   :noindex:

   Dynamic Outbreak Detection for Genomic Epidemiology. Automated point source bacterial outbreak detection using cumulative long term genomic surveillance.

   :homepage: https://github.com/LanLab/dodge
   :license: GPL-3.0-or-later
   :recipe: /`dodge <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dodge>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/dodge/meta.yaml>`_

   


.. conda:package:: dodge

   |downloads_dodge| |docker_dodge|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.0-0``

      

   
   :depends on pandas: ``>=1.3``
   :depends on python: ``>=3.8``
   :depends on scikit-learn: ``>=1.0``

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

    pixi global install dodge

to add into an existing workspace instead, run::

    pixi add dodge

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install dodge

Alternatively, to install into a new environment, run::

    conda create -n envname dodge

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/dodge:<tag>

(see `dodge/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_dodge| image:: https://img.shields.io/conda/dn/bioconda/dodge.svg?style=flat
   :target: https://anaconda.org/bioconda/dodge
   :alt:   (downloads)
.. |docker_dodge| image:: https://quay.io/repository/biocontainers/dodge/status
   :target: https://quay.io/repository/biocontainers/dodge
.. _`dodge/tags`: https://quay.io/repository/biocontainers/dodge?tab=tags


.. raw:: html

    <script>
        var package = "dodge";
        var versions = ["1.0.1","1.0.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/dodge/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/dodge/README.html