:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calour'
.. highlight: bash

calour
======

.. conda:recipe:: calour
   :replaces_section_title:
   :noindex:

   exploratory and interactive microbiome analyses based on heatmaps

   :homepage: https://biocore.github.io/calour/
   :developer docs: https://github.com/biocore/calour
   :license: BSD / BSD-3-Clause
   :recipe: /`calour <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calour>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calour/meta.yaml>`_

   Calour is a python package for processing\, analysis and interactive
   exploration of microbiome \(and other matrix form data\)\,
   incorporating external databases.



.. conda:package:: calour

   |downloads_calour| |docker_calour|

   :versions:
      
      

      ``2020.8.6-0``,  ``2019.5.1-0``,  ``2018.10.1-0``

      

   
   :depends on biom-format: 
   :depends on docrep: 
   :depends on ipython: 
   :depends on ipywidgets: 
   :depends on matplotlib-base: ``>=2.0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyqt: ``>5``
   :depends on python: ``>=3.5``
   :depends on scikit-bio: ``>=0.5.1``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on statsmodels: 

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

    pixi global install calour

to add into an existing workspace instead, run::

    pixi add calour

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install calour

Alternatively, to install into a new environment, run::

    conda create -n envname calour

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/calour:<tag>

(see `calour/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_calour| image:: https://img.shields.io/conda/dn/bioconda/calour.svg?style=flat
   :target: https://anaconda.org/bioconda/calour
   :alt:   (downloads)
.. |docker_calour| image:: https://quay.io/repository/biocontainers/calour/status
   :target: https://quay.io/repository/biocontainers/calour
.. _`calour/tags`: https://quay.io/repository/biocontainers/calour?tab=tags


.. raw:: html

    <script>
        var package = "calour";
        var versions = ["2020.8.6","2019.5.1","2018.10.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calour/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calour/README.html