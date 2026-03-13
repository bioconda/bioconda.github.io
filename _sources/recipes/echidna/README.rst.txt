:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'echidna'
.. highlight: bash

echidna
=======

.. conda:recipe:: echidna
   :replaces_section_title:
   :noindex:

   Mapping genotype to phenotype through joint probabilistic modeling of single\-cell gene expression and chromosomal copy number variation.

   :homepage: https://github.com/azizilab/echidna
   :license: MIT
   :recipe: /`echidna <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/echidna>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/echidna/meta.yaml>`_
   :links: biotools: :biotools:`echidna`

   


.. conda:package:: echidna

   |downloads_echidna| |docker_echidna|

   :versions:
      
      

      ``1.0.3-0``,  ``1.0.2-0``

      

   
   :depends on graphviz: 
   :depends on hmmlearn: 
   :depends on leidenalg: 
   :depends on pandas: 
   :depends on pyro-ppl: ``>=1.9.1``
   :depends on python: ``>=3.10``
   :depends on requests: 
   :depends on scanpy: ``>=1.10``
   :depends on scikit-learn: 
   :depends on seaborn: 

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

    pixi global install echidna

to add into an existing workspace instead, run::

    pixi add echidna

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install echidna

Alternatively, to install into a new environment, run::

    conda create -n envname echidna

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/echidna:<tag>

(see `echidna/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_echidna| image:: https://img.shields.io/conda/dn/bioconda/echidna.svg?style=flat
   :target: https://anaconda.org/bioconda/echidna
   :alt:   (downloads)
.. |docker_echidna| image:: https://quay.io/repository/biocontainers/echidna/status
   :target: https://quay.io/repository/biocontainers/echidna
.. _`echidna/tags`: https://quay.io/repository/biocontainers/echidna?tab=tags


.. raw:: html

    <script>
        var package = "echidna";
        var versions = ["1.0.3","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/echidna/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/echidna/README.html