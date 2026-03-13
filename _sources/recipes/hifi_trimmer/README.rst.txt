:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hifi_trimmer'
.. highlight: bash

hifi_trimmer
============

.. conda:recipe:: hifi_trimmer
   :replaces_section_title:
   :noindex:

   hifi\_trimmer is a tool for filtering and trimming extraneous adapter hits from a HiFi read set using a BLAST search.

   :homepage: https://github.com/sanger-tol/hifi-trimmer
   :license: MIT
   :recipe: /`hifi_trimmer <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifi_trimmer>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hifi_trimmer/meta.yaml>`_

   


.. conda:package:: hifi_trimmer

   |downloads_hifi_trimmer| |docker_hifi_trimmer|

   :versions:
      
      

      ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.0-0``,  ``1.2.3-0``,  ``1.2.2-0``

      

   
   :depends on click: ``>=8.1.8``
   :depends on polars: ``<=1.22.0``
   :depends on py-bgzip: ``>=0.5.1``
   :depends on pysam: ``>=0.23.0``
   :depends on python: ``>=3.10``
   :depends on pyyaml: ``>=6.0.2``

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

    pixi global install hifi_trimmer

to add into an existing workspace instead, run::

    pixi add hifi_trimmer

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hifi_trimmer

Alternatively, to install into a new environment, run::

    conda create -n envname hifi_trimmer

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hifi_trimmer:<tag>

(see `hifi_trimmer/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hifi_trimmer| image:: https://img.shields.io/conda/dn/bioconda/hifi_trimmer.svg?style=flat
   :target: https://anaconda.org/bioconda/hifi_trimmer
   :alt:   (downloads)
.. |docker_hifi_trimmer| image:: https://quay.io/repository/biocontainers/hifi_trimmer/status
   :target: https://quay.io/repository/biocontainers/hifi_trimmer
.. _`hifi_trimmer/tags`: https://quay.io/repository/biocontainers/hifi_trimmer?tab=tags


.. raw:: html

    <script>
        var package = "hifi_trimmer";
        var versions = ["2.2.0","2.1.0","2.0.0","1.2.3","1.2.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hifi_trimmer/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hifi_trimmer/README.html