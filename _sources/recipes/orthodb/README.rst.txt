:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'orthodb'
.. highlight: bash

orthodb
=======

.. conda:recipe:: orthodb
   :replaces_section_title:
   :noindex:

   Interface to OrthoDB REST API.

   :homepage: https://www.ezlab.org/orthodb_v12_userguide.html
   :documentation: https://www.ezlab.org/orthodb_v12_userguide.html#api
   
   :developer docs: https://gitlab.com/ezlab/orthodb_py
   :license: GPL3 / GPL3
   :recipe: /`orthodb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthodb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/orthodb/meta.yaml>`_
   :links: biotools: :biotools:`orthodb`, doi: :doi:`10.1093/nar/gkac996`, PMID: :PMID:`36350662`

   Python interface to OrthoDB REST API with some additional functionality.


.. conda:package:: orthodb

   |downloads_orthodb| |docker_orthodb|

   :versions:
      
      

      ``0.9.1-0``,  ``0.9.0-0``

      

   
   :depends on python: ``>=3.7``
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

    pixi global install orthodb

to add into an existing workspace instead, run::

    pixi add orthodb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install orthodb

Alternatively, to install into a new environment, run::

    conda create -n envname orthodb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/orthodb:<tag>

(see `orthodb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_orthodb| image:: https://img.shields.io/conda/dn/bioconda/orthodb.svg?style=flat
   :target: https://anaconda.org/bioconda/orthodb
   :alt:   (downloads)
.. |docker_orthodb| image:: https://quay.io/repository/biocontainers/orthodb/status
   :target: https://quay.io/repository/biocontainers/orthodb
.. _`orthodb/tags`: https://quay.io/repository/biocontainers/orthodb?tab=tags


.. raw:: html

    <script>
        var package = "orthodb";
        var versions = ["0.9.1","0.9.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/orthodb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/orthodb/README.html