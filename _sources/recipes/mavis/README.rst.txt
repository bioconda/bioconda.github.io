:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mavis'
.. highlight: bash

mavis
=====

.. conda:recipe:: mavis
   :replaces_section_title:
   :noindex:

   A Structural Variant Post\-Processing Package.

   :homepage: https://github.com/bcgsc/mavis
   :documentation: http://mavis.bcgsc.ca/docs/latest
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`mavis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mavis/meta.yaml>`_

   


.. conda:package:: mavis

   |downloads_mavis| |docker_mavis|

   :versions:
      
      

      ``3.1.2-0``,  ``2.2.6-0``

      

   
   :depends on biopython: ``>=1.70,<1.78``
   :depends on braceexpand: ``0.1.2``
   :depends on colour: 
   :depends on distance: ``>=0.1.3``
   :depends on mavis-config: ``>=1.2.2``
   :depends on networkx: ``>=2.5,<3``
   :depends on numpy: ``>=1.13.1``
   :depends on pandas: ``>=1.1,<2``
   :depends on pysam: 
   :depends on python: ``>=3.7``
   :depends on shapely: ``>=1.6.4.post1``
   :depends on shortuuid: ``>=0.5.0``
   :depends on svgwrite: 
   :depends on typing-extensions: ``>=4``
   :depends on ucsc-blat: 

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

    pixi global install mavis

to add into an existing workspace instead, run::

    pixi add mavis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mavis

Alternatively, to install into a new environment, run::

    conda create -n envname mavis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mavis:<tag>

(see `mavis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mavis| image:: https://img.shields.io/conda/dn/bioconda/mavis.svg?style=flat
   :target: https://anaconda.org/bioconda/mavis
   :alt:   (downloads)
.. |docker_mavis| image:: https://quay.io/repository/biocontainers/mavis/status
   :target: https://quay.io/repository/biocontainers/mavis
.. _`mavis/tags`: https://quay.io/repository/biocontainers/mavis?tab=tags


.. raw:: html

    <script>
        var package = "mavis";
        var versions = ["3.1.2","2.2.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mavis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mavis/README.html