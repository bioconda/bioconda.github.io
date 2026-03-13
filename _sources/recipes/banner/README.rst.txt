:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'banner'
.. highlight: bash

banner
======

.. conda:recipe:: banner
   :replaces_section_title:
   :noindex:

   BANNER is a tool that lives inside HULK and aims to make sense of hulk histosketches.

   :homepage: https://www.github.com/will-rowe/banner
   :license: MIT
   :recipe: /`banner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/banner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/banner/meta.yaml>`_

   


.. conda:package:: banner

   |downloads_banner| |docker_banner|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on numpy: ``1.15.0``
   :depends on pandas: ``0.23.4``
   :depends on pytest: ``3.7.1``
   :depends on python: 
   :depends on scikit-learn: 
   :depends on scipy: ``1.1.0``

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

    pixi global install banner

to add into an existing workspace instead, run::

    pixi add banner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install banner

Alternatively, to install into a new environment, run::

    conda create -n envname banner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/banner:<tag>

(see `banner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_banner| image:: https://img.shields.io/conda/dn/bioconda/banner.svg?style=flat
   :target: https://anaconda.org/bioconda/banner
   :alt:   (downloads)
.. |docker_banner| image:: https://quay.io/repository/biocontainers/banner/status
   :target: https://quay.io/repository/biocontainers/banner
.. _`banner/tags`: https://quay.io/repository/biocontainers/banner?tab=tags


.. raw:: html

    <script>
        var package = "banner";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/banner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/banner/README.html