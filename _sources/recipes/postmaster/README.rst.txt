:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'postmaster'
.. highlight: bash

postmaster
==========

.. conda:recipe:: postmaster
   :replaces_section_title:
   :noindex:

   Postmaster is a tool for annotating transcriptome alignments with posterior alignment probabilities derived from salmon quantifications.

   :homepage: https://github.com/COMBINE-lab/postmaster
   :license: BSD / BSD-3-Clause
   :recipe: /`postmaster <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/postmaster>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/postmaster/meta.yaml>`_

   


.. conda:package:: postmaster

   |downloads_postmaster| |docker_postmaster|

   :versions:
      
      

      ``0.1.0-1``,  ``0.1.0-0``

      

   
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``

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

    pixi global install postmaster

to add into an existing workspace instead, run::

    pixi add postmaster

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install postmaster

Alternatively, to install into a new environment, run::

    conda create -n envname postmaster

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/postmaster:<tag>

(see `postmaster/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_postmaster| image:: https://img.shields.io/conda/dn/bioconda/postmaster.svg?style=flat
   :target: https://anaconda.org/bioconda/postmaster
   :alt:   (downloads)
.. |docker_postmaster| image:: https://quay.io/repository/biocontainers/postmaster/status
   :target: https://quay.io/repository/biocontainers/postmaster
.. _`postmaster/tags`: https://quay.io/repository/biocontainers/postmaster?tab=tags


.. raw:: html

    <script>
        var package = "postmaster";
        var versions = ["0.1.0","0.1.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/postmaster/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/postmaster/README.html