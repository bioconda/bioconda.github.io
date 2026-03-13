:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bioconductor-synapsis'
.. highlight: bash

bioconductor-synapsis
=====================

.. conda:recipe:: bioconductor-synapsis
   :replaces_section_title:
   :noindex:

   An R package to automate the analysis of double\-strand break repair during meiosis

   :homepage: https://bioconductor.org/packages/3.20/bioc/html/synapsis.html
   :license: MIT + file LICENSE
   :recipe: /`bioconductor-synapsis <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapsis>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bioconductor-synapsis/meta.yaml>`_

   Synapsis is a Bioconductor software package for automated \(unbiased and reproducible\) analysis of meiotic immunofluorescence datasets. The primary functions of the software can i\) identify cells in meiotic prophase that are labelled by a synaptonemal complex axis or central element protein\, ii\) isolate individual synaptonemal complexes and measure their physical length\, iii\) quantify foci and co\-localise them with synaptonemal complexes\, iv\) measure interference between synaptonemal complex\-associated foci. The software has applications that extend to multiple species and to the analysis of other proteins that label meiotic prophase chromosomes. The software converts meiotic immunofluorescence images into R data frames that are compatible with machine learning methods. Given a set of microscopy images of meiotic spread slides\, synapsis crops images around individual single cells\, counts colocalising foci on strands on a per cell basis\, and measures the distance between foci on any given strand.


.. conda:package:: bioconductor-synapsis

   |downloads_bioconductor-synapsis| |docker_bioconductor-synapsis|

   :versions:
      
      

      ``1.16.0-0``,  ``1.12.0-0``,  ``1.8.0-0``,  ``1.6.0-0``,  ``1.4.0-0``,  ``1.0.0-0``

      

   
   :depends on bioconductor-ebimage: ``>=4.52.0,<4.53.0``
   :depends on r-base: ``>=4.5,<4.6.0a0``

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

    pixi global install bioconductor-synapsis

to add into an existing workspace instead, run::

    pixi add bioconductor-synapsis

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bioconductor-synapsis

Alternatively, to install into a new environment, run::

    conda create -n envname bioconductor-synapsis

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bioconductor-synapsis:<tag>

(see `bioconductor-synapsis/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bioconductor-synapsis| image:: https://img.shields.io/conda/dn/bioconda/bioconductor-synapsis.svg?style=flat
   :target: https://anaconda.org/bioconda/bioconductor-synapsis
   :alt:   (downloads)
.. |docker_bioconductor-synapsis| image:: https://quay.io/repository/biocontainers/bioconductor-synapsis/status
   :target: https://quay.io/repository/biocontainers/bioconductor-synapsis
.. _`bioconductor-synapsis/tags`: https://quay.io/repository/biocontainers/bioconductor-synapsis?tab=tags


.. raw:: html

    <script>
        var package = "bioconductor-synapsis";
        var versions = ["1.16.0","1.12.0","1.8.0","1.6.0","1.4.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bioconductor-synapsis/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bioconductor-synapsis/README.html