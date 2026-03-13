:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rfplasmid'
.. highlight: bash

rfplasmid
=========

.. conda:recipe:: rfplasmid
   :replaces_section_title:
   :noindex:

   RFPlasmid predicts plasmid contigs from assemblies using single copy marker genes\, plasmid genes\, and kmers.

   :homepage: https://github.com/aldertzomer/RFPlasmid
   :license: GPL / GNU General Public License v3 (GPL-3.0)
   :recipe: /`rfplasmid <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfplasmid>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rfplasmid/meta.yaml>`_

   


.. conda:package:: rfplasmid

   |downloads_rfplasmid| |docker_rfplasmid|

   :versions:
      
      

      ``0.0.18-0``,  ``0.0.17-0``,  ``0.0.16-0``,  ``0.0.15-0``

      

   
   :depends on biopython: 
   :depends on checkm-genome: 
   :depends on diamond: 
   :depends on kmer-jellyfish: 
   :depends on pandas: 
   :depends on pysam: ``>=0.15.3``
   :depends on python: ``>=3.6``
   :depends on r-randomforest: 
   :depends on wget: 
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install rfplasmid

to add into an existing workspace instead, run::

    pixi add rfplasmid

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rfplasmid

Alternatively, to install into a new environment, run::

    conda create -n envname rfplasmid

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rfplasmid:<tag>

(see `rfplasmid/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rfplasmid| image:: https://img.shields.io/conda/dn/bioconda/rfplasmid.svg?style=flat
   :target: https://anaconda.org/bioconda/rfplasmid
   :alt:   (downloads)
.. |docker_rfplasmid| image:: https://quay.io/repository/biocontainers/rfplasmid/status
   :target: https://quay.io/repository/biocontainers/rfplasmid
.. _`rfplasmid/tags`: https://quay.io/repository/biocontainers/rfplasmid?tab=tags


.. raw:: html

    <script>
        var package = "rfplasmid";
        var versions = ["0.0.18","0.0.17","0.0.16","0.0.15"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rfplasmid/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rfplasmid/README.html