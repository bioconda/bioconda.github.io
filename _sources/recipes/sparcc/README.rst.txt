:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'sparcc'
.. highlight: bash

sparcc
======

.. conda:recipe:: sparcc
   :replaces_section_title:
   :noindex:

   SparCC is a python module for computing correlations in compositional data \(16S\, metagenomics\, etc\).

   :homepage: https://bitbucket.org/yonatanf/sparcc
   :license: MIT
   :recipe: /`sparcc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparcc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/sparcc/meta.yaml>`_
   :links: doi: :doi:`10.1371/journal.pcbi.1002687`

   


.. conda:package:: sparcc

   |downloads_sparcc| |docker_sparcc|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: ``<3``
   :depends on scipy: 

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

    pixi global install sparcc

to add into an existing workspace instead, run::

    pixi add sparcc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install sparcc

Alternatively, to install into a new environment, run::

    conda create -n envname sparcc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/sparcc:<tag>

(see `sparcc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_sparcc| image:: https://img.shields.io/conda/dn/bioconda/sparcc.svg?style=flat
   :target: https://anaconda.org/bioconda/sparcc
   :alt:   (downloads)
.. |docker_sparcc| image:: https://quay.io/repository/biocontainers/sparcc/status
   :target: https://quay.io/repository/biocontainers/sparcc
.. _`sparcc/tags`: https://quay.io/repository/biocontainers/sparcc?tab=tags


.. raw:: html

    <script>
        var package = "sparcc";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/sparcc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/sparcc/README.html