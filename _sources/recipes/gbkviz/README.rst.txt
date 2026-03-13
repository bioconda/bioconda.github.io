:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gbkviz'
.. highlight: bash

gbkviz
======

.. conda:recipe:: gbkviz
   :replaces_section_title:
   :noindex:

   Simple web application to visualize and compare genomes in Genbank files

   :homepage: https://github.com/moshi4/GBKviz/
   :license: MIT
   :recipe: /`gbkviz <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbkviz>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gbkviz/meta.yaml>`_

   


.. conda:package:: gbkviz

   |downloads_gbkviz| |docker_gbkviz|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.5-0``

      

   
   :depends on biopython: ``>=1.79,<2.0``
   :depends on mummer4: ``>=4.0.0rc1``
   :depends on python: ``>=3.7,<4.0``
   :depends on reportlab: ``>=3.5.68,<4.0.0``
   :depends on streamlit: ``1.8.1``

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

    pixi global install gbkviz

to add into an existing workspace instead, run::

    pixi add gbkviz

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gbkviz

Alternatively, to install into a new environment, run::

    conda create -n envname gbkviz

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gbkviz:<tag>

(see `gbkviz/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gbkviz| image:: https://img.shields.io/conda/dn/bioconda/gbkviz.svg?style=flat
   :target: https://anaconda.org/bioconda/gbkviz
   :alt:   (downloads)
.. |docker_gbkviz| image:: https://quay.io/repository/biocontainers/gbkviz/status
   :target: https://quay.io/repository/biocontainers/gbkviz
.. _`gbkviz/tags`: https://quay.io/repository/biocontainers/gbkviz?tab=tags


.. raw:: html

    <script>
        var package = "gbkviz";
        var versions = ["1.2.0","1.1.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gbkviz/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gbkviz/README.html