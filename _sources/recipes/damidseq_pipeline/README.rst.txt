:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'damidseq_pipeline'
.. highlight: bash

damidseq_pipeline
=================

.. conda:recipe:: damidseq_pipeline
   :replaces_section_title:
   :noindex:

   An automated pipeline for processing DamID sequencing datasets.

   :homepage: https://github.com/owenjm/damidseq_pipeline
   :documentation: https://owenjm.github.io/damidseq_pipeline
   
   :license: GPL / GPL-2.0-or-later
   :recipe: /`damidseq_pipeline <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damidseq_pipeline>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/damidseq_pipeline/meta.yaml>`_

   


.. conda:package:: damidseq_pipeline

   |downloads_damidseq_pipeline| |docker_damidseq_pipeline|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6-0</code>,  <code>1.5.3-0</code>,  <code>1.4-5</code>,  <code>1.4-4</code>,  <code>1.4-3</code>,  <code>1.4-2</code>,  <code>1.4-1</code>,  </span></summary>
      

      ``1.6.2-0``,  ``1.6.1-0``,  ``1.6-0``,  ``1.5.3-0``,  ``1.4-5``,  ``1.4-4``,  ``1.4-3``,  ``1.4-2``,  ``1.4-1``,  ``1.4-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bowtie2: ``>=2.3.0``
   :depends on igvtools: 
   :depends on perl: ``>=5.32.1,<6.0a0 *_perl5``
   :depends on r-base: 
   :depends on samtools: 

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

    pixi global install damidseq_pipeline

to add into an existing workspace instead, run::

    pixi add damidseq_pipeline

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install damidseq_pipeline

Alternatively, to install into a new environment, run::

    conda create -n envname damidseq_pipeline

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/damidseq_pipeline:<tag>

(see `damidseq_pipeline/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_damidseq_pipeline| image:: https://img.shields.io/conda/dn/bioconda/damidseq_pipeline.svg?style=flat
   :target: https://anaconda.org/bioconda/damidseq_pipeline
   :alt:   (downloads)
.. |docker_damidseq_pipeline| image:: https://quay.io/repository/biocontainers/damidseq_pipeline/status
   :target: https://quay.io/repository/biocontainers/damidseq_pipeline
.. _`damidseq_pipeline/tags`: https://quay.io/repository/biocontainers/damidseq_pipeline?tab=tags


.. raw:: html

    <script>
        var package = "damidseq_pipeline";
        var versions = ["1.6.2","1.6.1","1.6","1.5.3","1.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/damidseq_pipeline/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/damidseq_pipeline/README.html