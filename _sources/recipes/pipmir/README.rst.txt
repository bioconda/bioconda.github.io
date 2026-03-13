:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'pipmir'
.. highlight: bash

pipmir
======

.. conda:recipe:: pipmir
   :replaces_section_title:
   :noindex:

   We developed the PIPmiR algorithm to identify novel plant miRNA.

   :homepage: https://ohlerlab.mdc-berlin.de/software/Pipeline_for_the_Identification_of_Plant_miRNAs_84
   :license: PIPmiR is provided for academic use only, if you wish to use it in another setting please contact Uwe Ohler.
   :recipe: /`pipmir <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipmir>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/pipmir/meta.yaml>`_
   :links: biotools: :biotools:`pipmir`, doi: :doi:`10.1101/gr.123547.111`

   


.. conda:package:: pipmir

   |downloads_pipmir| |docker_pipmir|

   :versions:
      
      

      ``1.1-6``,  ``1.1-5``,  ``1.1-4``,  ``1.1-3``,  ``1.1-2``,  ``1.1-1``

      

   
   :depends on openjdk: 
   :depends on samtools: 
   :depends on viennarna: ``>=2.6.4``

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

    pixi global install pipmir

to add into an existing workspace instead, run::

    pixi add pipmir

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install pipmir

Alternatively, to install into a new environment, run::

    conda create -n envname pipmir

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/pipmir:<tag>

(see `pipmir/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_pipmir| image:: https://img.shields.io/conda/dn/bioconda/pipmir.svg?style=flat
   :target: https://anaconda.org/bioconda/pipmir
   :alt:   (downloads)
.. |docker_pipmir| image:: https://quay.io/repository/biocontainers/pipmir/status
   :target: https://quay.io/repository/biocontainers/pipmir
.. _`pipmir/tags`: https://quay.io/repository/biocontainers/pipmir?tab=tags


.. raw:: html

    <script>
        var package = "pipmir";
        var versions = ["1.1","1.1","1.1","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/pipmir/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/pipmir/README.html