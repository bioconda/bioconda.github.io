:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'calisp'
.. highlight: bash

calisp
======

.. conda:recipe:: calisp
   :replaces_section_title:
   :noindex:

   Estimate isotopic composition of peptides from proteomics mass spectrometry data.

   :homepage: https://github.com/kinestetika/Calisp
   :license: MIT
   :recipe: /`calisp <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calisp>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/calisp/meta.yaml>`_

   


.. conda:package:: calisp

   |downloads_calisp| |docker_calisp|

   :versions:
      
      

      ``3.1.4-0``,  ``3.1.1-0``,  ``3.1-0``,  ``3.0.13-0``,  ``3.0.12-0``,  ``3.0.11-0``,  ``3.0.10-0``

      

   
   :depends on numpy: 
   :depends on pandas: 
   :depends on pyarrow: 
   :depends on pymzml: 
   :depends on python: ``>=3.6``
   :depends on scipy: 
   :depends on tqdm: 

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

    pixi global install calisp

to add into an existing workspace instead, run::

    pixi add calisp

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install calisp

Alternatively, to install into a new environment, run::

    conda create -n envname calisp

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/calisp:<tag>

(see `calisp/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_calisp| image:: https://img.shields.io/conda/dn/bioconda/calisp.svg?style=flat
   :target: https://anaconda.org/bioconda/calisp
   :alt:   (downloads)
.. |docker_calisp| image:: https://quay.io/repository/biocontainers/calisp/status
   :target: https://quay.io/repository/biocontainers/calisp
.. _`calisp/tags`: https://quay.io/repository/biocontainers/calisp?tab=tags


.. raw:: html

    <script>
        var package = "calisp";
        var versions = ["3.1.4","3.1.1","3.1","3.0.13","3.0.12"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/calisp/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/calisp/README.html