:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'seqnado'
.. highlight: bash

seqnado
=======

.. conda:recipe:: seqnado
   :replaces_section_title:
   :noindex:

   A unified and user\-friendly collection of pipelines for\: ATAC\-seq\, ChIP\-seq\, CUT\&RUN\/TAG\, RNA\-seq\, WGS\, Methylation \(Bisulphite\/TAPS\)\, CRISPR screens and Micro\-Capture\-C.

   :homepage: https://github.com/Milne-Group/SeqNado
   :license: GPL-3.0-or-later
   :recipe: /`seqnado <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqnado>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/seqnado/meta.yaml>`_

   


.. conda:package:: seqnado

   |downloads_seqnado| |docker_seqnado|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>1.0.5-0</code>,  <code>1.0.4-0</code>,  <code>1.0.3-0</code>,  <code>1.0.2-0</code>,  <code>1.0.1-1</code>,  <code>1.0.1-0</code>,  <code>0.7.6-0</code>,  <code>0.7.4-0</code>,  <code>0.7.3-0</code>,  </span></summary>
      

      ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-0``,  ``1.0.1-1``,  ``1.0.1-0``,  ``0.7.6-0``,  ``0.7.4-0``,  ``0.7.3-0``,  ``0.7.2-0``,  ``0.7.1-0``,  ``0.7.0-0``,  ``0.6.7-0``,  ``0.6.6-0``,  ``0.6.5-0``,  ``0.6.4-0``,  ``0.6.3-0``,  ``0.6.2-0``,  ``0.6.1-1``,  ``0.6.1-0``,  ``0.6.0-0``,  ``0.5.4-0``,  ``0.5.3-0``,  ``0.5.2-0``,  ``0.5.1-1``,  ``0.5.1-0``,  ``0.5.0-0``,  ``0.4.3-0``,  ``0.4.1-0``

      
      .. raw:: html

         </details>
      

   
   :depends on numpy: ``>=1.24,<=2.1.0``
   :depends on pandas: ``>=2.0,<=2.3.3``
   :depends on pandera: 
   :depends on pulp: ``<=2.9.0``
   :depends on pydantic: 
   :depends on pyranges: 
   :depends on python: 
   :depends on pyyaml: 
   :depends on seaborn: 
   :depends on setuptools_scm: 
   :depends on snakemake: ``>=9.12.0,<=9.14.5``
   :depends on snakemake-executor-plugin-slurm: 
   :depends on snakemake-wrapper-utils: 
   :depends on tracknado: 
   :depends on wget: 

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

    pixi global install seqnado

to add into an existing workspace instead, run::

    pixi add seqnado

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install seqnado

Alternatively, to install into a new environment, run::

    conda create -n envname seqnado

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/seqnado:<tag>

(see `seqnado/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_seqnado| image:: https://img.shields.io/conda/dn/bioconda/seqnado.svg?style=flat
   :target: https://anaconda.org/bioconda/seqnado
   :alt:   (downloads)
.. |docker_seqnado| image:: https://quay.io/repository/biocontainers/seqnado/status
   :target: https://quay.io/repository/biocontainers/seqnado
.. _`seqnado/tags`: https://quay.io/repository/biocontainers/seqnado?tab=tags


.. raw:: html

    <script>
        var package = "seqnado";
        var versions = ["1.0.5","1.0.4","1.0.3","1.0.2","1.0.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/seqnado/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/seqnado/README.html