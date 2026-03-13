:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'lisa2'
.. highlight: bash

lisa2
=====

.. conda:recipe:: lisa2
   :replaces_section_title:
   :noindex:

   Lisa\: inferring transcriptional regulators through integrative modeling of public chromatin accessibility and ChIP\-seq data. X. Shirley Liu Lab\, 2020

   :homepage: https://genomebiology.biomedcentral.com/articles/10.1186/s13059-020-1934-6
   :license: MIT
   :recipe: /`lisa2 <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lisa2>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/lisa2/meta.yaml>`_

   


.. conda:package:: lisa2

   |downloads_lisa2| |docker_lisa2|

   :versions:
      
      

      ``2.3.2-1``,  ``2.3.2-0``,  ``2.3.1-0``,  ``2.3.0-0``

      

   
   :depends on h5py: ``>=2``
   :depends on numpy: ``>=1.17,<2``
   :depends on python: ``>=3.5``
   :depends on scikit-learn: ``>=0.22,<2``
   :depends on scipy: ``>=1.4,<2``

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

    pixi global install lisa2

to add into an existing workspace instead, run::

    pixi add lisa2

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install lisa2

Alternatively, to install into a new environment, run::

    conda create -n envname lisa2

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/lisa2:<tag>

(see `lisa2/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_lisa2| image:: https://img.shields.io/conda/dn/bioconda/lisa2.svg?style=flat
   :target: https://anaconda.org/bioconda/lisa2
   :alt:   (downloads)
.. |docker_lisa2| image:: https://quay.io/repository/biocontainers/lisa2/status
   :target: https://quay.io/repository/biocontainers/lisa2
.. _`lisa2/tags`: https://quay.io/repository/biocontainers/lisa2?tab=tags


.. raw:: html

    <script>
        var package = "lisa2";
        var versions = ["2.3.2","2.3.2","2.3.1","2.3.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/lisa2/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/lisa2/README.html