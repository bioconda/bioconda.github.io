:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sunbeamlib'
.. highlight: bash

sunbeamlib
==========

.. conda:recipe:: sunbeamlib
   :replaces_section_title:
   :noindex:

   A robust\, extensible metagenomic sequencing pipeline.

   :homepage: https://github.com/sunbeam-labs/sunbeam
   :documentation: https://sunbeam.readthedocs.io
   
   :license: MIT / MIT
   :recipe: /`sunbeamlib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sunbeamlib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sunbeamlib/meta.yaml>`_

   


.. conda:package:: sunbeamlib

   |downloads_sunbeamlib| |docker_sunbeamlib|

   :versions:
      
      

      ``5.2.2-0``,  ``5.2.1-0``,  ``5.1.2-0``,  ``5.1.0-0``,  ``5.0.5-0``,  ``5.0.4-0``,  ``5.0.1-0``

      

   
   :depends on more-itertools: ``10.7.0``
   :depends on pandas: ``2.2.3``
   :depends on python: ``>=3.11``
   :depends on pyyaml: ``6.0.2``
   :depends on snakemake-minimal: ``9.3.3``

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

    pixi global install sunbeamlib

to add into an existing workspace instead, run::

    pixi add sunbeamlib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sunbeamlib

Alternatively, to install into a new environment, run::

    conda create -n envname sunbeamlib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sunbeamlib:<tag>

(see `sunbeamlib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sunbeamlib| image:: https://img.shields.io/conda/dn/bioconda/sunbeamlib.svg?style=flat
   :target: https://anaconda.org/bioconda/sunbeamlib
   :alt:   (downloads)
.. |docker_sunbeamlib| image:: https://quay.io/repository/biocontainers/sunbeamlib/status
   :target: https://quay.io/repository/biocontainers/sunbeamlib
.. _`sunbeamlib/tags`: https://quay.io/repository/biocontainers/sunbeamlib?tab=tags


.. raw:: html

    <script>
        var package = "sunbeamlib";
        var versions = ["5.2.2","5.2.1","5.1.2","5.1.0","5.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sunbeamlib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sunbeamlib/README.html