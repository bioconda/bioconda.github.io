:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'onehot2seq'
.. highlight: bash

onehot2seq
==========

.. conda:recipe:: onehot2seq
   :replaces_section_title:
   :noindex:

   Decode a one\-hot numpy array to biological sequences

   :homepage: https://github.com/akikuno/onehot2seq
   :license: MIT / MIT
   :recipe: /`onehot2seq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onehot2seq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/onehot2seq/meta.yaml>`_

   


.. conda:package:: onehot2seq

   |downloads_onehot2seq| |docker_onehot2seq|

   :versions:
      
      

      ``0.0.2-1``,  ``0.0.2-0``

      

   
   :depends on numpy: 
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

    pixi global install onehot2seq

to add into an existing workspace instead, run::

    pixi add onehot2seq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install onehot2seq

Alternatively, to install into a new environment, run::

    conda create -n envname onehot2seq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/onehot2seq:<tag>

(see `onehot2seq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_onehot2seq| image:: https://img.shields.io/conda/dn/bioconda/onehot2seq.svg?style=flat
   :target: https://anaconda.org/bioconda/onehot2seq
   :alt:   (downloads)
.. |docker_onehot2seq| image:: https://quay.io/repository/biocontainers/onehot2seq/status
   :target: https://quay.io/repository/biocontainers/onehot2seq
.. _`onehot2seq/tags`: https://quay.io/repository/biocontainers/onehot2seq?tab=tags


.. raw:: html

    <script>
        var package = "onehot2seq";
        var versions = ["0.0.2","0.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/onehot2seq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/onehot2seq/README.html