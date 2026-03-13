:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'npinv'
.. highlight: bash

npinv
=====

.. conda:recipe:: npinv
   :replaces_section_title:
   :noindex:

   an accurate tool for detecting and genotyping inversion using multiple alignment long reads

   :homepage: https://github.com/haojingshao/npInv
   :license: MIT
   :recipe: /`npinv <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npinv>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/npinv/meta.yaml>`_
   :links: doi: :doi:`10.1186/s12859-018-2252-9`

   


.. conda:package:: npinv

   |downloads_npinv| |docker_npinv|

   :versions:
      
      

      ``1.24-6``,  ``1.24-5``,  ``1.24-4``,  ``1.24-3``,  ``1.24-2``,  ``1.24-1``,  ``1.24-0``

      

   
   :depends on openjdk: ``>=8,<9``
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

    pixi global install npinv

to add into an existing workspace instead, run::

    pixi add npinv

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install npinv

Alternatively, to install into a new environment, run::

    conda create -n envname npinv

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/npinv:<tag>

(see `npinv/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_npinv| image:: https://img.shields.io/conda/dn/bioconda/npinv.svg?style=flat
   :target: https://anaconda.org/bioconda/npinv
   :alt:   (downloads)
.. |docker_npinv| image:: https://quay.io/repository/biocontainers/npinv/status
   :target: https://quay.io/repository/biocontainers/npinv
.. _`npinv/tags`: https://quay.io/repository/biocontainers/npinv?tab=tags


.. raw:: html

    <script>
        var package = "npinv";
        var versions = ["1.24","1.24","1.24","1.24","1.24"];
    </script>





Notes
-----
npinv is Java program that comes with a custom wrapper python script which I took from peptide\-shaker.
By default \"\-Xms512m \-Xmx1g\" is set in the wrapper. If you want to overwrite it you can
specify these values directly after your binaries. If you have \_JAVA\_OPTIONS
set globally this will take precedence.
For example run it with \"npinv \-Xms512m \-Xmx1g\"



Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/npinv/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/npinv/README.html