:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'graphbin2'
.. highlight: bash

graphbin2
=========

.. conda:recipe:: graphbin2
   :replaces_section_title:
   :noindex:

   GraphBin2\: Refined and Overlapped Binning of Metagenomic Contigs Using Assembly Graphs

   :homepage: https://github.com/metagentools/GraphBin2
   :documentation: https://graphbin2.readthedocs.io/
   
   :license: BSD-3
   :recipe: /`graphbin2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphbin2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/graphbin2/meta.yaml>`_
   :links: doi: :doi:`10.1186/s13015-021-00185-6`

   GraphBin2 is a metagenomic contig bin\-refinement tool that makes use of assembly graphs and can assign contigs to multiple bins.



.. conda:package:: graphbin2

   |downloads_graphbin2| |docker_graphbin2|

   :versions:
      
      

      ``1.3.3-0``,  ``1.3.2-0``,  ``1.3.1-0``

      

   
   :depends on cairocffi: 
   :depends on click: 
   :depends on cogent3: 
   :depends on python: ``>=3.9``
   :depends on python-igraph: 
   :depends on scipy: 
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

    pixi global install graphbin2

to add into an existing workspace instead, run::

    pixi add graphbin2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install graphbin2

Alternatively, to install into a new environment, run::

    conda create -n envname graphbin2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/graphbin2:<tag>

(see `graphbin2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_graphbin2| image:: https://img.shields.io/conda/dn/bioconda/graphbin2.svg?style=flat
   :target: https://anaconda.org/bioconda/graphbin2
   :alt:   (downloads)
.. |docker_graphbin2| image:: https://quay.io/repository/biocontainers/graphbin2/status
   :target: https://quay.io/repository/biocontainers/graphbin2
.. _`graphbin2/tags`: https://quay.io/repository/biocontainers/graphbin2?tab=tags


.. raw:: html

    <script>
        var package = "graphbin2";
        var versions = ["1.3.3","1.3.2","1.3.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/graphbin2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/graphbin2/README.html