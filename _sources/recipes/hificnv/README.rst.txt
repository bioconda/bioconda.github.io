:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hificnv'
.. highlight: bash

hificnv
=======

.. conda:recipe:: hificnv
   :replaces_section_title:
   :noindex:

   Copy number variant caller and depth visualization utility for PacBio HiFi reads

   :homepage: https://github.com/PacificBiosciences/HiFiCNV
   :license: BSD / BSD-3-Clause-Clear
   :recipe: /`hificnv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hificnv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hificnv/meta.yaml>`_

   


.. conda:package:: hificnv

   |downloads_hificnv| |docker_hificnv|

   :versions:
      
      

      ``1.0.1-0``,  ``1.0.0-0``,  ``0.1.7-0``,  ``0.1.6b-0``

      

   

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

    pixi global install hificnv

to add into an existing workspace instead, run::

    pixi add hificnv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hificnv

Alternatively, to install into a new environment, run::

    conda create -n envname hificnv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hificnv:<tag>

(see `hificnv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hificnv| image:: https://img.shields.io/conda/dn/bioconda/hificnv.svg?style=flat
   :target: https://anaconda.org/bioconda/hificnv
   :alt:   (downloads)
.. |docker_hificnv| image:: https://quay.io/repository/biocontainers/hificnv/status
   :target: https://quay.io/repository/biocontainers/hificnv
.. _`hificnv/tags`: https://quay.io/repository/biocontainers/hificnv?tab=tags


.. raw:: html

    <script>
        var package = "hificnv";
        var versions = ["1.0.1","1.0.0","0.1.7","0.1.6b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hificnv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hificnv/README.html