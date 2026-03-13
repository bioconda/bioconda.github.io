:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'cofold'
.. highlight: bash

cofold
======

.. conda:recipe:: cofold
   :replaces_section_title:
   :noindex:

   An RNA secondary structure prediction method that takes co\-transcriptional folding into account.

   :homepage: http://www.e-rna.org/cofold/
   :license: MIT-like
   :recipe: /`cofold <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cofold>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/cofold/meta.yaml>`_

   


.. conda:package:: cofold

   |downloads_cofold| |docker_cofold|

   :versions:
      
      

      ``2.0.4-8``,  ``2.0.4-7``,  ``2.0.4-6``,  ``2.0.4-5``,  ``2.0.4-4``,  ``2.0.4-3``,  ``2.0.4-2``,  ``2.0.4-1``

      

   
   :depends on _openmp_mutex: ``>=4.5``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install cofold

to add into an existing workspace instead, run::

    pixi add cofold

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install cofold

Alternatively, to install into a new environment, run::

    conda create -n envname cofold

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/cofold:<tag>

(see `cofold/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_cofold| image:: https://img.shields.io/conda/dn/bioconda/cofold.svg?style=flat
   :target: https://anaconda.org/bioconda/cofold
   :alt:   (downloads)
.. |docker_cofold| image:: https://quay.io/repository/biocontainers/cofold/status
   :target: https://quay.io/repository/biocontainers/cofold
.. _`cofold/tags`: https://quay.io/repository/biocontainers/cofold?tab=tags


.. raw:: html

    <script>
        var package = "cofold";
        var versions = ["2.0.4","2.0.4","2.0.4","2.0.4","2.0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/cofold/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/cofold/README.html