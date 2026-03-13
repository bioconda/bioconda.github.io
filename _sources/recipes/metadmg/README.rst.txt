:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'metadmg'
.. highlight: bash

metadmg
=======

.. conda:recipe:: metadmg
   :replaces_section_title:
   :noindex:

   metaDMG\-cpp\: fast and efficient method for estimating mutation and damage rates in ancient DNA data.

   :homepage: https://github.com/metaDMG-dev/metaDMG-cpp
   :documentation: https://github.com/metaDMG-dev/metaDMG-cpp/blob/v0.4.2/README.md
   
   :license: GPL3 / GPL-3.0-or-later, MIT
   :recipe: /`metadmg <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metadmg>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/metadmg/meta.yaml>`_
   :links: doi: :doi:`10.1101/2022.12.06.519264`

   


.. conda:package:: metadmg

   |downloads_metadmg| |docker_metadmg|

   :versions:
      
      

      ``0.4.2-0``,  ``0.4.1-0``,  ``0.4-2``,  ``0.4-1``,  ``0.4-0``,  ``0.3-1``,  ``0.3-0``

      

   
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on eigen: 
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on htslib: ``>=1.22.1,<1.24.0a0``
   :depends on libgcc: ``>=13``
   :depends on liblzma: ``>=5.8.1,<6.0a0``
   :depends on libstdcxx: ``>=13``
   :depends on libzlib: ``>=1.3.1,<2.0a0``
   :depends on openssl: ``>=3.5.1,<4.0a0``

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

    pixi global install metadmg

to add into an existing workspace instead, run::

    pixi add metadmg

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install metadmg

Alternatively, to install into a new environment, run::

    conda create -n envname metadmg

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/metadmg:<tag>

(see `metadmg/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_metadmg| image:: https://img.shields.io/conda/dn/bioconda/metadmg.svg?style=flat
   :target: https://anaconda.org/bioconda/metadmg
   :alt:   (downloads)
.. |docker_metadmg| image:: https://quay.io/repository/biocontainers/metadmg/status
   :target: https://quay.io/repository/biocontainers/metadmg
.. _`metadmg/tags`: https://quay.io/repository/biocontainers/metadmg?tab=tags


.. raw:: html

    <script>
        var package = "metadmg";
        var versions = ["0.4.2","0.4.1","0.4","0.4","0.4"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/metadmg/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/metadmg/README.html