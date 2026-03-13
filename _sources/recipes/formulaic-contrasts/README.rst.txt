:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'formulaic-contrasts'
.. highlight: bash

formulaic-contrasts
===================

.. conda:recipe:: formulaic-contrasts
   :replaces_section_title:
   :noindex:

   Build contrasts for models defined with formulaic

   :homepage: https://github.com/scverse/formulaic-contrasts
   :documentation: https://formulaic-contrasts.readthedocs.io/en/latest/
   
   :license: BSD / BSD-3-Clause
   :recipe: /`formulaic-contrasts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/formulaic-contrasts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/formulaic-contrasts/meta.yaml>`_

   


.. conda:package:: formulaic-contrasts

   |downloads_formulaic-contrasts| |docker_formulaic-contrasts|

   :versions:
      
      

      ``1.0.0-0``

      

   
   :depends on formulaic: 
   :depends on pandas: 
   :depends on python: ``>=3.10``
   :depends on session-info: 

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

    pixi global install formulaic-contrasts

to add into an existing workspace instead, run::

    pixi add formulaic-contrasts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install formulaic-contrasts

Alternatively, to install into a new environment, run::

    conda create -n envname formulaic-contrasts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/formulaic-contrasts:<tag>

(see `formulaic-contrasts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_formulaic-contrasts| image:: https://img.shields.io/conda/dn/bioconda/formulaic-contrasts.svg?style=flat
   :target: https://anaconda.org/bioconda/formulaic-contrasts
   :alt:   (downloads)
.. |docker_formulaic-contrasts| image:: https://quay.io/repository/biocontainers/formulaic-contrasts/status
   :target: https://quay.io/repository/biocontainers/formulaic-contrasts
.. _`formulaic-contrasts/tags`: https://quay.io/repository/biocontainers/formulaic-contrasts?tab=tags


.. raw:: html

    <script>
        var package = "formulaic-contrasts";
        var versions = ["1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/formulaic-contrasts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/formulaic-contrasts/README.html