:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'octopus'
.. highlight: bash

octopus
=======

.. conda:recipe:: octopus
   :replaces_section_title:
   :noindex:

   Octopus is a mapping\-based variant caller that implements several calling models within a unified haplotype\-aware framework.

   :homepage: https://github.com/luntergroup/octopus
   :license: MIT / MIT
   :recipe: /`octopus <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/octopus/meta.yaml>`_

   


.. conda:package:: octopus

   |downloads_octopus| |docker_octopus|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.7.4-2</code>,  <code>0.7.4-1</code>,  <code>0.7.4-0</code>,  <code>0.6.3b-3</code>,  <code>0.6.3b-2</code>,  <code>0.6.3b-1</code>,  <code>0.6.3b-0</code>,  <code>0.5.2b-2</code>,  <code>0.5.2b-1</code>,  </span></summary>
      

      ``0.7.4-2``,  ``0.7.4-1``,  ``0.7.4-0``,  ``0.6.3b-3``,  ``0.6.3b-2``,  ``0.6.3b-1``,  ``0.6.3b-0``,  ``0.5.2b-2``,  ``0.5.2b-1``,  ``0.5.2b-0``,  ``0.5.1b-0``,  ``0.5.0b-0``,  ``0.4.1a-1``,  ``0.4.1a-0``,  ``0.3.3a-1``,  ``0.3.3a-0``

      
      .. raw:: html

         </details>
      

   
   :depends on boost-cpp: ``>=1.74.0,<1.74.1.0a0``
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gmp: ``>=6.2.1,<7.0a0``
   :depends on htslib: ``>=1.14,<1.24.0a0``
   :depends on icu: ``>=69.1,<70.0a0``
   :depends on libgcc-ng: ``>=10.3.0``
   :depends on libstdcxx-ng: ``>=10.3.0``
   :depends on libzlib: ``>=1.2.11,<1.3.0a0``
   :depends on xz: ``>=5.2.5,<5.3.0a0``
   :depends on zlib: ``>=1.2.11,<1.3.0a0``

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

    pixi global install octopus

to add into an existing workspace instead, run::

    pixi add octopus

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install octopus

Alternatively, to install into a new environment, run::

    conda create -n envname octopus

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/octopus:<tag>

(see `octopus/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_octopus| image:: https://img.shields.io/conda/dn/bioconda/octopus.svg?style=flat
   :target: https://anaconda.org/bioconda/octopus
   :alt:   (downloads)
.. |docker_octopus| image:: https://quay.io/repository/biocontainers/octopus/status
   :target: https://quay.io/repository/biocontainers/octopus
.. _`octopus/tags`: https://quay.io/repository/biocontainers/octopus?tab=tags


.. raw:: html

    <script>
        var package = "octopus";
        var versions = ["0.7.4","0.7.4","0.7.4","0.6.3b","0.6.3b"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/octopus/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/octopus/README.html