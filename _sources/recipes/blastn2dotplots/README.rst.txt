:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'blastn2dotplots'
.. highlight: bash

blastn2dotplots
===============

.. conda:recipe:: blastn2dotplots
   :replaces_section_title:
   :noindex:

   A script for visualizing multiple dot\-plot alignments from BLASTN output.

   :homepage: https://github.com/mokuno3430/blastn2dotplots
   :license: MIT / MIT
   :recipe: /`blastn2dotplots <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastn2dotplots>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/blastn2dotplots/meta.yaml>`_

   


.. conda:package:: blastn2dotplots

   |downloads_blastn2dotplots| |docker_blastn2dotplots|

   :versions:
      
      

      ``1.1.2-0``

      

   
   :depends on matplotlib-base: ``>=3.7``
   :depends on numpy: ``>=1.24,<2.0``
   :depends on pandas: ``>=2.0``
   :depends on python: ``>=3.8``

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

    pixi global install blastn2dotplots

to add into an existing workspace instead, run::

    pixi add blastn2dotplots

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install blastn2dotplots

Alternatively, to install into a new environment, run::

    conda create -n envname blastn2dotplots

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/blastn2dotplots:<tag>

(see `blastn2dotplots/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_blastn2dotplots| image:: https://img.shields.io/conda/dn/bioconda/blastn2dotplots.svg?style=flat
   :target: https://anaconda.org/bioconda/blastn2dotplots
   :alt:   (downloads)
.. |docker_blastn2dotplots| image:: https://quay.io/repository/biocontainers/blastn2dotplots/status
   :target: https://quay.io/repository/biocontainers/blastn2dotplots
.. _`blastn2dotplots/tags`: https://quay.io/repository/biocontainers/blastn2dotplots?tab=tags


.. raw:: html

    <script>
        var package = "blastn2dotplots";
        var versions = ["1.1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/blastn2dotplots/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/blastn2dotplots/README.html