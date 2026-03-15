:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'matam'
.. highlight: bash

matam
=====

.. conda:recipe:: matam
   :replaces_section_title:
   :noindex:

   MATAM is a software dedicated to the fast and accurate targeted assembly of short reads.

   :homepage: https://github.com/bonsai-team/matam
   :license: AGPL / AGPL-3.0-or-later
   :recipe: /`matam <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matam>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/matam/meta.yaml>`_
   :links: doi: :doi:`10.1093/bioinformatics/btx644`

   


.. conda:package:: matam

   |downloads_matam| |docker_matam|

   :versions:
      
      

      ``1.6.2-0``,  ``1.6.1-2``,  ``1.6.1-1``,  ``1.6.1-0``,  ``1.6.0-3``,  ``1.6.0-2``,  ``1.6.0-1``,  ``1.6.0-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on coreutils: 
   :depends on krona: 
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on numpy: 
   :depends on python: ``>=3``
   :depends on rdptools: 
   :depends on samtools: 
   :depends on vsearch: 
   :depends on wget: 

   :additional platforms:
      
      .. raw:: html

         <span class="additional-platforms"><code>linux-aarch64</code></span>
      

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

    pixi global install matam

to add into an existing workspace instead, run::

    pixi add matam

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install matam

Alternatively, to install into a new environment, run::

    conda create -n envname matam

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/matam:<tag>

(see `matam/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_matam| image:: https://img.shields.io/conda/dn/bioconda/matam.svg?style=flat
   :target: https://anaconda.org/bioconda/matam
   :alt:   (downloads)
.. |docker_matam| image:: https://quay.io/repository/biocontainers/matam/status
   :target: https://quay.io/repository/biocontainers/matam
.. _`matam/tags`: https://quay.io/repository/biocontainers/matam?tab=tags


.. raw:: html

    <script>
        var package = "matam";
        var versions = ["1.6.2","1.6.1","1.6.1","1.6.1","1.6.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/matam/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/matam/README.html