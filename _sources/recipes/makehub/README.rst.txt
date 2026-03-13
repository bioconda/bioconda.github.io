:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'makehub'
.. highlight: bash

makehub
=======

.. conda:recipe:: makehub
   :replaces_section_title:
   :noindex:

   MakeHub is a command line tool for the fully automatic generation of of track data hubs for visualizing genomes with the UCSC genome browser.

   :homepage: https://github.com/Gaius-Augustus/MakeHub
   :documentation: https://github.com/Gaius-Augustus/MakeHub/blob/1.0.8/README.md
   
   :license: GPL / GPL-3.0-or-later
   :recipe: /`makehub <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/makehub>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/makehub/meta.yaml>`_

   


.. conda:package:: makehub

   |downloads_makehub| |docker_makehub|

   :versions:
      
      

      ``1.0.8-1``,  ``1.0.8-0``,  ``1.0.7-0``,  ``1.0.6-0``,  ``1.0.5-1``,  ``1.0.5-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on augustus: ``>=3.5.0``
   :depends on biopython: 
   :depends on python: ``>=3.8``
   :depends on samtools: 
   :depends on ucsc-bedtobigbed: 
   :depends on ucsc-fatotwobit: 
   :depends on ucsc-genepredcheck: 
   :depends on ucsc-genepredtobed: 
   :depends on ucsc-genepredtobiggenepred: 
   :depends on ucsc-gtftogenepred: 
   :depends on ucsc-hggcpercent: 
   :depends on ucsc-ixixx: 
   :depends on ucsc-twobitinfo: 
   :depends on ucsc-wigtobigwig: 

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

    pixi global install makehub

to add into an existing workspace instead, run::

    pixi add makehub

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install makehub

Alternatively, to install into a new environment, run::

    conda create -n envname makehub

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/makehub:<tag>

(see `makehub/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_makehub| image:: https://img.shields.io/conda/dn/bioconda/makehub.svg?style=flat
   :target: https://anaconda.org/bioconda/makehub
   :alt:   (downloads)
.. |docker_makehub| image:: https://quay.io/repository/biocontainers/makehub/status
   :target: https://quay.io/repository/biocontainers/makehub
.. _`makehub/tags`: https://quay.io/repository/biocontainers/makehub?tab=tags


.. raw:: html

    <script>
        var package = "makehub";
        var versions = ["1.0.8","1.0.8","1.0.7","1.0.6","1.0.5"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/makehub/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/makehub/README.html