:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gapmm2'
.. highlight: bash

gapmm2
======

.. conda:recipe:: gapmm2
   :replaces_section_title:
   :noindex:

   gapmm2\: gapped alignment using minimap2.

   :homepage: https://github.com/nextgenusfs/gapmm2
   :license: BSD / BSD-2-Clause
   :recipe: /`gapmm2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapmm2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gapmm2/meta.yaml>`_

   


.. conda:package:: gapmm2

   |downloads_gapmm2| |docker_gapmm2|

   :versions:
      
      

      ``25.8.12-0``,  ``25.4.13-0``,  ``25.4.5-0``,  ``23.11.3-0``,  ``0.2.0-0``

      

   
   :depends on mappy: 
   :depends on natsort: 
   :depends on python: ``>=3.6``
   :depends on python-edlib: 

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

    pixi global install gapmm2

to add into an existing workspace instead, run::

    pixi add gapmm2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gapmm2

Alternatively, to install into a new environment, run::

    conda create -n envname gapmm2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gapmm2:<tag>

(see `gapmm2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gapmm2| image:: https://img.shields.io/conda/dn/bioconda/gapmm2.svg?style=flat
   :target: https://anaconda.org/bioconda/gapmm2
   :alt:   (downloads)
.. |docker_gapmm2| image:: https://quay.io/repository/biocontainers/gapmm2/status
   :target: https://quay.io/repository/biocontainers/gapmm2
.. _`gapmm2/tags`: https://quay.io/repository/biocontainers/gapmm2?tab=tags


.. raw:: html

    <script>
        var package = "gapmm2";
        var versions = ["25.8.12","25.4.13","25.4.5","23.11.3","0.2.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gapmm2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gapmm2/README.html