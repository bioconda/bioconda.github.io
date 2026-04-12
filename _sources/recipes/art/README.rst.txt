:orphan:  .. only available via index, not via toctree

.. title:: Package Recipe 'art'
.. highlight: bash

art
===

.. conda:recipe:: art
   :replaces_section_title:
   :noindex:

   Illumina\, 454 and Solid read simulator

   :homepage: http://www.niehs.nih.gov/research/resources/software/biostatistics/art/
   :license: GPL3 / GPL-3.0-only
   :recipe: /`art <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art>`_/`meta.yaml <https://github.com/bioconda/bioconda-recipes/tree/master/recipes/art/meta.yaml>`_

   


.. conda:package:: art

   |downloads_art| |docker_art|

   :versions:
      
      
      .. raw:: html

         <details><summary><span class="truncated-version-list"><code>2016.06.05-13</code>,  <code>2016.06.05-12</code>,  <code>2016.06.05-11</code>,  <code>2016.06.05-9</code>,  <code>2016.06.05-8</code>,  <code>2016.06.05-7</code>,  <code>2016.06.05-6</code>,  <code>2016.06.05-5</code>,  <code>2016.06.05-4</code>,  </span></summary>
      

      ``2016.06.05-13``,  ``2016.06.05-12``,  ``2016.06.05-11``,  ``2016.06.05-9``,  ``2016.06.05-8``,  ``2016.06.05-7``,  ``2016.06.05-6``,  ``2016.06.05-5``,  ``2016.06.05-4``,  ``2016.06.05-3``,  ``2016.06.05-2``,  ``2016.06.05-1``,  ``2016.06.05-0``,  ``3.19.15-1``,  ``3.11.14-1``,  ``3.11.14-0``

      
      .. raw:: html

         </details>
      

   
   :depends on gsl: ``>=2.7,<2.8.0a0``
   :depends on libcblas: ``>=3.9.0,<4.0a0``
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

    pixi global install art

to add into an existing workspace instead, run::

    pixi add art

In the latter case, make sure to first add bioconda and conda-forge to the channels considered by the workspace::

    pixi workspace channel add conda-forge
    pixi workspace channel add bioconda

Conda
"""""

With conda_ installed and the Bioconda channel set up (see :ref:`bioconda_setup`), to install into an existing and activated environment, run::

    conda install art

Alternatively, to install into a new environment, run::

    conda create -n envname art

with ``envname`` being the name of the desired environment.

Container
"""""""""

Alternatively, every Bioconda package is available as a container image for usage with your preferred container runtime.
For e.g. docker, run::

    docker pull quay.io/biocontainers/art:<tag>

(see `art/tags`_ for valid values for ``<tag>``).

Integrated deployment
"""""""""""""""""""""

Finally, note that many scientific workflow management systems directly integrate both conda and container based software deployment.
Thus, workflow steps can be often directly annotated to use the package, leading to automatic deployment by the respective workflow management system, thereby improving reproducibility and transparency.
Check the documentation of your workflow management system to find out about the integration.

.. _conda: https://conda.io
.. _pixi: https://pixi.sh
.. |downloads_art| image:: https://img.shields.io/conda/dn/bioconda/art.svg?style=flat
   :target: https://anaconda.org/bioconda/art
   :alt:   (downloads)
.. |docker_art| image:: https://quay.io/repository/biocontainers/art/status
   :target: https://quay.io/repository/biocontainers/art
.. _`art/tags`: https://quay.io/repository/biocontainers/art?tab=tags


.. raw:: html

    <script>
        var package = "art";
        var versions = ["2016.06.05","2016.06.05","2016.06.05","2016.06.05","2016.06.05"];
    </script>






Download stats
-----------------

.. raw:: html
    :file: ../../templates/package_dashboard.html

Link to this page
-----------------

Render an |install-with-bioconda| badge with the following MarkDown::

   [![install with bioconda](https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat)](http://bioconda.github.io/recipes/art/README.html)

.. |install-with-bioconda| image:: https://img.shields.io/badge/install%20with-bioconda-brightgreen.svg?style=flat
   :target: http://bioconda.github.io/recipes/art/README.html