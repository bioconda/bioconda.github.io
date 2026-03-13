:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'brooklyn_plot'
.. highlight: bash

brooklyn_plot
=============

.. conda:recipe:: brooklyn_plot
   :replaces_section_title:
   :noindex:

   Gene co\-expression and transcriptional bursting pattern recognition tool in single cell\/nucleus RNA\-sequencing data

   :homepage: https://github.com/arunhpatil/brooklyn/
   :documentation: https://brooklyn-plot.readthedocs.io/
   
   :license: MIT / MIT
   :recipe: /`brooklyn_plot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brooklyn_plot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/brooklyn_plot/meta.yaml>`_

   Gene co\-expression and transcriptional bursting pattern recognition tool in single cell\/nucleus RNA\-sequencing data


.. conda:package:: brooklyn_plot

   |downloads_brooklyn_plot| |docker_brooklyn_plot|

   :versions:
      
      

      ``0.0.4-0``,  ``0.0.3-0``

      

   
   :depends on numpy: ``<1.24``
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on scanpy: 
   :depends on scipy: 

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

    pixi global install brooklyn_plot

to add into an existing workspace instead, run::

    pixi add brooklyn_plot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install brooklyn_plot

Alternatively, to install into a new environment, run::

    conda create -n envname brooklyn_plot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/brooklyn_plot:<tag>

(see `brooklyn_plot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_brooklyn_plot| image:: https://img.shields.io/conda/dn/bioconda/brooklyn_plot.svg?style=flat
   :target: https://anaconda.org/bioconda/brooklyn_plot
   :alt:   (downloads)
.. |docker_brooklyn_plot| image:: https://quay.io/repository/biocontainers/brooklyn_plot/status
   :target: https://quay.io/repository/biocontainers/brooklyn_plot
.. _`brooklyn_plot/tags`: https://quay.io/repository/biocontainers/brooklyn_plot?tab=tags


.. raw:: html

    <script>
        var package = "brooklyn_plot";
        var versions = ["0.0.4","0.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/brooklyn_plot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/brooklyn_plot/README.html