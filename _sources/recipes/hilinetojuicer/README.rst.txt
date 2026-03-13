:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hilinetojuicer'
.. highlight: bash

hilinetojuicer
==============

.. conda:recipe:: hilinetojuicer
   :replaces_section_title:
   :noindex:

   Convert HiLine SAM alignments to Juicer format

   :homepage: https://pypi.org/project/HiLineToJuicer/0.0.2/
   :license: MIT
   :recipe: /`hilinetojuicer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilinetojuicer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hilinetojuicer/meta.yaml>`_

   


.. conda:package:: hilinetojuicer

   |downloads_hilinetojuicer| |docker_hilinetojuicer|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on click: ``>=8.0.1``
   :depends on coreutils: ``>=8.32``
   :depends on pysam: ``>=0.17.0``
   :depends on python: ``>=3.8``
   :depends on samtools: ``>=1.12``

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

    pixi global install hilinetojuicer

to add into an existing workspace instead, run::

    pixi add hilinetojuicer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hilinetojuicer

Alternatively, to install into a new environment, run::

    conda create -n envname hilinetojuicer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hilinetojuicer:<tag>

(see `hilinetojuicer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hilinetojuicer| image:: https://img.shields.io/conda/dn/bioconda/hilinetojuicer.svg?style=flat
   :target: https://anaconda.org/bioconda/hilinetojuicer
   :alt:   (downloads)
.. |docker_hilinetojuicer| image:: https://quay.io/repository/biocontainers/hilinetojuicer/status
   :target: https://quay.io/repository/biocontainers/hilinetojuicer
.. _`hilinetojuicer/tags`: https://quay.io/repository/biocontainers/hilinetojuicer?tab=tags


.. raw:: html

    <script>
        var package = "hilinetojuicer";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hilinetojuicer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hilinetojuicer/README.html