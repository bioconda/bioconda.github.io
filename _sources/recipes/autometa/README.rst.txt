:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'autometa'
.. highlight: bash

autometa
========

.. conda:recipe:: autometa
   :replaces_section_title:
   :noindex:

   Automated extraction of genomes from shotgun metagenomes

   :homepage: https://github.com/KwanLab/Autometa
   :documentation: https://autometa.readthedocs.io/en/latest/
   
   :license: AGPL / AGPL-3.0
   :recipe: /`autometa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autometa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/autometa/meta.yaml>`_

   An automated binning pipeline for metagenomes\, in particular host\-associated and highly complex ones.
   Miller\, I. J.\; Rees\, E. R.\; Ross\, J.\; Miller\, I.\; Baxa\, J.\; Lopera\, J.\; Kerby\, R. L.\; Rey\, F. E.\; Kwan\, J. C. 
   Autometa\: Automated extraction of microbial genomes from individual shotgun metagenomes. 
   Nucleic Acids Research\, 2019. DOI\: https\:\/\/doi.org\/10.1093\/nar\/gkz148



.. conda:package:: autometa

   |downloads_autometa| |docker_autometa|

   :versions:
      
      

      ``2.2.3-0``,  ``2.2.2-0``,  ``2.2.1-0``,  ``2.2.0-0``,  ``2.1.0-0``,  ``2.0.3-0``,  ``2.0.2-0``,  ``2.0.1-0``,  ``2.0.0-0``

      

   
   :depends on attrs: 
   :depends on bedtools: 
   :depends on biopython: ``>=1.82``
   :depends on bowtie2: 
   :depends on diamond: ``>=2.0``
   :depends on gdown: 
   :depends on hmmer: 
   :depends on numba: ``>=0.47``
   :depends on numpy: ``>=1.13``
   :depends on pandas: ``>=1.5``
   :depends on parallel: 
   :depends on prodigal: ``>=2.5``
   :depends on python: ``>=3.7``
   :depends on requests: 
   :depends on rsync: 
   :depends on samtools: ``>=1.11``
   :depends on scikit-bio: 
   :depends on scikit-learn: ``>=1.3``
   :depends on scipy: 
   :depends on seqkit: 
   :depends on tqdm: 
   :depends on trimap: 
   :depends on tsne: 
   :depends on umap-learn: ``>=0.5``

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

    pixi global install autometa

to add into an existing workspace instead, run::

    pixi add autometa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install autometa

Alternatively, to install into a new environment, run::

    conda create -n envname autometa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/autometa:<tag>

(see `autometa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_autometa| image:: https://img.shields.io/conda/dn/bioconda/autometa.svg?style=flat
   :target: https://anaconda.org/bioconda/autometa
   :alt:   (downloads)
.. |docker_autometa| image:: https://quay.io/repository/biocontainers/autometa/status
   :target: https://quay.io/repository/biocontainers/autometa
.. _`autometa/tags`: https://quay.io/repository/biocontainers/autometa?tab=tags


.. raw:: html

    <script>
        var package = "autometa";
        var versions = ["2.2.3","2.2.2","2.2.1","2.2.0","2.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/autometa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/autometa/README.html