:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gogstools'
.. highlight: bash

gogstools
=========

.. conda:recipe:: gogstools
   :replaces_section_title:
   :noindex:

   GenOuest tools for manipulating Official Gene Sets

   :homepage: https://github.com/genouest/ogs-tools
   :license: GPL3 / GNU General Public v3 (GPLv3)
   :recipe: /`gogstools <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gogstools>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gogstools/meta.yaml>`_

   


.. conda:package:: gogstools

   |downloads_gogstools| |docker_gogstools|

   :versions:
      
      

      ``0.1.2-0``,  ``0.1.1-0``

      

   
   :depends on bcbio-gff: 
   :depends on bedops: ``2.4.39``
   :depends on bedtools: 
   :depends on gffread: 
   :depends on python: ``3.10``

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

    pixi global install gogstools

to add into an existing workspace instead, run::

    pixi add gogstools

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gogstools

Alternatively, to install into a new environment, run::

    conda create -n envname gogstools

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gogstools:<tag>

(see `gogstools/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gogstools| image:: https://img.shields.io/conda/dn/bioconda/gogstools.svg?style=flat
   :target: https://anaconda.org/bioconda/gogstools
   :alt:   (downloads)
.. |docker_gogstools| image:: https://quay.io/repository/biocontainers/gogstools/status
   :target: https://quay.io/repository/biocontainers/gogstools
.. _`gogstools/tags`: https://quay.io/repository/biocontainers/gogstools?tab=tags


.. raw:: html

    <script>
        var package = "gogstools";
        var versions = ["0.1.2","0.1.1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gogstools/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gogstools/README.html