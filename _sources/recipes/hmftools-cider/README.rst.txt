:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'hmftools-cider'
.. highlight: bash

hmftools-cider
==============

.. conda:recipe:: hmftools-cider
   :replaces_section_title:
   :noindex:

   Determine a comprehensive list of CDR3 sequences for each of the IG and TCR loci from RNA and DNA sequence data.

   :homepage: https://github.com/hartwigmedical/hmftools/blob/master/cider/README.md
   :license: GPL3 / GPL-3.0-only
   :recipe: /`hmftools-cider <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cider>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/hmftools-cider/meta.yaml>`_

   


.. conda:package:: hmftools-cider

   |downloads_hmftools-cider| |docker_hmftools-cider|

   :versions:
      
      

      ``1.1-0``,  ``1.0.4-0``,  ``1.0.3-0``

      

   
   :depends on blast: 
   :depends on openjdk: ``>=8,<=21``
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

    pixi global install hmftools-cider

to add into an existing workspace instead, run::

    pixi add hmftools-cider

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install hmftools-cider

Alternatively, to install into a new environment, run::

    conda create -n envname hmftools-cider

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/hmftools-cider:<tag>

(see `hmftools-cider/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_hmftools-cider| image:: https://img.shields.io/conda/dn/bioconda/hmftools-cider.svg?style=flat
   :target: https://anaconda.org/bioconda/hmftools-cider
   :alt:   (downloads)
.. |docker_hmftools-cider| image:: https://quay.io/repository/biocontainers/hmftools-cider/status
   :target: https://quay.io/repository/biocontainers/hmftools-cider
.. _`hmftools-cider/tags`: https://quay.io/repository/biocontainers/hmftools-cider?tab=tags


.. raw:: html

    <script>
        var package = "hmftools-cider";
        var versions = ["1.1","1.0.4","1.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/hmftools-cider/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/hmftools-cider/README.html