:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peek-bio'
.. highlight: bash

peek-bio
========

.. conda:recipe:: peek-bio
   :replaces_section_title:
   :noindex:

   Instant file previews for genomics data

   :homepage: https://github.com/pwilson97/peek-bio
   :license: MIT
   :recipe: /`peek-bio <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peek-bio>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peek-bio/meta.yaml>`_

   


.. conda:package:: peek-bio

   |downloads_peek-bio| |docker_peek-bio|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on anndata: ``>=0.8``
   :depends on openpyxl: ``>=3.0``
   :depends on pybigwig: ``>=0.3``
   :depends on pysam: ``>=0.20``
   :depends on python: ``>=3.8``

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

    pixi global install peek-bio

to add into an existing workspace instead, run::

    pixi add peek-bio

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peek-bio

Alternatively, to install into a new environment, run::

    conda create -n envname peek-bio

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peek-bio:<tag>

(see `peek-bio/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peek-bio| image:: https://img.shields.io/conda/dn/bioconda/peek-bio.svg?style=flat
   :target: https://anaconda.org/bioconda/peek-bio
   :alt:   (downloads)
.. |docker_peek-bio| image:: https://quay.io/repository/biocontainers/peek-bio/status
   :target: https://quay.io/repository/biocontainers/peek-bio
.. _`peek-bio/tags`: https://quay.io/repository/biocontainers/peek-bio?tab=tags


.. raw:: html

    <script>
        var package = "peek-bio";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peek-bio/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peek-bio/README.html