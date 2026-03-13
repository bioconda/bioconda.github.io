:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'trimnami'
.. highlight: bash

trimnami
========

.. conda:recipe:: trimnami
   :replaces_section_title:
   :noindex:

   Read\-trimming pipelines for multiple samples

   :homepage: https://github.com/beardymcjohnface/Trimnami
   :license: MIT
   :recipe: /`trimnami <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimnami>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/trimnami/meta.yaml>`_

   


.. conda:package:: trimnami

   |downloads_trimnami| |docker_trimnami|

   :versions:
      
      

      ``0.1.4-0``,  ``0.1.3-0``,  ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on click: ``>=8.1.3``
   :depends on metasnek: ``>=0.0.8``
   :depends on pulp: ``<2.8``
   :depends on python: ``>=3.9``
   :depends on pyyaml: ``>=6.0``
   :depends on snakemake: ``>=7.14.0,<8``
   :depends on snaketool-utils: ``>=0.0.4``

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

    pixi global install trimnami

to add into an existing workspace instead, run::

    pixi add trimnami

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install trimnami

Alternatively, to install into a new environment, run::

    conda create -n envname trimnami

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/trimnami:<tag>

(see `trimnami/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_trimnami| image:: https://img.shields.io/conda/dn/bioconda/trimnami.svg?style=flat
   :target: https://anaconda.org/bioconda/trimnami
   :alt:   (downloads)
.. |docker_trimnami| image:: https://quay.io/repository/biocontainers/trimnami/status
   :target: https://quay.io/repository/biocontainers/trimnami
.. _`trimnami/tags`: https://quay.io/repository/biocontainers/trimnami?tab=tags


.. raw:: html

    <script>
        var package = "trimnami";
        var versions = ["0.1.4","0.1.3","0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/trimnami/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/trimnami/README.html