:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'deeparg'
.. highlight: bash

deeparg
=======

.. conda:recipe:: deeparg
   :replaces_section_title:
   :noindex:

   A deep learning based approach to predict Antibiotic Resistance Genes \(ARGs\) from metagenomes

   :homepage: https://github.com/gaarangoa/deeparg
   :license: MIT / MIT
   :recipe: /`deeparg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeparg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/deeparg/meta.yaml>`_

   


.. conda:package:: deeparg

   |downloads_deeparg| |docker_deeparg|

   :versions:
      
      

      ``1.0.4-0``,  ``1.0.3-0``,  ``1.0.2-1``,  ``1.0.2-0``

      

   
   :depends on biopython: ``>=1.68``
   :depends on diamond: 
   :depends on ete3: ``>=3.1.2``
   :depends on joblib: ``>=0.14.1``
   :depends on lasagne: ``>=0.1``
   :depends on nolearn: ``>=0.6.1``
   :depends on numpy: ``>=1.16``
   :depends on python: ``<3``
   :depends on requests: ``>=1.15.1``
   :depends on scikit-learn: ``>=0.19.2``
   :depends on scipy: ``>=1.2.1``
   :depends on theano: ``>=0.8.2``
   :depends on tqdm: ``>=4.62.3,<4.65``
   :depends on wget: ``>=1.20.3``

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

    pixi global install deeparg

to add into an existing workspace instead, run::

    pixi add deeparg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install deeparg

Alternatively, to install into a new environment, run::

    conda create -n envname deeparg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/deeparg:<tag>

(see `deeparg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_deeparg| image:: https://img.shields.io/conda/dn/bioconda/deeparg.svg?style=flat
   :target: https://anaconda.org/bioconda/deeparg
   :alt:   (downloads)
.. |docker_deeparg| image:: https://quay.io/repository/biocontainers/deeparg/status
   :target: https://quay.io/repository/biocontainers/deeparg
.. _`deeparg/tags`: https://quay.io/repository/biocontainers/deeparg?tab=tags


.. raw:: html

    <script>
        var package = "deeparg";
        var versions = ["1.0.4","1.0.3","1.0.2","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/deeparg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/deeparg/README.html