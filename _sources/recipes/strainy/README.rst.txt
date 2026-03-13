:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'strainy'
.. highlight: bash

strainy
=======

.. conda:recipe:: strainy
   :replaces_section_title:
   :noindex:

   Assembly\-based metagenomic strain phasing using long reads.

   :homepage: https://github.com/katerinakazantseva/strainy
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`strainy <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainy>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/strainy/meta.yaml>`_

   


.. conda:package:: strainy

   |downloads_strainy| |docker_strainy|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``,  ``1.1-1``,  ``1.1-0``

      

   
   :depends on bcftools: ``>=1.14``
   :depends on biopython: 
   :depends on flye: 
   :depends on gfapy: 
   :depends on karateclub: 
   :depends on matplotlib-base: 
   :depends on minimap2: ``>=2.28``
   :depends on networkx: ``>=2.6,<3.4``
   :depends on numpy: ``>=1.24,<1.27``
   :depends on pandas: ``>=1.3,<3``
   :depends on pygraphviz: 
   :depends on pysam: ``>=0.20,<0.23``
   :depends on python: ``>=3.8``
   :depends on python-edlib: 
   :depends on samtools: ``>=1.14``
   :depends on scipy: ``>=1.8,<1.13``

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

    pixi global install strainy

to add into an existing workspace instead, run::

    pixi add strainy

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install strainy

Alternatively, to install into a new environment, run::

    conda create -n envname strainy

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/strainy:<tag>

(see `strainy/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_strainy| image:: https://img.shields.io/conda/dn/bioconda/strainy.svg?style=flat
   :target: https://anaconda.org/bioconda/strainy
   :alt:   (downloads)
.. |docker_strainy| image:: https://quay.io/repository/biocontainers/strainy/status
   :target: https://quay.io/repository/biocontainers/strainy
.. _`strainy/tags`: https://quay.io/repository/biocontainers/strainy?tab=tags


.. raw:: html

    <script>
        var package = "strainy";
        var versions = ["1.2","1.2","1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/strainy/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/strainy/README.html