:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'irescue'
.. highlight: bash

irescue
=======

.. conda:recipe:: irescue
   :replaces_section_title:
   :noindex:

   Uncertainty\-aware quantification of transposable elements expression in scRNA\-seq.

   :homepage: https://github.com/bodegalab/irescue
   :documentation: https://pypi.org/project/IRescue
   
   :license: MIT / MIT
   :recipe: /`irescue <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irescue>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/irescue/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkae793`

   


.. conda:package:: irescue

   |downloads_irescue| |docker_irescue|

   :versions:
      
      

      ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.3-1``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-0``

      

   
   :depends on bedtools: ``>=2.30.0``
   :depends on coreutils: ``>=9.3``
   :depends on gawk: ``>=5.0.1``
   :depends on gzip: ``>=1.12``
   :depends on networkx: ``>=2.6,<4``
   :depends on numpy: ``>=1.21,<3``
   :depends on pysam: ``>=0.17,<1``
   :depends on python: ``>=3.10``
   :depends on requests: ``>=2.25,<3``
   :depends on samtools: ``>=1.12``
   :depends on scipy: ``>=1.6,<2``

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

    pixi global install irescue

to add into an existing workspace instead, run::

    pixi add irescue

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install irescue

Alternatively, to install into a new environment, run::

    conda create -n envname irescue

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/irescue:<tag>

(see `irescue/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_irescue| image:: https://img.shields.io/conda/dn/bioconda/irescue.svg?style=flat
   :target: https://anaconda.org/bioconda/irescue
   :alt:   (downloads)
.. |docker_irescue| image:: https://quay.io/repository/biocontainers/irescue/status
   :target: https://quay.io/repository/biocontainers/irescue
.. _`irescue/tags`: https://quay.io/repository/biocontainers/irescue?tab=tags


.. raw:: html

    <script>
        var package = "irescue";
        var versions = ["1.2.0","1.1.2","1.1.1","1.1.0","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/irescue/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/irescue/README.html