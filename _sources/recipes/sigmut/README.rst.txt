:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sigmut'
.. highlight: bash

sigmut
======

.. conda:recipe:: sigmut
   :replaces_section_title:
   :noindex:

   Wrapper of SigProfiler \(Copyright\(c\) 2019\, Erik Bergstrom \[Alexandrov Lab\]\)

   :homepage: https://github.com/artbio/sigmut
   :license: BSD / BSD 2-Clause
   :recipe: /`sigmut <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigmut>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sigmut/meta.yaml>`_

   


.. conda:package:: sigmut

   |downloads_sigmut| |docker_sigmut|

   :versions:
      
      

      ``1.0-2``,  ``1.0-1``,  ``1.0-0``

      

   
   :depends on matplotlib-base: 
   :depends on numpy: ``>=1.17.5``
   :depends on pandas: 
   :depends on python: ``>=3.7``
   :depends on scipy: 
   :depends on statsmodels: 
   :depends on zlib: 

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

    pixi global install sigmut

to add into an existing workspace instead, run::

    pixi add sigmut

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sigmut

Alternatively, to install into a new environment, run::

    conda create -n envname sigmut

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sigmut:<tag>

(see `sigmut/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sigmut| image:: https://img.shields.io/conda/dn/bioconda/sigmut.svg?style=flat
   :target: https://anaconda.org/bioconda/sigmut
   :alt:   (downloads)
.. |docker_sigmut| image:: https://quay.io/repository/biocontainers/sigmut/status
   :target: https://quay.io/repository/biocontainers/sigmut
.. _`sigmut/tags`: https://quay.io/repository/biocontainers/sigmut?tab=tags


.. raw:: html

    <script>
        var package = "sigmut";
        var versions = ["1.0","1.0","1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sigmut/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sigmut/README.html