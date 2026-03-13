:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'eval'
.. highlight: bash

eval
====

.. conda:recipe:: eval
   :replaces_section_title:
   :noindex:

   Eval is a flexible tool for analyzing the performance of gene\-structure prediction programs.

   :homepage: http://mblab.wustl.edu/software.html
   :documentation: http://mblab.wustl.edu/software/download/eval-documentation.pdf
   
   :license: BSD / BSD 2-Clause
   :recipe: /`eval <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eval>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/eval/meta.yaml>`_

   


.. conda:package:: eval

   |downloads_eval| |docker_eval|

   :versions:
      
      

      ``2.2.8-1``,  ``2.2.8-0``

      

   
   :depends on perl: ``>=5.26.2,<5.26.3.0a0``
   :depends on perl-bioperl: 
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

    pixi global install eval

to add into an existing workspace instead, run::

    pixi add eval

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install eval

Alternatively, to install into a new environment, run::

    conda create -n envname eval

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/eval:<tag>

(see `eval/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_eval| image:: https://img.shields.io/conda/dn/bioconda/eval.svg?style=flat
   :target: https://anaconda.org/bioconda/eval
   :alt:   (downloads)
.. |docker_eval| image:: https://quay.io/repository/biocontainers/eval/status
   :target: https://quay.io/repository/biocontainers/eval
.. _`eval/tags`: https://quay.io/repository/biocontainers/eval?tab=tags


.. raw:: html

    <script>
        var package = "eval";
        var versions = ["2.2.8","2.2.8"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/eval/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/eval/README.html