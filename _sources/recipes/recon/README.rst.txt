:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'recon'
.. highlight: bash

recon
=====

.. conda:recipe:: recon
   :replaces_section_title:
   :noindex:

   The RECON package performs de novo identification and classification of repeat sequence families from genomic sequences.

   :homepage: http://eddylab.org/software/recon
   :developer docs: https://github.com/Dfam-consortium/RepeatModeler
   :license: GPL2 / GPL-2.0-or-later
   :recipe: /`recon <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/recon/meta.yaml>`_
   :links: doi: :doi:`10.1101/gr.88502`

   


.. conda:package:: recon

   |downloads_recon| |docker_recon|

   :versions:
      
      

      ``1.08-9``,  ``1.08-7``,  ``1.08-6``,  ``1.08-5``,  ``1.08-4``,  ``1.08-3``,  ``1.08-2``,  ``1.08-1``,  ``1.08-0``

      

   
   :depends on libgcc: ``>=13``

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

    pixi global install recon

to add into an existing workspace instead, run::

    pixi add recon

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install recon

Alternatively, to install into a new environment, run::

    conda create -n envname recon

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/recon:<tag>

(see `recon/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_recon| image:: https://img.shields.io/conda/dn/bioconda/recon.svg?style=flat
   :target: https://anaconda.org/bioconda/recon
   :alt:   (downloads)
.. |docker_recon| image:: https://quay.io/repository/biocontainers/recon/status
   :target: https://quay.io/repository/biocontainers/recon
.. _`recon/tags`: https://quay.io/repository/biocontainers/recon?tab=tags


.. raw:: html

    <script>
        var package = "recon";
        var versions = ["1.08","1.08","1.08","1.08","1.08"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/recon/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/recon/README.html