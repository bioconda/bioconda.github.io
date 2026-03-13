:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'avro-cwl'
.. highlight: bash

avro-cwl
========

.. conda:recipe:: avro-cwl
   :replaces_section_title:
   :noindex:

   Avro is a serialization and RPC framework. This package is a fork of regular avro made by the CWL team in order to fix some issues \(https\:\/\/github.com\/common\-workflow\-language\/cwltool\/issues\/524\)

   :homepage: https://pypi.python.org/pypi?:action=display&name=avro-cwl
   :license: APACHE / Apache 2.0
   :recipe: /`avro-cwl <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-cwl>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-cwl/meta.yaml>`_

   


.. conda:package:: avro-cwl

   |downloads_avro-cwl| |docker_avro-cwl|

   :versions:
      
      

      ``1.8.9-0``,  ``1.8.4-1``,  ``1.8.4-0``

      

   
   :depends on python: 

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

    pixi global install avro-cwl

to add into an existing workspace instead, run::

    pixi add avro-cwl

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install avro-cwl

Alternatively, to install into a new environment, run::

    conda create -n envname avro-cwl

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/avro-cwl:<tag>

(see `avro-cwl/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_avro-cwl| image:: https://img.shields.io/conda/dn/bioconda/avro-cwl.svg?style=flat
   :target: https://anaconda.org/bioconda/avro-cwl
   :alt:   (downloads)
.. |docker_avro-cwl| image:: https://quay.io/repository/biocontainers/avro-cwl/status
   :target: https://quay.io/repository/biocontainers/avro-cwl
.. _`avro-cwl/tags`: https://quay.io/repository/biocontainers/avro-cwl?tab=tags


.. raw:: html

    <script>
        var package = "avro-cwl";
        var versions = ["1.8.9","1.8.4","1.8.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-cwl/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-cwl/README.html