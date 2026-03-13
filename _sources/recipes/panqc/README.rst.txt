:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'panqc'
.. highlight: bash

panqc
=====

.. conda:recipe:: panqc
   :replaces_section_title:
   :noindex:

   A toolkit for quality control \& adjustment of nucleotide redundancy in bacterial pan\-genome analyses


   :homepage: https://github.com/maxgmarin/panqc
   :license: MIT / MIT
   :recipe: /`panqc <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panqc>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/panqc/meta.yaml>`_

   panqc is a pan\-genome quality control toolkit that evaluates and corrects
   for nucleotide redundancy in pan\-genome analyses. The panqc Nucleotide
   Redundancy Correction \(NRC\) pipeline adjusts for redundancy at the DNA
   level within pan\-genome estimates by comparing genes classified as absent
   at the amino acid level against their corresponding assemblies at the
   nucleotide level and by clustering genes using k\-mer based nucleotide
   similarity metrics.



.. conda:package:: panqc

   |downloads_panqc| |docker_panqc|

   :versions:
      
      

      ``0.0.4-0``

      

   
   :depends on colored: 
   :depends on mappy: ``2.26``
   :depends on mmh3: 
   :depends on networkx: 
   :depends on pandas: 
   :depends on python: 
   :depends on screed: 
   :depends on tqdm: 

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

    pixi global install panqc

to add into an existing workspace instead, run::

    pixi add panqc

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install panqc

Alternatively, to install into a new environment, run::

    conda create -n envname panqc

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/panqc:<tag>

(see `panqc/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_panqc| image:: https://img.shields.io/conda/dn/bioconda/panqc.svg?style=flat
   :target: https://anaconda.org/bioconda/panqc
   :alt:   (downloads)
.. |docker_panqc| image:: https://quay.io/repository/biocontainers/panqc/status
   :target: https://quay.io/repository/biocontainers/panqc
.. _`panqc/tags`: https://quay.io/repository/biocontainers/panqc?tab=tags


.. raw:: html

    <script>
        var package = "panqc";
        var versions = ["0.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/panqc/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/panqc/README.html