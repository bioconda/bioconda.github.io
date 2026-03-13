:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-bioformats'
.. highlight: bash

python-bioformats
=================

.. conda:recipe:: python-bioformats
   :replaces_section_title:
   :noindex:

   Read and write life sciences file formats

   :homepage: http://github.com/CellProfiler/python-bioformats/
   :license: GPL2 / GNU General Public v2 (GPLv2)
   :recipe: /`python-bioformats <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioformats>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-bioformats/meta.yaml>`_

   


.. conda:package:: python-bioformats

   |downloads_python-bioformats| |docker_python-bioformats|

   :versions:
      
      

      ``4.0.7-0``,  ``4.0.6-0``,  ``4.0.5-0``,  ``4.0.4-0``,  ``4.0.0-0``,  ``1.5.2-0``

      

   
   :depends on boto3: ``>=1.14.23``
   :depends on future: ``>=0.18.2``
   :depends on openjdk: 
   :depends on python: 
   :depends on python-javabridge: ``4.0.3``

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

    pixi global install python-bioformats

to add into an existing workspace instead, run::

    pixi add python-bioformats

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-bioformats

Alternatively, to install into a new environment, run::

    conda create -n envname python-bioformats

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-bioformats:<tag>

(see `python-bioformats/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-bioformats| image:: https://img.shields.io/conda/dn/bioconda/python-bioformats.svg?style=flat
   :target: https://anaconda.org/bioconda/python-bioformats
   :alt:   (downloads)
.. |docker_python-bioformats| image:: https://quay.io/repository/biocontainers/python-bioformats/status
   :target: https://quay.io/repository/biocontainers/python-bioformats
.. _`python-bioformats/tags`: https://quay.io/repository/biocontainers/python-bioformats?tab=tags


.. raw:: html

    <script>
        var package = "python-bioformats";
        var versions = ["4.0.7","4.0.6","4.0.5","4.0.4","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-bioformats/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-bioformats/README.html