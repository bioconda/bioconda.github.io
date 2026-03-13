:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cartools'
.. highlight: bash

cartools
========

.. conda:recipe:: cartools
   :replaces_section_title:
   :noindex:

   Coverage Analysis Report tool CAR tool is a tool for assessment of per base quality of NGS data.

   :homepage: https://github.com/clinical-genomics-uppsala/CARtool
   :documentation: https://github.com/clinical-genomics-uppsala/CARtool/blob/master/README.md
   
   :license: MIT / MIT
   :recipe: /`cartools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cartools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cartools/meta.yaml>`_

   


.. conda:package:: cartools

   |downloads_cartools| |docker_cartools|

   :versions:
      
      

      ``1.1.3-0``

      

   
   :depends on python: 
   :depends on samtools: 

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

    pixi global install cartools

to add into an existing workspace instead, run::

    pixi add cartools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cartools

Alternatively, to install into a new environment, run::

    conda create -n envname cartools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cartools:<tag>

(see `cartools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cartools| image:: https://img.shields.io/conda/dn/bioconda/cartools.svg?style=flat
   :target: https://anaconda.org/bioconda/cartools
   :alt:   (downloads)
.. |docker_cartools| image:: https://quay.io/repository/biocontainers/cartools/status
   :target: https://quay.io/repository/biocontainers/cartools
.. _`cartools/tags`: https://quay.io/repository/biocontainers/cartools?tab=tags


.. raw:: html

    <script>
        var package = "cartools";
        var versions = ["1.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cartools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cartools/README.html