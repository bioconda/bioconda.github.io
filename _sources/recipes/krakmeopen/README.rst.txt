:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'krakmeopen'
.. highlight: bash

krakmeopen
==========

.. conda:recipe:: krakmeopen
   :replaces_section_title:
   :noindex:

   A Kraken 2 downstream analysis toolkit. Calculate quality metrics for Kraken 2 classifications.

   :homepage: https://github.com/danisven/KrakMeOpen
   :license: MIT / MIT
   :recipe: /`krakmeopen <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakmeopen>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/krakmeopen/meta.yaml>`_

   


.. conda:package:: krakmeopen

   |downloads_krakmeopen| |docker_krakmeopen|

   :versions:
      
      

      ``0.1.5-0``,  ``0.1.4-0``,  ``0.1.3-0``

      

   
   :depends on pandas: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on stringmeup: 

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

    pixi global install krakmeopen

to add into an existing workspace instead, run::

    pixi add krakmeopen

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install krakmeopen

Alternatively, to install into a new environment, run::

    conda create -n envname krakmeopen

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/krakmeopen:<tag>

(see `krakmeopen/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_krakmeopen| image:: https://img.shields.io/conda/dn/bioconda/krakmeopen.svg?style=flat
   :target: https://anaconda.org/bioconda/krakmeopen
   :alt:   (downloads)
.. |docker_krakmeopen| image:: https://quay.io/repository/biocontainers/krakmeopen/status
   :target: https://quay.io/repository/biocontainers/krakmeopen
.. _`krakmeopen/tags`: https://quay.io/repository/biocontainers/krakmeopen?tab=tags


.. raw:: html

    <script>
        var package = "krakmeopen";
        var versions = ["0.1.5","0.1.4","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/krakmeopen/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/krakmeopen/README.html