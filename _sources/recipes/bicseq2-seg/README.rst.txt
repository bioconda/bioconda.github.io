:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bicseq2-seg'
.. highlight: bash

bicseq2-seg
===========

.. conda:recipe:: bicseq2-seg
   :replaces_section_title:
   :noindex:

   BICseq2\-seg is for detecting CNVs based on the normalized data given by BICseq2\-norm.

   :homepage: http://compbio.med.harvard.edu/BIC-seq/
   :license: Custom
   :recipe: /`bicseq2-seg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-seg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-seg/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw491`

   


.. conda:package:: bicseq2-seg

   |downloads_bicseq2-seg| |docker_bicseq2-seg|

   :versions:
      
      

      ``0.7.2-6``,  ``0.7.2-5``,  ``0.7.2-4``,  ``0.7.2-3``,  ``0.7.2-2``,  ``0.7.2-1``,  ``0.7.2-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on perl: 
   :depends on r-base: 

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

    pixi global install bicseq2-seg

to add into an existing workspace instead, run::

    pixi add bicseq2-seg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bicseq2-seg

Alternatively, to install into a new environment, run::

    conda create -n envname bicseq2-seg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bicseq2-seg:<tag>

(see `bicseq2-seg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bicseq2-seg| image:: https://img.shields.io/conda/dn/bioconda/bicseq2-seg.svg?style=flat
   :target: https://anaconda.org/bioconda/bicseq2-seg
   :alt:   (downloads)
.. |docker_bicseq2-seg| image:: https://quay.io/repository/biocontainers/bicseq2-seg/status
   :target: https://quay.io/repository/biocontainers/bicseq2-seg
.. _`bicseq2-seg/tags`: https://quay.io/repository/biocontainers/bicseq2-seg?tab=tags


.. raw:: html

    <script>
        var package = "bicseq2-seg";
        var versions = ["0.7.2","0.7.2","0.7.2","0.7.2","0.7.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bicseq2-seg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bicseq2-seg/README.html