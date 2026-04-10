:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'ccphylo'
.. highlight: bash

ccphylo
=======

.. conda:recipe:: ccphylo
   :replaces_section_title:
   :noindex:

   CCPhylo enables phylogenetic analysis of samples based on overlaps between nucleotide created by e.g. KMA. Input file\(s\) may be given as non\-option arguments succeding all options.

   :homepage: https://bitbucket.org/genomicepidemiology/ccphylo
   :license: Apache-2.0
   :recipe: /`ccphylo <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccphylo>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/ccphylo/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btac774`, doi: :doi:`10.1093/biomethods/bpab008`

   


.. conda:package:: ccphylo

   |downloads_ccphylo| |docker_ccphylo|

   :versions:
      
      

      ``0.8.2-3``,  ``0.8.2-2``,  ``0.8.2-1``,  ``0.8.2-0``,  ``0.8.1-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on zlib: 

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

    pixi global install ccphylo

to add into an existing workspace instead, run::

    pixi add ccphylo

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install ccphylo

Alternatively, to install into a new environment, run::

    conda create -n envname ccphylo

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/ccphylo:<tag>

(see `ccphylo/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_ccphylo| image:: https://img.shields.io/conda/dn/bioconda/ccphylo.svg?style=flat
   :target: https://anaconda.org/bioconda/ccphylo
   :alt:   (downloads)
.. |docker_ccphylo| image:: https://quay.io/repository/biocontainers/ccphylo/status
   :target: https://quay.io/repository/biocontainers/ccphylo
.. _`ccphylo/tags`: https://quay.io/repository/biocontainers/ccphylo?tab=tags


.. raw:: html

    <script>
        var package = "ccphylo";
        var versions = ["0.8.2","0.8.2","0.8.2","0.8.2","0.8.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/ccphylo/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/ccphylo/README.html