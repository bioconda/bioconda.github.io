:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'scrubby'
.. highlight: bash

scrubby
=======

.. conda:recipe:: scrubby
   :replaces_section_title:
   :noindex:

   Read depletion\/extraction and database cleaning using k\-mer and alignment methods

   :homepage: https://github.com/esteinig/scrubby
   :license: MIT / MIT
   :recipe: /`scrubby <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrubby>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/scrubby/meta.yaml>`_

   


.. conda:package:: scrubby

   |downloads_scrubby| |docker_scrubby|

   :versions:
      
      

      ``0.2.1-0``

      

   
   :depends on kraken2: ``2.1.2.*``
   :depends on libgcc-ng: ``>=12``
   :depends on minimap2: ``2.24.*``
   :depends on strobealign: ``0.8.0.*``

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

    pixi global install scrubby

to add into an existing workspace instead, run::

    pixi add scrubby

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install scrubby

Alternatively, to install into a new environment, run::

    conda create -n envname scrubby

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/scrubby:<tag>

(see `scrubby/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_scrubby| image:: https://img.shields.io/conda/dn/bioconda/scrubby.svg?style=flat
   :target: https://anaconda.org/bioconda/scrubby
   :alt:   (downloads)
.. |docker_scrubby| image:: https://quay.io/repository/biocontainers/scrubby/status
   :target: https://quay.io/repository/biocontainers/scrubby
.. _`scrubby/tags`: https://quay.io/repository/biocontainers/scrubby?tab=tags


.. raw:: html

    <script>
        var package = "scrubby";
        var versions = ["0.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/scrubby/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/scrubby/README.html