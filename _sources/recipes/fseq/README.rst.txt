:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fseq'
.. highlight: bash

fseq
====

.. conda:recipe:: fseq
   :replaces_section_title:
   :noindex:

   F\-Seq\: A feature density estimator for high\-throughput sequence tags

   :homepage: http://fureylab.web.unc.edu/software/fseq/
   :license: GPL >=3
   :recipe: /`fseq <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fseq>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fseq/meta.yaml>`_

   


.. conda:package:: fseq

   |downloads_fseq| |docker_fseq|

   :versions:
      
      

      ``1.84-0``

      

   
   :depends on openjdk: ``>=6``
   :depends on perl: ``5.22.0*``
   :depends on python: ``2.7*``

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

    pixi global install fseq

to add into an existing workspace instead, run::

    pixi add fseq

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fseq

Alternatively, to install into a new environment, run::

    conda create -n envname fseq

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fseq:<tag>

(see `fseq/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fseq| image:: https://img.shields.io/conda/dn/bioconda/fseq.svg?style=flat
   :target: https://anaconda.org/bioconda/fseq
   :alt:   (downloads)
.. |docker_fseq| image:: https://quay.io/repository/biocontainers/fseq/status
   :target: https://quay.io/repository/biocontainers/fseq
.. _`fseq/tags`: https://quay.io/repository/biocontainers/fseq?tab=tags


.. raw:: html

    <script>
        var package = "fseq";
        var versions = ["1.84"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fseq/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fseq/README.html