:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-rose'
.. highlight: bash

hmftools-rose
=============

.. conda:recipe:: hmftools-rose
   :replaces_section_title:
   :noindex:

   ROSE makes an actionability summary of the clinical relevant \(for the Netherlands\) genomic events and signatures as determined by the Hartwig pipeline.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/rose/README.md
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`hmftools-rose <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-rose>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-rose/meta.yaml>`_

   


.. conda:package:: hmftools-rose

   |downloads_hmftools-rose| |docker_hmftools-rose|

   :versions:
      
      

      ``1.3-0``

      

   
   :depends on openjdk: ``>=8``
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

    pixi global install hmftools-rose

to add into an existing workspace instead, run::

    pixi add hmftools-rose

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-rose

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-rose

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-rose:<tag>

(see `hmftools-rose/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-rose| image:: https://img.shields.io/conda/dn/bioconda/hmftools-rose.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-rose
   :alt:   (downloads)
.. |docker_hmftools-rose| image:: https://quay.io/repository/biocontainers/hmftools-rose/status
   :target: https://quay.io/repository/biocontainers/hmftools-rose
.. _`hmftools-rose/tags`: https://quay.io/repository/biocontainers/hmftools-rose?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-rose";
        var versions = ["1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-rose/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-rose/README.html