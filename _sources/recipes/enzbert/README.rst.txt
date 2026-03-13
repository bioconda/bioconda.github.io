:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'enzbert'
.. highlight: bash

enzbert
=======

.. conda:recipe:: enzbert
   :replaces_section_title:
   :noindex:

   Run EnzBert model that predicts the functional annotation of enzymes from protein sequences

   :homepage: https://gitlab.inria.fr/nbuton/tfpc/-/tree/EnzBert_conda
   :license: AGPL-3
   :recipe: /`enzbert <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enzbert>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/enzbert/meta.yaml>`_

   


.. conda:package:: enzbert

   |downloads_enzbert| |docker_enzbert|

   :versions:
      
      

      ``1.1-0``

      

   
   :depends on biopython: 
   :depends on captum: 
   :depends on goatools: 
   :depends on ijson: 
   :depends on lime: 
   :depends on matplotlib-base: 
   :depends on numpy: 
   :depends on pandas: 
   :depends on python: 
   :depends on pytorch: ``1.9.1``
   :depends on requests: 
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on seaborn: 
   :depends on statsmodels: 
   :depends on streamlit: 
   :depends on sty: 
   :depends on torchmetrics: 
   :depends on tqdm: 
   :depends on transformers: ``4.2.2``

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

    pixi global install enzbert

to add into an existing workspace instead, run::

    pixi add enzbert

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install enzbert

Alternatively, to install into a new environment, run::

    conda create -n envname enzbert

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/enzbert:<tag>

(see `enzbert/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_enzbert| image:: https://img.shields.io/conda/dn/bioconda/enzbert.svg?style=flat
   :target: https://anaconda.org/bioconda/enzbert
   :alt:   (downloads)
.. |docker_enzbert| image:: https://quay.io/repository/biocontainers/enzbert/status
   :target: https://quay.io/repository/biocontainers/enzbert
.. _`enzbert/tags`: https://quay.io/repository/biocontainers/enzbert?tab=tags


.. raw:: html

    <script>
        var package = "enzbert";
        var versions = ["1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/enzbert/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/enzbert/README.html