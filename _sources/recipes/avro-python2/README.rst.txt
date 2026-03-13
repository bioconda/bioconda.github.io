:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'avro-python2'
.. highlight: bash

avro-python2
============

.. conda:recipe:: avro-python2
   :replaces_section_title:
   :noindex:

   Avro is a serialization and RPC framework.

   :homepage: http://avro.apache.org/
   :license: Apache License 2.0
   :recipe: /`avro-python2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/avro-python2/meta.yaml>`_

   


.. conda:package:: avro-python2

   |downloads_avro-python2| |docker_avro-python2|

   :versions:
      
      

      ``1.9.0-0``,  ``1.8.2-1``,  ``1.8.2-0``,  ``1.8.1-0``

      

   
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

    pixi global install avro-python2

to add into an existing workspace instead, run::

    pixi add avro-python2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install avro-python2

Alternatively, to install into a new environment, run::

    conda create -n envname avro-python2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/avro-python2:<tag>

(see `avro-python2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_avro-python2| image:: https://img.shields.io/conda/dn/bioconda/avro-python2.svg?style=flat
   :target: https://anaconda.org/bioconda/avro-python2
   :alt:   (downloads)
.. |docker_avro-python2| image:: https://quay.io/repository/biocontainers/avro-python2/status
   :target: https://quay.io/repository/biocontainers/avro-python2
.. _`avro-python2/tags`: https://quay.io/repository/biocontainers/avro-python2?tab=tags


.. raw:: html

    <script>
        var package = "avro-python2";
        var versions = ["1.9.0","1.8.2","1.8.2","1.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/avro-python2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/avro-python2/README.html