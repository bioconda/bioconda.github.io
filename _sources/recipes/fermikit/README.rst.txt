:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'fermikit'
.. highlight: bash

fermikit
========

.. conda:recipe:: fermikit
   :replaces_section_title:
   :noindex:

   FermiKit is a de novo assembly based variant calling pipeline for deep Illumina resequencing data.

   :homepage: https://github.com/lh3/fermikit
   :license: MIT
   :recipe: /`fermikit <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermikit>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/fermikit/meta.yaml>`_

   


.. conda:package:: fermikit

   |downloads_fermikit| |docker_fermikit|

   :versions:
      
      

      ``0.14.dev1-2``,  ``0.14.dev1-1``,  ``0.14.dev1-0``

      

   
   :depends on bfc: ``r181``
   :depends on bwa: 
   :depends on fermi2: 
   :depends on htsbox: 
   :depends on libgcc: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on perl: ``>=5.32.1,<5.33.0a0 *_perl5``
   :depends on ropebwt2: ``r187``
   :depends on seqtk: 
   :depends on trimadap: 

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

    pixi global install fermikit

to add into an existing workspace instead, run::

    pixi add fermikit

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install fermikit

Alternatively, to install into a new environment, run::

    conda create -n envname fermikit

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/fermikit:<tag>

(see `fermikit/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_fermikit| image:: https://img.shields.io/conda/dn/bioconda/fermikit.svg?style=flat
   :target: https://anaconda.org/bioconda/fermikit
   :alt:   (downloads)
.. |docker_fermikit| image:: https://quay.io/repository/biocontainers/fermikit/status
   :target: https://quay.io/repository/biocontainers/fermikit
.. _`fermikit/tags`: https://quay.io/repository/biocontainers/fermikit?tab=tags


.. raw:: html

    <script>
        var package = "fermikit";
        var versions = ["0.14.dev1","0.14.dev1","0.14.dev1"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/fermikit/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/fermikit/README.html