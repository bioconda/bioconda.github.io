:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'captus'
.. highlight: bash

captus
======

.. conda:recipe:: captus
   :replaces_section_title:
   :noindex:

   Captus\: Assembly of Phylogenomic Datasets from High\-Throughput Sequencing data.

   :homepage: https://github.com/edgardomortiz/Captus
   :documentation: https://edgardomortiz.github.io/captus.docs
   
   :license: GPL3 / GPL-3.0-only
   :recipe: /`captus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/captus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/captus/meta.yaml>`_
   :links: doi: :doi:`10.1101/2023.10.27.564367`

   


.. conda:package:: captus

   |downloads_captus| |docker_captus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.6.5-0</code>,  <code>1.6.4-0</code>,  <code>1.6.3-0</code>,  <code>1.6.2-0</code>,  <code>1.6.1-0</code>,  <code>1.6.0-0</code>,  <code>1.5.9-0</code>,  <code>1.5.8-0</code>,  <code>1.5.7-0</code>,  </span></summary>
      

      ``1.6.5-0``,  ``1.6.4-0``,  ``1.6.3-0``,  ``1.6.2-0``,  ``1.6.1-0``,  ``1.6.0-0``,  ``1.5.9-0``,  ``1.5.8-0``,  ``1.5.7-0``,  ``1.5.5-0``,  ``1.5.4-0``,  ``1.5.3-0``,  ``1.5.2-0``,  ``1.5.1-0``,  ``1.5.0-0``,  ``1.4.9-0``,  ``1.4.8-0``,  ``1.4.7-0``,  ``1.4.6-0``,  ``1.4.5-0``,  ``1.4.4-0``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-0``,  ``1.3.9-0``,  ``1.3.8-0``,  ``1.3.7-0``,  ``1.3.6-0``,  ``1.3.4-0``,  ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``,  ``1.3.0-0``,  ``1.2.0-0``,  ``1.1.2-0``,  ``1.1.1-0``,  ``1.1.0-0``,  ``1.0.1-4``,  ``1.0.1-3``,  ``1.0.1-2``,  ``1.0.1-1``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.99-0``,  ``0.9.98-0``,  ``0.9.97-0``,  ``0.9.96-0``,  ``0.9.95-2``,  ``0.9.95-1``,  ``0.9.95-0``,  ``0.9.93-0``,  ``0.9.92-0``,  ``0.9.91-2``,  ``0.9.91-0``,  ``0.9.90-0``,  ``0.9.89-0``,  ``0.9.88-1``,  ``0.9.88-0``,  ``0.9.86-0``,  ``0.9.85-0``,  ``0.9.84-1``,  ``0.9.84-0``,  ``0.9.83-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bbmap: 
   :depends on clipkit: 
   :depends on falco: 
   :depends on fastqc: 
   :depends on mafft: 
   :depends on megahit: ``>=1.2.9``
   :depends on mmseqs2: 
   :depends on muscle: ``>=5``
   :depends on pandas: ``>=2.1.0``
   :depends on perl-bioperl-core: 
   :depends on perl-yaml: 
   :depends on pigz: 
   :depends on plotly: 
   :depends on python: ``>=3.6``
   :depends on salmon: ``>=1.10.0``
   :depends on tqdm: 
   :depends on vsearch: 

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

    pixi global install captus

to add into an existing workspace instead, run::

    pixi add captus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install captus

Alternatively, to install into a new environment, run::

    conda create -n envname captus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/captus:<tag>

(see `captus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_captus| image:: https://img.shields.io/conda/dn/bioconda/captus.svg?style=flat
   :target: https://anaconda.org/bioconda/captus
   :alt:   (downloads)
.. |docker_captus| image:: https://quay.io/repository/biocontainers/captus/status
   :target: https://quay.io/repository/biocontainers/captus
.. _`captus/tags`: https://quay.io/repository/biocontainers/captus?tab=tags


.. raw:: html

    <script>
        var package = "captus";
        var versions = ["1.6.5","1.6.4","1.6.3","1.6.2","1.6.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/captus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/captus/README.html