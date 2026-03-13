:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'rnaprot'
.. highlight: bash

rnaprot
=======

.. conda:recipe:: rnaprot
   :replaces_section_title:
   :noindex:

   Modelling RBP binding preferences to predict RPB binding sites

   :homepage: https://github.com/BackofenLab/RNAProt
   :license: MIT
   :recipe: /`rnaprot <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaprot>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/rnaprot/meta.yaml>`_

   


.. conda:package:: rnaprot

   |downloads_rnaprot| |docker_rnaprot|

   :versions:
      
      

      ``0.5-1``,  ``0.5-0``,  ``0.4-0``,  ``0.3-0``

      

   
   :depends on bedtools: 
   :depends on hpbandster: 
   :depends on logomaker: 
   :depends on markdown: ``<=3.2.2``
   :depends on plotly: 
   :depends on python: ``>=3.8``
   :depends on pytorch: ``>=1.8``
   :depends on scikit-learn: 
   :depends on seaborn: 
   :depends on ucsc-bigwigaverageoverbed: 
   :depends on ucsc-twobitinfo: 
   :depends on ucsc-twobittofa: 
   :depends on ushuffle: 
   :depends on viennarna: 

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

    pixi global install rnaprot

to add into an existing workspace instead, run::

    pixi add rnaprot

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install rnaprot

Alternatively, to install into a new environment, run::

    conda create -n envname rnaprot

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/rnaprot:<tag>

(see `rnaprot/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_rnaprot| image:: https://img.shields.io/conda/dn/bioconda/rnaprot.svg?style=flat
   :target: https://anaconda.org/bioconda/rnaprot
   :alt:   (downloads)
.. |docker_rnaprot| image:: https://quay.io/repository/biocontainers/rnaprot/status
   :target: https://quay.io/repository/biocontainers/rnaprot
.. _`rnaprot/tags`: https://quay.io/repository/biocontainers/rnaprot?tab=tags


.. raw:: html

    <script>
        var package = "rnaprot";
        var versions = ["0.5","0.5","0.4","0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/rnaprot/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/rnaprot/README.html