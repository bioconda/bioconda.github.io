:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tecount'
.. highlight: bash

tecount
=======

.. conda:recipe:: tecount
   :replaces_section_title:
   :noindex:

   A package to count read alignments on transposable elements subfamilies\, families and classes.

   :homepage: https://github.com/bodegalab/tecount
   :license: MIT
   :recipe: /`tecount <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tecount>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tecount/meta.yaml>`_
   :links: https: :https:`//doi.org/10.1038/s41588-021-00989-7`

   


.. conda:package:: tecount

   |downloads_tecount| |docker_tecount|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.6.1-0``,  ``0.6.0-0``

      

   
   :depends on bedtools: ``>=2.30.0``
   :depends on pysam: ``>=0.16.0.1``
   :depends on python: ``>=3.7``
   :depends on samtools: ``>=1.14``

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

    pixi global install tecount

to add into an existing workspace instead, run::

    pixi add tecount

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tecount

Alternatively, to install into a new environment, run::

    conda create -n envname tecount

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tecount:<tag>

(see `tecount/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tecount| image:: https://img.shields.io/conda/dn/bioconda/tecount.svg?style=flat
   :target: https://anaconda.org/bioconda/tecount
   :alt:   (downloads)
.. |docker_tecount| image:: https://quay.io/repository/biocontainers/tecount/status
   :target: https://quay.io/repository/biocontainers/tecount
.. _`tecount/tags`: https://quay.io/repository/biocontainers/tecount?tab=tags


.. raw:: html

    <script>
        var package = "tecount";
        var versions = ["1.0.1","1.0.0","0.6.1","0.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tecount/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tecount/README.html