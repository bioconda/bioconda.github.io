:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pyonsite'
.. highlight: bash

pyonsite
========

.. conda:recipe:: pyonsite
   :replaces_section_title:
   :noindex:

   onsite\: mass spectrometry post\-translational localization tool

   :homepage: https://www.github.com/bigbio/onsite
   :license: MIT
   :recipe: /`pyonsite <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyonsite>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pyonsite/meta.yaml>`_

   


.. conda:package:: pyonsite

   |downloads_pyonsite| |docker_pyonsite|

   :versions:
      
      

      ``0.0.2-0``,  ``0.0.1-0``

      

   
   :depends on click: ``>=8.0.0``
   :depends on eigen: ``>=3.4.0``
   :depends on numpy: ``>=1.26.0``
   :depends on pyopenms: ``3.4.0``
   :depends on python: ``>=3.11,<3.13``
   :depends on scipy: ``>=1.16.0``

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

    pixi global install pyonsite

to add into an existing workspace instead, run::

    pixi add pyonsite

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pyonsite

Alternatively, to install into a new environment, run::

    conda create -n envname pyonsite

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pyonsite:<tag>

(see `pyonsite/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pyonsite| image:: https://img.shields.io/conda/dn/bioconda/pyonsite.svg?style=flat
   :target: https://anaconda.org/bioconda/pyonsite
   :alt:   (downloads)
.. |docker_pyonsite| image:: https://quay.io/repository/biocontainers/pyonsite/status
   :target: https://quay.io/repository/biocontainers/pyonsite
.. _`pyonsite/tags`: https://quay.io/repository/biocontainers/pyonsite?tab=tags


.. raw:: html

    <script>
        var package = "pyonsite";
        var versions = ["0.0.2","0.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pyonsite/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pyonsite/README.html