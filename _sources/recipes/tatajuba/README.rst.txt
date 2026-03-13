:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tatajuba'
.. highlight: bash

tatajuba
========

.. conda:recipe:: tatajuba
   :replaces_section_title:
   :noindex:

   Identification and classification of homopolymeric tracts from reads

   :homepage: https://github.com/quadram-institute-bioscience/tatajuba
   :license: GPLv3
   :recipe: /`tatajuba <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tatajuba>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tatajuba/meta.yaml>`_
   :links: biotools: :biotools:`tatajuba`

   


.. conda:package:: tatajuba

   |downloads_tatajuba| |docker_tatajuba|

   :versions:
      
      

      ``1.0.4-4``,  ``1.0.4-3``,  ``1.0.4-2``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install tatajuba

to add into an existing workspace instead, run::

    pixi add tatajuba

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tatajuba

Alternatively, to install into a new environment, run::

    conda create -n envname tatajuba

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tatajuba:<tag>

(see `tatajuba/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tatajuba| image:: https://img.shields.io/conda/dn/bioconda/tatajuba.svg?style=flat
   :target: https://anaconda.org/bioconda/tatajuba
   :alt:   (downloads)
.. |docker_tatajuba| image:: https://quay.io/repository/biocontainers/tatajuba/status
   :target: https://quay.io/repository/biocontainers/tatajuba
.. _`tatajuba/tags`: https://quay.io/repository/biocontainers/tatajuba?tab=tags


.. raw:: html

    <script>
        var package = "tatajuba";
        var versions = ["1.0.4","1.0.4","1.0.4","1.0.4","1.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tatajuba/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tatajuba/README.html