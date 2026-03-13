:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rsidx'
.. highlight: bash

rsidx
=====

.. conda:recipe:: rsidx
   :replaces_section_title:
   :noindex:

   Library for indexing VCF files for random access searches by rsID.

   :homepage: https://github.com/bioforensics/rsidx
   :license: BSD / BSD-3-Clause
   :recipe: /`rsidx <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsidx>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rsidx/meta.yaml>`_

   


.. conda:package:: rsidx

   |downloads_rsidx| |docker_rsidx|

   :versions:
      
      

      ``0.3.1-0``,  ``0.3-0``,  ``0.2-2``,  ``0.2-1``,  ``0.2-0``,  ``0.1.1-0``

      

   
   :depends on htslib: ``>=1.10``
   :depends on pytest: 
   :depends on pytest-cov: 
   :depends on python: ``>=3``
   :depends on setuptools: 

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

    pixi global install rsidx

to add into an existing workspace instead, run::

    pixi add rsidx

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rsidx

Alternatively, to install into a new environment, run::

    conda create -n envname rsidx

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rsidx:<tag>

(see `rsidx/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rsidx| image:: https://img.shields.io/conda/dn/bioconda/rsidx.svg?style=flat
   :target: https://anaconda.org/bioconda/rsidx
   :alt:   (downloads)
.. |docker_rsidx| image:: https://quay.io/repository/biocontainers/rsidx/status
   :target: https://quay.io/repository/biocontainers/rsidx
.. _`rsidx/tags`: https://quay.io/repository/biocontainers/rsidx?tab=tags


.. raw:: html

    <script>
        var package = "rsidx";
        var versions = ["0.3.1","0.3","0.2","0.2","0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rsidx/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rsidx/README.html