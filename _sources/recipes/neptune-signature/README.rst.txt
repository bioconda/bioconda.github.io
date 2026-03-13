:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'neptune-signature'
.. highlight: bash

neptune-signature
=================

.. conda:recipe:: neptune-signature
   :replaces_section_title:
   :noindex:

   Neptune\: Genomic Signature Discovery

   :homepage: https://github.com/phac-nml/neptune
   :license: APACHE / Apache-2.0
   :recipe: /`neptune-signature <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune-signature>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/neptune-signature/meta.yaml>`_

   


.. conda:package:: neptune-signature

   |downloads_neptune-signature| |docker_neptune-signature|

   :versions:
      
      

      ``2.0.0-0``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on numpy: 
   :depends on python: ``>=3.10``
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

    pixi global install neptune-signature

to add into an existing workspace instead, run::

    pixi add neptune-signature

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install neptune-signature

Alternatively, to install into a new environment, run::

    conda create -n envname neptune-signature

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/neptune-signature:<tag>

(see `neptune-signature/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_neptune-signature| image:: https://img.shields.io/conda/dn/bioconda/neptune-signature.svg?style=flat
   :target: https://anaconda.org/bioconda/neptune-signature
   :alt:   (downloads)
.. |docker_neptune-signature| image:: https://quay.io/repository/biocontainers/neptune-signature/status
   :target: https://quay.io/repository/biocontainers/neptune-signature
.. _`neptune-signature/tags`: https://quay.io/repository/biocontainers/neptune-signature?tab=tags


.. raw:: html

    <script>
        var package = "neptune-signature";
        var versions = ["2.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/neptune-signature/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/neptune-signature/README.html