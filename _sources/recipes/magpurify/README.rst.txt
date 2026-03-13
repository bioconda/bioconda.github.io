:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'magpurify'
.. highlight: bash

magpurify
=========

.. conda:recipe:: magpurify
   :replaces_section_title:
   :noindex:

   Identify and remove incorrectly binned contigs from metagenome\-assembled genomes.

   :homepage: https://github.com/snayfach/MAGpurify
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`magpurify <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/magpurify/meta.yaml>`_

   


.. conda:package:: magpurify

   |downloads_magpurify| |docker_magpurify|

   :versions:
      
      

      ``2.1.2-2``,  ``2.1.2-1``,  ``2.1.2-0``,  ``2.1.1-0``,  ``2.1.0-0``,  ``2.0.1-0``,  ``1.0-2``,  ``1.0-1``

      

   
   :depends on biopython: 
   :depends on blast: 
   :depends on coverm: 
   :depends on hmmer: 
   :depends on last: 
   :depends on mash: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on prodigal: 
   :depends on python: ``>=3.6,<=3.12``
   :depends on scikit-learn: 

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

    pixi global install magpurify

to add into an existing workspace instead, run::

    pixi add magpurify

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install magpurify

Alternatively, to install into a new environment, run::

    conda create -n envname magpurify

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/magpurify:<tag>

(see `magpurify/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_magpurify| image:: https://img.shields.io/conda/dn/bioconda/magpurify.svg?style=flat
   :target: https://anaconda.org/bioconda/magpurify
   :alt:   (downloads)
.. |docker_magpurify| image:: https://quay.io/repository/biocontainers/magpurify/status
   :target: https://quay.io/repository/biocontainers/magpurify
.. _`magpurify/tags`: https://quay.io/repository/biocontainers/magpurify?tab=tags


.. raw:: html

    <script>
        var package = "magpurify";
        var versions = ["2.1.2","2.1.2","2.1.2","2.1.1","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/magpurify/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/magpurify/README.html