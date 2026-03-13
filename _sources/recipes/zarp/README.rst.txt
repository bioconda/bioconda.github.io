:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'zarp'
.. highlight: bash

zarp
====

.. conda:recipe:: zarp
   :replaces_section_title:
   :noindex:

   User\-friendly command\-line interface for the ZARP RNA\-Seq analysis pipeline

   :homepage: https://github.com/zavolanlab/zarp-cli
   :documentation: https://zavolanlab.github.io/zarp-cli
   
   :developer docs: https://github.com/zavolanlab/zarp-cli/tree/dev
   :license: APACHE / Apache License 2.0
   :recipe: /`zarp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zarp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/zarp/meta.yaml>`_

   


.. conda:package:: zarp

   |downloads_zarp| |docker_zarp|

   :versions:
      
      

      ``1.0.0-0``,  ``0.1.1-0``

      

   
   :depends on addict: ``>=2.4.0``
   :depends on bidict: ``>=0.22.0``
   :depends on email-validator: ``>=1.2.1``
   :depends on genomepy: ``>=0.15.0``
   :depends on jsonref: ``>=0.2``
   :depends on numpy: ``>=1.22,<1.25``
   :depends on pandas: ``>=1.3.5,<1.4.0``
   :depends on pydantic: ``>=1.9.2,<2.0.0``
   :depends on pygments: ``>=2.8.0``
   :depends on python: ``>=3.9,<=3.10``
   :depends on rich: ``>=12.5.1``
   :depends on snakemake: ``>=7.19.1``

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

    pixi global install zarp

to add into an existing workspace instead, run::

    pixi add zarp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install zarp

Alternatively, to install into a new environment, run::

    conda create -n envname zarp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/zarp:<tag>

(see `zarp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_zarp| image:: https://img.shields.io/conda/dn/bioconda/zarp.svg?style=flat
   :target: https://anaconda.org/bioconda/zarp
   :alt:   (downloads)
.. |docker_zarp| image:: https://quay.io/repository/biocontainers/zarp/status
   :target: https://quay.io/repository/biocontainers/zarp
.. _`zarp/tags`: https://quay.io/repository/biocontainers/zarp?tab=tags


.. raw:: html

    <script>
        var package = "zarp";
        var versions = ["1.0.0","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/zarp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/zarp/README.html