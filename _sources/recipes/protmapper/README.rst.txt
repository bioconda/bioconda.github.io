:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'protmapper'
.. highlight: bash

protmapper
==========

.. conda:recipe:: protmapper
   :replaces_section_title:
   :noindex:

   Map protein sites to human reference sequence.

   :homepage: https://github.com/indralab/protmapper
   :documentation: https://protmapper.readthedocs.io
   
   :license: BSD / BSD-2-Clause
   :recipe: /`protmapper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protmapper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/protmapper/meta.yaml>`_

   


.. conda:package:: protmapper

   |downloads_protmapper| |docker_protmapper|

   :versions:
      
      

      ``0.0.29-0``,  ``0.0.28-0``,  ``0.0.21-0``,  ``0.0.20-0``,  ``0.0.19-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.14-0``,  ``0.0.13-0``

      

   
   :depends on boto3: 
   :depends on pystow: ``>=0.1.0``
   :depends on python: ``>=3``
   :depends on rdflib: 
   :depends on requests: 

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

    pixi global install protmapper

to add into an existing workspace instead, run::

    pixi add protmapper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install protmapper

Alternatively, to install into a new environment, run::

    conda create -n envname protmapper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/protmapper:<tag>

(see `protmapper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_protmapper| image:: https://img.shields.io/conda/dn/bioconda/protmapper.svg?style=flat
   :target: https://anaconda.org/bioconda/protmapper
   :alt:   (downloads)
.. |docker_protmapper| image:: https://quay.io/repository/biocontainers/protmapper/status
   :target: https://quay.io/repository/biocontainers/protmapper
.. _`protmapper/tags`: https://quay.io/repository/biocontainers/protmapper?tab=tags


.. raw:: html

    <script>
        var package = "protmapper";
        var versions = ["0.0.29","0.0.28","0.0.21","0.0.20","0.0.19"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/protmapper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/protmapper/README.html