:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'mirscore'
.. highlight: bash

mirscore
========

.. conda:recipe:: mirscore
   :replaces_section_title:
   :noindex:

   miRScore\: A rapid and precise microRNA validation tool

   :homepage: https://github.com/Aez35/miRScore
   :license: MIT / MIT
   :recipe: /`mirscore <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirscore>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/mirscore/meta.yaml>`_

   


.. conda:package:: mirscore

   |downloads_mirscore| |docker_mirscore|

   :versions:
      
      

      ``0.3.5-0``,  ``0.3.4-0``,  ``0.3.2-0``,  ``0.3.1-0``,  ``0.3.0-1``,  ``0.3.0-0``

      

   
   :depends on biopython: 
   :depends on bowtie: ``>=1.3.1``
   :depends on cutadapt: ``>=4.8``
   :depends on pandas: ``>=2.0.0``
   :depends on pysam: ``>=0.21.0``
   :depends on python: ``>=3.6``
   :depends on samtools: ``>=1.16``
   :depends on strucvis: ``>=0.8``
   :depends on tqdm: ``>=4.65``
   :depends on viennarna: ``>=2.5.1``

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

    pixi global install mirscore

to add into an existing workspace instead, run::

    pixi add mirscore

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install mirscore

Alternatively, to install into a new environment, run::

    conda create -n envname mirscore

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/mirscore:<tag>

(see `mirscore/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_mirscore| image:: https://img.shields.io/conda/dn/bioconda/mirscore.svg?style=flat
   :target: https://anaconda.org/bioconda/mirscore
   :alt:   (downloads)
.. |docker_mirscore| image:: https://quay.io/repository/biocontainers/mirscore/status
   :target: https://quay.io/repository/biocontainers/mirscore
.. _`mirscore/tags`: https://quay.io/repository/biocontainers/mirscore?tab=tags


.. raw:: html

    <script>
        var package = "mirscore";
        var versions = ["0.3.5","0.3.4","0.3.2","0.3.1","0.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/mirscore/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/mirscore/README.html