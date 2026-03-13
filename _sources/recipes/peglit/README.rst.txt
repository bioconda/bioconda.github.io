:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'peglit'
.. highlight: bash

peglit
======

.. conda:recipe:: peglit
   :replaces_section_title:
   :noindex:

   Automatically identifies non\-interfering nucleotide linkers between a pegRNA and 3\' motif

   :homepage: https://github.com/sshen8/peglit/
   :license: BSD / BSD-3-Clause
   :recipe: /`peglit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peglit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/peglit/meta.yaml>`_

   


.. conda:package:: peglit

   |downloads_peglit| |docker_peglit|

   :versions:
      
      

      ``1.1.0-0``,  ``1.0.2-0``

      

   
   :depends on levenshtein: 
   :depends on matplotlib-base: 
   :depends on pandas: 
   :depends on python: ``>=3.6``
   :depends on scikit-learn: 
   :depends on scipy: 
   :depends on tqdm: 
   :depends on viennarna: ``>=2.5``

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

    pixi global install peglit

to add into an existing workspace instead, run::

    pixi add peglit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install peglit

Alternatively, to install into a new environment, run::

    conda create -n envname peglit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/peglit:<tag>

(see `peglit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_peglit| image:: https://img.shields.io/conda/dn/bioconda/peglit.svg?style=flat
   :target: https://anaconda.org/bioconda/peglit
   :alt:   (downloads)
.. |docker_peglit| image:: https://quay.io/repository/biocontainers/peglit/status
   :target: https://quay.io/repository/biocontainers/peglit
.. _`peglit/tags`: https://quay.io/repository/biocontainers/peglit?tab=tags


.. raw:: html

    <script>
        var package = "peglit";
        var versions = ["1.1.0","1.0.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/peglit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/peglit/README.html