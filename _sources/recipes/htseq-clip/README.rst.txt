:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'htseq-clip'
.. highlight: bash

htseq-clip
==========

.. conda:recipe:: htseq-clip
   :replaces_section_title:
   :noindex:

   htseq\-clip\: a toolset for the analysis of eCLIP\/iCLIP datasets

   :homepage: https://github.com/EMBL-Hentze-group/htseq-clip
   :license: MIT
   :recipe: /`htseq-clip <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq-clip>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/htseq-clip/meta.yaml>`_

   


.. conda:package:: htseq-clip

   |downloads_htseq-clip| |docker_htseq-clip|

   :versions:
      
      

      ``2.19.0b0-0``,  ``2.18.2b0-0``,  ``2.14.0b0-0``

      

   
   :depends on htseq: 
   :depends on pysam: 
   :depends on python: 

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

    pixi global install htseq-clip

to add into an existing workspace instead, run::

    pixi add htseq-clip

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install htseq-clip

Alternatively, to install into a new environment, run::

    conda create -n envname htseq-clip

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/htseq-clip:<tag>

(see `htseq-clip/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_htseq-clip| image:: https://img.shields.io/conda/dn/bioconda/htseq-clip.svg?style=flat
   :target: https://anaconda.org/bioconda/htseq-clip
   :alt:   (downloads)
.. |docker_htseq-clip| image:: https://quay.io/repository/biocontainers/htseq-clip/status
   :target: https://quay.io/repository/biocontainers/htseq-clip
.. _`htseq-clip/tags`: https://quay.io/repository/biocontainers/htseq-clip?tab=tags


.. raw:: html

    <script>
        var package = "htseq-clip";
        var versions = ["2.19.0b0","2.18.2b0","2.14.0b0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/htseq-clip/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/htseq-clip/README.html