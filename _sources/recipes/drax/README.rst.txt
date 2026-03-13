:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'drax'
.. highlight: bash

drax
====

.. conda:recipe:: drax
   :replaces_section_title:
   :noindex:

   A pipeline for Detecting Resistome Associated taXa.

   :homepage: https://github.com/will-rowe/drax
   :license: MIT
   :recipe: /`drax <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drax>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/drax/meta.yaml>`_

   


.. conda:package:: drax

   |downloads_drax| |docker_drax|

   :versions:
      
      

      ``0.0.0-4``,  ``0.0.0-3``,  ``0.0.0-2``,  ``0.0.0-1``,  ``0.0.0-0``

      

   
   :depends on bbmap: ``37.90``
   :depends on fastp: ``0.12.4``
   :depends on fastqc: ``0.11.7``
   :depends on groot: ``0.5``
   :depends on kaiju: ``1.6.2``
   :depends on krona: ``2.7``
   :depends on metacherchant: ``0.1.0``
   :depends on multiqc: ``1.4``
   :depends on nextflow: ``0.27.6``
   :depends on r-essentials: ``1.7.0``
   :depends on samtools: ``1.4``
   :depends on seqkit: ``0.7.2``

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

    pixi global install drax

to add into an existing workspace instead, run::

    pixi add drax

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install drax

Alternatively, to install into a new environment, run::

    conda create -n envname drax

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/drax:<tag>

(see `drax/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_drax| image:: https://img.shields.io/conda/dn/bioconda/drax.svg?style=flat
   :target: https://anaconda.org/bioconda/drax
   :alt:   (downloads)
.. |docker_drax| image:: https://quay.io/repository/biocontainers/drax/status
   :target: https://quay.io/repository/biocontainers/drax
.. _`drax/tags`: https://quay.io/repository/biocontainers/drax?tab=tags


.. raw:: html

    <script>
        var package = "drax";
        var versions = ["0.0.0","0.0.0","0.0.0","0.0.0","0.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/drax/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/drax/README.html