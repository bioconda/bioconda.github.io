:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'tf-comb'
.. highlight: bash

tf-comb
=======

.. conda:recipe:: tf-comb
   :replaces_section_title:
   :noindex:

   Transcription Factor Co\-Occurrence using Market Basket analysis

   :homepage: https://tf-comb.readthedocs.io/
   :developer docs: https://github.com/loosolab/TF-COMB/
   :license: MIT / MIT
   :recipe: /`tf-comb <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tf-comb>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/tf-comb/meta.yaml>`_
   :links: doi: :doi:`10.1016/j.csbj.2022.07.025`

   


.. conda:package:: tf-comb

   |downloads_tf-comb| |docker_tf-comb|

   :versions:
      
      

      ``1.1-1``,  ``1.1-0``

      

   
   :depends on dill: 
   :depends on goatools: 
   :depends on ipython: 
   :depends on matplotlib-base: ``>=2``
   :depends on networkx: ``>=2.4``
   :depends on numpy: ``>=1.22.4,<2.0a0``
   :depends on pandas: 
   :depends on pysam: 
   :depends on python: ``>=3.10,<3.11.0a0``
   :depends on python-graphviz: 
   :depends on python-louvain: 
   :depends on python_abi: ``3.10.* *_cp310``
   :depends on qnorm: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on tobias: ``>=0.11``
   :depends on tqdm: 
   :depends on uropa: 

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

    pixi global install tf-comb

to add into an existing workspace instead, run::

    pixi add tf-comb

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install tf-comb

Alternatively, to install into a new environment, run::

    conda create -n envname tf-comb

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/tf-comb:<tag>

(see `tf-comb/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_tf-comb| image:: https://img.shields.io/conda/dn/bioconda/tf-comb.svg?style=flat
   :target: https://anaconda.org/bioconda/tf-comb
   :alt:   (downloads)
.. |docker_tf-comb| image:: https://quay.io/repository/biocontainers/tf-comb/status
   :target: https://quay.io/repository/biocontainers/tf-comb
.. _`tf-comb/tags`: https://quay.io/repository/biocontainers/tf-comb?tab=tags


.. raw:: html

    <script>
        var package = "tf-comb";
        var versions = ["1.1","1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/tf-comb/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/tf-comb/README.html