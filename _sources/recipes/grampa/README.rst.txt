:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'grampa'
.. highlight: bash

grampa
======

.. conda:recipe:: grampa
   :replaces_section_title:
   :noindex:

   GRAMPA is a program to identify and place polyploidy events on a phylogeny and to count duplications and losses in the presence of polyploidy.

   :homepage: https://gwct.github.io/grampa
   :developer docs: https://github.com/gwct/grampa
   :license: GPL3 / GPL-3.0-only
   :recipe: /`grampa <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grampa>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/grampa/meta.yaml>`_

   


.. conda:package:: grampa

   |downloads_grampa| |docker_grampa|

   :versions:
      
      

      ``1.4.4-0``,  ``1.4.3-1``,  ``1.4.3-0``,  ``1.4.2-0``,  ``1.4.1-0``,  ``1.4.0-1``,  ``1.4.0-0``,  ``1.3.1-0``

      

   
   :depends on python: ``>=3``

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

    pixi global install grampa

to add into an existing workspace instead, run::

    pixi add grampa

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install grampa

Alternatively, to install into a new environment, run::

    conda create -n envname grampa

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/grampa:<tag>

(see `grampa/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_grampa| image:: https://img.shields.io/conda/dn/bioconda/grampa.svg?style=flat
   :target: https://anaconda.org/bioconda/grampa
   :alt:   (downloads)
.. |docker_grampa| image:: https://quay.io/repository/biocontainers/grampa/status
   :target: https://quay.io/repository/biocontainers/grampa
.. _`grampa/tags`: https://quay.io/repository/biocontainers/grampa?tab=tags


.. raw:: html

    <script>
        var package = "grampa";
        var versions = ["1.4.4","1.4.3","1.4.3","1.4.2","1.4.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/grampa/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/grampa/README.html