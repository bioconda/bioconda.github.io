:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'heliano'
.. highlight: bash

heliano
=======

.. conda:recipe:: heliano
   :replaces_section_title:
   :noindex:

   HELIANO\: A fast and accurate tool for detection of Helitron\-like elements

   :homepage: https://github.com/Zhenlisme/heliano
   :license: GNU General Public License v3.0
   :recipe: /`heliano <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heliano>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/heliano/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkae679`

   Helitron\-like elements \(HLE1 and HLE2\) are DNA transposons. 
   They have been found in diverse species and seem to play significant roles in the evolution of host genomes. 
   Although known for over twenty years\, Helitron sequences are still challenging to identify. 
   Here\, we propose HELIANO \(Helitron\-like elements annotator\) as an efficient solution for detecting Helitron\-like elements.



.. conda:package:: heliano

   |downloads_heliano| |docker_heliano|

   :versions:
      
      

      ``1.3.1-0``,  ``1.2.1-0``

      

   
   :depends on bedtools: 
   :depends on biopython: 
   :depends on blast: 
   :depends on cd-hit: 
   :depends on dialign2: 
   :depends on emboss: 
   :depends on genometools-genometools: 
   :depends on hmmer: 
   :depends on mafft: 
   :depends on pybedtools: 
   :depends on python: ``>=3.9``
   :depends on r-base: ``>=4.1``
   :depends on r-bedtoolsr: 
   :depends on r-seqinr: 
   :depends on rnabob: 

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

    pixi global install heliano

to add into an existing workspace instead, run::

    pixi add heliano

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install heliano

Alternatively, to install into a new environment, run::

    conda create -n envname heliano

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/heliano:<tag>

(see `heliano/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_heliano| image:: https://img.shields.io/conda/dn/bioconda/heliano.svg?style=flat
   :target: https://anaconda.org/bioconda/heliano
   :alt:   (downloads)
.. |docker_heliano| image:: https://quay.io/repository/biocontainers/heliano/status
   :target: https://quay.io/repository/biocontainers/heliano
.. _`heliano/tags`: https://quay.io/repository/biocontainers/heliano?tab=tags


.. raw:: html

    <script>
        var package = "heliano";
        var versions = ["1.3.1","1.2.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/heliano/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/heliano/README.html