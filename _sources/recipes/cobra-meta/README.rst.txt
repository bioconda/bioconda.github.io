:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cobra-meta'
.. highlight: bash

cobra-meta
==========

.. conda:recipe:: cobra-meta
   :replaces_section_title:
   :noindex:

   COBRA is a tool to get higher quality viral genomes assembled from metagenomes.

   :homepage: https://github.com/linxingchen/cobra
   :license: MIT
   :recipe: /`cobra-meta <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra-meta>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cobra-meta/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.05.30.542503`

   


.. conda:package:: cobra-meta

   |downloads_cobra-meta| |docker_cobra-meta|

   :versions:
      
      

      ``1.2.3-0``,  ``1.2.2-0``

      

   
   :depends on biopython: 
   :depends on blast: ``>=2.14.0,<3.0.0``
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``>=3.7``

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

    pixi global install cobra-meta

to add into an existing workspace instead, run::

    pixi add cobra-meta

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cobra-meta

Alternatively, to install into a new environment, run::

    conda create -n envname cobra-meta

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cobra-meta:<tag>

(see `cobra-meta/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cobra-meta| image:: https://img.shields.io/conda/dn/bioconda/cobra-meta.svg?style=flat
   :target: https://anaconda.org/bioconda/cobra-meta
   :alt:   (downloads)
.. |docker_cobra-meta| image:: https://quay.io/repository/biocontainers/cobra-meta/status
   :target: https://quay.io/repository/biocontainers/cobra-meta
.. _`cobra-meta/tags`: https://quay.io/repository/biocontainers/cobra-meta?tab=tags


.. raw:: html

    <script>
        var package = "cobra-meta";
        var versions = ["1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cobra-meta/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cobra-meta/README.html