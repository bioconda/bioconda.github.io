:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'minisplice'
.. highlight: bash

minisplice
==========

.. conda:recipe:: minisplice
   :replaces_section_title:
   :noindex:

   minisplice is a command\-line tool to estimate the odds\-ratio score of canonical donor \(GT\) and acceptor \(AG\) splice sites. It is intended to be used with miniprot or minimap2 for improving alignment accuracy especially for distant homologs..

   :homepage: https://github.com/lh3/minisplice
   :documentation: https://github.com/lh3/minisplice/blob/v0.4/README.md
   
   :license: MIT / MIT
   :recipe: /`minisplice <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minisplice>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/minisplice/meta.yaml>`_
   :links: doi: :doi:`10.48550/arXiv.2506.12986`

   


.. conda:package:: minisplice

   |downloads_minisplice| |docker_minisplice|

   :versions:
      
      

      ``0.4-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code>,  <code>osx-arm64</code></span>
      

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

    pixi global install minisplice

to add into an existing workspace instead, run::

    pixi add minisplice

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install minisplice

Alternatively, to install into a new environment, run::

    conda create -n envname minisplice

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/minisplice:<tag>

(see `minisplice/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_minisplice| image:: https://img.shields.io/conda/dn/bioconda/minisplice.svg?style=flat
   :target: https://anaconda.org/bioconda/minisplice
   :alt:   (downloads)
.. |docker_minisplice| image:: https://quay.io/repository/biocontainers/minisplice/status
   :target: https://quay.io/repository/biocontainers/minisplice
.. _`minisplice/tags`: https://quay.io/repository/biocontainers/minisplice?tab=tags


.. raw:: html

    <script>
        var package = "minisplice";
        var versions = ["0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/minisplice/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/minisplice/README.html