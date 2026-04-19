:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'bicseq2-norm'
.. highlight: bash

bicseq2-norm
============

.. conda:recipe:: bicseq2-norm
   :replaces_section_title:
   :noindex:

   BICseq2\-norm is for normalizing potential biases in the sequencing data.

   :homepage: http://compbio.med.harvard.edu/BIC-seq/
   :license: Custom
   :recipe: /`bicseq2-norm <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-norm>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/bicseq2-norm/meta.yaml>`_
   :links: doi: :doi:`10.1093/nar/gkw491`

   


.. conda:package:: bicseq2-norm

   |downloads_bicseq2-norm| |docker_bicseq2-norm|

   :versions:
      
      

      ``0.2.4-6``,  ``0.2.4-5``,  ``0.2.4-4``,  ``0.2.4-3``,  ``0.2.4-2``,  ``0.2.4-1``,  ``0.2.4-0``

      

   
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

    pixi global install bicseq2-norm

to add into an existing workspace instead, run::

    pixi add bicseq2-norm

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install bicseq2-norm

Alternatively, to install into a new environment, run::

    conda create -n envname bicseq2-norm

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/bicseq2-norm:<tag>

(see `bicseq2-norm/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_bicseq2-norm| image:: https://img.shields.io/conda/dn/bioconda/bicseq2-norm.svg?style=flat
   :target: https://anaconda.org/bioconda/bicseq2-norm
   :alt:   (downloads)
.. |docker_bicseq2-norm| image:: https://quay.io/repository/biocontainers/bicseq2-norm/status
   :target: https://quay.io/repository/biocontainers/bicseq2-norm
.. _`bicseq2-norm/tags`: https://quay.io/repository/biocontainers/bicseq2-norm?tab=tags


.. raw:: html

    <script>
        var package = "bicseq2-norm";
        var versions = ["0.2.4","0.2.4","0.2.4","0.2.4","0.2.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/bicseq2-norm/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/bicseq2-norm/README.html