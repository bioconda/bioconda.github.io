:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genoflu'
.. highlight: bash

genoflu
=======

.. conda:recipe:: genoflu
   :replaces_section_title:
   :noindex:

   Influenza data pipeline to automate genotyping assignment.

   :homepage: https://github.com/USDA-VS/GenoFLU
   :license: GPL-3.0-or-later
   :recipe: /`genoflu <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoflu>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genoflu/meta.yaml>`_

   


.. conda:package:: genoflu

   |downloads_genoflu| |docker_genoflu|

   :versions:
      
      

      ``1.07-0``,  ``1.06-0``,  ``1.05-0``,  ``1.04-0``,  ``1.03-0``,  ``1.02-0``,  ``1.01-0``,  ``1.0-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on python: ``>=3.7``

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

    pixi global install genoflu

to add into an existing workspace instead, run::

    pixi add genoflu

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genoflu

Alternatively, to install into a new environment, run::

    conda create -n envname genoflu

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genoflu:<tag>

(see `genoflu/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genoflu| image:: https://img.shields.io/conda/dn/bioconda/genoflu.svg?style=flat
   :target: https://anaconda.org/bioconda/genoflu
   :alt:   (downloads)
.. |docker_genoflu| image:: https://quay.io/repository/biocontainers/genoflu/status
   :target: https://quay.io/repository/biocontainers/genoflu
.. _`genoflu/tags`: https://quay.io/repository/biocontainers/genoflu?tab=tags


.. raw:: html

    <script>
        var package = "genoflu";
        var versions = ["1.07","1.06","1.05","1.04","1.03"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genoflu/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genoflu/README.html