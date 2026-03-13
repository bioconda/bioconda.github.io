:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tir-learner'
.. highlight: bash

tir-learner
===========

.. conda:recipe:: tir-learner
   :replaces_section_title:
   :noindex:

   An ensemble pipeline for terminal inverted repeat \(TIR\) transposable elements annotation.

   :homepage: https://github.com/lutianyu2001/TIR-Learner
   :documentation: https://github.com/lutianyu2001/TIR-Learner/blob/main/README.md
   
   :license: GPL3 / GPL-3.0-or-later
   :recipe: /`tir-learner <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tir-learner>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tir-learner/meta.yaml>`_
   :links: doi: :doi:`10.6084/m9.figshare.26082574.v1`

   


.. conda:package:: tir-learner

   |downloads_tir-learner| |docker_tir-learner|

   :versions:
      
      

      ``3.0.7-0``,  ``3.0.6-0``,  ``3.0.5-0``,  ``3.0.3-1``,  ``3.0.3-0``,  ``3.0.2-1``,  ``3.0.2-0``,  ``3.0.1-0``

      

   
   :depends on biopython: 
   :depends on genericrepeatfinder: 
   :depends on genometools-genometools: 
   :depends on keras: ``>=3.3.3``
   :depends on multiprocess: 
   :depends on pandas: 
   :depends on pytorch: 
   :depends on regex: 
   :depends on rmblast: 
   :depends on scikit-learn: ``>=1.3``
   :depends on swifter: 

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

    pixi global install tir-learner

to add into an existing workspace instead, run::

    pixi add tir-learner

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tir-learner

Alternatively, to install into a new environment, run::

    conda create -n envname tir-learner

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tir-learner:<tag>

(see `tir-learner/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tir-learner| image:: https://img.shields.io/conda/dn/bioconda/tir-learner.svg?style=flat
   :target: https://anaconda.org/bioconda/tir-learner
   :alt:   (downloads)
.. |docker_tir-learner| image:: https://quay.io/repository/biocontainers/tir-learner/status
   :target: https://quay.io/repository/biocontainers/tir-learner
.. _`tir-learner/tags`: https://quay.io/repository/biocontainers/tir-learner?tab=tags


.. raw:: html

    <script>
        var package = "tir-learner";
        var versions = ["3.0.7","3.0.6","3.0.5","3.0.3","3.0.3"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tir-learner/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tir-learner/README.html