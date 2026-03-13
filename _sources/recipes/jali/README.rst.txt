:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'jali'
.. highlight: bash

jali
====

.. conda:recipe:: jali
   :replaces_section_title:
   :noindex:

   Alignment method for comparing a protein sequence to a protein family\, represented by a multiple alignment. It can also be used for sensitive protein database searches. The algorithm is a generalization of the Smith\-Waterman algorithm.

   :homepage: http://bibiserv.cebitec.uni-bielefeld.de/jali
   :license: file
   :recipe: /`jali <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jali>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/jali/meta.yaml>`_
   :links: biotools: :biotools:`jali`, doi: :doi:`10.1089/106652702761034172`

   


.. conda:package:: jali

   |downloads_jali| |docker_jali|

   :versions:
      
      

      ``1.3-1``,  ``1.3-0``

      

   

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

    pixi global install jali

to add into an existing workspace instead, run::

    pixi add jali

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install jali

Alternatively, to install into a new environment, run::

    conda create -n envname jali

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/jali:<tag>

(see `jali/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_jali| image:: https://img.shields.io/conda/dn/bioconda/jali.svg?style=flat
   :target: https://anaconda.org/bioconda/jali
   :alt:   (downloads)
.. |docker_jali| image:: https://quay.io/repository/biocontainers/jali/status
   :target: https://quay.io/repository/biocontainers/jali
.. _`jali/tags`: https://quay.io/repository/biocontainers/jali?tab=tags


.. raw:: html

    <script>
        var package = "jali";
        var versions = ["1.3","1.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/jali/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/jali/README.html