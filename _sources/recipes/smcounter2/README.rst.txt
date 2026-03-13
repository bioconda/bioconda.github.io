:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'smcounter2'
.. highlight: bash

smcounter2
==========

.. conda:recipe:: smcounter2
   :replaces_section_title:
   :noindex:

   smCounter2\: an accurate low\-frequency variant caller for targeted sequencing data with unique molecular identifiers

   :homepage: https://github.com/qiaseq/qiaseq-smcounter-v2
   :license: MIT
   :recipe: /`smcounter2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/smcounter2/meta.yaml>`_

   


.. conda:package:: smcounter2

   |downloads_smcounter2| |docker_smcounter2|

   :versions:
      
      

      ``0.1.2018.08.28-2``,  ``0.1.2018.08.28-1``,  ``0.1.2018.08.28-0``

      

   
   :depends on bedtools: 
   :depends on openpyxl: 
   :depends on pysam: 
   :depends on python: ``<3``
   :depends on r-base: 
   :depends on r-plyr: 
   :depends on scipy: 
   :depends on statistics: 

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

    pixi global install smcounter2

to add into an existing workspace instead, run::

    pixi add smcounter2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install smcounter2

Alternatively, to install into a new environment, run::

    conda create -n envname smcounter2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/smcounter2:<tag>

(see `smcounter2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_smcounter2| image:: https://img.shields.io/conda/dn/bioconda/smcounter2.svg?style=flat
   :target: https://anaconda.org/bioconda/smcounter2
   :alt:   (downloads)
.. |docker_smcounter2| image:: https://quay.io/repository/biocontainers/smcounter2/status
   :target: https://quay.io/repository/biocontainers/smcounter2
.. _`smcounter2/tags`: https://quay.io/repository/biocontainers/smcounter2?tab=tags


.. raw:: html

    <script>
        var package = "smcounter2";
        var versions = ["0.1.2018.08.28","0.1.2018.08.28","0.1.2018.08.28"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/smcounter2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/smcounter2/README.html