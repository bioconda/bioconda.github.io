:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'r-bread'
.. highlight: bash

r-bread
=======

.. conda:recipe:: r-bread
   :replaces_section_title:
   :noindex:

   A simple set of wrapper functions for data.table\:\:fread\(\) that allows subsetting or filtering rows and selecting columns of table\-formatted files too large for the available RAM. \'b stands for \'big files\'. bread makes heavy use of Unix commands like \'grep\'\, \'sed\'\, \'wc\'\, \'awk\' and \'cut\'. They are available by default in all Unix environments. For Windows\, you need to install those commands externally in order to simulate a Unix environment and make sure that the executables are in the Windows PATH variable. To my knowledge\, the simplest ways are to install \'RTools\'\, \'Git\' or \'Cygwin\'. If they have been correctly installed \(with the expected registry entries\)\, they should be detected on loading the package and the correct directories will be added automatically to the PATH.

   :homepage: https://github.com/MagicHead99/bread/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`r-bread <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bread>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/r-bread/meta.yaml>`_

   


.. conda:package:: r-bread

   |downloads_r-bread| |docker_r-bread|

   :versions:
      
      

      ``0.4.1-0``

      

   
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-data.table: 

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

    pixi global install r-bread

to add into an existing workspace instead, run::

    pixi add r-bread

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install r-bread

Alternatively, to install into a new environment, run::

    conda create -n envname r-bread

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/r-bread:<tag>

(see `r-bread/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_r-bread| image:: https://img.shields.io/conda/dn/bioconda/r-bread.svg?style=flat
   :target: https://anaconda.org/bioconda/r-bread
   :alt:   (downloads)
.. |docker_r-bread| image:: https://quay.io/repository/biocontainers/r-bread/status
   :target: https://quay.io/repository/biocontainers/r-bread
.. _`r-bread/tags`: https://quay.io/repository/biocontainers/r-bread?tab=tags


.. raw:: html

    <script>
        var package = "r-bread";
        var versions = ["0.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/r-bread/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/r-bread/README.html