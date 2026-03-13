:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'a5-miseq'
.. highlight: bash

a5-miseq
========

.. conda:recipe:: a5-miseq
   :replaces_section_title:
   :noindex:

   A5\-miseq is a pipeline for assembling DNA sequence data generated on the Illumina sequencing platform. This README will take you through the steps necessary for running \_A5\-miseq\_

   :homepage: https://sourceforge.net/projects/ngop
   :license: GPLv3
   :recipe: /`a5-miseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a5-miseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/a5-miseq/meta.yaml>`_

   


.. conda:package:: a5-miseq

   |downloads_a5-miseq| |docker_a5-miseq|

   :versions:
      
      

      ``20160825-2``,  ``20160825-1``,  ``20160825-0``

      

   
   :depends on openjdk: ``>=8.0``
   :depends on perl: 

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

    pixi global install a5-miseq

to add into an existing workspace instead, run::

    pixi add a5-miseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install a5-miseq

Alternatively, to install into a new environment, run::

    conda create -n envname a5-miseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/a5-miseq:<tag>

(see `a5-miseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_a5-miseq| image:: https://img.shields.io/conda/dn/bioconda/a5-miseq.svg?style=flat
   :target: https://anaconda.org/bioconda/a5-miseq
   :alt:   (downloads)
.. |docker_a5-miseq| image:: https://quay.io/repository/biocontainers/a5-miseq/status
   :target: https://quay.io/repository/biocontainers/a5-miseq
.. _`a5-miseq/tags`: https://quay.io/repository/biocontainers/a5-miseq?tab=tags


.. raw:: html

    <script>
        var package = "a5-miseq";
        var versions = ["20160825","20160825","20160825"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/a5-miseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/a5-miseq/README.html