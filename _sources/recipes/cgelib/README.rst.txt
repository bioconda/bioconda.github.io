:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cgelib'
.. highlight: bash

cgelib
======

.. conda:recipe:: cgelib
   :replaces_section_title:
   :noindex:

   This package will in time replace the cgecore package. The package contains classes and functions intended to be utilized across the CGE tools.

   :homepage: https://genomicepidemiology.org/
   :developer docs: https://bitbucket.org/genomicepidemiology/cgelib
   :license: APACHE / Apache-2.0
   :recipe: /`cgelib <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgelib>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cgelib/meta.yaml>`_

   


.. conda:package:: cgelib

   |downloads_cgelib| |docker_cgelib|

   :versions:
      
      

      ``0.7.5-0``,  ``0.7.4-0``

      

   
   :depends on gitpython: 
   :depends on python: ``>=3.6``
   :depends on python-dateutil: 

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

    pixi global install cgelib

to add into an existing workspace instead, run::

    pixi add cgelib

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cgelib

Alternatively, to install into a new environment, run::

    conda create -n envname cgelib

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cgelib:<tag>

(see `cgelib/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cgelib| image:: https://img.shields.io/conda/dn/bioconda/cgelib.svg?style=flat
   :target: https://anaconda.org/bioconda/cgelib
   :alt:   (downloads)
.. |docker_cgelib| image:: https://quay.io/repository/biocontainers/cgelib/status
   :target: https://quay.io/repository/biocontainers/cgelib
.. _`cgelib/tags`: https://quay.io/repository/biocontainers/cgelib?tab=tags


.. raw:: html

    <script>
        var package = "cgelib";
        var versions = ["0.7.5","0.7.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cgelib/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cgelib/README.html