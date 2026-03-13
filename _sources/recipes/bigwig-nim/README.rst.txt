:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bigwig-nim'
.. highlight: bash

bigwig-nim
==========

.. conda:recipe:: bigwig-nim
   :replaces_section_title:
   :noindex:

   Command\-line querying\+conversion of bigwigs

   :homepage: https://github.com/brentp/bigwig-nim
   :license: MIT
   :recipe: /`bigwig-nim <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigwig-nim>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bigwig-nim/meta.yaml>`_

   


.. conda:package:: bigwig-nim

   |downloads_bigwig-nim| |docker_bigwig-nim|

   :versions:
      
      

      ``0.0.3-0``

      

   

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

    pixi global install bigwig-nim

to add into an existing workspace instead, run::

    pixi add bigwig-nim

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bigwig-nim

Alternatively, to install into a new environment, run::

    conda create -n envname bigwig-nim

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bigwig-nim:<tag>

(see `bigwig-nim/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bigwig-nim| image:: https://img.shields.io/conda/dn/bioconda/bigwig-nim.svg?style=flat
   :target: https://anaconda.org/bioconda/bigwig-nim
   :alt:   (downloads)
.. |docker_bigwig-nim| image:: https://quay.io/repository/biocontainers/bigwig-nim/status
   :target: https://quay.io/repository/biocontainers/bigwig-nim
.. _`bigwig-nim/tags`: https://quay.io/repository/biocontainers/bigwig-nim?tab=tags


.. raw:: html

    <script>
        var package = "bigwig-nim";
        var versions = ["0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bigwig-nim/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bigwig-nim/README.html