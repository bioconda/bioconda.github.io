:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shiba2sashimi'
.. highlight: bash

shiba2sashimi
=============

.. conda:recipe:: shiba2sashimi
   :replaces_section_title:
   :noindex:

   A utility for creating sashimi plot from Shiba output

   :homepage: https://github.com/Sika-Zheng-Lab/shiba2sashimi
   :license: MIT
   :recipe: /`shiba2sashimi <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba2sashimi>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shiba2sashimi/meta.yaml>`_

   A utility to create Sashimi plots\, a publication\-quality visualization of RNA\-seq data\, from Shiba output.


.. conda:package:: shiba2sashimi

   |downloads_shiba2sashimi| |docker_shiba2sashimi|

   :versions:
      
      

      ``0.1.7-0``,  ``0.1.6-0``,  ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.0-0``

      

   
   :depends on matplotlib-base: ``>=3.1.0``
   :depends on numpy: ``>=1.18.0,<2.0.0``
   :depends on pysam: ``>=0.22.0``
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

    pixi global install shiba2sashimi

to add into an existing workspace instead, run::

    pixi add shiba2sashimi

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shiba2sashimi

Alternatively, to install into a new environment, run::

    conda create -n envname shiba2sashimi

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shiba2sashimi:<tag>

(see `shiba2sashimi/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shiba2sashimi| image:: https://img.shields.io/conda/dn/bioconda/shiba2sashimi.svg?style=flat
   :target: https://anaconda.org/bioconda/shiba2sashimi
   :alt:   (downloads)
.. |docker_shiba2sashimi| image:: https://quay.io/repository/biocontainers/shiba2sashimi/status
   :target: https://quay.io/repository/biocontainers/shiba2sashimi
.. _`shiba2sashimi/tags`: https://quay.io/repository/biocontainers/shiba2sashimi?tab=tags


.. raw:: html

    <script>
        var package = "shiba2sashimi";
        var versions = ["0.1.7","0.1.6","0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shiba2sashimi/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shiba2sashimi/README.html