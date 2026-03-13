:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'genometreetk'
.. highlight: bash

genometreetk
============

.. conda:recipe:: genometreetk
   :replaces_section_title:
   :noindex:

   The genome tree toolkit is a collection of methods for working with genome trees.

   :homepage: https://github.com/dparks1134/GenomeTreeTk
   :license: GPL3 / GPL3
   :recipe: /`genometreetk <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometreetk>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/genometreetk/meta.yaml>`_

   


.. conda:package:: genometreetk

   |downloads_genometreetk| |docker_genometreetk|

   :versions:
      
      

      ``0.1.6-2``,  ``0.1.6-1``,  ``0.1.6-0``

      

   
   :depends on biolib: ``>=0.1.0``
   :depends on blast: 
   :depends on dendropy: ``>=4.0.0``
   :depends on easel: 
   :depends on fastani: ``>=1.3``
   :depends on fasttree: 
   :depends on future: 
   :depends on hmmer: ``>=3.1b2``
   :depends on infernal: 
   :depends on mash: 
   :depends on mothur: 
   :depends on numpy: ``>=1.8.0``
   :depends on python: ``>=3.6``
   :depends on scipy: ``>=0.16.0``
   :depends on ssu-align: 

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

    pixi global install genometreetk

to add into an existing workspace instead, run::

    pixi add genometreetk

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install genometreetk

Alternatively, to install into a new environment, run::

    conda create -n envname genometreetk

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/genometreetk:<tag>

(see `genometreetk/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_genometreetk| image:: https://img.shields.io/conda/dn/bioconda/genometreetk.svg?style=flat
   :target: https://anaconda.org/bioconda/genometreetk
   :alt:   (downloads)
.. |docker_genometreetk| image:: https://quay.io/repository/biocontainers/genometreetk/status
   :target: https://quay.io/repository/biocontainers/genometreetk
.. _`genometreetk/tags`: https://quay.io/repository/biocontainers/genometreetk?tab=tags


.. raw:: html

    <script>
        var package = "genometreetk";
        var versions = ["0.1.6","0.1.6","0.1.6"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/genometreetk/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/genometreetk/README.html