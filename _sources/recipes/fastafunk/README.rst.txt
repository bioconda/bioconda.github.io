:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fastafunk'
.. highlight: bash

fastafunk
=========

.. conda:recipe:: fastafunk
   :replaces_section_title:
   :noindex:

   Miscellaneous fasta manipulation tools

   :homepage: https://github.com/cov-ert/fastafunk
   :license: MIT / MIT
   :recipe: /`fastafunk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastafunk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fastafunk/meta.yaml>`_

   


.. conda:package:: fastafunk

   |downloads_fastafunk| |docker_fastafunk|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.9-0``,  ``0.0.4-0``

      

   
   :depends on biopython: ``>=1.70,<1.78``
   :depends on dendropy: 
   :depends on numpy: 
   :depends on pandas: ``>=0.24.2``
   :depends on python: 

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

    pixi global install fastafunk

to add into an existing workspace instead, run::

    pixi add fastafunk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fastafunk

Alternatively, to install into a new environment, run::

    conda create -n envname fastafunk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fastafunk:<tag>

(see `fastafunk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fastafunk| image:: https://img.shields.io/conda/dn/bioconda/fastafunk.svg?style=flat
   :target: https://anaconda.org/bioconda/fastafunk
   :alt:   (downloads)
.. |docker_fastafunk| image:: https://quay.io/repository/biocontainers/fastafunk/status
   :target: https://quay.io/repository/biocontainers/fastafunk
.. _`fastafunk/tags`: https://quay.io/repository/biocontainers/fastafunk?tab=tags


.. raw:: html

    <script>
        var package = "fastafunk";
        var versions = ["0.1.2","0.1.1","0.1.0","0.0.9","0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fastafunk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fastafunk/README.html