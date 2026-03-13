:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-hicexperiment'
.. highlight: bash

bioconductor-hicexperiment
==========================

.. conda:recipe:: bioconductor-hicexperiment
   :replaces_section_title:
   :noindex:

   Bioconductor class for interacting with Hi\-C files in R

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/HiCExperiment.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-hicexperiment <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicexperiment>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-hicexperiment/meta.yaml>`_

   R generic interface to Hi\-C contact matrices in \`.\(m\)cool\`\, \`.hic\` or HiC\-Pro derived formats\, as well as other Hi\-C processed file formats. Contact matrices can be partially parsed using a random access method\, allowing a memory\-efficient representation of Hi\-C data in R. The \`HiCExperiment\` class stores the Hi\-C contacts parsed from local contact matrix files. \`HiCExperiment\` instances can be further investigated in R using the \`HiContacts\` analysis package.


.. conda:package:: bioconductor-hicexperiment

   |downloads_bioconductor-hicexperiment| |docker_bioconductor-hicexperiment|

   :versions:
      
      

      ``1.10.0-0``,  ``1.6.0-0``,  ``1.2.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-biocgenerics: ``>=0.56.0,<0.57.0``
   :depends on bioconductor-biocio: ``>=1.20.0,<1.21.0``
   :depends on bioconductor-biocparallel: ``>=1.44.0,<1.45.0``
   :depends on bioconductor-genomicranges: ``>=1.62.0,<1.63.0``
   :depends on bioconductor-interactionset: ``>=1.38.0,<1.39.0``
   :depends on bioconductor-iranges: ``>=2.44.0,<2.45.0``
   :depends on bioconductor-rhdf5: ``>=2.54.0,<2.55.0``
   :depends on bioconductor-s4vectors: ``>=0.48.0,<0.49.0``
   :depends on bioconductor-seqinfo: ``>=1.0.0,<1.1.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``
   :depends on r-dplyr: 
   :depends on r-matrix: 
   :depends on r-strawr: 
   :depends on r-vroom: 

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

    pixi global install bioconductor-hicexperiment

to add into an existing workspace instead, run::

    pixi add bioconductor-hicexperiment

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-hicexperiment

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-hicexperiment

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-hicexperiment:<tag>

(see `bioconductor-hicexperiment/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-hicexperiment| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-hicexperiment.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-hicexperiment
   :alt:   (downloads)
.. |docker_bioconductor-hicexperiment| image:: https://quay.io/repository/biocontainers/bioconductor-hicexperiment/status
   :target: https://quay.io/repository/biocontainers/bioconductor-hicexperiment
.. _`bioconductor-hicexperiment/tags`: https://quay.io/repository/biocontainers/bioconductor-hicexperiment?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-hicexperiment";
        var versions = ["1.10.0","1.6.0","1.2.0","1.0.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-hicexperiment/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-hicexperiment/README.html