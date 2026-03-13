:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pbiotools'
.. highlight: bash

pbiotools
=========

.. conda:recipe:: pbiotools
   :replaces_section_title:
   :noindex:

   Miscellaneous bioinformatics and other supporting utilities for Python 3.

   :homepage: https://github.com/dieterich-lab/pbiotools
   :license: MIT / MIT
   :recipe: /`pbiotools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbiotools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pbiotools/meta.yaml>`_

   


.. conda:package:: pbiotools

   |downloads_pbiotools| |docker_pbiotools|

   :versions:
      
      

      ``5.0.0-0``,  ``4.0.2-0``,  ``4.0.1-1``,  ``4.0.1-0``,  ``4.0.0-0``,  ``3.0.0-0``,  ``2.0.0-0``

      

   
   :depends on biopython: 
   :depends on joblib: 
   :depends on matplotlib-base: 
   :depends on mygene: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.11,<3.14``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn-base: 
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

    pixi global install pbiotools

to add into an existing workspace instead, run::

    pixi add pbiotools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pbiotools

Alternatively, to install into a new environment, run::

    conda create -n envname pbiotools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pbiotools:<tag>

(see `pbiotools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pbiotools| image:: https://img.shields.io/conda/dn/bioconda/pbiotools.svg?style=flat
   :target: https://anaconda.org/bioconda/pbiotools
   :alt:   (downloads)
.. |docker_pbiotools| image:: https://quay.io/repository/biocontainers/pbiotools/status
   :target: https://quay.io/repository/biocontainers/pbiotools
.. _`pbiotools/tags`: https://quay.io/repository/biocontainers/pbiotools?tab=tags


.. raw:: html

    <script>
        var package = "pbiotools";
        var versions = ["5.0.0","4.0.2","4.0.1","4.0.1","4.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pbiotools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pbiotools/README.html