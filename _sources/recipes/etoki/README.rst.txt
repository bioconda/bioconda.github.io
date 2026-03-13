:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'etoki'
.. highlight: bash

etoki
=====

.. conda:recipe:: etoki
   :replaces_section_title:
   :noindex:

   EToKi \(Enterobase Tool Kit\) includes methods related to Enterobase data analysis pipelines

   :homepage: https://github.com/zheminzhou/EToKi
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`etoki <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/etoki>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/etoki/meta.yaml>`_

   


.. conda:package:: etoki

   |downloads_etoki| |docker_etoki|

   :versions:
      
      

      ``1.2.3-0``

      

   
   :depends on bbmap: 
   :depends on blast: 
   :depends on bowtie2: 
   :depends on bwa: 
   :depends on click: 
   :depends on curl: 
   :depends on diamond: 
   :depends on ete3: 
   :depends on fasttree: 
   :depends on flye: 
   :depends on gatk: 
   :depends on kraken2: 
   :depends on last: 
   :depends on megahit: 
   :depends on mmseqs2: 
   :depends on nextpolish: 
   :depends on numba: 
   :depends on numpy: ``1.21.6.*``
   :depends on pandas: 
   :depends on perl-lyve-set: 
   :depends on piler-cr: 
   :depends on pilon: 
   :depends on psutil: 
   :depends on python: ``>=3.6``
   :depends on rapidnj: 
   :depends on raxml: 
   :depends on raxml-ng: 
   :depends on samtools: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on simbac: 
   :depends on spades: ``>=3.15``
   :depends on trf: 

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

    pixi global install etoki

to add into an existing workspace instead, run::

    pixi add etoki

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install etoki

Alternatively, to install into a new environment, run::

    conda create -n envname etoki

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/etoki:<tag>

(see `etoki/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_etoki| image:: https://img.shields.io/conda/dn/bioconda/etoki.svg?style=flat
   :target: https://anaconda.org/bioconda/etoki
   :alt:   (downloads)
.. |docker_etoki| image:: https://quay.io/repository/biocontainers/etoki/status
   :target: https://quay.io/repository/biocontainers/etoki
.. _`etoki/tags`: https://quay.io/repository/biocontainers/etoki?tab=tags


.. raw:: html

    <script>
        var package = "etoki";
        var versions = ["1.2.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/etoki/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/etoki/README.html