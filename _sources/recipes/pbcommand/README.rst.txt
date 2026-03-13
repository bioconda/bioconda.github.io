:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbcommand'
.. highlight: bash

pbcommand
=========

.. conda:recipe:: pbcommand
   :replaces_section_title:
   :noindex:

   Library for generating the CLI of various PacBio tools

   :homepage: https://github.com/PacificBiosciences/pbbioconda
   :license: BSD-3-Clause-Clear
   :recipe: /`pbcommand <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbcommand/meta.yaml>`_

   


.. conda:package:: pbcommand

   |downloads_pbcommand| |docker_pbcommand|

   :versions:
      
      

      ``2.1.1-2``,  ``2.1.1-1``,  ``2.1.1-0``,  ``1.1.1-3``,  ``1.1.1-2``,  ``1.1.1-1``,  ``1.1.1-0``,  ``0.3.29-0``,  ``0.2.17-0``

      

   
   :depends on avro-python3: 
   :depends on iso8601: 
   :depends on numpy: ``>=1.17``
   :depends on python: ``>=3.7,<3.8``
   :depends on pytz: 
   :depends on requests: 
   :depends on setuptools: 

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

    pixi global install pbcommand

to add into an existing workspace instead, run::

    pixi add pbcommand

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbcommand

Alternatively, to install into a new environment, run::

    conda create -n envname pbcommand

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbcommand:<tag>

(see `pbcommand/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbcommand| image:: https://img.shields.io/conda/dn/bioconda/pbcommand.svg?style=flat
   :target: https://anaconda.org/bioconda/pbcommand
   :alt:   (downloads)
.. |docker_pbcommand| image:: https://quay.io/repository/biocontainers/pbcommand/status
   :target: https://quay.io/repository/biocontainers/pbcommand
.. _`pbcommand/tags`: https://quay.io/repository/biocontainers/pbcommand?tab=tags


.. raw:: html

    <script>
        var package = "pbcommand";
        var versions = ["2.1.1","2.1.1","2.1.1","1.1.1","1.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbcommand/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbcommand/README.html