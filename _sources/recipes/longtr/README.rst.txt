:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'longtr'
.. highlight: bash

longtr
======

.. conda:recipe:: longtr
   :replaces_section_title:
   :noindex:

   Tandem repeat genotyping with long reads.

   :homepage: https://github.com/gymrek-lab/LongTR
   :license: BSD / BSD-2-Clause
   :recipe: /`longtr <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longtr>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/longtr/meta.yaml>`_
   :links: biotools: :biotools:`longtr`

   


.. conda:package:: longtr

   |downloads_longtr| |docker_longtr|

   :versions:
      
      

      ``1.2-1``,  ``1.2-0``

      

   
   :depends on htslib: ``>=1.22.1,<1.23.0a0``
   :depends on libgcc: ``>=13``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on spoa: ``>=4.1.5,<5.0a0``

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

    pixi global install longtr

to add into an existing workspace instead, run::

    pixi add longtr

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install longtr

Alternatively, to install into a new environment, run::

    conda create -n envname longtr

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/longtr:<tag>

(see `longtr/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_longtr| image:: https://img.shields.io/conda/dn/bioconda/longtr.svg?style=flat
   :target: https://anaconda.org/bioconda/longtr
   :alt:   (downloads)
.. |docker_longtr| image:: https://quay.io/repository/biocontainers/longtr/status
   :target: https://quay.io/repository/biocontainers/longtr
.. _`longtr/tags`: https://quay.io/repository/biocontainers/longtr?tab=tags


.. raw:: html

    <script>
        var package = "longtr";
        var versions = ["1.2","1.2"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/longtr/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/longtr/README.html