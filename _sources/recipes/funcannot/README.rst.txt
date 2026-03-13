:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'funcannot'
.. highlight: bash

funcannot
=========

.. conda:recipe:: funcannot
   :replaces_section_title:
   :noindex:

   Annotates cDNA\, protein\, mutation type\, and other funcational changes to variants in a VCF file with pre\-existing gene annotations \(see\:genepender\).

   :homepage: https://github.com/BioTools-Tek/funcannot
   :license: GPLv3
   :recipe: /`funcannot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funcannot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/funcannot/meta.yaml>`_

   


.. conda:package:: funcannot

   |downloads_funcannot| |docker_funcannot|

   :versions:
      
      

      ``v2.8-1``,  ``v2.8-0``

      

   
   :depends on libgcc-ng: ``>=4.9``
   :depends on qt: ``4.8.7.*``

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

    pixi global install funcannot

to add into an existing workspace instead, run::

    pixi add funcannot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install funcannot

Alternatively, to install into a new environment, run::

    conda create -n envname funcannot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/funcannot:<tag>

(see `funcannot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_funcannot| image:: https://img.shields.io/conda/dn/bioconda/funcannot.svg?style=flat
   :target: https://anaconda.org/bioconda/funcannot
   :alt:   (downloads)
.. |docker_funcannot| image:: https://quay.io/repository/biocontainers/funcannot/status
   :target: https://quay.io/repository/biocontainers/funcannot
.. _`funcannot/tags`: https://quay.io/repository/biocontainers/funcannot?tab=tags


.. raw:: html

    <script>
        var package = "funcannot";
        var versions = ["v2.8","v2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/funcannot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/funcannot/README.html