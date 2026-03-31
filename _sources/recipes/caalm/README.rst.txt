:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'caalm'
.. highlight: bash

caalm
=====

.. conda:recipe:: caalm
   :replaces_section_title:
   :noindex:

   Carbohydrate Activity Annotation with protein Language Models

   :homepage: https://github.com/lczong/CAALM
   :license: Apache-2.0
   :recipe: /`caalm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/caalm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/caalm/meta.yaml>`_

   


.. conda:package:: caalm

   |downloads_caalm| |docker_caalm|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on biopython: ``>=1.86``
   :depends on faiss-cpu: 
   :depends on jinja2: ``>=3.1``
   :depends on markupsafe: ``>=2.0``
   :depends on numpy: ``>=1.26``
   :depends on python: ``>=3.10``
   :depends on pytorch: ``>=2.6.0``
   :depends on pyyaml: ``>=6.0``
   :depends on tqdm: ``>=4.67``
   :depends on transformers: ``>=4.55.0,<5``

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

    pixi global install caalm

to add into an existing workspace instead, run::

    pixi add caalm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install caalm

Alternatively, to install into a new environment, run::

    conda create -n envname caalm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/caalm:<tag>

(see `caalm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_caalm| image:: https://img.shields.io/conda/dn/bioconda/caalm.svg?style=flat
   :target: https://anaconda.org/bioconda/caalm
   :alt:   (downloads)
.. |docker_caalm| image:: https://quay.io/repository/biocontainers/caalm/status
   :target: https://quay.io/repository/biocontainers/caalm
.. _`caalm/tags`: https://quay.io/repository/biocontainers/caalm?tab=tags


.. raw:: html

    <script>
        var package = "caalm";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/caalm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/caalm/README.html