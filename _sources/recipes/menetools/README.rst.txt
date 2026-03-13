:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'menetools'
.. highlight: bash

menetools
=========

.. conda:recipe:: menetools
   :replaces_section_title:
   :noindex:

   Python 3 Metabolic Network Topology Tools

   :homepage: https://github.com/cfrioux/MeneTools
   :license: GPLv3+
   :recipe: /`menetools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/menetools/meta.yaml>`_

   


.. conda:package:: menetools

   |downloads_menetools| |docker_menetools|

   :versions:
      
      

      ``2.0.6-0``,  ``1.0.4_1-2``,  ``1.0.4_1-1``,  ``1.0.4_1-0``

      

   
   :depends on clyngor: 
   :depends on python: ``>=3.6``

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

    pixi global install menetools

to add into an existing workspace instead, run::

    pixi add menetools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install menetools

Alternatively, to install into a new environment, run::

    conda create -n envname menetools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/menetools:<tag>

(see `menetools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_menetools| image:: https://img.shields.io/conda/dn/bioconda/menetools.svg?style=flat
   :target: https://anaconda.org/bioconda/menetools
   :alt:   (downloads)
.. |docker_menetools| image:: https://quay.io/repository/biocontainers/menetools/status
   :target: https://quay.io/repository/biocontainers/menetools
.. _`menetools/tags`: https://quay.io/repository/biocontainers/menetools?tab=tags


.. raw:: html

    <script>
        var package = "menetools";
        var versions = ["2.0.6","1.0.4_1","1.0.4_1","1.0.4_1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/menetools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/menetools/README.html