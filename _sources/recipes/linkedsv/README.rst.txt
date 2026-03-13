:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'linkedsv'
.. highlight: bash

linkedsv
========

.. conda:recipe:: linkedsv
   :replaces_section_title:
   :noindex:

   A novel structural variant caller for 10X Genomics \(linked\-read\) sequencing data

   :homepage: https://github.com/WGLab/LinkedSV
   :license: MIT / MIT
   :recipe: /`linkedsv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkedsv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/linkedsv/meta.yaml>`_

   


.. conda:package:: linkedsv

   |downloads_linkedsv| |docker_linkedsv|

   :versions:
      
      

      ``0.1.0-0``

      

   
   :depends on bedtools: 
   :depends on fermikit: 
   :depends on htslib: ``>=1.21,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on pandas: 
   :depends on perl: 
   :depends on pigz: 
   :depends on psutil: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 

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

    pixi global install linkedsv

to add into an existing workspace instead, run::

    pixi add linkedsv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install linkedsv

Alternatively, to install into a new environment, run::

    conda create -n envname linkedsv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/linkedsv:<tag>

(see `linkedsv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_linkedsv| image:: https://img.shields.io/conda/dn/bioconda/linkedsv.svg?style=flat
   :target: https://anaconda.org/bioconda/linkedsv
   :alt:   (downloads)
.. |docker_linkedsv| image:: https://quay.io/repository/biocontainers/linkedsv/status
   :target: https://quay.io/repository/biocontainers/linkedsv
.. _`linkedsv/tags`: https://quay.io/repository/biocontainers/linkedsv?tab=tags


.. raw:: html

    <script>
        var package = "linkedsv";
        var versions = ["0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/linkedsv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/linkedsv/README.html