:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'qorts'
.. highlight: bash

qorts
=====

.. conda:recipe:: qorts
   :replaces_section_title:
   :noindex:

   QoRTs toolkit for analysis\, quality control\, and data management of RNA\-Seq
   datasets.


   :homepage: http://hartleys.github.io/QoRTs/
   :license: Public Domain
   :recipe: /`qorts <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/qorts/meta.yaml>`_

   


.. conda:package:: qorts

   |downloads_qorts| |docker_qorts|

   :versions:
      
      

      ``1.3.6-1``,  ``1.3.6-0``,  ``1.3.0-2``,  ``1.3.0-1``,  ``1.3.0-0``,  ``1.1.8-0``

      

   
   :depends on openjdk: 
   :depends on python: 
   :depends on r-qorts: ``1.3.6``

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

    pixi global install qorts

to add into an existing workspace instead, run::

    pixi add qorts

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install qorts

Alternatively, to install into a new environment, run::

    conda create -n envname qorts

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/qorts:<tag>

(see `qorts/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_qorts| image:: https://img.shields.io/conda/dn/bioconda/qorts.svg?style=flat
   :target: https://anaconda.org/bioconda/qorts
   :alt:   (downloads)
.. |docker_qorts| image:: https://quay.io/repository/biocontainers/qorts/status
   :target: https://quay.io/repository/biocontainers/qorts
.. _`qorts/tags`: https://quay.io/repository/biocontainers/qorts?tab=tags


.. raw:: html

    <script>
        var package = "qorts";
        var versions = ["1.3.6","1.3.6","1.3.0","1.3.0","1.3.0"];
    </script>





Notes
-----
Based on the Picard equivalent\, found in the BioConda recipies repo.
Simplifies the call to the QoRTs JAVA utility so that you can just go \:\-
  qorts \[Java Options\] QC \[QoRTs options\] input.bam annotation.gtf outputDir
which is equivalent to \:\-
  java \[Java Options\] \-jar \/path\/to\/jar\/QoRTs.jar QC \[QoRTs options\] input.bam annotation.gtf outputDir


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/qorts/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/qorts/README.html