:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tbox-scan'
.. highlight: bash

tbox-scan
=========

.. conda:recipe:: tbox-scan
   :replaces_section_title:
   :noindex:

   tbox\-scan is for detecting and classifying T\-boxes in DNA sequences.

   :homepage: https://tbdb.io
   :developer docs: https://github.com/mpiersonsmela/tbox
   :license: MIT / MIT
   :recipe: /`tbox-scan <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbox-scan>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tbox-scan/meta.yaml>`_

   


.. conda:package:: tbox-scan

   |downloads_tbox-scan| |docker_tbox-scan|

   :versions:
      
      

      ``1.0.2-2``,  ``1.0.2-1``,  ``1.0.2-0``,  ``1.0.1-0``,  ``0.1.3-0``,  ``0.1.2-0``

      

   
   :depends on biopython: 
   :depends on infernal: ``1.1.5.*``
   :depends on pandas: 
   :depends on perl: 
   :depends on python: 
   :depends on viennarna: 

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

    pixi global install tbox-scan

to add into an existing workspace instead, run::

    pixi add tbox-scan

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tbox-scan

Alternatively, to install into a new environment, run::

    conda create -n envname tbox-scan

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tbox-scan:<tag>

(see `tbox-scan/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tbox-scan| image:: https://img.shields.io/conda/dn/bioconda/tbox-scan.svg?style=flat
   :target: https://anaconda.org/bioconda/tbox-scan
   :alt:   (downloads)
.. |docker_tbox-scan| image:: https://quay.io/repository/biocontainers/tbox-scan/status
   :target: https://quay.io/repository/biocontainers/tbox-scan
.. _`tbox-scan/tags`: https://quay.io/repository/biocontainers/tbox-scan?tab=tags


.. raw:: html

    <script>
        var package = "tbox-scan";
        var versions = ["1.0.2","1.0.2","1.0.2","1.0.1","0.1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tbox-scan/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tbox-scan/README.html