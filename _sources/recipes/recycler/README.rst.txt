:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recycler'
.. highlight: bash

recycler
========

.. conda:recipe:: recycler
   :replaces_section_title:
   :noindex:

   Recycler is a tool designed for extracting circular sequences from de novo assembly graphs

   :homepage: https://github.com/Shamir-Lab/Recycler
   :license: BSD / BSD-3-Clause
   :recipe: /`recycler <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recycler>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recycler/meta.yaml>`_

   


.. conda:package:: recycler

   |downloads_recycler| |docker_recycler|

   :versions:
      
      

      ``0.7-3``,  ``0.7-2``,  ``0.7-0``,  ``0.6.2-0``,  ``0.6-0``,  ``0.6p1-0``

      

   
   :depends on networkx: 
   :depends on nose: 
   :depends on numpy: 
   :depends on pysam: 
   :depends on python: ``<3``

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

    pixi global install recycler

to add into an existing workspace instead, run::

    pixi add recycler

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install recycler

Alternatively, to install into a new environment, run::

    conda create -n envname recycler

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/recycler:<tag>

(see `recycler/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_recycler| image:: https://img.shields.io/conda/dn/bioconda/recycler.svg?style=flat
   :target: https://anaconda.org/bioconda/recycler
   :alt:   (downloads)
.. |docker_recycler| image:: https://quay.io/repository/biocontainers/recycler/status
   :target: https://quay.io/repository/biocontainers/recycler
.. _`recycler/tags`: https://quay.io/repository/biocontainers/recycler?tab=tags


.. raw:: html

    <script>
        var package = "recycler";
        var versions = ["0.7","0.7","0.7","0.6.2","0.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recycler/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recycler/README.html