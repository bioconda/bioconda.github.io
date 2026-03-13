:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'microphaser'
.. highlight: bash

microphaser
===========

.. conda:recipe:: microphaser
   :replaces_section_title:
   :noindex:

   Phasing small tumor DNA sequences for mutated neopeptide generation from NGS data.

   :homepage: https://github.com/koesterlab/microphaser
   :license: MIT / MIT
   :recipe: /`microphaser <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microphaser>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/microphaser/meta.yaml>`_

   


.. conda:package:: microphaser

   |downloads_microphaser| |docker_microphaser|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>0.8.0-2</code>,  <code>0.8.0-1</code>,  <code>0.8.0-0</code>,  <code>0.7.0-1</code>,  <code>0.7.0-0</code>,  <code>0.6.0-0</code>,  <code>0.5.0-0</code>,  <code>0.4.0-2</code>,  <code>0.4.0-1</code>,  </span></summary>
      

      ``0.8.0-2``,  ``0.8.0-1``,  ``0.8.0-0``,  ``0.7.0-1``,  ``0.7.0-0``,  ``0.6.0-0``,  ``0.5.0-0``,  ``0.4.0-2``,  ``0.4.0-1``,  ``0.4.0-0``,  ``0.3.0-1``,  ``0.3.0-0``,  ``0.2.0-0``

      
      .. raw:: html

         </details>
      

   
   :depends on blis: 
   :depends on bzip2: ``>=1.0.8,<2.0a0``
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
   :depends on libgcc-ng: ``>=12``
   :depends on libstdcxx-ng: ``>=12``
   :depends on libzlib: ``>=1.2.13,<1.3.0a0``
   :depends on openssl: ``>=3.1.0,<4.0a0``
   :depends on xz: ``>=5.2.6,<6.0a0``

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

    pixi global install microphaser

to add into an existing workspace instead, run::

    pixi add microphaser

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install microphaser

Alternatively, to install into a new environment, run::

    conda create -n envname microphaser

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/microphaser:<tag>

(see `microphaser/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_microphaser| image:: https://img.shields.io/conda/dn/bioconda/microphaser.svg?style=flat
   :target: https://anaconda.org/bioconda/microphaser
   :alt:   (downloads)
.. |docker_microphaser| image:: https://quay.io/repository/biocontainers/microphaser/status
   :target: https://quay.io/repository/biocontainers/microphaser
.. _`microphaser/tags`: https://quay.io/repository/biocontainers/microphaser?tab=tags


.. raw:: html

    <script>
        var package = "microphaser";
        var versions = ["0.8.0","0.8.0","0.8.0","0.7.0","0.7.0"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/microphaser/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/microphaser/README.html