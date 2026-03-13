:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'xhmm'
.. highlight: bash

xhmm
====

.. conda:recipe:: xhmm
   :replaces_section_title:
   :noindex:

   XHMM \(eXome\-Hidden Markov Model\).

   :homepage: http://atgu.mgh.harvard.edu/xhmm/index.shtml
   :license: GPL3
   :recipe: /`xhmm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xhmm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/xhmm/meta.yaml>`_
   :links: biotools: :biotools:`xhmm`, doi: :doi:`10.1016/j.ajhg.2012.08.005`, doi: :doi:`10.1002/0471142905.hg0723s81`

   


.. conda:package:: xhmm

   |downloads_xhmm| |docker_xhmm|

   :versions:
      
      

      ``0.0.0.2016_01_04.cc14e52-5``,  ``0.0.0.2016_01_04.cc14e52-4``,  ``0.0.0.2016_01_04.cc14e52-3``,  ``0.0.0.2016_01_04.cc14e52-2``,  ``0.0.0.2016_01_04.cc14e52-1``,  ``0.0.0.2016_01_04.cc14e52-0``

      

   
   :depends on libgcc-ng: ``>=12``
   :depends on libgfortran-ng: 
   :depends on libgfortran5: ``>=10.4.0``
   :depends on liblapack: ``>=3.9.0,<4.0a0``
   :depends on libstdcxx-ng: ``>=12``

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

    pixi global install xhmm

to add into an existing workspace instead, run::

    pixi add xhmm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install xhmm

Alternatively, to install into a new environment, run::

    conda create -n envname xhmm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/xhmm:<tag>

(see `xhmm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_xhmm| image:: https://img.shields.io/conda/dn/bioconda/xhmm.svg?style=flat
   :target: https://anaconda.org/bioconda/xhmm
   :alt:   (downloads)
.. |docker_xhmm| image:: https://quay.io/repository/biocontainers/xhmm/status
   :target: https://quay.io/repository/biocontainers/xhmm
.. _`xhmm/tags`: https://quay.io/repository/biocontainers/xhmm?tab=tags


.. raw:: html

    <script>
        var package = "xhmm";
        var versions = ["0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52","0.0.0.2016_01_04.cc14e52"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/xhmm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/xhmm/README.html