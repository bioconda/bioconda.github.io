:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'shovill'
.. highlight: bash

shovill
=======

.. conda:recipe:: shovill
   :replaces_section_title:
   :noindex:

   Microbial assembly pipeline for Illumina paired\-end reads

   :homepage: https://github.com/tseemann/shovill
   :license: GPL2
   :recipe: /`shovill <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/shovill/meta.yaml>`_
   :links: biotools: :biotools:`shovill`, usegalaxy-eu: :usegalaxy-eu:`shovill`

   


.. conda:package:: shovill

   |downloads_shovill| |docker_shovill|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.4.2-0</code>,  <code>1.4.1-0</code>,  <code>1.1.0-2</code>,  <code>1.1.0-1</code>,  <code>1.1.0-0</code>,  <code>1.0.9-0</code>,  <code>1.0.4-1</code>,  <code>1.0.4-0</code>,  <code>1.0.1-0</code>,  </span></summary>
      

      ``1.4.2-0``,  ``1.4.1-0``,  ``1.1.0-2``,  ``1.1.0-1``,  ``1.1.0-0``,  ``1.0.9-0``,  ``1.0.4-1``,  ``1.0.4-0``,  ``1.0.1-0``,  ``1.0.0-0``,  ``0.9.0-1``,  ``0.9.0-0``,  ``0.8.0-0``,  ``0.7.1-2``,  ``0.7.1-1``,  ``0.7.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on bwa: ``>=0.7.17``
   :depends on csvtk: 
   :depends on flash: ``>=1.2``
   :depends on kmc: ``>=3.2``
   :depends on lighter: ``>=1.1``
   :depends on megahit: ``>=1.2.9``
   :depends on perl: ``>=5.32.0``
   :depends on perl-file-spec: 
   :depends on perl-findbin: 
   :depends on pigz: 
   :depends on pilon: ``>=1.22``
   :depends on samclip: ``>=0.4``
   :depends on samtools: ``>=1.10``
   :depends on seqkit: 
   :depends on skesa: ``>=2.5``
   :depends on spades: ``>=3.14,<4``
   :depends on trimmomatic: ``>=0.36``
   :depends on velvet: ``>=1.2.10``

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

    pixi global install shovill

to add into an existing workspace instead, run::

    pixi add shovill

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install shovill

Alternatively, to install into a new environment, run::

    conda create -n envname shovill

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/shovill:<tag>

(see `shovill/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_shovill| image:: https://img.shields.io/conda/dn/bioconda/shovill.svg?style=flat
   :target: https://anaconda.org/bioconda/shovill
   :alt:   (downloads)
.. |docker_shovill| image:: https://quay.io/repository/biocontainers/shovill/status
   :target: https://quay.io/repository/biocontainers/shovill
.. _`shovill/tags`: https://quay.io/repository/biocontainers/shovill?tab=tags


.. raw:: html

    <script>
        var package = "shovill";
        var versions = ["1.4.2","1.4.1","1.1.0","1.1.0","1.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/shovill/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/shovill/README.html