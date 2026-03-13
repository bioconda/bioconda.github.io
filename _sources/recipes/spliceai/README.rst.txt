:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'spliceai'
.. highlight: bash

spliceai
========

.. conda:recipe:: spliceai
   :replaces_section_title:
   :noindex:

   A deep learning\-based tool to identify splice variants.

   :homepage: https://github.com/Illumina/SpliceAI
   :license: GPL / GPLv3
   :recipe: /`spliceai <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/spliceai/meta.yaml>`_

   


.. conda:package:: spliceai

   |downloads_spliceai| |docker_spliceai|

   :versions:
      
      

      ``1.3.1-1``,  ``1.3.1-0``,  ``1.3-1``,  ``1.3-0``,  ``1.2.1-1``,  ``1.2.1-0``

      

   
   :depends on keras: ``>=2.0.5``
   :depends on numpy: ``>=1.14.0``
   :depends on pandas: ``>=0.24.2``
   :depends on pyfaidx: ``>=0.5.0``
   :depends on pysam: ``>=0.10.0``
   :depends on python: 
   :depends on tensorflow: ``>=1.13.0``

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

    pixi global install spliceai

to add into an existing workspace instead, run::

    pixi add spliceai

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install spliceai

Alternatively, to install into a new environment, run::

    conda create -n envname spliceai

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/spliceai:<tag>

(see `spliceai/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_spliceai| image:: https://img.shields.io/conda/dn/bioconda/spliceai.svg?style=flat
   :target: https://anaconda.org/bioconda/spliceai
   :alt:   (downloads)
.. |docker_spliceai| image:: https://quay.io/repository/biocontainers/spliceai/status
   :target: https://quay.io/repository/biocontainers/spliceai
.. _`spliceai/tags`: https://quay.io/repository/biocontainers/spliceai?tab=tags


.. raw:: html

    <script>
        var package = "spliceai";
        var versions = ["1.3.1","1.3.1","1.3","1.3","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/spliceai/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/spliceai/README.html