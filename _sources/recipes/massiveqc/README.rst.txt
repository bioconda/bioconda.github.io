:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'massiveqc'
.. highlight: bash

massiveqc
=========

.. conda:recipe:: massiveqc
   :replaces_section_title:
   :noindex:

   Tools for QC massive RNA\-seq samples

   :homepage: https://github.com/shimw6828/MassiveQC
   :license: MIT / MIT
   :recipe: /`massiveqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massiveqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/massiveqc/meta.yaml>`_

   


.. conda:package:: massiveqc

   |downloads_massiveqc| |docker_massiveqc|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``,  ``0.1.0-0``,  ``0.0.7-0``,  ``0.0.5-0``

      

   
   :depends on atropos: 
   :depends on bamtools: 
   :depends on fastparquet: 
   :depends on fastq-screen: 
   :depends on hisat2: 
   :depends on more-itertools: 
   :depends on numpy: 
   :depends on pandas: ``>=1.3.2``
   :depends on python: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on shap: 
   :depends on subread: 
   :depends on tqdm: 
   :depends on xopen: 

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

    pixi global install massiveqc

to add into an existing workspace instead, run::

    pixi add massiveqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install massiveqc

Alternatively, to install into a new environment, run::

    conda create -n envname massiveqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/massiveqc:<tag>

(see `massiveqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_massiveqc| image:: https://img.shields.io/conda/dn/bioconda/massiveqc.svg?style=flat
   :target: https://anaconda.org/bioconda/massiveqc
   :alt:   (downloads)
.. |docker_massiveqc| image:: https://quay.io/repository/biocontainers/massiveqc/status
   :target: https://quay.io/repository/biocontainers/massiveqc
.. _`massiveqc/tags`: https://quay.io/repository/biocontainers/massiveqc?tab=tags


.. raw:: html

    <script>
        var package = "massiveqc";
        var versions = ["0.1.2","0.1.1","0.1.0","0.0.7","0.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/massiveqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/massiveqc/README.html