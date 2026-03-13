:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'python-htsget'
.. highlight: bash

python-htsget
=============

.. conda:recipe:: python-htsget
   :replaces_section_title:
   :noindex:

   Python API and command line interface for the GA4GH htsget API.

   :homepage: http://pypi.python.org/pypi/htsget
   :license: APACHE / Apache Software
   :recipe: /`python-htsget <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-htsget>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/python-htsget/meta.yaml>`_

   


.. conda:package:: python-htsget

   |downloads_python-htsget| |docker_python-htsget|

   :versions:
      
      

      ``0.2.6-0``,  ``0.2.5-1``,  ``0.2.5-0``

      

   
   :depends on humanize: 
   :depends on python: 
   :depends on requests: 
   :depends on six: 

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

    pixi global install python-htsget

to add into an existing workspace instead, run::

    pixi add python-htsget

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install python-htsget

Alternatively, to install into a new environment, run::

    conda create -n envname python-htsget

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/python-htsget:<tag>

(see `python-htsget/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_python-htsget| image:: https://img.shields.io/conda/dn/bioconda/python-htsget.svg?style=flat
   :target: https://anaconda.org/bioconda/python-htsget
   :alt:   (downloads)
.. |docker_python-htsget| image:: https://quay.io/repository/biocontainers/python-htsget/status
   :target: https://quay.io/repository/biocontainers/python-htsget
.. _`python-htsget/tags`: https://quay.io/repository/biocontainers/python-htsget?tab=tags


.. raw:: html

    <script>
        var package = "python-htsget";
        var versions = ["0.2.6","0.2.5","0.2.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/python-htsget/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/python-htsget/README.html