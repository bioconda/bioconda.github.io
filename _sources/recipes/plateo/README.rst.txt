:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'plateo'
.. highlight: bash

plateo
======

.. conda:recipe:: plateo
   :replaces_section_title:
   :noindex:

   Read\/write microplate and picklist data for lab automation

   :homepage: https://github.com/Edinburgh-Genome-Foundry/Plateo
   :documentation: https://github.com/Edinburgh-Genome-Foundry/Plateo/blob/v0.3.1/README.rst
   
   :license: MIT / MIT
   :recipe: /`plateo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plateo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/plateo/meta.yaml>`_

   


.. conda:package:: plateo

   |downloads_plateo| |docker_plateo|

   :versions:
      
      

      ``0.3.1-0``

      

   
   :depends on flametree: 
   :depends on fuzzywuzzy: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on openpyxl: 
   :depends on pandas: 
   :depends on pdf-reports: 
   :depends on python: ``>=3.9``
   :depends on sequenticon: 
   :depends on tqdm: 
   :depends on xlrd: 
   :depends on xlwt: 

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

    pixi global install plateo

to add into an existing workspace instead, run::

    pixi add plateo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install plateo

Alternatively, to install into a new environment, run::

    conda create -n envname plateo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/plateo:<tag>

(see `plateo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_plateo| image:: https://img.shields.io/conda/dn/bioconda/plateo.svg?style=flat
   :target: https://anaconda.org/bioconda/plateo
   :alt:   (downloads)
.. |docker_plateo| image:: https://quay.io/repository/biocontainers/plateo/status
   :target: https://quay.io/repository/biocontainers/plateo
.. _`plateo/tags`: https://quay.io/repository/biocontainers/plateo?tab=tags


.. raw:: html

    <script>
        var package = "plateo";
        var versions = ["0.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/plateo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/plateo/README.html