:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cialign'
.. highlight: bash

cialign
=======

.. conda:recipe:: cialign
   :replaces_section_title:
   :noindex:

   Toolkit for cleaning and interpreting multiple sequence alignments

   :homepage: https://github.com/KatyBrown/CIAlign
   :license: MIT / MIT
   :recipe: /`cialign <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cialign>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cialign/meta.yaml>`_

   


.. conda:package:: cialign

   |downloads_cialign| |docker_cialign|

   :versions:
      
      

      ``1.1.4-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.18-0``

      

   
   :depends on configargparse: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pillow: 
   :depends on python: ``>=3.6``
   :depends on scipy: 

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

    pixi global install cialign

to add into an existing workspace instead, run::

    pixi add cialign

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cialign

Alternatively, to install into a new environment, run::

    conda create -n envname cialign

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cialign:<tag>

(see `cialign/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cialign| image:: https://img.shields.io/conda/dn/bioconda/cialign.svg?style=flat
   :target: https://anaconda.org/bioconda/cialign
   :alt:   (downloads)
.. |docker_cialign| image:: https://quay.io/repository/biocontainers/cialign/status
   :target: https://quay.io/repository/biocontainers/cialign
.. _`cialign/tags`: https://quay.io/repository/biocontainers/cialign?tab=tags


.. raw:: html

    <script>
        var package = "cialign";
        var versions = ["1.1.4","1.1.0","1.1.0","1.1.0","1.0.18"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cialign/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cialign/README.html