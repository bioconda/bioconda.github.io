:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pypiper'
.. highlight: bash

pypiper
=======

.. conda:recipe:: pypiper
   :replaces_section_title:
   :noindex:

   Pypiper is a lightweight python toolkit that helps you write slick pipelines in python.

   :homepage: http://pypiper.readthedocs.io/en/latest/
   :developer docs: https://github.com/epigen/pypiper
   :license: BSD / BSD-2-Clause
   :recipe: /`pypiper <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypiper>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pypiper/meta.yaml>`_

   


.. conda:package:: pypiper

   |downloads_pypiper| |docker_pypiper|

   :versions:
      
      

      ``0.8-0``,  ``0.7.2-2``,  ``0.7.2-0``,  ``0.6-0``

      

   
   :depends on python: ``<3``

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

    pixi global install pypiper

to add into an existing workspace instead, run::

    pixi add pypiper

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pypiper

Alternatively, to install into a new environment, run::

    conda create -n envname pypiper

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pypiper:<tag>

(see `pypiper/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pypiper| image:: https://img.shields.io/conda/dn/bioconda/pypiper.svg?style=flat
   :target: https://anaconda.org/bioconda/pypiper
   :alt:   (downloads)
.. |docker_pypiper| image:: https://quay.io/repository/biocontainers/pypiper/status
   :target: https://quay.io/repository/biocontainers/pypiper
.. _`pypiper/tags`: https://quay.io/repository/biocontainers/pypiper?tab=tags


.. raw:: html

    <script>
        var package = "pypiper";
        var versions = ["0.8","0.7.2","0.7.2","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pypiper/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pypiper/README.html