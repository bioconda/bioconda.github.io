:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'squigualiser'
.. highlight: bash

squigualiser
============

.. conda:recipe:: squigualiser
   :replaces_section_title:
   :noindex:

   Visualise ONT raw signals

   :homepage: https://github.com/hiruna72/squigualiser
   :license: MIT
   :recipe: /`squigualiser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigualiser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/squigualiser/meta.yaml>`_

   


.. conda:package:: squigualiser

   |downloads_squigualiser| |docker_squigualiser|

   :versions:
      
      

      ``0.6.4-0``,  ``0.6.3-0``

      

   
   :depends on bokeh: ``3.1.1``
   :depends on matplotlib-base: ``3.7``
   :depends on numpy: 
   :depends on pyfaidx: 
   :depends on pyfastx: 
   :depends on pysam: 
   :depends on pyslow5: 
   :depends on python: ``>=3.8``
   :depends on seaborn: 
   :depends on selenium: 

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

    pixi global install squigualiser

to add into an existing workspace instead, run::

    pixi add squigualiser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install squigualiser

Alternatively, to install into a new environment, run::

    conda create -n envname squigualiser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/squigualiser:<tag>

(see `squigualiser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_squigualiser| image:: https://img.shields.io/conda/dn/bioconda/squigualiser.svg?style=flat
   :target: https://anaconda.org/bioconda/squigualiser
   :alt:   (downloads)
.. |docker_squigualiser| image:: https://quay.io/repository/biocontainers/squigualiser/status
   :target: https://quay.io/repository/biocontainers/squigualiser
.. _`squigualiser/tags`: https://quay.io/repository/biocontainers/squigualiser?tab=tags


.. raw:: html

    <script>
        var package = "squigualiser";
        var versions = ["0.6.4","0.6.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/squigualiser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/squigualiser/README.html