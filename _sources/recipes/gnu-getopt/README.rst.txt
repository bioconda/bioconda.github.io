:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'gnu-getopt'
.. highlight: bash

gnu-getopt
==========

.. conda:recipe:: gnu-getopt
   :replaces_section_title:
   :noindex:

   Command\-line option parsing library

   :homepage: http://software.frodo.looijaard.name/getopt/
   :license: GPLv2
   :recipe: /`gnu-getopt <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/gnu-getopt/meta.yaml>`_

   


.. conda:package:: gnu-getopt

   |downloads_gnu-getopt| |docker_gnu-getopt|

   :versions:
      
      

      ``1.1.6-4``,  ``1.1.6-3``,  ``1.1.6-2``,  ``1.1.6-1``

      

   
   :depends on gettext: 
   :depends on libgcc: 

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

    pixi global install gnu-getopt

to add into an existing workspace instead, run::

    pixi add gnu-getopt

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install gnu-getopt

Alternatively, to install into a new environment, run::

    conda create -n envname gnu-getopt

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/gnu-getopt:<tag>

(see `gnu-getopt/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_gnu-getopt| image:: https://img.shields.io/conda/dn/bioconda/gnu-getopt.svg?style=flat
   :target: https://anaconda.org/bioconda/gnu-getopt
   :alt:   (downloads)
.. |docker_gnu-getopt| image:: https://quay.io/repository/biocontainers/gnu-getopt/status
   :target: https://quay.io/repository/biocontainers/gnu-getopt
.. _`gnu-getopt/tags`: https://quay.io/repository/biocontainers/gnu-getopt?tab=tags


.. raw:: html

    <script>
        var package = "gnu-getopt";
        var versions = ["1.1.6","1.1.6","1.1.6","1.1.6"];
    </script>





Notes
-----
On Linux systems gnu\-getopt is simply called \'getopt\'\, however due to potential collision with the native BSD getopt on OSX\, this binary is renamed \'gnu\-getopt\'.


Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/gnu-getopt/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/gnu-getopt/README.html