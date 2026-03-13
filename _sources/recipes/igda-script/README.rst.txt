:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'igda-script'
.. highlight: bash

igda-script
===========

.. conda:recipe:: igda-script
   :replaces_section_title:
   :noindex:

   The wrapper script of iGDA to detect and phase minor SNVs from long\-read sequencing data

   :homepage: https://github.com/zhixingfeng/shell
   :license: GPL2
   :recipe: /`igda-script <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igda-script>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/igda-script/meta.yaml>`_

   


.. conda:package:: igda-script

   |downloads_igda-script| |docker_igda-script|

   :versions:
      
      

      ``1.0.1-0``

      

   
   :depends on r-base: 

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

    pixi global install igda-script

to add into an existing workspace instead, run::

    pixi add igda-script

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install igda-script

Alternatively, to install into a new environment, run::

    conda create -n envname igda-script

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/igda-script:<tag>

(see `igda-script/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_igda-script| image:: https://img.shields.io/conda/dn/bioconda/igda-script.svg?style=flat
   :target: https://anaconda.org/bioconda/igda-script
   :alt:   (downloads)
.. |docker_igda-script| image:: https://quay.io/repository/biocontainers/igda-script/status
   :target: https://quay.io/repository/biocontainers/igda-script
.. _`igda-script/tags`: https://quay.io/repository/biocontainers/igda-script?tab=tags


.. raw:: html

    <script>
        var package = "igda-script";
        var versions = ["1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/igda-script/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/igda-script/README.html