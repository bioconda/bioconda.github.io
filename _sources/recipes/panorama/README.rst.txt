:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panorama'
.. highlight: bash

panorama
========

.. conda:recipe:: panorama
   :replaces_section_title:
   :noindex:

   A robust pangenome\-based method for predicting and comparing biological systems across species.

   :homepage: https://github.com/labgem/panorama
   :documentation: https://panorama.readthedocs.io
   
   :license: CeCiLL 2.1
   :recipe: /`panorama <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panorama>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panorama/meta.yaml>`_

   


.. conda:package:: panorama

   |downloads_panorama| |docker_panorama|

   :versions:
      
      

      ``1.0.0-0``,  ``0.5.0-0``

      

   
   :depends on geckodriver: ``>=0.36.0``
   :depends on lxml: ``>=4.9.2``
   :depends on ppanggolin: ``>=2.1.0``
   :depends on pyhmmer: ``>=0.6``
   :depends on python: ``>=3.10``
   :depends on selenium: ``>=4.35.0``

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

    pixi global install panorama

to add into an existing workspace instead, run::

    pixi add panorama

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panorama

Alternatively, to install into a new environment, run::

    conda create -n envname panorama

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panorama:<tag>

(see `panorama/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panorama| image:: https://img.shields.io/conda/dn/bioconda/panorama.svg?style=flat
   :target: https://anaconda.org/bioconda/panorama
   :alt:   (downloads)
.. |docker_panorama| image:: https://quay.io/repository/biocontainers/panorama/status
   :target: https://quay.io/repository/biocontainers/panorama
.. _`panorama/tags`: https://quay.io/repository/biocontainers/panorama?tab=tags


.. raw:: html

    <script>
        var package = "panorama";
        var versions = ["1.0.0","0.5.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panorama/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panorama/README.html