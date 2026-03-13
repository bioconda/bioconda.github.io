:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqhax'
.. highlight: bash

seqhax
======

.. conda:recipe:: seqhax
   :replaces_section_title:
   :noindex:

   A collection of next\-gen sequence data utilities

   :homepage: https://github.com/kdmurray91/seqhax
   :license: MPL2
   :recipe: /`seqhax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqhax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqhax/meta.yaml>`_

   


.. conda:package:: seqhax

   |downloads_seqhax| |docker_seqhax|

   :versions:
      
      

      ``0.8.6-1``,  ``0.8.6-0``,  ``0.7.2-5``,  ``0.7.2-4``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends on htslib: ``>=1.20,<1.24.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<2.0a0``
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

    pixi global install seqhax

to add into an existing workspace instead, run::

    pixi add seqhax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqhax

Alternatively, to install into a new environment, run::

    conda create -n envname seqhax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqhax:<tag>

(see `seqhax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqhax| image:: https://img.shields.io/conda/dn/bioconda/seqhax.svg?style=flat
   :target: https://anaconda.org/bioconda/seqhax
   :alt:   (downloads)
.. |docker_seqhax| image:: https://quay.io/repository/biocontainers/seqhax/status
   :target: https://quay.io/repository/biocontainers/seqhax
.. _`seqhax/tags`: https://quay.io/repository/biocontainers/seqhax?tab=tags


.. raw:: html

    <script>
        var package = "seqhax";
        var versions = ["0.8.6","0.8.6","0.7.2","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqhax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqhax/README.html