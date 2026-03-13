:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ampliconclassifier'
.. highlight: bash

ampliconclassifier
==================

.. conda:recipe:: ampliconclassifier
   :replaces_section_title:
   :noindex:

   AmpliconClassifier classifies the output of AmpliconArchitect to detect different types of focal amplifications.


   :homepage: https://github.com/jluebeck/AmpliconClassifier
   :license: BSD / BSD 2-Clause
   :recipe: /`ampliconclassifier <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconclassifier>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ampliconclassifier/meta.yaml>`_

   


.. conda:package:: ampliconclassifier

   |downloads_ampliconclassifier| |docker_ampliconclassifier|

   :versions:
      
      

      ``0.4.14-0``,  ``0.4.9-0``,  ``0.4.5-1``,  ``0.4.5-0``

      

   
   :depends on intervaltree: 
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on python: ``>=3.7``
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

    pixi global install ampliconclassifier

to add into an existing workspace instead, run::

    pixi add ampliconclassifier

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ampliconclassifier

Alternatively, to install into a new environment, run::

    conda create -n envname ampliconclassifier

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ampliconclassifier:<tag>

(see `ampliconclassifier/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ampliconclassifier| image:: https://img.shields.io/conda/dn/bioconda/ampliconclassifier.svg?style=flat
   :target: https://anaconda.org/bioconda/ampliconclassifier
   :alt:   (downloads)
.. |docker_ampliconclassifier| image:: https://quay.io/repository/biocontainers/ampliconclassifier/status
   :target: https://quay.io/repository/biocontainers/ampliconclassifier
.. _`ampliconclassifier/tags`: https://quay.io/repository/biocontainers/ampliconclassifier?tab=tags


.. raw:: html

    <script>
        var package = "ampliconclassifier";
        var versions = ["0.4.14","0.4.9","0.4.5","0.4.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ampliconclassifier/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ampliconclassifier/README.html